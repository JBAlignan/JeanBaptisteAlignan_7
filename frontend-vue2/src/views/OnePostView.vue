<script>
export default {
    name: 'OnePostComponent.vue'
}
</script>


<template>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>


        <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Commentaires
                    </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo numquam incidunt ea id eligendi tenetur quae ipsum, nihil minima tempora iste quod impedit nobis, est voluptatibus hic ratione, dolores placeat.</div>
                    <div class="accordion-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo numquam incidunt ea id eligendi tenetur quae ipsum, nihil minima tempora iste quod impedit nobis, est voluptatibus hic ratione, dolores placeat.</div>
                </div>
            </div>
        </div>


    </div>
</div>
</template>


<style lang="scss">

</style>