import "./style/baseColor.less";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
// 引入echarts
import echarts from './echarts/echarts';

const app = createApp(App);
app.use(router);
app.use(store);
// 挂载到vue实例中
app.config.globalProperties.$echarts = echarts;

app.mount("#app");
