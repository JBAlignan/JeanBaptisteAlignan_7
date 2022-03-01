<template>
  <main class="row justify-content-center ">
    <h1>Réseau social de Groupomania</h1>

<!--Formulaire de création de compte-->

<!--Positionnement du form sur 10 col, 5 col en md (Moyenne, > ou égal à 768px) et vertical gutters à 4em-->
    <form method="post" action="" class="col-10 col-md-5 gy-4">
      <fieldset class="rounded py-4">
        <legend>Créer un compte</legend>
        <div class="mb-3 row justify-content-center">
          <label for="emailSignUp" class="form-label">Adresse email</label>
          <input type="email" name="emailSignUp" class="form-control w-75  mw-75px" id="emailSignUp">
          </div>
        <div class="mb-3 row justify-content-center">
          <label for="passwordSignUp" class="form-label">Mot de passe</label>
          <input type="password" name="passwordSignUp" class="form-control w-75" id="passwordSignUp">
        </div>
        <button type="submit" class="btn btn-primary">Valider</button>
      </fieldset>
    </form>

  <!--Formulaire de connexion à un compte-->

  <!--Positionnement du form sur 10 col, 5 col en md (Moyenne, > ou égal à 768px) et vertical gutters à 4em-->
    <form method="post" action=""  class="col-10 col-sm-5 gy-4 mw-80">
      <fieldset class="rounded py-4">
        <legend>Connexion à un compte</legend>
        <div class="mb-3 row justify-content-center">
          <label for="emailLogin" class="form-label">Adresse email</label>
          <input type="email" name="emailLogin" class="form-control w-75" id="emailLogin">
        </div>
        <div class="mb-3 row justify-content-center">
          <label for="passwordLogin" class="form-label">Mot de passe</label>
          <input type="password" name="passwordLogin" class="form-control w-75" id="passwordLogin">
        </div>
      <button type="submit" class="btn btn-primary">Valider</button>
      </fieldset>
    </form>
  </main>

</template>

<script>

export default {
    
    name: 'FormComponent'
}

</script>

<style lang="scss">

fieldset{
  background-color: rgb(245, 238, 238);
  padding: 1em;
}

</style>
