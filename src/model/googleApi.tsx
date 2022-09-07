import Papa from "papaparse";
import {
  buildGraphFromSheet as buildGraphEdgesFromSheet,
  buildGraphNodesFromSheet,
} from "./familyGraph";
import { Individual } from "./individual";
import { Relation } from "./relation";

const baseDocumentId = "1kma7idppXhBzQFTCypZIosD5Pp-o5iIaoKlhnGCgzXU";
const relationSheetId = "0";
const peopleSheetId = "282415891";

export async function doSheetWork() {
  Papa.parse(
    `https://docs.google.com/spreadsheets/d/${baseDocumentId}/pub?output=csv&gid=${peopleSheetId}`,
    {
      download: true,
      header: true,
      complete: (results: any) => {
        buildGraphNodesFromSheet(results.data as Individual[]);
        doSheetWork2();
      },
    }
  );
}

function doSheetWork2() {
  Papa.parse(
    `https://docs.google.com/spreadsheets/d/${baseDocumentId}/pub?output=csv&gid=${relationSheetId}`,
    {
      download: true,
      header: true,
      complete: (results: any) => {
        buildGraphEdgesFromSheet(results.data as Relation[]);
      },
    }
  );
}
