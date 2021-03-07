import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ImrHome from "../layouts/imr/Main.vue";
import ImrForm from "../layouts/imr/Form.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/layouts/imr",
    name: "ImrHome",
    component: ImrHome,
  },
  {
    path: "/layouts/imr/form",
    name: "ImrForm",
    component: ImrForm,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
