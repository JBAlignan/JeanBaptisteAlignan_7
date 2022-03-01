
<script>

// import HeaderComponent from "./components/HeaderComponent.vue";
// import FooterComponent from "./components/FooterComponent.vue";
// import FormComponent from "./components/FormComponent.vue";
// import PostsComponent from "./components/PostsComponent.vue"
import PostPublication from "./components/PostPublication.vue"

export default {
  name: 'App',
  components: {
    // HeaderComponent,
    // FooterComponent
    // FormComponent,
    // PostsComponent
    PostPublication
  }
}
</script>

<template>
  <PostPublication />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

    display: flex;

    justify-content: center;
}
</style>
