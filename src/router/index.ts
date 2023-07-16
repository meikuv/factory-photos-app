import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  RouteComponent,
} from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: (): Promise<RouteComponent> =>
      import("@modules/home/views/HomeView.vue"),
  },
  {
    path: "/favourites",
    name: "favourites",
    component: (): Promise<RouteComponent> =>
      import("@modules/favourites/view/FavouritesView.vue"),
  },
  {
    path: "/photo/:id",
    name: "photo",
    component: (): Promise<RouteComponent> =>
      import("@modules/photo/view/PhotoView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    components: {
      default: () => import("@components/NotFound.vue"),
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
