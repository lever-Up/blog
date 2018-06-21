<template>
  <div class="home">
    <!--博文广告轮播-->
    <div class="banner-box">
      <div class="banner-card"></div>
      <div class="banner-insert">
        <div></div>
        <div></div>
      </div>
    </div>

    <!--分类主体-->
    <div class="content-box">
      <!--主体左侧-->
      <div class="content-left">
      </div>
      <!--主体右侧-->
      <div class="content-right">
      </div>
    </div>

    <!--主题博文 图文模式-->
    <div class="major-blog blog-img_card"></div>

    <!--主题博文 文章模式-->
    <div class="major-blog blog-txt_card"></div>

    <!--博客达人-->
    <div class="blog-talents"></div>

    <!--统计数据-->
    <div class="blog-count"></div>
  </div>
</template>

<script src="./home.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../../scss/views/home.scss";
</style>
