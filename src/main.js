import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from './components'
import VueToast from 'vue-toast-notification';

// PWA
import './registerServiceWorker'

// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import 'vue-toast-notification/dist/theme-sugar.css';
import './assets/scss/main.scss'

// Production tips
Vue.config.productionTip = false

// Global Components
components.register(Vue)

// Plugins
Vue.use(VueToast);

new Vue({
   router,
   store,
   render: h => h(App)
}).$mount('#app')
