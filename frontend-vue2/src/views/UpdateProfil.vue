<script>

export default {
    name: 'UpdateProfil'
}

</script>

    <template>

        <form method="PUT" action="" class="col-10 col-lg-5 gy-4">
        <fieldset class="rounded py-4 px-4">
            <legend>Changement de vos données</legend>
            <div class="mb-3 row">
                <label for="firstNameSignUp" class="form-label">Prénom</label>
                <input type="text" name="firstName" class="form-control" id="firstName">
            </div>
            <div class="mb-3 row">
                <label for="lastNameSignUp" class="form-label">Nom</label>
                <input type="text" name="lastName" class="form-control" id="lastName">
            </div>
            <div class="mb-3 row">
                <label for="emailSignUp" class="form-label">Adresse email</label>
                <input type="email" name="emailSignUp" class="form-control" id="emailSignUp">
            </div>
            <div class="mb-3 row">
                <label for="passwordSignUp" class="form-label">Mot de passe</label>
                <input type="password" name="passwordSignUp" class="form-control" id="passwordSignUp">
            </div>
            <!-- <router-link to="/publications" type="submit" class="btn btn-primary">Valider</router-link> -->
            <ButtonComponent to='/publications' type="submit" class="btn btn-primary" text="Valider" />
            
        </fieldset>
        </form>

    </template>

<style lang="scss">

</style>
