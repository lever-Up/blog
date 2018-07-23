<template>
  <div class="pagination-card" :class="side">
    <!--左侧-->
    <template v-if="side === 'left'">
      <div class="text-content">
        <span class="time">{{formatTime(data.createTime)}}</span>
        <section>
          <h2 class="title">{{data.title}}</h2>
          <p class="desc">{{data.desc}}</p>
        </section>
      </div>
      <div class="img-box">
        <div class="insert-img" :style="{backgroundImage: `url(${data.img})`}">
          <div class="cover">
            <i class="cover-item" />
            <i class="triangle_border" />
            <i class="cover-item" />
          </div>
          <button class="read-more position-mid" @click.stop="onclick">READ MORE</button>
        </div>
      </div>
    </template>

    <!--右侧-->
    <template v-else>
      <div class="img-box">
        <div class="insert-img" :style="{backgroundImage: `url(${data.img})`}">
          <div class="cover">
            <div class="cover-item"></div>
            <div class="triangle_border"></div>
            <div class="cover-item"></div>
          </div>
          <button class="read-more position-mid" @click.stop="onclick">READ MORE</button>
        </div>
      </div>
      <div class="text-content">
        <span class="time">{{formatTime(data.createTime)}}</span>
        <section>
          <h2 class="title">{{data.title}}</h2>
          <p class="desc">{{data.desc}}</p>
        </section>
      </div>
    </template>
  </div>
</template>
<script src="./paginationCard.js"></script>
<style lang="scss">
  @import "./paginationCard.scss";
</style>
