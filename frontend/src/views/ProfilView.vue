<template>

<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="" class="img-fluid rounded-start" alt="Photo de profil">
      <div class="input-group">
        <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
        <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Modifier</button>
      </div>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <p class="card-text">Prénom: {{ $store.state.firstName }}</p>

        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Prénom" aria-label="Prénom" aria-describedby="button-addon2" v-model="firstName">
          <button @click="updateProfile" class="btn btn-outline-secondary" type="button" id="button-addon2">Modifier</button>
        </div>


        <p class="card-text">Nom: {{ $store.state.lastName }}</p>
        <router-link to='/profil/:id/update'>Modifier</router-link>
      </div>
    </div>
  </div>
</div>
    
</template>

<script>
    import axios from 'axios'


  export default {
    name: 'ProfilView',
    data() {
      return {
        firstName: "",
        lastName: "",
        avatar: ""
      }
    },

    methods : {

      // Mise à jour du profil.
          updateProfile(){
            console.log(`${this.$route.params.id}`)
            axios
              .put(`/users/${this.$route.params.id}`, {
                firstName: this.firstName,
                lastName: this.lastName,
                avatar: this.avatar
              }, {
                  headers: {
                  'Authorization' : `Bearer ${this.$store.state.userToken}`
                  }
              })
              .then ((response) => {
                console.log(response)
              })
              .catch((error) => {
                console.log(error)
              })
          }
    }
  }
  
</script>

<style lang="scss">

img {
    border: 1px solid black;
}

</style>
