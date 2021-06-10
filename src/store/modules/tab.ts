const tab = {
  state: () => ({ index: 0 }),
  getters: {
    getIndex(state: any) {
      return state.index;
    },
  },
  mutations: {
    setIndex(state: any, index: number) {
      state.index = index;
    },
  },
};
export default tab;
