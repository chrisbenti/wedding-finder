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
  nodesLoaded: boolean = false;
  edgesLoaded: boolean = false;

  constructor() {
    this.graph = new DirectedGraph();
  }

  public buildGraphNodes(rows: Individual[]) {
    if (this.nodesLoaded) {
      return;
    }
    this.nodesLoaded = true;

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
    if (this.edgesLoaded) {
      return;
    }
    this.edgesLoaded = true;

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
      const s: string = path[i - 1];
      const t: string = path[i];

      const relationship = this.graph.getDirectedEdgeAttribute(
        s,
        t,
        "relationship"
      );

      path2.relations.push({
        sourceName: s,
        targetName: t,
        relationship: relationship,
      });

      if (!(s in nodesTemp)) {
        nodesTemp[s] = { name: s };
      }
      if (!(t in nodesTemp)) {
        nodesTemp[t] = { name: t };
      }
    }
    path2.individuals = nodesTemp;
    console.log(path2);
    return path2;
  }
}

export const familyGraph = new FamilyGraph();
