module.exports = ctx => ({
  map: false,
  plugins: {
    "postcss-import": {
      skipDuplicates: true
    },
    autoprefixer: {
      remove: true
    },
    "postcss-custom-media": {},
    "postcss-custom-properties": {
      preserve: true,
      appendVariables: true
    },
    "postcss-color-function": {},

    // Analysis + Code Style
    "postcss-export-vars": {
      file: "css",
      type: "json",
      matches: []
    },

    "postcss-gzip": {},

    // Minifier
    "css-mqpacker": {},
    cssnano: ctx.env === "production" ? {} : false,

    "postcss-reporter": {
      plugins: ["postcss-gzip", "immutable-css", "postcss-mdgx"],
      clearMessages: true
    }
  }
});
