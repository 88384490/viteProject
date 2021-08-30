export default {
  plugins: [
    [
      "import",
      {
        libraryName: "element-plus",
        customStyleName: (name) => {
          name = name.slice(3);
          return `element-plus/packages/theme-chalk/src/${name}.scss`;
        },
      },
    ],
  ],
};
