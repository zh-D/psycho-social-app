const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { srcPath, publicPath } = require("./paths");

module.exports = {
  entry: path.join(srcPath, "index.tsx"),
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader", exclude: /node_modules/ },
      {
        test: /\.css$/i,
        use: [
          // "style-loader",
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          "css-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "fonts",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack is funny",
      template: path.join(publicPath, "index.html"),
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
  ],
};
