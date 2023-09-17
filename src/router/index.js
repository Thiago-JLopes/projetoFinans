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
    },
    {
      path: '/login',
      name: 'LoginView',
      component: () => import('../pages/Login.vue'),
    },
    {
      path: '/registro',
      name: 'RegistroView',
      component: () => import('../pages/Registrar.vue'),
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
  
  
  export default router
