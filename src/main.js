import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import ThemedButton from "./components/ThemedButton.vue";
import router from "./pages/router";

import "normalize.css";
import "./assets/main.css";
import "./assets/utilities.css";
import "./assets/animations.css";

if (import.meta.env.DEV) {
  // (await import("eruda")).init([]);
}
const app = createApp(App);

app.use(createPinia());
app.component("app-button", ThemedButton);
app.use(router);

app.mount("#app");
