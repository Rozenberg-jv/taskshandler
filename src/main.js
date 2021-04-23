import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./plugins/firebase";
import moment from "moment";

const app = createApp(App);

app.use(store).use(router);

moment.locale("ru", {
  longDateFormat: {
    LLLL: "DD-MM-YYYY HH:mm:ss"
  }
});
app.config.globalProperties.$moment = moment;

export default app.mount("#app");
