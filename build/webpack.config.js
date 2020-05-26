const path = require("path");
const htmlwebpackplugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  entry: path.resolve("src/main.js"),
  output: {
    path: path.resolve("dist"),
    filename: "bundle[hash:3].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new htmlwebpackplugin({
      template: path.resolve("public/index.html"),
      favicon: path.resolve("public/favicon.ico"),
    }),
    new CleanWebpackPlugin({ path: path.resolve("dist") }),
  ],
};
