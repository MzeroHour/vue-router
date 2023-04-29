<template>
  <div>
    <MenuBar></MenuBar>
    <router-view></router-view>
  </div>
</template>

<script>
import MenuBar from "./components/MenuBar.vue";
// import Home from "@/views/Home.vue";
// import About from "@/views/About.vue";
// import Profile from "@/views/Profile.vue";
// import Product from "@/views/Product.vue";
// import Login from "@/views/Login.vue";

export default {
  name: "App",
  components: {
    // MenuBar: MenuBar,
    MenuBar,
    // Home,
    // About,
    // Profile,
    // Product,
    // Login,
  },
};
</script>
