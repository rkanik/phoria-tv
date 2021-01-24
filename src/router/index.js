import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

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
               path: '/home',
               component: _import('Home'),
               children: [
                  {
                     path: '',
                     name: 'Feed',
                     component: _import('Home/Feed')
                  },
                  {
                     path: 'videos',
                     name: 'Videos',
                     component: _import('Home/Videos')
                  },
                  {
                     path: 'pictures',
                     name: 'Pictures',
                     component: _import('Home/Feed')
                  },
                  {
                     path: 'referrals',
                     name: 'Referrals',
                     component: _import('Home/Feed')
                  }
               ]
            },
            {

               path: '/:username',
               name: 'Profile',
               component: _import('User/Profile')

            },
            {
               path: 'user/settings',
               name: 'UserSettings',
               component: _import('User/Settings')
            },
            {
               path: 'direct/inbox',
               name: 'Inbox',
               component: _import('Inbox')
            },
         ]
      }
   ]
})

router.beforeEach((to, _, next) => {
   let isAuth = store.getters['Auth/isAuth']
   if (to.path === '/login' && isAuth) return next('/home')
   next()
})

export default router
