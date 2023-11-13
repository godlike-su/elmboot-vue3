import { createStore } from 'vuex'

export default createStore({
  state: {
    isTabbar: true,
    user: {
      userid: '',
      usertype: 1,

    },
    Cookie: '',
    
  },
  getters: {
  },
  mutations: {
    setTabbar(state, data) {
      state.isTabbar = data
    },
    setUserId(state, data) {
      state.user.userid = data
    },
    setCookie(state, data) {
      state.Cookie = data
    },
    setUser(state, data) {
      state.user.userid = data.userid
      state.user.usertype = data.usertype
    }
  },
  actions: {
  },
  modules: {
  }
})
