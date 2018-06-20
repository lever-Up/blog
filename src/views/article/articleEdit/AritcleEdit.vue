<template>
  <div class="article-Edit">
    <h1>{{ msg }}</h1>
    <div class="article-Edit_mavon">
      <mavon-editor :style="containStyle" v-model="content" placeholder="请开始你的表演!" :toolbars="toolbars"/>
    </div>

  </div>
</template>

<script src="./articleEdit.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '@scss/views/articleEdit.scss';
  @import 'mavon-editor/dist/css/index.css';
</style>
