import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./home";
import handle404 from "./404";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      alias: "/home",
      name: "home",
      component: HomeView,
      beforeEnter: handle404,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("./about"),
    },
    {
      path: "/projects",
      name: "projects",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("./projects"),
      children: [
        {
          path: ":id",
          component: () => import("./projects/view_project"),
          name: "view project",
        },
        {
          path: "",
          component: () => import("./projects/list_projects"),
          name: "list projects",
        },
      ],
    },
  ],
  scrollBehavior(to, from, scrollPosition) {
    if (from.path.startsWith("/projects") && to.path.startsWith("/projects")) {
      return false;
    }
    return scrollPosition ?? 0;
  },
});

export default router;
