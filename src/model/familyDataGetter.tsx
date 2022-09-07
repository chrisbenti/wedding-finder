import Papa from "papaparse";
import { familyGraph } from "./familyGraph";
import { RelationRaw, Individual } from "./csvGraph";

const baseDocumentId = "1kma7idppXhBzQFTCypZIosD5Pp-o5iIaoKlhnGCgzXU";
const relationSheetId = "0";
const peopleSheetId = "282415891";

export async function downloadFamilyData() {
  Papa.parse(
    `https://docs.google.com/spreadsheets/d/${baseDocumentId}/pub?output=csv&gid=${peopleSheetId}`,
    {
      download: true,
      header: true,
      complete: (results: any) => {
        familyGraph.buildGraphNodes(results.data as Individual[]);
        downloadRelationData();
      },
    }
  );
}

function downloadRelationData() {
  Papa.parse(
    `https://docs.google.com/spreadsheets/d/${baseDocumentId}/pub?output=csv&gid=${relationSheetId}`,
    {
      download: true,
      header: true,
      complete: (results: any) => {
        familyGraph.buildGraphEdges(results.data as RelationRaw[]);
      },
    }
  );
}

export function computePath() {
  familyGraph.getPath("Sarah Bentivenga", "Anthony Testa");
}
