import { DirectedGraph, UndirectedGraph } from "graphology";
import { Individual } from "./individual";
import { Relation } from "./relation";

const g = new UndirectedGraph();

export function buildGraphNodesFromSheet(rows: Individual[]) {
  for (const r of rows) {
    if (!r.name) {
      continue;
    }
    g.addNode(r.name);
  }
}

export function buildGraphFromSheet(rows: Relation[]) {
  debugger;
  for (const r of rows) {
    if (!r.name_source || !r.name_target) {
      continue;
    }
    const edge = g.addEdgeWithKey(r.edge_id, r.name_source, r.name_target, {
      type: r.relationship,
    });
  }
  debugger;
}
