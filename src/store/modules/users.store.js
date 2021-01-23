const initialState = () => ({
   users: []
})

const getters = {
   $users: ({ users }) => users
}

const mutations = {
   setUsersState(state, payload) {
      Object.keys(payload).forEach(key => {
         state[key] = payload[key]
      })
   },
   addUser(state, user) {
      state.users.push(user)
   },
   deleteUser(state, id) {
      state.users = state.users.filter(user => user.id !== id)
   },
   updateUser(state, user) {
      state.users = state.users.map(u => u.id === user.id ? user : u)
   }
}

const actions = {
   getUser({ state: { users } }, id) {
      return users.find(user => user.id === id)
   },
   addUser({ commit, state: { users } }, user) {
      let userExisted = users.some(u => u.username === user.username)
      if (userExisted) return { error: true, message: `Already have a user with username: '${user.username}'` }
      commit('addUser', user)
      return { error: false, message: 'User Registered Succesfully!' }
   }
}

export default {
   namespaced: true,
   state: initialState(),
   getters, mutations, actions
}
