const path = require('path');
const obsidianPath = require.resolve('./lib/_obsidian.scss');

const obsidianDir = path.dirname(obsidianPath);

function includePaths() {
  return [obsidianDir];
}

module.exports = {
  includePaths: includePaths(),

  with() {
    const paths = Array.prototype.slice.call(arguments);
    const result = [].concat.apply(includePaths(), paths);
    return result;
  }
};
