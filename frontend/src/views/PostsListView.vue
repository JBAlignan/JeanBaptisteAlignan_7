<template>

    <div id="body" class="d-inline-flex p-2 justify-content-center">
        <div class="row container justify-content-center">
            <h1 class="col-md-9">Bonjour {{ $store.state.firstName }} {{ $store.state.lastName }}</h1>

    <!-- Formulaire de création d'une publication -->
            <div class="form-floating col-md-9">
                <textarea class="form-control" placeholder="Ecrivez ici" id="newPost" style="height: 100px" v-model="content"></textarea>
                <label for="newPost"></label>

                <!-- Upload d'image -->
                <div class="input-group mt-2">
                    <input type="file" @change="onFileSelected" class="form-control" id="postImg" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
                </div>

             <!-- Bouton de publication -->   
            <button @click="postCreation" type="button" class="btn btn-primary mt-4">Publier</button>
            </div>

    <!-- Liste des publications -->
                <div class="row">
                    <div class="col-lg-6 gy-5 d-flex justify-content-center"  v-for='post in posts' :key='post.id'>
                        <div class="card col-12" >
                            <div class="card-body">
                                <p class="card-text align-self-start px-2" style="border: 1px solid black">{{ post.content }}</p>
                                    <div class="text-center">
                                        <img class="img-fluid col-sm-8 col-md-10 mb-4" v-if="post.imageUrl" v-bind:src="`http://localhost:3000/images/${post.imageUrl}`"/>
                                    </div>
                                <router-link :to="{ name:'OnePost', params: { id: post.id } }" class="btn bg-dark text-white mt-auto align-self-center">Consulter</router-link>
                            </div>
                        </div>
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
            imageUrl: null,
        }
    },
    methods:{

            // Ajout d'un fichier.
            onFileSelected(event) {
                this.imageUrl = event.target.files[0]
            },

            // Création d'une publication.
            postCreation(){

            // Upload d'un fichier.
                const fd = new FormData();
                fd.append('image', this.imageUrl, this.imageUrl.name)
                fd.append('post', JSON.stringify({

                    content: this.content,
                    // Permet l'envoi de la valeur de userId à la BDD.
                    userId: this.$store.state.userId,
                    imageUrl: this.imageUrl,
                }))
                axios.post('/posts', fd, {
                    headers : {
                    'Authorization' : `Bearer ${this.$store.state.userToken}`
                    },
                })
                    .then (response => {
                        console.log(response)
                    })
                    .catch((error) => {
                        console.log(error)
                })
            },

    },
    mounted() {
            // Affichage des publications de la BDD.
                axios
                .get("/posts", {
                })
                .then((response) => {
                    console.log(response.data)
                    this.posts = response.data

                    return this.posts
                })
                .catch((error) => {
                    console.log(error)
                })
    }
}


</script>

<style lang="scss">

    h1{
        font-size: 1.5em;
        text-align: start;
    }

    .card-body{
        display: flex;
        flex-direction: column;
        background-color: #FFD7D7;
    }

</style>