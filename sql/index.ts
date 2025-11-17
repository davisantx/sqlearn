import { Database } from "bun:sqlite";
import { screenTexts } from "../tui/screen";

const db = new Database("db.sqlite", {strict : true});

const queries: string[] = [];

export function createQuery(query: string) {
  try {
    const request = db.query(query);
    if(request) {
      queries.push(query)
      screenTexts.resultQuery = `${request.get()}`

      if(queries.length > 1) {
        screenTexts.sqlCode = screenTexts.sqlCode.concat("\n\n", query)
        return;
      }

      screenTexts.sqlCode = screenTexts.sqlCode.concat(query)
      return;
    }
    screenTexts.resultQuery = "Error";
  } catch (error) {
    screenTexts.resultQuery = `${error}`;
    return;
  }
}

export async function reseteSqlCode() {
  try {
    await Bun.write('./db.sqlite', "");
  } catch (error) {
    console.error(`Ocorreu um erro ao apagar o arquivo: ${error}`);
  }
}