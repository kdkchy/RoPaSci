import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Bot from '../views/play/Bot.vue'
import Duel from '../views/play/Duel.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bot',
    name: 'Bot',
    component: Bot
  },
  {
    path: '/duel',
    name: 'Duel',
    component: Duel
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
