import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PokemonPage from "../views/PokemonPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/pokemon/:id",
    name: "PokemonPage",
    component: PokemonPage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;