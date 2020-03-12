const path = require('path');

module.exports = {
  // MODE
  mode: "development", // "production" | "none"
  // ENTRY
  entry: path.resolve(__dirname, './client/src/index.js'), // string | object | array
  // Here the application starts executing
  // and webpack starts bundling
  // OUTPUT
  output: {
    // options related to how webpack emits results
    path: path.resolve(__dirname, 'client/dist'), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    filename: "bundle.js", // string
    // the filename template for entry chunks
    // publicPath: "/assets/", // string
  },
  // MODULE
  module: {
    // configuration regarding modules
    rules: [
      // rules for modules (configure loaders, parser options, etc.)
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "client/src/")
        ],
        loader: "babel-loader",
        // the loader which should be applied, it'll be resolved relative to the context
        options: {
          presets: ['@babel/react', '@babel/env'],
          // options for the loader
        },
      }
    ]
  }
};