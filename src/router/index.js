import Vue from 'vue'
import VueRouter from 'vue-router'

// Layouts
import AuthLayout from '../layouts/AuthLayout'
import HomeLayout from '../layouts/HomeLayout'

// Importer
const _import = name => () => import(`../views/${name}.vue`)

Vue.use(VueRouter)

const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes: [
      {
         path: '/',
         component: AuthLayout,
         redirect: '/login',
         children: [
            {
               name: 'Login',
               path: 'login',
               component: _import('Login')
            },
            {
               name: 'Signup',
               path: 'signup',
               component: _import('Signup')
            },
            {
               name: 'Profile',
               path: ':username',
               component: _import('Profile')
            }
         ]
      },
      {
         path: '/home',
         component: HomeLayout,
         children: [
            {
               name: 'Home',
               path: 'home',
               component: _import('Home')
            }
         ]
      }
   ]
})

export default router
