import Vue from 'vue'
import Vuex from 'vuex'
import persist from "vuex-persistedstate";

// Modules
import Auth from './modules/auth.store'
import Users from './modules/users.store'

Vue.use(Vuex)

export default new Vuex.Store({
   modules: {
      Auth,
      Users
   },
   plugins: [persist({
      key: 'PHORIA-TV-VUEX',
   })]
})
