<script>
// import { defineComponent } from '@vue/composition-api'

export default {
  name: 'ProfilView'
}
</script>

<template>

<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="" class="img-fluid rounded-start" alt="Photo de profil">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <p class="card-text">Prénom</p>
        <p class="card-text">Prénom du profil</p>
        <p class="card-text">Nom</p>
        <p class="card-text">Nom du profil</p>
        <router-link to='/profil/:id/update'>Modifier</router-link>
      </div>
    </div>
  </div>
</div>
    
</template>

<style lang="scss">

img {
    border: 1px solid black;
}

</style>
