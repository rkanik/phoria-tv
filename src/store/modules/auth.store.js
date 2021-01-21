
const initialState = () => ({
   isAuth: false
})

const getters = {
   isAuth: ({ isAuth }) => isAuth
}

const mutations = {
   setAuthState(state, payload) {
      Object.keys(payload).forEach(key => {
         state[key] = payload[key]
      })
   }
}

export default {
   namespaced: true,
   state: initialState(),
   getters, mutations
}
