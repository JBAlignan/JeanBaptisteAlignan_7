<template>
  <div id="body" class="d-inline-flex p-2 justify-content-center">
    <div class="row container justify-content-center">
      <h2 class="col-md-9">
        Bonjour {{ userObject.firstName }} {{ userObject.lastName }}
      </h2>

      <!-- Formulaire de création d'une publication -->
      <div class="form-floating col-md-9">
        <textarea
          type="text"
          class="form-control"
          placeholder="&#201;crivez ici"
          id="newPost"
          style="height: 100px"
          v-model="content"
        ></textarea>
        <label for="newPost">&#201;crivez ici</label>

        <!-- Upload d'image -->
        <div class="input-group mt-2">
          <input
            type="file"
            @change="onFileSelected"
            class="form-control"
            id="postImg"
            aria-label="Upload"
          />
        </div>
        <p class="alert alert-danger emptyForm" role="alert" v-if="emptyForm">
          {{ message }}
        </p>

        <!-- Bouton de publication -->
        <button
          @click="postCreation"
          type="button"
          class="btn btn-primary mt-4"
        >
          Publier
        </button>
      </div>

      <!-- Liste des publications -->
      <div class="row">
        <div
          class="col-lg-6 gy-5 d-flex justify-content-center"
          v-for="post in posts"
          :key="post.id"
        >
          <div class="card col-12">
            <div class="card-body">
              <p>{{ post.Author.firstName }} {{ post.Author.lastName }}</p>
              <p
                class="card-text align-self-start px-2 bg-light text-dark rounded"
                v-if="post.content"
              >
                {{ post.content }}
              </p>
              <div class="text-center">
                <img
                  class="img-fluid col-sm-8 col-md-10 mb-4"
                  v-if="post.imageUrl"
                  v-bind:src="`http://localhost:3000/images/${post.imageUrl}`"
                  alt=""
                />
              </div>
              <router-link
                :to="{ name: 'OnePost', params: { id: post.id } }"
                class="btn bg-dark text-white mt-auto align-self-center"
                >Consulter</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Gestion de l'affichage des publications de l'API.
import axios from "axios";

export default {
  name: "PostsListView",
  data() {
    return {
      userObject: this.$store.state.auth,
      content: "",
      userId: "",
      posts: null,
      imageUrl: null,
      message: "",
      emptyForm: false,
    };
  },
  methods: {
    // Ajout d'un fichier.
    onFileSelected(event) {
      this.imageUrl = event.target.files[0];
    },

    // Création d'une publication.
    postCreation() {
      if (this.imageUrl !== null || this.content.length > 3) {
        // Upload d'un fichier.
        const fd = new FormData();
        if (this.imageUrl) {
          fd.append("image", this.imageUrl, this.imageUrl.name);
        }
        fd.append(
          "post",
          JSON.stringify({
            content: this.content,
            // Permet l'envoi de la valeur de userId à la BDD.
            userId: this.userObject.userId,
            imageUrl: this.imageUrl,
          })
        );
        // Envoi de la requête de publication.
        axios
          .post("/posts", fd, {
            headers: {
              Authorization: `Bearer ${this.userObject.token}`,
            },
          })
          .then(() => {
            location.reload();
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        (this.message = "Publication vide"), (this.emptyForm = true);
      }
    },
  },

  mounted() {
    // Affichage des publications de la BDD.
    axios
      .get("/posts", {})
      .then((response) => {
        this.posts = response.data;

        return this.posts;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="scss">
h2 {
  font-size: 1.5em;
  text-align: start;
}

.card-body {
  display: flex;
  flex-direction: column;
  background-color: #ffd7d7;
}

.card-text {
  border: 1px solid grey;
  margin: auto;
  margin-bottom: 1em;
  text-align: start;
}
</style>
