<template>
  <transition name="fade">
    <div class="loading-background">
      <img v-show="show" id="loading-background" alt="loading-background" src=""/>
    </div>

  </transition>
</template>

<script>
import RainyDay from "../../lib/rainyday.min.js";

export default {
  name: "singIn",
  data() {
    return {
      loading: false
    };
  },
  computed: {
    show() {
      return this.$store.state.isLoading;
    }
  },
  mounted() {
    // setTimeout(() => {
      const image = document.getElementById("loading-background");
      image.onload = function() {
        const engine = new RainyDay({
          image: this,
          enableSizeChange: false
        });
        engine.rain([[1, 2, 8000]]);
        engine.rain([[3, 3, 0.88], [5, 5, 0.9], [6, 2, 1]], 100);

        this.loading = true;
      };
      image.crossOrigin = "anonymous";
      image.src = "http://i.imgur.com/N7ETzFO.jpg";
    // }, 0);
  }
};
</script>

<style scoped>
.loading-background{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
