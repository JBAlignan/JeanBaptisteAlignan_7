
<template>
  <main class="row justify-content-center container-fluid">
    <h1 class="text-center p-0">Réseau social</h1>

  <!--Formulaire de connexion à un compte-->

  <!--Positionnement du form sur 10 col, 5 col en md (Moyenne, > ou égal à 768px) et vertical gutters à 4em-->
    <form method="POST"  class="col-10 col-lg-5 gy-4 mw-80">
      <fieldset class="rounded py-4 px-4">
        <legend>Connexion à un compte</legend>
        <div class="mb-3 row">
          <label for="emailLogin" class="form-label">Adresse email</label>
          <input type="email" name="emailLogin" class="form-control" id="emailLogin" v-model="email">
        </div>
        <div class="mb-3 row ">
          <label for="passwordLogin" class="form-label">Mot de passe</label>
          <input type="password" name="passwordLogin" class="form-control" id="passwordLogin" v-model="password">
        </div>
      <button  @click="login" type="button" class="btn btn-primary">Connexion</button>
      </fieldset>
    </form>

    <router-link to="/signup" type="button" class="btn btn-success mt-5">Cr&#233;er un compte</router-link>

  </main>
</template>

<script>

import axios from 'axios'
import router from '../router/index'
// import store from ''

export default {
  name: 'HomeView',
  data() {
    return {   
        email: '',
        password: '',
    }
  },

  methods: {
    login(){
      axios
        .post('users/login', {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          if (!response.data.token) {
            this.errormessage = response.data.error;
          } else {
            console.log(response.data)
            this.$store.commit("SET_USER", response.data)
            router.push({ name: 'PostsList' })
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },

}

</script>

<style lang="scss">

main{
  flex-direction: column;
  align-items: center;
  height: 100%;
}

fieldset{
  background-color: #FFD7D7;
  padding: 1em;
  & div input{
    padding-left: 1em;
  }
}

.btn-success{
  height: 6%;
  width: 10em;
}

</style>