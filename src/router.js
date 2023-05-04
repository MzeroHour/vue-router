import Vue from "vue";
// import VueRouter from "vue-router";
import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Product from "@/views/ProductHome.vue";
import Login from "@/views/Login.vue";
import About from "@/views/About.vue";
import Profile from "@/views/Profile.vue";
import ProductDetail from "@/views/ProductDetail";

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

    //---- Local Middleware route
    // beforeEnter: (to, from, next) => {
    //   let auth = localStorage.getItem("auth");

    //   if (auth) {
    //     next();
    //   } else {
    //     next("/login");
    //   }
    // },
  },
  {
    path: "/product/:id",
    component: ProductDetail,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// --- Global Middleware
router.beforeEach((to, from, next) => {
  console.log(to);
  if (to.path === "/profile" || to.path === "/product") {
    let auth = localStorage.getItem("auth");
    if (auth) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

// ---- Global Middleware
// router.beforeEach((to, from) => {
//   console.log("Middleware is working");
// });

export default router;
