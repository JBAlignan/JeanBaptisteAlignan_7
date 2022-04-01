<script>

// Gestion de la récupérations des données dans le store.
// import { mapGetters } from 'vuex'

// Gestion de l'affichage des publications de l'API.
// import axios from 'axios'
export default {
    name: 'PostsListView',
    data(){
        return {
            msg: 'We are learning vuex !!'
        }
    },
    computed: {
        posts() {
            return this.$store.state.posts
        }
    },
    mounted() {
        this.$store.dispatch("getPosts")
    }
}

</script>

<template>

<div id="app">
    <h1>{{ msg }}</h1>
    <div>
      <ul v-for='post in posts' :key='post.id'>
        <li>Post content: {{post.content}}</li>
      </ul>
    </div>
  </div>
        <!-- <div class="row container">
        <h1>Bonjour</h1>

        <div class="col-sm-6 g-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Titre Poste 1</h5>
                    <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, dicta? Quia nostrum, amet iste velit reiciendis quae dicta vero quos asperiores et consequuntur odit ea mollitia corrupti nisi at debitis.</p>
                    <router-link to="/publications/:id" class="btn btn-primary">Consulter</router-link>
                </div>
            </div>
        </div>

        <div class="col-sm-6 g-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Titre Poste 2</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorum doloremque suscipit illum libero distinctio. Vel eligendi non, minus placeat earum sed quaerat dignissimos. A harum laboriosam ipsa veritatis numquam!</p>
                    <router-link to="/publications/:id" class="btn btn-primary">Consulter</router-link>
                </div>
            </div>
        </div>

    </div> -->
</template>

<style lang="scss">


</style>