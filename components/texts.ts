import { TextRenderable } from '@opentui/core';
import { renderer } from '../shared';

export const sqlTextBox = new TextRenderable(renderer, {
  id: 'sql-text',
  content: '...',
});

export const resultQueryTextBox = new TextRenderable(renderer, {
  id: 'result-query-text',
  content: '',
});
