import { createStore } from "vuex";
import global from "@/store/modules/global/global";
import tab from "@/store/modules/tab";
const store = {
  modules: {
    global,
    tab,
  },
};
export default createStore(store);
//# sourceMappingURL=index.js.map
