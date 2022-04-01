import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


// Méthode ajoutant une fonctionnalité globale à notre instance de Vue.
Vue.use(Vuex)


export default new Vuex.Store({
  // State, contient les données (comparable à data dans Vue).
  state: {
    posts: []
  },
  // Getters, contient les fonctions qui manipulent les données (comparable à computed dans Vue).
  getters: {
    
  },
  // Permet de mettre à jour/modifier les données de state.
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts
    }
  },
  // Coordonne la logique des mutations. Comparable à la propriété methods.
  actions: {
    getPosts({ commit }) {
      axios.get("/posts")
        .then(response => {
        commit('SET_POSTS', response.data)
      })
    }
  }
})

