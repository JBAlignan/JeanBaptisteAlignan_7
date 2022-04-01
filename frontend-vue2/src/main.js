import Vue from 'vue'
import App from './App.vue'
import router from './router'
// Store, sorte de data global.
import store from './store'
import axios from 'axios'

// Importation de Bootstrap.
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

// Configuration d'Axios pour les requêtes.
// L'instruction suivante permet de définir  Axios comme outil par défaut pour gérer les requêtes.
// axios.defaults.withCredentials = false
// Instruction créant l'URL par defaut pour toutes les requêtes.
// Plus besoin de préciser l'URL pour le reste du code, seulement les endpoints.
axios.defaults.baseURL = 'http://localhost:3000/api'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
