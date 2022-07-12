<template>
    <header>
        <div class="container-fluid">
            <div class="row justify-content-end">
                <div class="col-lg-4">
                    <h1>
                        <router-link to="/publications" id="logo" alt="Accueil Groupomania"><img src="../assets/groupomaniaLogoSm.png" class ="img-fluid" alt="Groupomania" />
                        </router-link>
                    </h1>
                </div>
                <div class="col-lg-4 d-lg-flex align-items-end flex-column align-self-center">
                    <button type="button" class="btn btn-light" v-on:click="logout" v-if="localStorage == null">Déconnexion</button>
                    <router-link to="/profil" type="button" class=" btn bg-info text-white">Profil</router-link>

                </div>
            </div>
        </div>
    </header>
</template>

<script>

    // import router from '../router/index'


    export default {
        name: 'HeaderView',

       data() {
        return {
        localStorage: JSON.parse(localStorage.getItem('UserData'))
        }
       },

        methods: {
            logout (){

                console.log("deconnection")
                localStorage.clear()
                this.$router.push('/')
                this.$forceUpdate()
            },

            // changeLogoLink() {
            //     this.$emit('custom-event-name', { message: 'Mon message personnalisé' })
            // },

            getCurrentUser () {
                return JSON.parse(localStorage.getItem('UserId'))
            }
        }
    }
</script>

<style lang="scss">

header {
    margin-bottom: 1em;
    box-shadow: 3px 3px 5px black;
    background-color: white;
    }

.col-lg-4{
    justify-content: center;;
}

</style>
