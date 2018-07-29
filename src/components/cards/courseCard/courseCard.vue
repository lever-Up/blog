<template>
  <div class="course-card">
    <div class="wall-img" :style="{backgroundImage: `url(${data.img})`}" :title="data.title" :alt="data.title" />
    <div class="text-content">
      <section>
        <h2 class="title ellipsis_1">{{data.title}}</h2>
        <p class="desc ellipsis_3">{{data.desc}}</p>
      </section>
    </div>
  </div>
</template>
<script src="./courseCard.js"/>
<style lang="sass">
  @import "./courseCard.scss"
</style>
