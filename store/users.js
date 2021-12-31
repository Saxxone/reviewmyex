export const state = () => ({
  users: [],
  active_user: {}
})
export const getters = {
  users: state => {
    return state.users
  },
  user: state => {
    return state.active_user
  },
}
export const mutations = {
  fetchAllUsers(state, payload){
    state.users = payload.data
  },
  getOneUser(state, payload){
    state.active_user = payload.data
  }
}

export const actions = {
  async fetchUsers(context) {
    this.$axios.get(`http://localhost:4000/users/get-all-users`).then(res =>{
      context.commit('fetchAllUsers', res)
    })
  },
  async getUser(context, username) {
    this.$axios.get(`http://localhost:4000/users/get-user/${username}`).then(res =>{
      context.commit('getOneUser', res)
    })
  }
}
