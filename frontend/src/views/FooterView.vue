<script>
export default {
  name: "FooterView",
};
</script>

<template>
  <footer class="navbar mt-3">
    <figure>
      <img
        src="../assets/groupomaniaFooter.webp"
        alt="Pied-de-page logo Groupomania"
      />
    </figure>
  </footer>
</template>

<style lang="scss">
footer {
  background-color: #4e5166;
  & figure {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
</style>
