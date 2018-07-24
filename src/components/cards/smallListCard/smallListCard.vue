<template>
  <div class="small-list-card">
    <div class="card-header">{{title}}</div>
    <div class="small-list-card-content">
      <div>
        <small-list v-for="article in list" :key="article.id" :article="article"/>
      </div>
      <button class="grid-card-btn">FOLLOW</button>
    </div>
  </div>
</template>
<script src="./smallListCard.js"/>
<style lang="sass">
  @import "./smallListCard.scss"
</style>
