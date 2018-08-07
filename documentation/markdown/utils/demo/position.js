import position from '!raw-loader!obsidian.css/src/utilities/obsidian.position.css';
import overflow from '!raw-loader!obsidian.css/src/utilities/obsidian.overflow.css';
import zindex from '!raw-loader!obsidian.css/src/utilities/obsidian.zindex.css';

const snippet = `
/*
  Positioning Utilities

  Z-Index..........Small collection of common z-index values
  Overflow.........General, X and Y
  Position.........Absolute, Static, Fixed, Relative
*/

${zindex}

${overflow}

${position}
`;

export { snippet };
