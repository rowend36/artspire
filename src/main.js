import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import ThemedButton from "./components/ThemedButton.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.component("app-button", ThemedButton);
app.use(router);

app.mount("#app");
