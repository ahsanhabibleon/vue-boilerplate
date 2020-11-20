import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "@/components/global/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "home" */
        "../components/views/Home"
      ),
  },
  {
    path: "/about",
    name: "About",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "about" */
        "../components/views/About"
      ),
  },
  {
    path: "*",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  linkExactActiveClass: "is-active",
  linkActiveClass: "",
  scrollBehavior: (to) => {
    if (to.hash) {
      return {
        selector: to.hash,
      };
    } else {
      return {
        x: 0,
        y: 0,
      };
    }
  },
  routes,
});

export default router;
