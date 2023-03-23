import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";



const routes: Array<RouteRecordRaw> = [{
  path: '/',
  component: () => import('@/components/HelloWorld.vue')
}, {
  path: '/w',
  component: () => import('@/components/WelcomeItem.vue')
}]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
// import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomeView
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('../views/AboutView.vue')
//     }
//   ]
// })

// export default router
