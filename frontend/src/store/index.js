import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    firstName: '',
    lastName: '',
    userId: '',
    userToken: '',
    post: '',
    comment: [],
  },
  getters: {
    
  },
  mutations: {
    USER_FIRSTNAME(state, payload){
      state.firstName = payload
    },
    USER_LASTNAME(state, payload){
      state.lastName = payload
    },
    USER_ID(state, payload){
      state.userId = payload
    },
    USER_TOKEN(state, payload){
      state.userToken = payload
    },
    // POST_BY_ID(state, payload){
    //   state.post = payload
    // },
    // COMMENT_BY_ID(state, payload){
    //   state.comment = payload
    // }
  },
  actions: {
  },
  modules: {
  }
})
