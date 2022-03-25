<script>
import HeaderComponent from "./views/HeaderComponent.vue";
import FooterComponent from './views/FooterComponent.vue'

export default {
 name: 'App',
 components: {
   HeaderComponent,
   FooterComponent
 }
}
</script>


<template>
  <div id="app">
    <HeaderComponent />
    <!--Importation du "corps" de la page-->
    <router-view/>
    <FooterComponent />
  </div>
</template>

<style lang="scss">
body {
  height: 100vh;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
