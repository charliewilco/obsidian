const paths = {
  css: {
    src: './_source/_assets/styles/index.css',
    all: './_source/_assets/styles/**/*.css',
    dest: './_source/assets/dist/'
  },
  js: {
    src: './_source/_assets/scripts/global.js',
    all: './_source/_assets/scripts/**/*.js',
    dest: './_source/assets/dist/'
  },
  icons: {
    src: './_source/_assets/icons/*.svg',
    dest: './_source/_includes/'
  },
  img: {
    src: './_source/_assets/img/*',
    dest: './_source/assets/dist/img/'
  },
  markup: [
    './_source/**/*.md',
    './_source/_includes/**/*',
    './_source/_layouts/*.html',
    './_source/_docs/*'
  ],
  dist: './_source/assets/dist/',
  build: './_site/'
}

export default paths
