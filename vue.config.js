const path = require("path");
const { resolve, join } = path;
module.exports = {
  assetsDir: "static",
  runtimeCompiler: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
  },
};
