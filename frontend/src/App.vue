<!--JS-->
<script>
export default {
  data() {
    return {
      count: 1
    }
  },

  // `mounted` is a lifecycle hook which we will explain later
  mounted() {
    // `this` refers to the component instance.
    console.log(this.count) // => 1

    // data can be mutated as well
    this.count = 2
  }
}

</script>


<!--HTML-->
<template>
<div id="app">
		<!-- <nav>
			<a href="/"><img src="./assets/icon-above-font-resized.png"></a>
		</nav> -->
    Count is: {{ count }}
	</div>
</template>



<!--SCSS-->
<style lang="scss">
    nav {
      width: 100%;
      border: 1px solid black;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    } 
</style>