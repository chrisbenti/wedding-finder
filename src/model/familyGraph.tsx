import { DirectedGraph } from "graphology";
import { Individual, RelationKeyInverses, RelationRaw } from "./csvGraph";
import { bidirectional } from "graphology-shortest-path/unweighted";

export interface Relation {
  sourceName: string;
  targetName: string;
  relationship: string;
}

export interface Individal {
  name: string;
}

export interface RelationshipPath {
  relations: Relation[];
  individuals: { [key: string]: Individal };
}

interface FamilyGraphNode {
  name: string;
}

interface FamilyGraphEdge {
  relationship: string;
}

export class FamilyGraph {
  graph: DirectedGraph<FamilyGraphNode, FamilyGraphEdge>;
  constructor() {
    this.graph = new DirectedGraph();
  }

  public buildGraphNodes(rows: Individual[]) {
    for (const r of rows) {
      if (!r.name) {
        continue;
      }
      this.graph.addNode(r.name, {
        name: r.name,
      });
    }
  }

  public buildGraphEdges(rows: RelationRaw[]) {
    for (const r of rows) {
      if (!r.name_source || !r.name_target) {
        continue;
      }
      const relationInverse = RelationKeyInverses[r.relationship];
      if (!relationInverse) {
        throw new Error(`Inverse relation of '${r.relationship}' not defined`);
      }

      this.graph.addEdgeWithKey(r.edge_id, r.name_source, r.name_target, {
        relationship: r.relationship,
      });

      this.graph.addEdgeWithKey(
        `${r.edge_id}-back`,
        r.name_target,
        r.name_source,
        {
          relationship: relationInverse,
        }
      );
    }
  }

  public getPath(source: string, target: string): RelationshipPath {
    const path = bidirectional(this.graph, source, target);
    if (!path) {
      return { relations: [], individuals: {} };
    }

    var path2: RelationshipPath = { relations: [], individuals: {} };
    var nodesTemp: { [key: string]: Individal } = {};
    for (let i = 1; i < path.length; i++) {
      source = path[i - 1];
      target = path[i];

      const relationship = this.graph.getDirectedEdgeAttribute(
        source,
        target,
        "relationship"
      );

      path2.relations.push({
        sourceName: source,
        targetName: target,
        relationship: relationship,
      });

      if (!(source in nodesTemp)) {
        nodesTemp[source] = { name: source };
      }
      if (!(target in nodesTemp)) {
        nodesTemp[target] = { name: target };
      }
    }
    path2.individuals = nodesTemp;
    return path2;
  }
}

export const familyGraph = new FamilyGraph();
