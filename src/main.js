import Vue from "vue";
import App from "./App.vue";
import Home from "./views/Home.vue"

Vue.config.productionTip = false;
Vue.component('home', Home);


new Vue({
  render: (h) => h(App),
}).$mount("#app");
