import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import './assets/css/style.css?v=<?=time()?>';
import VueApexCharts from "vue3-apexcharts";

const app = createApp(App);
app.use(store)
app.use(router)
app.use(ElementPlus)
app.use(VueApexCharts)
app.mount("#app");
