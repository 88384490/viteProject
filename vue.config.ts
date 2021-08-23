import * as path from "path";
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
    devtool: "source-map",
  },
};
