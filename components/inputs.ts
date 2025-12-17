import { InputRenderable, InputRenderableEvents, RGBA } from "@opentui/core";
import { renderer } from "../shared";
import { createQuery } from "../sql";
import { resultQueryTextBox, sqlTextBox } from "./texts";
import { screenTexts } from "../shared";

export const queryInput = new InputRenderable(renderer, {
  id: 'query-input',
  width: '100%',
  height: '30%',
  paddingLeft: 2,
  backgroundColor: RGBA.fromHex("#00000000"),
  placeholder: 'Digite aqui...',
});

queryInput.on(InputRenderableEvents.ENTER, (value) => {
  createQuery(value);
  resultQueryTextBox.content = screenTexts.resultQuery;
  sqlTextBox.content = screenTexts.sqlCode;
});

queryInput.focus();