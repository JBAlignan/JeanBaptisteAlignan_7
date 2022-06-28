<template>
    <header>
        <div class="container-fluid">
            <div class="row justify-content-end">
                <div class="col-lg-4">
                    
                    <a href="http://localhost:8080/#/publications" id="logo" alt="Groupomania"><img src="../assets/groupomaniaLogoSm.png" class ="img-fluid" alt="Groupomania" />
                    </a>
                </div>
                <div class="col-lg-4 d-lg-flex align-items-end flex-column align-self-center">
                    <button type="button" class="btn btn-light" v-on:click="logout" >Déconnexion</button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>

    export default {
        name: 'HeaderView',
        computed: {
            isLoggedIn: function(){ return this.$store.getters.isAuthenticated}
        },
        methods: {
            logout (){
                console.log("deconnection")
                // await this.$store.dispatch('LogOut')
                // this.$router.push('/login')
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
