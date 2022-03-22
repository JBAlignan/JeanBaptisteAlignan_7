<script>
export default {
    name: 'PostsListComponent'
}

// import Vue from 'vue';
// import axios from 'axios';

// new Vue({
//     el: '#app',
//     data () {
//         return {
//             info: null
//         }
//     },
//     created () {
//         axios
//         .get('localhost:3000/api/posts')
//         .then(response => {
//             console.log(response)
//         })
//         .catch( error => {
//             console.log(error)
//         })
        
        
//         }
//     })


</script>

<template>
        <div class="row container">
        <h1>Bonjour</h1>

        <div class="col-sm-6 g-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Titre Poste 1</h5>
                    <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium provident, omnis, vitae porro eius veritatis deserunt odio quam beatae ex non incidunt et. Totam nisi accusantium quam nihil, ut corporis?</p>
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

    </div>
</template>

<style lang="scss">


</style>