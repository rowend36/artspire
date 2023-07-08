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
      path: "/classes",
      name: "classes",
      component: () => import("./classes"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./about"),
    },
    {
      path: "/projects",
      name: "projects",
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
    // TODO - track scroll position
    // console.log({ to, from, scrollPosition });
    // if (from.path == "/projects" && to.path.startsWith("/projects/")) {
    //   return false;
    // }
    return scrollPosition ?? 0;
  },
});

export default router;
