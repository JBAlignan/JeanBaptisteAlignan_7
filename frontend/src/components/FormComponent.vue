
<template>
<!--Formulaire de création de compte-->

<!--Positionnement du form sur 10 col, 5 col en md (Moyenne, > ou égal à 768px) et vertical gutters à 4em-->
    <form method="POST" action="" class="col-10 col-lg-5 gy-4">
      <fieldset class="rounded py-4 px-4">
        <legend>Créer un compte</legend>
        <div class="mb-3 row">
          <label for="firstName" class="form-label">Prénom</label>
          <input type="text" name="firstName" class="form-control" id="firstName" v-model="firstName">
        </div>
        <div class="mb-3 row">
          <label for="lastName" class="form-label">Nom</label>
          <input type="text" name="lastName" class="form-control" id="lastName" v-model="lastName">
        </div>
        <div class="mb-3 row">
          <label for="email" class="form-label">Adresse email</label>
          <input type="email" name="email" class="form-control" id="email" v-model="email">
          </div>
        <div class="mb-3 row">
          <label for="password" class="form-label">Mot de passe</label>
          <input type="password" name="password" class="form-control" id="password" v-model="password">
        </div>
        <router-link to="/publications" type="submit" class="btn btn-primary">Connexion</router-link>
        <!-- <ButtonComponent to='/publications' type="submit" class="btn btn-primary"  /> -->
        
      </fieldset>
    </form>

</template>

<script>

export default {
    name: 'FormComponent',

}
</script>
