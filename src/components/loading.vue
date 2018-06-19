<template>
  <transition name="fade">
    <div v-if="show" class="loading-background">
      <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "loading",
    computed: {
      show() {
        return this.$store.state.isLoading;
      }
    }
  };
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */{
    opacity: 0;
  }

  .loading-background {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #fff;
  }

  .spinner {
    width: 80px;
    height: 80px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -40px;
    margin-top: -40px;
  }

  .double-bounce1, .double-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    /*background-color: #67CF22;*/
    background: linear-gradient(92deg, #f35626, #feab3a);
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;

    -webkit-animation: bounce 2.0s infinite ease-in-out;
    animation: bounce 2.0s infinite ease-in-out;
  }

  .double-bounce2 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }

  @-webkit-keyframes bounce {
    0%{
      background-position: 0% 0%;
      -webkit-transform: scale(0.0)
    }
    50% {
      background-position: 50% 100%;
      -webkit-transform: scale(1.0)
    }
    100% {
      background-position: 100% 0%;
      -webkit-transform: scale(0.0)
    }
  }

  @keyframes bounce {
    0%, 100% {
      transform: scale(0.0);
      -webkit-transform: scale(0.0);
    }
    50% {
      transform: scale(1.0);
      -webkit-transform: scale(1.0);
    }
  }
</style>
