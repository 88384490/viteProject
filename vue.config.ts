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
    plugins: [
      NormalModuleReplacementPlugin(
        /element-plus[/\\]lib[/\\]locale[/\\]lang[/\\]en/,
        "element-plus/lib/locale/lang/zh-cn"
      ),
    ],
    devtool: "source-map",
  },
};
