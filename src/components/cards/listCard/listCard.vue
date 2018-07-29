<template>
  <div class="list-card">
    <div class="card-header">{{title}}</div>
    <div class="list">
      <div v-for="article in list" :key="article.id">
        <article-list :article="article" />
      </div>
    </div>
    <div class="list-card-footer">
      <button class="grid-card-btn">
        <svg-icon icon-name="icon-fresh" iconStyle="height: 13px;width: 13px;"/>
        Refresh
      </button>
    </div>
  </div>
</template>
<script src="./listCard.js"/>
<style lang="sass">
  @import "./listCard.scss"
</style>
