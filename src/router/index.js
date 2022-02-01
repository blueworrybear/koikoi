import { createRouter, createWebHistory } from 'vue-router'
import Lobby from '../views/Lobby.vue'

const routes = [
  {
    path: '/',
    name: 'Lobby',
    component: Lobby
  },
  {
    path: '/room',
    name: 'Room',
    component: () => import('../views/Room.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
