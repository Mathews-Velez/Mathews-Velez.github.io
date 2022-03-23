import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import("../views/Projects.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;