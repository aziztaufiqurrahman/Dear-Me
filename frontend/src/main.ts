import { createApp } from "vue";
import App from "../src/App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "@/scss/style.scss";
import VueApexCharts from "vue3-apexcharts";
import axios from 'axios'
import VueAxios from 'vue-axios'
// @ts-ignore:next-line

const app = createApp(App);

app.use(VueApexCharts);
app.use(router);
app.use(VueAxios, axios)
app.use(vuetify).mount("#app");
