import Vue from 'vue'
import Vuex from 'vuex'


// Méthode ajoutant une fonctionnalité globale à notre instance de Vue.
Vue.use(Vuex)


export default new Vuex.Store({
  // State, contient les données (comparable à data dans Vue).
  state: {
    firstName: 'Jean-Baptiste',
    lastName: 'Alignan',
    // email: '',
    // token: ''
  },
  // Getters, contient les fonctions qui manipulent les données (comparable à computed dans Vue).
  getters: {
    nameDisplay (state){
      return `${state.firstName} ${state.lastName}`
    }
  },
  // Permet de mettre à jour 
  mutations: {

  },
  actions: {

  }
})

