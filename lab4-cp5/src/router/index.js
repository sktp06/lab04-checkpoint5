import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Airlines from "../views/event/EventAirline.vue";
import EventDetails from "../views/event/EventDetail.vue";
import EventLayout from "../views/event/EventLayout.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    props: (route) => ({
      page: parseInt(route.query.page) || 1,
      perPage: parseInt(route.query.perPage) || 3,
    }),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/",
    name: "PassengerLayout",
    props: true,
    component: EventLayout,
    children: [
      {
        path: "passenger",
        name: "EventDetails",
        component: EventDetails,
        props: true,
      },
      {
        path: "airline",
        name: "airlines",
        component: Airlines,
        props: true,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
