const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpackCommonConf = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const { distPath } = require("./paths");
const ModuleConcatenationPlugin = require("webpack/lib/optimize/ModuleConcatenationPlugin");
const glob = require("glob");
const PurgeCSSPlugin = require("purgecss-webpack-plugin");
var OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const { srcPath } = require("./paths");

module.exports = merge(webpackCommonConf, {
  mode: "production",
  // resovle: {
  //   mainFields: ["jsnext:main", "browser", "main"],
  // },
  output: {
    filename: "[contenthash:8].bundle.js", // 打包代码时，加上 hash 戳
    path: distPath,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg|)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              outputPath: "imgs",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),

    new PurgeCSSPlugin({
      paths: glob.sync(`${srcPath}/**/*`, { nodir: true }),
    }),
    new OptimizeCssAssetsWebpackPlugin(),
    new ModuleConcatenationPlugin(),
  ],
});
