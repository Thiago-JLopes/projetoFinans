import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: () => import('../pages/Home.vue'),
    },
    {
      path: '/quemsomos',
      name: 'QuemSomos',
      component: () => import('../pages/QuemSomos.vue'),
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
  
  
  export default router
