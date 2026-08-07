import SignIn from "@/components/auth/SignIn.vue";
import SignUp from "@/components/auth/SignUp.vue";
import Dashboard from "@/components/pages/Dashboard.vue";
import Navbar from "./components/includes/Navbar.vue";
import Sidebar from "./components/includes/Sidebar.vue";
import Footer from "./components/includes/Footer.vue";


import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/", //

    name: "SignIn",
    components: SignIn,
  },
  {
    path: "/signup",
    name: "SignUp",
    components: SignUp,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    components: {
      navbar: Navbar,
      sidebar: Sidebar,
      default: Dashboard,
      footer: Footer,
    },
  },
  { path: "/:pathMatch(.*)*", redirect: { name: "signin" } },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
