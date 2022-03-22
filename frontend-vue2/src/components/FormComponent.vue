<script>
export default {
    name: 'FormComponent'
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
    <form method="post" action="" class="col-10 col-lg-5 gy-4">
      <fieldset class="rounded py-4 px-4">
        <legend>Créer un compte</legend>
        <div class="mb-3 row">
          <label for="firstNameSignUp" class="form-label">Prénom</label>
          <input type="text" name="firstName" class="form-control" id="firstName">
        </div>
        <div class="mb-3 row">
          <label for="lastNameSignUp" class="form-label">Nom</label>
          <input type="text" name="lasttName" class="form-control" id="lasttName">
        </div>
        <div class="mb-3 row">
          <label for="emailSignUp" class="form-label">Adresse email</label>
          <input type="email" name="emailSignUp" class="form-control" id="emailSignUp">
          </div>
        <div class="mb-3 row">
          <label for="passwordSignUp" class="form-label">Mot de passe</label>
          <input type="password" name="passwordSignUp" class="form-control" id="passwordSignUp">
        </div>
        <router-link to="/publications" type="submit" class="btn btn-primary">Valider</router-link>
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