import { createRouter, createWebHistory } from "vue-router";
import Root from "./views/Root.vue";
import ProductsPage from "./views/ProductsPage.vue";
import ProductPage from "./views/ProductPage.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Root,
      children: [
        {
          path: "products",
          component: ProductsPage,
        },
        {
          path: "products/:id",
          component: ProductPage,
        },
      ],
    },
  ],
});
