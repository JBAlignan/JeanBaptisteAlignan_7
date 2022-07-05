<template>

    <div class="card">
        <div class="card-body">
            <p class="card-text">{{ content }}</p>
                <div class="text-center">
                    <img class="img-fluid col-sm-8 col-md-10 mb-4" v-if="this.imageUrl" v-bind:src="`http://localhost:3000/images/${this.imageUrl}`"/>
                </div>
            <div class="form-floating">
                <textarea class="form-control" placeholder="Ecrivez ici" id="updatePost" style="height: 100px" v-model="content" v-if="userId === postUserId"></textarea>
                <label for="updatePost"></label>

                    <div class="position-relative" id="likeButton">
                        <!-- Bouton Like -->
                        <button @click="toLike" type="button" class="btn btn-info"><span class="badge text-bg-secondary">{{ likesCount }}</span>Like</button>

                        <!-- Bouton Dislike -->
                        <button @click="toDislike" type="button" class="btn btn-warning"><span class="badge">{{ dislikesCount }}</span>Dislike</button>
                    </div>

            </div>

            <!-- Boutons de suppression et de modification-->
            <div class="d-flex justify-content-around">
                <button @click="updatePost" type="button" class="btn btn-primary" v-if="userId === postUserId">Modifier</button>
                <button @click="deletePost" type="button" class="btn btn-danger" v-if="userId === postUserId">Supprimer</button>
            </div>


        <div class="accordion accordion-flush mt-4" id="accordionFlush">
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                    <!--Création de commentaire--> 
                    <label for="postComment" class="form-label" id="letCommentary">Laisser un commentaire</label>
                    <input type="text" name="postComment" class="form-control mb-2" id="postComment" v-model="comment">
                    <!-- Bouton de publication d'un commentaire -->
                    

                    <button  @click="commentCreation" type="button" class="btn btn-primary">Commenter</button>
                    <!--Liste des commentaires--> 
                    <button @click="commentsDisplay" class="accordion-button collapsed mt-1" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Liste des commentaires
                    </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <p class="accordion-body" v-for='comment in comments' :key='comment.content'>{{ comment.content }}</p>
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
                userObject: JSON.parse(localStorage.getItem("userData")),
                userId: '',
                postUserId: '',
                postId: '',
                content: '',
                imageUrl: '',
                comment: '',
                comments: [],
                likesCount: 0,
                dislikesCount: 0
            }
        },

        mounted() {
            this.userId = this.userObject.userId
                axios
                    .get(`/posts/${this.$route.params.id}`, {
                    })
                    .then((response) => {
                        console.log(response.data)
                        this.content = response.data.post.content
                        this.imageUrl = response.data.post.imageUrl
                        this.postUserId = response.data.post.userId
                        console.log(this.userId)
                        console.log(this.postUserId)

                    })
                    .catch((error) => {
                        console.log(error)
                    })
        },

        methods: {

        // Modification d'une publication.
            updatePost(){
                this.userId = this.userObject.userId
                if (this.postUserId == this.userId){
                    axios
                    .put(`/posts/${this.$route.params.id}`, {
                        content: this.content,
                    }, {
                        headers: {
                        'Authorization' : `Bearer ${this.userObject.token}`
                        }
                    })
                    .then((response) => {
                        console.log(response)
                        this.$router.back()
                    })
                    .catch((error) => {
                        console.log(error)
                    })
                }
                    
            },

        // Suppression d'une publication.
            deletePost() {
                console.log(this.postUserId)
                console.log(this.userId)
                if (this.postUserId == this.userId){
                    axios
                        .delete(`/posts/${this.$route.params.id}`
                         ,{
                            headers: {
                            'Authorization' : `Bearer ${this.userObject.token}`
                            }
                        }
                        )
                        .then((response) => {
                            console.log(response)
                            this.$router.back()
                        })
                        .catch((error) => {
                            console.log(error)
                        })
                }
                
            },

        // Ajout d'un like.
            toLike(){
                axios
                    .get(`/posts/like/${this.$route.params.id}`, {
                        headers : {
                            'Authorization' : `Bearer ${this.userObject.token}`
                    },

                    }) 
                    .then((response) => {
                        console.log(response)
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            },

        // Ajout d'un dislike
            toDislike(){
                axios
                    .post(`/posts/dislike/${this.$route.params.id}`, {
                        userId: this.userObject.userId,
                        postId: this.$route.params.id,
                        dislikesCount: this.dislikesCount +=1
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
                        userId: this.userObject.userId,
                        postId: this.postId,
                        comment: this.comment,
                        }, {
                        headers: {
                        'Authorization' : `Bearer ${this.userObject.token}`
                        }
                    })
                    .then((response) => {
                        console.log(response)
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            },

        // Affichage des commentaires.
            commentsDisplay(){
                axios
                    .get(`comments/${this.$route.params.id}`, {
                    })
                    .then((response) => {

                        this.comments = response.data

                        console.log(this.comments)

                    
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        },
    }
    
</script>


<style lang="scss">

div.card{
    align-self: center;
    width: 20em;
    background-color: #FFD7D7;
}

.card-text{
    background-color: white;
    text-align: left;
    padding: 1em 1em 1em 1em;
    border: 1px solid rgb(173, 171, 171);
    border-radius: 0.15em; 
}

#likeButton{
    bottom: 1em;
    left: 3.5em
}

.badge{
    color: black;
}

#flush-headingOne{
    background-color: #FFD7D7;

}

#letCommentary{
        font-size: 0.6em;
}



</style>