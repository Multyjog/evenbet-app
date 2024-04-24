import { createApp } from "vue";
import PrimeVue from "primevue/config";
import router from "./router";
import App from "./App.vue";
import ToastService from "primevue/toastservice";

import "primevue/resources/themes/mdc-light-indigo/theme.css"; // Choose the theme you prefer
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "./styles.css";

const app = createApp(App);
app.use(ToastService);
app.use(PrimeVue);
app.use(router);
app.mount("#app");
