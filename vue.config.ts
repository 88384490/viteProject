import * as path from "path";
const { resolve } = path;
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
