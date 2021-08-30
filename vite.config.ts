import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import legacy from "@vitejs/plugin-legacy";
import VitePluginElementPlus from "vite-plugin-element-plus";
// https://vitejs.dev/config/
export default defineConfig({
  root: process.cwd(),
  resolve: {
    alias: [{ find: "/@", replacement: resolve(__dirname, "src") }],
  },
  plugins: [
    vue(),
    legacy({
      targets: ["defaults", "ie >= 11"],
    }),
    VitePluginElementPlus({
      useSource: true,
    }),
  ],
  server: {
    port: 8080,
  },
  css: {},
});
