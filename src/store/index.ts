import { createStore, StoreOptions } from "vuex";
import { RootState } from "@/store/types";
import global from "@/store/modules/global/global";
import tab from "@/store/modules/tab";

const store: StoreOptions<RootState> = {
  modules: {
    global,
    tab,
  },
};
export default createStore(store);
