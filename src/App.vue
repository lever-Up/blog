<template>
  <div id="app">
    <router-view/>
    <Loading></Loading>
  </div>
</template>

<script>
  import {Loading} from './components'

  export default {
    name: 'App',
    components: {
      Loading
    }
  }
</script>

<style>
  @import "./scss/index.scss";

  @font-face {
    font-family: "GKAI00MP";
    src: url("./scss/fonts/GKAI00MP.woff2") format("woff2"),
    url("./scss/fonts/GKAI00MP.woff") format("woff"),
    url("./scss/fonts/GKAI00MP.ttf") format("truetype"),
    url("./scss/fonts/GKAI00MP.eot") format("embedded-opentype"),
    url("./scss/fonts/GKAI00MP.svg") format("svg");
  }

  #app {
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    font-family: GKAI00MP;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

</style>
