<template>
  <main class="row justify-content-center container-fluid">
    <h1 class="text-center p-0">Réseau social</h1>

    <form
      method="POST"
      action="http://localhost:3000/api/users/signup"
      class="col-10 col-lg-5 gy-4"
    >
      <fieldset class="rounded py-4 px-4">
        <legend>Créer un compte</legend>
        <div class="mb-3 row">
          <label for="firstName" class="form-label">Prénom</label>
          <input
            type="text"
            name="firstName"
            class="form-control"
            id="firstName"
            v-model="firstName"
          />
        </div>
        <div class="mb-3 row">
          <label for="lastName" class="form-label">Nom</label>
          <input
            type="text"
            name="lastName"
            class="form-control"
            id="lastName"
            v-model="lastName"
          />
        </div>
        <div class="mb-3 row">
          <label for="email" class="form-label">Adresse email</label>
          <input
            type="email"
            name="email"
            class="form-control"
            id="email"
            v-model="email"
          />
        </div>
        <div class="mb-3 row">
          <label for="password" class="form-label">Mot de passe</label>
          <input
            type="password"
            name="password"
            class="form-control"
            id="password"
            v-model="password"
          />
        </div>

        <button @click="submitSignUp" type="button" class="btn btn-success">S&#39;inscrire</button>

      </fieldset>
    </form>
  </main>
</template>

<script>
import axios from "axios"



    export default {
        name: 'SignUp',
        data() {
            return {
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
            }
        },
        methods:{
            submitSignUp(){
                 axios.post("/users/signup", {
                  firstName: this.firstName,
                  lastName: this.lastName,
                  email: this.email,
                  password: this.password
                })
                .then((response) => {
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error)
                })
              }
        },
    
  


    submitSignUp() {
      axios
        .post("http://localhost:3000/api/users/signup", {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    }}
  

</script>

<style lang="scss">
fieldset {
  background-color: rgb(245, 238, 238);
  padding: 1em;
  & div input {
    padding-left: 1em;
  }
}
</style>
