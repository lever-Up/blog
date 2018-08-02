<template>
  <div id="app">
    <header-navigate />
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

<style lang="sass">
  @import "./scss/common.scss"
</style>
