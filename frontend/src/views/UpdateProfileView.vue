
    <template>

        <main class="row justify-content-center container-fluid">
            <form method="PUT" action="" class="col-10 col-lg-5 gy-4">
                <fieldset class="rounded py-4 px-4">
                    <legend>Changement de vos données</legend>
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

 <script>

import axios from 'axios'



  export default {
    name: 'UpdateProfil',
        data(){
            return {
                email: '',
                password:''
            }
         },

         mounted() {
            axios
                .get(`/users/${this.$routes.params.id}`, {
                })
         },

         methods: {
            reset() {
                axios
                    .get()
            }
         }
   }
</script>

<style lang="scss">

</style>
