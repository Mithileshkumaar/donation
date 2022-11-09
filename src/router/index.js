import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Donation from "../views/donation.vue";
import Donee from "../views/donee.vue";
import landing from "../views/landing.vue"
import contact from "../views/contact.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    name: "contact",
    path: "/contact",
    component: contact
  },
  {
    path: "/donation",
    name: "Donation",
    component: Donation,
  },
  {
    path: "/donee",
    name: "Donee",
    component: Donee,
  },
  {
    path: "/landing",
    name: "landing",
    component: landing
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
