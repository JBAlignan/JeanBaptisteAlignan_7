<template>
    <header>
        <div class="container-fluid">
                
                <img src="../assets/groupomaniaLogoSm.png" class ="img-fluid" alt="Groupomania" />
                <div class='row'>
                    <button v-show="logout" >Déconnexion</button>
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
    border-bottom: 1px solid black;
    margin-bottom: 1em;
    box-shadow: 3px 3px 5px black;
    & div .container-fluid{
    display: flex;
    flex-direction: column;
    justify-content: center;
    }
}
</style>
