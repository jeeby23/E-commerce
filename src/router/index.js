import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import login from '../components/login.vue'
import register from '../components/register.vue'
import registration from '../components/registration.vue'
import userDropdown from '../components/userDropdown.vue'
import ShoppingCart from '@/components/ShoppingCart.vue'
import productDetails from '@/components/productDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../components/register.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import('../components/registration.vue')
  },
  {
    path: '/userDropdown',
    name: 'userDropdown',
    component: () => import('../components/userDropdown.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../components/products.vue')
  },
   {
    path: '/cart',
    name: 'Cart',
    component: ShoppingCart 
  },
   {
   path: '/products/:productId',
  name: 'productDetails',
  component: () => import('../components/productDetails.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
