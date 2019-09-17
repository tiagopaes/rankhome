import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import LandingPage from './views/LandingPage'
import Login from './views/Login'
import Register from './views/Register'
import StorageService from '@/services/StorageService'

Vue.use(Router)

const beforeEach = (to, from, next) => {
  if (to.meta.requiresAuth) {
    if (!StorageService.get('token')) {
      next('/login')
    }
  }
  next()
}

const redirectToHome = (to, from, next) => {
  if (StorageService.get('token')) {
    next('/home')
  }
  next()
}

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: LandingPage,
      meta: {
        requiresAuth: false,
        showMenu: false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresAuth: false,
        showMenu: false
      },
      beforeEnter: redirectToHome
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        requiresAuth: false,
        showMenu: false
      },
      beforeEnter: redirectToHome
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true,
        showMenu: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

router.beforeEach(beforeEach)

export default router
