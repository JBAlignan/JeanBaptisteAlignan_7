<script>

// Gestion de la récupérations des données dans le store.
// import { mapGetters } from 'vuex'

// Gestion de l'affichage des publications de l'API.
// import axios from 'axios'
export default {
    name: 'PostsListView',
    data(){
        return {
            
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

        <div class="row container">
            <h1>Bonjour {{  }}</h1>

            <div class="col-sm-6 g-4" id="card-post">
                <div class="card">
                    <div class="card-body" v-for='post in posts' :key='post.id'>
                        <!-- <h5 class="card-title">Titre Poste 1</h5> -->
                        <p class="card-text">{{ post.content }}</p>
                        <router-link to="/publications/:id" class="btn btn-primary">Consulter</router-link>
                    </div>
                </div>
            </div>
        </div>

</template>

<style lang="scss">

#card-post{
    border: 1px solid black;
};

.card-body{
    border: 2px solid purple;
}

</style>