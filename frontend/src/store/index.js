import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userToken: ''
  },
  getters: {
  },
  mutations: {
    USER_TOKEN(state, payload){
      state.userToken = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
