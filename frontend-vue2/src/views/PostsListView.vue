<script>

import axios from 'axios'

export default {
    name: 'PostsListView',
    data(){
        return {
            post: null,
        }
    },
    mounted(){
        axios
        // Importance de 'http'; sinon, Network Error dans la console.
        .get("http://localhost:3000/api/posts")
        .then((response) => {
            this.info = response.data;
            // Boucle sur la table d'objets récupérés.
            this.info.forEach((item) => {
            console.log(item.content)
            })
        })
        .catch((error) => {
            console.log(error)
        })
    },
}

</script>

<template>
        <div class="row container">
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

    </div>
</template>

<style lang="scss">


</style>