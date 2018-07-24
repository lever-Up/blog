<template>
  <div class="item-card">
    <div class="item-img position-relative" :style="{backgroundImage: `url(${data.img})`}">
      <button class="read-more position-mid" @click.stop="onclick">READ MORE</button>
    </div>
    <div class="text-content">
      <section>
        <h2 class="title">{{data.title}}</h2>
        <p class="desc">{{data.desc}}</p>
        <span class="time">{{formatTime(data.createTime)}}</span>
      </section>
    </div>
    <div class="right-bar">
      <div class="flex-column-center">
        <svg-icon icon-style="fill:#d2335c" icon-name="icon-xin-copy" iconStyle="height:15px"/>
        <span style="margin-right: 10px">{{data.follow}}</span>
      </div>
      <div class="flex-column-center">
        <svg-icon icon-style="fill:#fff" icon-name="icon-liuyan-copy" iconStyle="height:18px"/>
        <span style="margin-right: 10px">{{data.talks}}</span>
      </div>
    </div>
  </div>
</template>
<script src="./itemCard.js"/>
<style lang="sass">
  @import "./itemCard.scss"
</style>
