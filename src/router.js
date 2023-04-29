import Vue from "vue";
// import VueRouter from "vue-router";
import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Product from "@/views/Product.vue";
import Login from "@/views/Login.vue";
import About from "@/views/About.vue";
import Profile from "@/views/Profile.vue";

// --- Vue 2 route
// Vue.use(VueRouter);

// const router = new VueRouter({
//   route: [
//     {
//       path: "/",
//       comments: Home,
//     },
//     {
//       path: "/about",
//       comments: About,
//     },
//   ],
// });

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/product",
    component: Product,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/profile",
    component: Profile,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
