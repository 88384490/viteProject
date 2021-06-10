const tab = {
  state: () => ({ index: 0 }),
  getters: {
    getIndex(state) {
      return state.index;
    },
  },
  mutations: {
    setIndex(state, index) {
      state.index = index;
    },
  },
};
export default tab;
//# sourceMappingURL=tab.js.map
