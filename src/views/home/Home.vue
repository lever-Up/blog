<template>
  <div class="home">
    <!--博文广告轮播-->
    <div class="banner-box">
      <carousel-card :datas="bannerDatas" class="banner-card"/>
      <div class="banner-insert">
        <pagination-card :data="paginationData" />
        <pagination-card side="right" :data="paginationData" />
      </div>
    </div>
    <!--博文广告轮播END-->

    <!--分类主体-->
    <div class="content-box">
      <!--主体左侧-->
      <div class="content-left">
        <div class="content_1">
          <blackboard-card :data="blackboardData" />
        </div>

        <div class="content_2">
          <item-card :data="itemCard" />
        </div>

        <div class="content_3">
          <list-card :list="listCard" />
        </div>
      </div>
      <!--主体右侧-->
      <div class="content-right">
        <div class="content_1">
          <grid-card :list="gridCard" />
        </div>
        <div class="content_2">
          <small-list-card :list="smallListCard" />
        </div>
        <div class="content_3">
          <tags-card :tags="tags" />
        </div>
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
<style lang="scss">
  @import "../../scss/views/home.scss";
</style>
