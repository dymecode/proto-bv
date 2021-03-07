import Vue from "vue";
import Vuex from "vuex";
import pathify from "vuex-pathify";

// store definition
const store = {
  // state, members, modules, etc
  state: {
    user: {},
    imr: {
      optionLists: {
        yesNo: ["Yes", "No"],
        yesNoNa: ["Yes", "No", "N/A"],
        sizing: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
      },
      definitions: {},
      pageData: {},
    },
  },
};

// store
Vue.use(Vuex);
export default new Vuex.Store({
  plugins: [pathify.plugin], // activate plugin
  ...store,
});
