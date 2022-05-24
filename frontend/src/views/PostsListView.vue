<template>

        <div class="row container">
            <h1>Bonjour {{ $store.state.firstName }} {{ $store.state.lastName }}</h1>
            <!-- Création d'une publication -->
            <div class="form-floating">
                <textarea class="form-control" placeholder="Ecrivez ici" id="newPost" style="height: 100px" v-model="content"></textarea>
                <label for="newPost"></label>
                <!-- Upload d'image -->
                <div class="input-group">
                    <input type="file" class="form-control" id="postImg" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
                    <button class="btn btn-outline-secondary" type="button" id="postImg">Button</button>
                </div>
            <button @click="postCreation" type="button" class="btn btn-primary">Publier</button>
            </div>

            <!-- Bouton d'affichage des publications -->
            <button type="submit" v-on:click="postsDisplay">Test d'affichage des publications</button>

            <div class="col-sm-6 g-4" id="card-post">
                <div class="card">
                    <div class="card-body" v-for='post in posts' :key='post.id'>
                        <!-- <h5 class="card-title">Titre Poste 1</h5> -->
                        <p class="card-text">{{ post.content }}</p>
                        <router-link :to="{ name:'OnePost', params: { id: post.id } }" class="btn btn-primary">Consulter</router-link>
                    </div>
                </div>
            </div>
        </div>

</template>

<script>


// Gestion de l'affichage des publications de l'API.
import axios from 'axios'


export default {
    name: 'PostsListView',
    data(){

        return {
            content: '',
            userId: '',
            posts: null,
        }
    },
    methods:{
            // Création d'une publication.
            postCreation(){
                axios
                .post("/posts", {
                    content: this.content,
                    // Permet l'envoi de la valeur de userId à la BDD.
                    userId: this.$store.state.userId,
                }, { 
                    headers : {
                    'Authorization' : `Bearer ${this.$store.state.userToken}`
                    },
                })
                .then((response) => {
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error)
                })
            },

            // Affichage des publications de la BDD.
            postsDisplay(){
                axios
                .get("/posts", {
                })
                .then((response) => {
                    console.log(response)
                    
                    this.posts = response.data
                    return this.posts
                })
                .catch((error) => {
                    console.log(error)
                })
            },

    },
}


</script>

<style lang="scss">

    #card-post{
        border: 1px solid black;
    };

    .card-body{
        border: 2px solid purple;
    }

</style>