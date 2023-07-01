import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import ThemedButton from "./components/ThemedButton.vue";
import SpacerView from "./components/SpacerView.vue";
import SanityImage from "./components/SanityImage.vue";
import router from "./pages/router";

import "normalize.css";
import "./styles/main.css";
import "./styles/utilities.css";
import "./styles/animations.css";

if (import.meta.env.DEV) {
  // (await import("eruda")).init([]);
}
const app = createApp(App);

app.use(createPinia());
app.component("app-button", ThemedButton);
app.component("spacer-view", SpacerView);
app.component("sanity-img", SanityImage);
app.use(router);

app.mount("#app");
