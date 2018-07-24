<template>
  <div class="tags-card">
    <div class="card-header">{{title}}</div>
    <div class="tags-list">
      <div class="tags-item" v-for="tag in tags" :key="tag.id" :style="{backgroundColor:randomColor()}">{{tag.name}}</div>
    </div>
  </div>
</template>
<script src="./tagsCard.js"/>
<style lang="sass">
  @import "./tagsCard.scss"
</style>
