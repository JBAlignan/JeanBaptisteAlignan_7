<template>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">{{  }}</p>
            <button v-on:click="deletePost">Supprimer</button>


        <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" v-on:click="commentsDisplay">
                        Commentaires
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
                comments: null,
            }
        },
        methods: {

        // Affichage des commentaires.
            commentsDisplay() {
                axios
                    .get('/comments', {
                    })
                    .then((response) => {
                        console.log(response.data)
                        this.comments= response.data
                    })
                    .catch((error) => {
                    console.log(error)
                    })
                
            },

        // Suppression d'une publication.
            deletePost() {
                axios
                    .delete('/posts/:id')
                    .then((response) => {
                        console.log(response)
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