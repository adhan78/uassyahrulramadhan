
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenuView from '../views/MenuView.vue'
import OrderView from '../views/OrderView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/menu', name: 'Menu', component: MenuView },
  { path: '/order', name: 'Order', component: OrderView },
  { path: '/login', name: 'Login', component: LoginView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
