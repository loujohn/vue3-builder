import { createRouter, createWebHashHistory } from 'vue-router';
import type { App } from 'vue';
const MainLayout = () => import('@/layouts/Main/index.vue');

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: 'map',
          component: () => import('@/views/index.vue')
        }
      ]
    }
  ],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
});
export function setupRouter(app: App<Element>) {
  app.use(router);
}
