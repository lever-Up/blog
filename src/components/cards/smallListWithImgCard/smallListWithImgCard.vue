<template>
  <div class="small-list-with-img-card">
    <div class="card-header">{{title}}</div>
    <div class="small-list-with-img-card-content">
      <div class="list">
        <article-list v-for="article in list" :key="article.id" :article="article"/>
      </div>
      <button class="grid-card-btn">Show More</button>
    </div>
  </div>
</template>
<script src="./smallListWithImgCard.js"/>
<style lang="sass">
  @import "./smallListWithImgCard.scss"
</style>
