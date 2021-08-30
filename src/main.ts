import { createApp } from "vue";
import App from "./App.vue";
import routes from "./router";
import VueAxios from "vue-axios";
import axios from "axios";
import installElementPlus from "./plugins/element";

const app = createApp(App);
installElementPlus(app);
app.use(routes).use(VueAxios, axios).mount("#app");
