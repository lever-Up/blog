<template>
  <div id="app">
    <test-title />
    <img src="../../assets/logo.png">
    <elRow :gutter="20" rowStyle='background:red'>
      <div>111</div>
    </elRow>
  </div>
</template>

<script>
  import UI from '../../elementUI'

  const testTitle = {
    template: '<H2>Test</H2>'
  }
  export default {
    name: 'App',
    components: {testTitle, ...UI}
  }
</script>
