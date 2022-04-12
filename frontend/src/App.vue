<script>
import HeaderView from "./views/HeaderView.vue";
import FooterView from './views/FooterView.vue';


export default {
 name: 'App',
 components: {
   HeaderView,
   FooterView
 }
}
</script>


<template>
  <div id="app">
    <HeaderView />
    <!--Importation du "corps" de la page-->
    <router-view/>
    <FooterView />
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
