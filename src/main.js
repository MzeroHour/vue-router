import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// Import all of Bootstrap's CSS
// import "bootstrap/scss/bootstrap";
import "popper.js/dist/popper.min.js";
import jQuery from "jquery";
window.jQuery = window.$ = jQuery;

createApp(App).mount("#app");
