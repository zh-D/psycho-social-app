const path = require("path");
const DllPlugin = require("webpack/lib/DllPlugin");
const { publicPath } = require("./paths");

module.exports = {
  mode: "development",
  entry: {
    react: ["react", "react-dom", "react-router-dom"],
  },
  output: {
    filename: "[name].dll.js",
    path: publicPath,
    library: "_dll_[name]",
  },
  plugins: [
    new DllPlugin({
      name: "_dll_[name]",
      path: path.join(publicPath, "[name].manifest.json"),
    }),
  ],
};
