import {
  createWebHistory,
  createRouter,
  RouteLocationNormalized,
  NavigationGuardNext,
} from "vue-router";

import LoginView from "./components/Login.vue";
import MainPage from "./components/MainPage.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
    beforeEnter: (
      to: RouteLocationNormalized,
      from: RouteLocationNormalized,
      next: NavigationGuardNext
    ) => {
      if (localStorage.getItem("authToken")) {
        next({ name: "main" });
      } else {
        next();
      }
    },
  },
  {
    path: "/main",
    name: "main",
    component: MainPage,
    beforeEnter: (
      to: RouteLocationNormalized,
      from: RouteLocationNormalized,
      next: NavigationGuardNext
    ) => {
      if (!localStorage.getItem("authToken")) {
        next({ name: "login" });
      } else {
        next();
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
