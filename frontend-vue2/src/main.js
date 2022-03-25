import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Importation de Bootstrap.
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

// Store, sorte de data global.
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
