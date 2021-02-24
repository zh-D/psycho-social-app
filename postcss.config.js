const atImport = require("postcss-import");

module.exports = {
  plugins: [
    atImport,
    [
      "postcss-preset-env",
      {
        // Options
      },
    ],
    // cssna 可以压缩代码
  ],
};
