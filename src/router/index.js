import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";

import ROUTES from "@/enums/routes";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: ROUTES.SEARCH_PAGE,
    component: Home,
  },
  {
    path: "/user/:username",
    name: ROUTES.USER_PAGE,
    component: () => import(/* webpackChunkName: "User" */ "@/views/User.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
