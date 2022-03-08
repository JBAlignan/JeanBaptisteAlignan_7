<template>
    <div class="container">
        <fieldset>
            <form class="row g-3">
                <div class="col-md-4">
                    <label for="validationServer01" class="form-label">Titre</label>
                    <input type="text" class="form-control" id="validationServer01" required />
                    <div class="valid-feedback">
                    Looks good!
                    </div>
                </div>
                <div class="mb-3">
                    <label for="PostText" class="form-label">Publication</label>
                    <textarea class="form-control" id="postText" rows="3" required></textarea>
                </div>
                <div class="col-12">
                    <button class="btn btn-primary" type="submit">Publier</button>
                </div>
            </form>
        </fieldset>
    </div>
</template>

<script>

</script>

<style lang="scss">

fieldset{
  background-color: rgb(245, 238, 238);
  padding: 1em;
}
</style>