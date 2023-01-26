import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar as fasFaStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farFaStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fasFaStar, farFaStar);
import App from "./App.vue";

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
