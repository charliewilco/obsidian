module.exports = (ctx) => ({
  map: false,
  'plugins': {
    'postcss-import': {
      skipDuplicates: true
    },
    'autoprefixer': {
      remove: true
    },
    'postcss-custom-media': {},
    'postcss-media-minmax': {},
    'postcss-custom-properties': {
      preserve: true,
      appendVariables: true
    },
    'postcss-color-function': {},

    // Minifier
    'css-mqpacker': {},
    'cssnano': ctx.env === 'production' ? {} : false,

    // Analysis + Code Style
    'postcss-export-vars': {
      file: 'css',
      type: 'json',
      matches: []
    },
    'postcss-mdgx': {
      'project': 'Obsidian.css',
      'showCode': true,
      'src': 'lib/index.css',
      'dest': 'docs/index.html',
      'themePath': 'docs'
    },
    'postcss-gzip': {},
    'immutable-css': ctx.env !== 'production' ? {} : false,

    'postcss-reporter': {
      plugins: ['postcss-gzip', 'immutable-css', 'postcss-mdgx'],
      clearMessages: true
    }
  }
})
