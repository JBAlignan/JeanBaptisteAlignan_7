import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


// Méthode ajoutant une fonctionnalité globale à notre instance de Vue.
Vue.use(Vuex)


export default new Vuex.Store({
  // State, contient les données (comparable à data dans Vue).
  state: {
    // Tableau vide, qui se remplira avec la liste des posts dans la BDD.
    posts: [],
    // Données pour la connexion à un compte utilisateur.
    
      accessToken: null,
      loginError: null,
    
  },
  // Getters, contient les fonctions qui manipulent les données (comparable à computed dans Vue).
  getters: {
    
  },
  // Permet de mettre à jour/modifier les données de state.
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts
    },
    // Gestion de la connexion et du Token, si l'accès est autorisé.
    UPDATE_ACCESS_TOKEN(state, accessToken) {
      state.accessToken = accessToken
    },
    // Gestion de la connexion, si l'accès est refusé.
    LOGIN_STOP(state, errorMessage) {
      state.loginError = errorMessage;
    }
  },
  // Coordonne la logique des mutations. Comparable à la propriété methods.
  actions: {
    // Accès d'Axios aux posts.
      getPosts({ commit }) {
      axios.get("/posts")
        .then(response => {
        commit('SET_POSTS', response.data)
      })
      },

    
    
    // Envoi d'Axios de la requête de connexion à l'API.
      doLogin({ commit }, loginData) {
        axios.post('http://localhost:3000/api', {
          ...loginData
        })
        // 'response', objet contenant les informations de la réponse de l'API.
        .then((response) => {
          localStorage.setItem('accessToken', response.data.token)
          commit('LOGIN_STOP', null);
          commit('UPDATE_ACCESS_TOKEN', response.data.token);
        })
        .catch(error => {
          commit('LOGIN_STOP', error.response.data.error);
          commit('UPDATE_ACCESS_TOKEN', null);
        })
      },

      // Obtention du Token, enregistré dans la variable 'accessToken'.
      fetchAccessToken({ commit }) {
        commit('UPDATE_ACCESS_TOKEN', localStorage.getItem('accessToken'));
      }
  }
})

