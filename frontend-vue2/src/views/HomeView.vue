<script>

// import axios from 'axios'

// export default {
//     name: 'HomeComponent',
//     data() {

//     }
//     axios.post()
// }
import ButtonComponent from '../components/ButtonComponent'
import { mapActions } from 'vuex'

export default {
  name: 'HomeView',
  component: {
    ButtonComponent
  },
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      }
    }
  },
  methods: {
    ...mapActions([])
  }
}

</script>

<template>
  <main class="row justify-content-center container-fluid">
    <h1 class="text-center p-0">Réseau social</h1>

  <!--Formulaire de connexion à un compte-->

  <!--Positionnement du form sur 10 col, 5 col en md (Moyenne, > ou égal à 768px) et vertical gutters à 4em-->
    <form method="post" action=""  class="col-10 col-lg-5 gy-4 mw-80">
      <fieldset class="rounded py-4 px-4">
        <legend>Connexion à un compte</legend>
        <div class="mb-3 row">
          <label for="emailLogin" class="form-label">Adresse email</label>
          <input type="email" name="emailLogin" class="form-control" id="emailLogin">
        </div>
        <div class="mb-3 row ">
          <label for="passwordLogin" class="form-label">Mot de passe</label>
          <input type="password" name="passwordLogin" class="form-control" id="passwordLogin">
        </div>
      <router-link to="/publications" type="submit" class="btn btn-primary">Connexion</router-link>
      </fieldset>
    </form>

<!--Formulaire de création de compte-->

<!--Positionnement du form sur 10 col, 5 col en md (Moyenne, > ou égal à 768px) et vertical gutters à 4em-->
    <form method="POST" action="" class="col-10 col-lg-5 gy-4">
      <fieldset class="rounded py-4 px-4">
        <legend>Créer un compte</legend>
        <div class="mb-3 row">
          <label for="firstName" class="form-label">Prénom</label>
          <input type="text" name="firstName" class="form-control" id="firstName" v-model="form.firstName">
        </div>
        <div class="mb-3 row">
          <label for="lastName" class="form-label">Nom</label>
          <input type="text" name="lastName" class="form-control" id="lastName" v-model="form.lastName">
        </div>
        <div class="mb-3 row">
          <label for="email" class="form-label">Adresse email</label>
          <input type="email" name="email" class="form-control" id="email" v-model="form.email">
          </div>
        <div class="mb-3 row">
          <label for="password" class="form-label">Mot de passe</label>
          <input type="password" name="password" class="form-control" id="password" v-model="form.password">
        </div>
        <!-- <router-link to="/publications" type="submit" class="btn btn-primary">Valider</router-link> -->
        <ButtonComponent to='/publications' type="submit" class="btn btn-primary" text="Valider" />
        
      </fieldset>
    </form>

  </main>
</template>


<style lang="scss">
fieldset{
  background-color: rgb(245, 238, 238);
  padding: 1em;
  & div input{
    padding-left: 1em;
  }
}

</style>