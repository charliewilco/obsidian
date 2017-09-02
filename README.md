# ![Obsidian.css](http://cl.ly/2T0B352h1d1n/obsidian-header.png)

[![npm version](https://badge.fury.io/js/obsidian.css.svg)](https://badge.fury.io/js/obsidian.css)

Obsidian.css is a modular CSS library that focuses on code common to most projects.

This project works under the belief that when abstracted most CSS is shockingly similar across projects. More than likely you'll need a type scale, a grid system, spacing utilities, media blocks, sensible default styling for elements (forms, tables, buttons). This project is a collection of the CSS patterns that have stuck with me over the last two years and grown with me.

Styles are written in an adapted BEM naming convention and organized in an [ITCSS](https://www.youtube.com/watch?v=1OKZOV-iLj4)-like methodology. It uses [cssnext](https://github.com/MoOx/postcss-cssnext) to compile variables, custom selectors and custom media queries.

## Installation

```
npm install obsidian.css --save
```

or link to the CDN

```markup
<link rel="stylesheet" href="//unpkg.com/obsidian.css/dist/obsidian.min.css" media="screen" title="Obsidian.css" charset="utf-8">
```

### Using in Build

Recommended you use [PostCSS](https://github.com/postcss/postcss) and [postcss-import](https://github.com/postcss/postcss-import).

Example using Gulp.js:

```js
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const atImport = require('postcss-import');
const cssnext  = require('postcss-cssnext');

const processors = [
  atImport,
  cssnext
];

gulp.task('styles', () => {
  return gulp.src('path/to/stylesheet')
    .pipe(postcss(processors))
    // Probably other tasks
    .pipe(gulp.dest('path/to/destination'));
})

```
then import into your CSS and modify some variables:

```css
@import 'obsidian.css/lib/settings';
@import 'obsidian.css/lib/generic';
@import 'obsidian.css/lib/elements';

@import 'obsidian.css/lib/objects/obsidian.grid';
```

```css
@import 'obsidian.css';

:root {
  --headlines: 'Proxima Nova Condensed', Lucida Grande, sans-serif;
  --body-text: 'Meta Serif Pro', Charter, serif;
}
```

And things should compile the way you'd expect.

## Contributing

First off, you're awesome for wanting to contribute. Second, please take a second to go over a few things to make this process simpler for everyone. Third, you're awesome.

### Getting Started

Clone the repository and run the following in the root of the project:
```
npm install && npm start
```

### Issues

**Reduced test cases are required**. All bug reports and problem issues require a reduced test case. See [CSS Tricks - Reduced Test Cases](http://css-tricks.com/reduced-test-cases/) on why they _"are the absolute, ... number one way to troubleshoot bugs."_ Reduced test cases help you identify the issue at hand and understand your own code. On our side, they greatly reduce the amount of time spent resolving the issue.

- A reduced test case is an isolated example that demonstrates the bug or issue.
- It contains the bare minimum HTML, CSS, and JavaScript required to demonstrate the bug. No extra functionality or styling.
- A link to your site is **not** a reduced test case.
- A [JSBin](http://jsbin.com/) or [CodePen](http://codepen.io) is preferred so we can help you fix an error.

### Pull Requests

- [Fork](https://github.com/charlespeters/obsidian#fork-destination-box) this repo.
- Push to your fork and submit a pull request.
- Please provide a short explanation of why you made the changes you made.

## License

MIT

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
