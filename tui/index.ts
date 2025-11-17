import {
  createCliRenderer,
  BoxRenderable,
  InputRenderable,
  TextRenderable,
  InputRenderableEvents,
  RGBA,
} from '@opentui/core';

import { createQuery } from '../sql/index';
import { screenTexts } from './screen';

export const renderer = await createCliRenderer();

const style: { bgColor: RGBA } = {
  bgColor: RGBA.fromHex('#3f2121ff'),
} as const;

const box = new BoxRenderable(renderer, {
  id: 'box',
  flexDirection: 'row',
  width: '100%',
  height: '100%',
});

function myBox(
  id: string,
  title: string,
  width: `${number}%` | 'auto' = 'auto',
  height: `${number}%` | 'auto' = 'auto'
): BoxRenderable {
  return new BoxRenderable(renderer, {
    id: id,
    width: width,
    flexDirection: 'column',
    backgroundColor: style.bgColor,
    height: height,
    border: true,
    title: title,
    padding: 1,
  });
}

const leftBox = myBox('left-box', 'Query', '50%', '100%');
const rightBox = myBox('right-box', 'SQL Code', '50%', '100%');

const queryResultBox = myBox('query-result-box', 'Result', '100%', '70%');

const queryInputBox = myBox('query-input-box', 'Query');

const queryInput = new InputRenderable(renderer, {
  id: 'query-input',
  width: '100%',
  height: '30%',
  paddingLeft: 2,
  backgroundColor: style.bgColor,
  placeholder: 'Digite aqui...',
});

const sqlTextBox = new TextRenderable(renderer, {
  id: 'sql-text',
  content: '...',
});

const resultQueryTextBox = new TextRenderable(renderer, {
  id: 'result-query-text',
  content: '',
});

queryInputBox.add(queryInput);

leftBox.add(queryResultBox);
leftBox.add(queryInputBox);

rightBox.add(sqlTextBox);
queryResultBox.add(resultQueryTextBox);

box.add(leftBox);
box.add(rightBox);

renderer.root.add(box);

queryInput.on(InputRenderableEvents.ENTER, (value) => {
  createQuery(value);
  resultQueryTextBox.content = screenTexts.resultQuery;
  sqlTextBox.content = screenTexts.sqlCode;
});

queryInput.focus();
