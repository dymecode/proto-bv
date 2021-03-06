//import "@babel/polyfill";
//import "mutationobserver-shim";

import Vue from "vue";
import "./plugins/vue-web-storage";
import "./plugins/fontawesome";
import "./plugins/bootstrap-vue";
//import "./plugins/vue-formulate";
import "./plugins/vue-treeselect";
import App from "./App.vue";
import router from "./router";
import store from "./store/vuex-pathify";
import "./filters";
import "./sass/app.scss";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
