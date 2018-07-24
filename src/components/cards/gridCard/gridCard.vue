<template>
  <div class="grid-card">
    <div class="card-header">{{title}}</div>
    <div class="grid-content">
      <el-row class="grid-img-box">
        <el-col :span="8" v-for="item in list" :key="item.id">
          <div class="grid-img" :style="{backgroundImage: `url(${item.img})`}"></div>
        </el-col>
      </el-row>
      <button class="grid-card-btn">FOLLOW</button>
    </div>
  </div>
</template>
<script src="./gridCard.js"/>
<style lang="sass">
  @import "./gridCard.scss"
</style>
