import { createApp } from "vue"
import App from "./App.vue"
import routes from "./router"
import store from "./store"
import VueAxios from "vue-axios"
import axios from "axios"
import installElementPlus from "./plugins/element"

const app = createApp(App)
installElementPlus(app)
app.use(routes).use(store).use(VueAxios, axios).mount("#app")
