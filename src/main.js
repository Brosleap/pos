import "admin-lte/plugins/bootstrap/js/bootstrap.bundle.js";
import "admin-lte/dist/js/adminlte.min.js";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import { createPinia } from "pinia";
const pinia = createPinia();
createApp(App).use(router).use(pinia).mount('#app');
