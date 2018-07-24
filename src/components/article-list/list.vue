<template>
  <div class="article-list">
    <div class="article-img" :style="{backgroundImage: `url(${article.img})`}">
      <div class="article-hot"></div>
    </div>
    <div class="text-content">
      <section>
        <h2 class="title">{{article.title}}</h2>
        <p class="desc">{{article.desc}}</p>
      </section>
      <div class="flex-row-center article-footer">
        <svg-icon icon-style="fill:#fff" icon-name="icon-xin-copy-copy" iconStyle="height:15px"/>
        <span style="margin-right: 10px">{{article.follow}}</span>
        <svg-icon icon-style="fill:#fff" icon-name="icon-liuyan-copy-copy" iconStyle="height:18px"/>
        <span style="margin-right: 10px">{{article.talks}}</span>
        <span class="time">{{formatTime(article.time)}}</span>
      </div>
    </div>
  </div>
</template>
<script src="./list.js"/>
<style lang="sass">
  @import "./list.scss"
</style>
