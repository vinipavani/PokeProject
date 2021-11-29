import Vue from "vue";
import App from "./App.vue";
import Home from "./views/Home.vue"
import router from "./router";

Vue.config.productionTip = false;
Vue.component('home', Home);


new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
