import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Home from "./pages/Home.vue";
import Pump from "./pages/Pump.vue";

const router = createRouter({
  history: createWebHashHistory("/app/"),

  routes: [
    { path: "/", component: Home },
    { path: "/pump-rock", component: Pump },
  ],
});

createApp(App).use(router).mount("#app");
