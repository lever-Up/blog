<template>
  <div class="blackboard-card">
    <div class="wall-img position-relative" :style="{backgroundImage: `url(${data.img})`}" :title="data.title" :alt="data.title">
      <div class="img-footer">
        <div class="flex-row-mid">
          <svg-icon icon-style="fill:#fff" icon-name="icon-article" />
          <span>{{formatTime(data.time)}}</span>
        </div>
        <div class="flex-row-mid">
          <svg-icon icon-style="fill:#fff" icon-name="icon-xin" iconStyle="height:15px"/>
          <span style="margin-right: 10px">{{data.follow}}</span>
          <svg-icon icon-style="fill:#fff" icon-name="icon-liuyan" iconStyle="height:18px"/>
          <span>{{data.talks}}</span>
        </div>
      </div>
    </div>
    <div class="text-content">
      <section>
        <h2 class="title ellipsis_1">{{data.title}}</h2>
        <p class="desc ellipsis_3">{{data.desc}}</p>
      </section>
    </div>
  </div>
</template>
<script src="./blackboardCard.js"/>
<style lang="sass">
  @import "./blackboardCard.scss"
</style>
