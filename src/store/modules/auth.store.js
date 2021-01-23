const initialState = () => ({
   isAuth: false,
   user: {}
})

const getters = {
   isAuth: ({ isAuth }) => isAuth,
   $user: ({ user }) => user
}

const mutations = {
   setAuthState(state, payload) {
      Object.keys(payload).forEach(key => {
         state[key] = payload[key]
      })
   }
}

const actions = {
   loginUser({ commit, rootState: { Users: { users } } }, user) {
      let eUser = users.find(u =>
         u.email.toLowerCase() === user.email.toLowerCase()
      )
      if (!eUser) return {
         error: true,
         message: 'Invalid Email Address.'
      }
      if (eUser.password !== user.password) return {
         error: true,
         message: 'Password is incorrect!'
      }
      commit('setAuthState', { isAuth: true, user: eUser })
      return { error: false, message: 'Successfully Logged In!' }
   }
}

export default {
   namespaced: true,
   state: initialState(),
   getters, mutations, actions
}
