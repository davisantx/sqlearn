import { BoxRenderable } from "@opentui/core";
import { renderer } from "../shared";
import { queryInput } from "./inputs";
import { resultQueryTextBox, sqlTextBox } from "./texts";

const rootBox = new BoxRenderable(renderer, {
  id: "box",
  flexDirection: "row",
  width: "100%",
  height: "100%",
});

function myBox(
  id: string,
  title: string,
  width: `${number}%` | "auto" = "auto",
  height: `${number}%` | "auto" = "auto",
): BoxRenderable {
  return new BoxRenderable(renderer, {
    id: id,
    width: width,
    flexDirection: "column",
    height: height,
    border: true,
    title: title,
    padding: 1,
  });
}

const leftBox = myBox("left-box", "Query", "50%", "100%");

const rightBox = myBox("right-box", "SQL Code", "50%", "100%");

const queryResultBox = myBox("query-result-box", "Result", "100%", "70%");

const queryInputBox = myBox("query-input-box", "Query");

export const boxes = (): BoxRenderable => {
  queryInputBox.add(queryInput);
  queryResultBox.add(resultQueryTextBox);

  leftBox.add(queryResultBox);
  leftBox.add(queryInputBox);
  rightBox.add(sqlTextBox);

  rootBox.add(leftBox);

  rootBox.add(rightBox);
  return rootBox;
};
