<template>
    <header>
        <div class="container-fluid">
            <div class="row justify-content-end">
                <div class="col-lg-4">
                    <h1>
                        <router-link to="/" id="logo" alt="Accueil Groupomania"><img src="../assets/groupomaniaLogoSm.png" class ="img-fluid" alt="Groupomania" />
                        </router-link>
                    </h1>
                </div>
                <div class="col-lg-4 d-lg-flex align-items-end flex-column align-self-center">
                    <button type="button" class="btn btn-light" v-on:click="logout">Déconnexion</button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>

    export default {
        name: 'HeaderView',

    //    data() {
    //     return {
    //     userId: localStorage.getItem('UserData'),
    //     // logoutButton: false
        
    //     }
    //    },

    computed : {
      isLoggedIn : function(){ return this.$store.getters.isAuthenticated}
    },

        methods: {
            async logout (){
        await this.$store.dispatch('LogOut')
        this.$router.push('/')
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
