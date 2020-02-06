import Vue from "vue";
import App from "./App.vue";
import router from './router';
import echarts from "echarts";
import VueRouter  from "vue-router";

Vue.use(VueRouter);
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
