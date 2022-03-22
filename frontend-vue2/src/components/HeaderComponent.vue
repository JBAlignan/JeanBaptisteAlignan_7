<script>
export default {
    name: 'HeaderComponent'
}
</script>

<template>
    <header>
        <div class="container-fluid">
                <img src="../assets/groupomaniaLogoSm.png" class ="img-fluid" alt="Groupomania" />
                <div class='row'>
                <router-link to="/">Déconnexion</router-link>
                </div>
        </div>
    </header>
</template>

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
