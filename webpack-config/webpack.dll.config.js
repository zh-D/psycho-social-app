const path = require("path");
const DllPlugin = require("webpack/lib/DllPlugin");
const { distPath } = require("./paths");

module.exports = {
  mode: "development",
  entry: {
    react: ["react", "react-dom"],
  },
  output: {
    filename: "[name].dll.js",
    path: distPath,
    library: "_dll_[name]",
  },
  plugins: [
    new DllPlugin({
      name: "_dll_[name]",
      path: path.join(distPath, "[name].manifest.json"),
    }),
  ],
};
