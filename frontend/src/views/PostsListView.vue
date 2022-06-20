<template>

    <div id="body" class="d-inline-flex p-2 justify-content-center">
        <div class="row container">
                    <router-link :to="{ name: 'Profil', params: { id: this.$store.state.userId } }"  type="button" class="btn btn-success" >Profil</router-link>

            <h1>Bonjour {{ $store.state.firstName }} {{ $store.state.lastName }}</h1>

    <!-- Formulaire de création d'une publication -->
            <div class="form-floating">
                <textarea class="form-control" placeholder="Ecrivez ici" id="newPost" style="height: 100px" v-model="content"></textarea>
                <label for="newPost"></label>

                <!-- Upload d'image -->
                <div class="input-group">
                    <input type="file" @change="onFileSelected" class="form-control" id="postImg" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
                </div>

             <!-- Bouton de publication -->   
            <button @click="postCreation" type="button" class="btn btn-primary">Publier</button>
            </div>


    <!-- Liste des publications -->
                <div class="row">
                    <div class="col-lg-6 gy-5"  v-for='post in posts' :key='post.id'>
                        <div class="card" >
                            <div class="card-body ">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">{{ post.content }}</p>
                                <img class="img-fluid" v-if="post.imageUrl" v-bind:src="`http://localhost:3000/images/${post.imageUrl}`"/>
                                <router-link :to="{ name:'OnePost', params: { id: post.id } }" class="btn btn-primary">Consulter</router-link>
                            </div>
                        </div>
                    </div>
                </div>







            <!-- <div class=" g-4 d-flex" id="card-post">
                <div class="card row gx-5 d-flex flex-row justify-content-start">
                    <div class="card-body col-md-5 gy-2 mx-2" v-for='post in posts' :key='post.id'> -->
                        <!-- <h5 class="card-title">Titre Poste 1</h5> -->
                        <!-- <p class="card-text">{{ post.content }}</p> -->
                        <!-- Affichage de l'image -->
                        <!-- <img class="img-fluid" v-if="post.imageUrl" v-bind:src="`http://localhost:3000/images/${post.imageUrl}`"/>
                        <router-link :to="{ name:'OnePost', params: { id: post.id } }" class="btn btn-primary">Consulter</router-link>
                    </div>
                </div>
            </div> -->
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
                    // console.log(this.posts[2].imageUrl)
                    return this.posts
                })
                .catch((error) => {
                    console.log(error)
                })
    }
}


</script>

<style lang="scss">

#CardPublication{
    justify-content: space-between;
}

    .card-body{
        border: 2px solid purple;
    }

</style>