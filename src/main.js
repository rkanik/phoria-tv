import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from './components'
import VueToast from 'vue-toast-notification';
import PerfectScrollbar from 'vue2-perfect-scrollbar'

// PWA
import './registerServiceWorker'

// Styles
import './assets/css/toast.css';
import './assets/css/tailwind.css'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
import './assets/scss/main.scss'

// Production tips
Vue.config.productionTip = false

// Global Components
components.register(Vue)

// Plugins
Vue.use(VueToast, {
   dismissible: false
});
Vue.use(PerfectScrollbar)

new Vue({
   router,
   store,
   render: h => h(App)
}).$mount('#app')
