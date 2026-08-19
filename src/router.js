import SignIn from "@/components/auth/SignIn.vue";
import SignUp from "@/components/auth/SignUp.vue";
import Dashboard from "@/components/pages/Dashboard.vue";
import Navbar from "./components/includes/Navbar.vue";
import Sidebar from "./components/includes/Sidebar.vue";
import Footer from "./components/includes/Footer.vue";

import { createRouter, createWebHistory } from "vue-router";
import Test from "./components/pages/Test.vue";
const routes = [
  {
    path: "/", //
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
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
    meta: {
       guarded: true 
      },
  },
  {
    path: '/tests',
        name: 'Tests',
        components: {
            navbar: Navbar,
            sidebar: Sidebar,
            footer: Footer,
            default: Test,
        },
        meta: { 
          guarded: true 
        },//this line will tel us we can go after login

  },
  { path: "/:pathMatch(.*)*", redirect: { name: "signin" } },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
