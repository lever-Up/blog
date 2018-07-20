<template>
  <div class="carousel-card">
    <el-carousel :autoplay="false">
      <el-carousel-item v-for="item in datas" :key="item.id">
        <div class="carousel-img borderTL borderBL" :style="{backgroundImage: `url(${item.img})`}" :title="item.title" :alt="item.title">
          <div class="text-content">
            <span class="time">{{formatTime(item.createTime)}}</span>
            <section>
              <h2 class="title ellipsis_1">{{item.title}}</h2>
              <p class="desc ellipsis_3">{{item.desc}}</p>
              <button class="read-more" @click="onclick">READ MORE</button>
            </section>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script src="./carouselCard.js"/>
<style lang="sass">
  @import "./carouselCard.scss"
</style>
