<script>

export default{
    name: 'ButtonComponent',
    props: ['link', 'text']
}

</script>


<template>
    <router-link to="link">{{ text }}</router-link>
</template>

<style lang="scss">


</style>