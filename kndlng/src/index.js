// Uses webpack to load in the JSON
import obsidian from 'obsidian.css/css.json';

import spacing from './lib/spacing';
import typescale from './lib/typescale';
import color from './lib/color';
import families from './lib/families';

const kndlng = {
  obsidian,
  families,
  spacing,
  color,
  typescale
};

export {
  typescale as Typescale,
  families as Families,
  obsidian as Obsidian,
  color as Color,
  spacing as Spacing
};

export default kndlng;
