const path = require("path");

module.exports = {
  entry: {
    bundle: "./src/index.js",
  },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public"),
  },

  mode: "production",
  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [/src/],
        use: [{ loader: "babel-loader" }],
      },
    ],
  },
};
