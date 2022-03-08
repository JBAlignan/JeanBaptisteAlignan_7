<template>
    <div class="row container">
        <h1>Bonjour {{ User }}</h1>
        <div class="col-sm-6 g-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Titre Poste 1</h5>
                    <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium provident, omnis, vitae porro eius veritatis deserunt odio quam beatae ex non incidunt et. Totam nisi accusantium quam nihil, ut corporis?</p>
                    <a href="#" class="btn btn-primary">Consulter</a>
                </div>
            </div>
        </div>

        <div class="col-sm-6 g-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Titre Poste 2</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorum doloremque suscipit illum libero distinctio. Vel eligendi non, minus placeat earum sed quaerat dignissimos. A harum laboriosam ipsa veritatis numquam!</p>
                    <a href="#" class="btn btn-primary">Consulter</a>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

export default {
    name: 'PostsComponent',
    data(){
        return {
            
        }
    }
}

</script>

<style lang="scss">




</style>
