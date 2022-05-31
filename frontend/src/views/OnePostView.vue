<template>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">{{ content }}</p>
            <div class="form-floating">
                <textarea class="form-control" placeholder="Ecrivez ici" id="updatePost" style="height: 100px" v-model="content"></textarea>
                <label for="updatePost"></label>
                <button @click="updatePost" type="button" class="btn btn-primary">Modifier</button>
            </div>
            <button v-on:click="deletePost">Supprimer</button>


        <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                    <!--Création de commentaire--> 
                    <label for="postComment" class="form-label">Laisser un commentaire</label>
                    <input type="text" name="postComment" class="form-control" id="postComment" v-model="comment">
                    <button  @click="commentCreation" type="button" class="btn btn-primary">Commenter</button>
                    <!--Liste des commentaires--> 
                    <button @click="commentsDisplay" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Liste des commentaires
                    </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <p class="accordion-body" v-for='comment in comments' :key='comment.id'>{{ comment.content }}</p>
                </div>
            </div>
        </div>


    </div>
</div>

</template>

<script>

import axios from 'axios'

    export default {
        name: 'OnePostView',
        data(){
            return {
                userId: '',
                postId: '',
                content: '',
                comment: '',
                comments: []
            }
        },

        mounted() {
                axios
                    .get(`/posts/${this.$route.params.id}`, {
                    })
                    .then((response) => {
                        this.content = response.data.post.content
                    })
                    .catch((error) => {
                        console.log(error)
                    })
        },

        methods: {

        // Modification d'une publication.
            updatePost(){
                axios
                    .put(`/posts/${this.$route.params.id}`, {
                        content: this.content,
                    }, {
                        headers: {
                        'Authorization' : `Bearer ${this.$store.state.userToken}`
                        }
                    })
                    .then((response) => {
                        console.log(response)
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            },

        // Suppression d'une publication.
            deletePost() {
                axios
                    .delete(`/posts/${this.$route.params.id}`, {
                        headers: {
                        'Authorization' : `Bearer ${this.$store.state.userToken}`
                        }
                    })
                    .then((response) => {
                        console.log(response)
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            },

        // Publication d'un commentaire.
            commentCreation(){
                axios
                    .post('/comments', {
                        userId: this.$store.state.userId,
                        postId: this.$store.state.postId,
                        comment: this.comment,
                        }, {
                        headers: {
                        'Authorization' : `Bearer ${this.$store.state.userToken}`
                        }
                    })
                    .then((response) => {
                        console.log(response)
                        // console.log(postId)
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            },

        // Affichage des commentaires.
            commentsDisplay(){
                axios
                    .get('comments', {
                    })
                    .then((response) => {
                        // this.$store.commit('POST_BY_ID', `${this.$route.params.id}`)
                        // this.$store.commit('COMMENT_BY_ID', response.data.content)
                        this.comments = response.data
                        // this.comments.forEach(element => element.content)

                        return this.comment
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        },
    }
    
</script>


<style lang="scss">

</style>