<template>
  <div class="small-list">
    <div class="small-list-time">{{formatTime(article.time, 'MMM DD')}}</div>
    <div class="small-list-title">{{article.title}}</div>
    <div class="small-list-icon">
      <svg-icon icon-name="icon-right" iconStyle="height:10px"/>
    </div>
  </div>
</template>
<script src="./small-list.js"/>
<style lang="sass">
  @import "./small-list.scss"
</style>
