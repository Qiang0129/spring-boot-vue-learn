import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // 这里使用了动态导入来实现路由的懒加载
      component: () => import('../views/Home.vue'),
    },
    
  ],
})

export default router
