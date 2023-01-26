import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import { fontAwesome } from "./components/data/fontawesome";
import App from "./App.vue";

const app = createApp(App);
app.component("font-awesome-icon", fontAwesome.FontAwesomeIcon);
app.mount("#app");
