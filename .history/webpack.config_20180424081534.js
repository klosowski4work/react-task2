const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "src"),

  mode: "development",
  devtool: 'none',

  entry: "./src/index.js",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },

  watch: false
};
