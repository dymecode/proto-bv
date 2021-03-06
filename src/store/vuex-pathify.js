import Vue from "vue";
import Vuex from "vuex";
import pathify from "vuex-pathify";

// store definition
const store = {
  // state, members, modules, etc
};

// store
Vue.use(Vuex);
export default new Vuex.Store({
  plugins: [pathify.plugin], // activate plugin
  ...store,
});
