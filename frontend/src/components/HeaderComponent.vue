<template>
    <header>
        <div class="container-fluid">
                <img src="../assets/groupomaniaLogoSm.png" class ="img-fluid" alt="Groupomania" />
        </div>
    </header>
</template>

<script>

export default {
    name: 'HeaderComponent'
}

</script>

<style lang="scss">

header {
    border-bottom: 1px solid black;
    margin-bottom: 1em;
    box-shadow: 3px 3px 5px black;
    & div{
    display: flex;
    justify-content: center;
    }
}

</style>
