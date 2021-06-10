import { GlobalState } from "./interface";

const state: GlobalState = {
  menuList: [],
};
const mutations = {
  setMenuList(state: any, list: []) {
    state.menuList = list;
  },
};
export default { state, mutations };
