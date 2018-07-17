<template>
  <div class="carousel-card">
    <el-carousel :autoplay="false">
      <el-carousel-item v-for="item in datas" :key="item.id">
        <div class="carousel-img borderTL borderBL" :style="{backgroundImage: `url(${item.img})`}">
          <div class="text-content">
            <div class="time">{{formatTime(item.createTime)}}</div>
            <div class="title">{{item.title}}</div>
            <div class="desc">{{item.desc}}</div>
            <button class="read-more" @click="onclick">READ MORE</button>
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
