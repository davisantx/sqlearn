import { renderer } from '../shared';
import { boxes } from './boxes';

export function app() {
  renderer.root.add(boxes());
}