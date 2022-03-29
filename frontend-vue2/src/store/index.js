import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import auth from './modules/auth'

// Chargement de Vuex.
Vue.use(Vuex)

// Création d'un store pour les données.
export default new Vuex.Store({

  modules: {
    auth
  },
  plugins: [createPersistedState()]
});
