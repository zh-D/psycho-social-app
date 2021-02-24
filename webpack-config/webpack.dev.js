const path = require("path");
const webpackCommonConf = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const { distPath } = require("./paths");
var FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const DllReferencePlugin = require("webpack/lib/DllReferencePlugin");

module.exports = merge(webpackCommonConf, {
  devtool: "inline-source-map",
  mode: "development",
  module: {
    rules: [
      // 直接引入图片 url
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: "file-loader",
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: distPath,
    open: true,
    hot: true,
    quiet: true,
    port: 8082,
    proxy: {},
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    new DllReferencePlugin({
      manifest: require(path.join(distPath, "react.manifest.json")),
    }),
  ],
});
