<template>
    <header>
        <div class="container-fluid">
            <div class="row justify-content-end">
                <div class="col-lg-4">
                    <img src="../assets/groupomaniaLogoSm.png" class ="img-fluid" alt="Groupomania" />
                </div>
                <div class="col-lg-4 d-lg-flex align-items-end flex-column align-self-center">
                    <button type="button" class="btn btn-light" v-show="logout" >Déconnexion</button>
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
            async logout (){
                await this.$store.dispatch('LogOut')
                this.$router.push('/login')
            }
        }
    }
</script>

<style lang="scss">
header {
    border: 3px solid black;
    border-bottom: 1px solid black;
    margin-bottom: 1em;
    box-shadow: 3px 3px 5px black;
    }
    


</style>
