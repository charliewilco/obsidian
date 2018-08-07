**DEPRECATED: Not kept up to date**

# ![Obsidian.scss](/obsidian-scss-logo.png)

A port of [Obsidian.css](https://obsidian.charlespeters.net/) for Sass

Obsidian.css is a modular CSS library that focuses on code common to most projects.

This project works under the belief that when abstracted most CSS is shockingly similar across projects. More than likely you'll need a type scale, a grid system, spacing utilities, media blocks, sensible default styling for elements (forms, tables, buttons). This project is a collection of the CSS patterns that have stuck with me over the last two years and grown with me.

Styles are written in an adapted BEM naming convention and organized in an [ITCSS](https://www.youtube.com/watch?v=1OKZOV-iLj4)-like methodology. It uses [cssnext](https://github.com/MoOx/postcss-cssnext) to compile variables, custom selectors and custom media queries.


## Installation

```sh
npm i obsidian.scss
```

## Compiling

Importing Sass files from npm can be a tricky business...

```scss
@import "obsidian";

$headlines: 'Proxima Nova Condensed', Lucida Grande, sans-serif;
$body-text: 'Meta Serif Pro', Charter, serif;
```

### Gulp

```javascript
import gulp from 'gulp'
import sass from 'gulp-sass'
import obsidian from 'obsidian.scss'

gulp.task('sass', () => {
  gulp.src('path/to/input.scss')
    .pipe(sass({
      includePaths: obsidian.includePaths
    }))
    .pipe(gulp.dest('path/to/output.css'))
})
```

### Grunt Usage

Using [grunt-sass](https://github.com/sindresorhus/grunt-sass)

Example config:

```javascript
grunt.initConfig({
  sass: {
    dist: {
      options: {
        includePaths: require('obsidian.scss').includePaths
      },
      files: {
        'path/to/output.css': 'path/to/input.scss'
      }
    }
  }
})
```

### Node Sass CLI

```sh
node-sass ./lib/index.scss ./dist/bundle.css -o dist --output-style compressed --includePath ./node_modules/obsidian.scss/lib/*.scss
```

### Development

1. Clone the repository
2. Run `npm install; npm run bundle`

## License

MIT

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
