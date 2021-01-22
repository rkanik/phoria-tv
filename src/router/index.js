import Vue from 'vue'
import VueRouter from 'vue-router'

// Layouts
import DefaultLayout from '../layouts/DefaultLayout'

// Importer
const _import = name => () => import(`../views/${name}.vue`)

Vue.use(VueRouter)

const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes: [
      {
         path: '/',
         component: DefaultLayout,
         children: [
            {
               name: 'Landing',
               path: '',
               component: _import('LandingPage')
            },
            {
               path: '/home',
               name: 'Home',
               component: _import('Home')
            },
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
      }
   ]
})

export default router
