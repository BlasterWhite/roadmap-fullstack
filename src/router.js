import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/HomeView.vue";
import About from "./views/AboutView.vue";
import Blog from "./views/BlogView.vue";

const routes = [
  {
    path: "/",
    component: Home,
    name: "Home",
  },
  {
    path: "/about",
    component: About,
    name: "About",
  },
  {
    path: "/blog",
    component: Blog,
    name: "Blog",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
