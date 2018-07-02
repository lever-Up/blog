<template>
  <div class="home">
    <!--博文广告轮播-->
    <div class="banner-box">
      <div class="banner-card">
        <el-carousel :autoplay="false">
          <el-carousel-item v-for="banner in bannerImages" :key="banner.id">
            <div class="carousel-img borderTL borderBL" :style="{backgroundImage: `url(${banner.url})`}">
              <div class="text-content">
                <div class="time">{{formatTime(bannerArticles[1].createTime)}}</div>
                <div class="title">{{bannerArticles[1].title}}</div>
                <div class="desc">{{bannerArticles[1].desc}}</div>
                <button class="read-more">READ MORE</button>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="banner-insert">
        <div class="insert-box left">
          <div class="text-content">
            <div class="time">{{formatTime(bannerArticles[0].createTime)}}</div>
            <div class="title">{{bannerArticles[0].title}}</div>
            <div class="desc">{{bannerArticles[0].desc}}</div>
          </div>
          <div class="img-box">
            <div class="insert-img borderTR" :style="{backgroundImage: `url(${bannerArticles[0].img})`}">
              <div class="cover">
                <div class="cover-item"></div>
                <div class="triangle_border"></div>
                <div class="cover-item"></div>
              </div>
              <button class="read-more position-mid">READ MORE</button>
            </div>
          </div>
        </div>
        <div class="insert-box right">
          <div class="img-box">
            <div class="insert-img borderBR" :style="{backgroundImage: `url(${bannerArticles[0].img})`}">
              <div class="cover">
                  <div class="cover-item"></div>
                  <div class="triangle_border"></div>
                  <div class="cover-item"></div>
              </div>
              <button class="read-more position-mid">READ MORE</button>
            </div>
          </div>
          <div class="text-content">
            <div class="time">{{formatTime(bannerArticles[1].createTime)}}</div>
            <div class="title">{{bannerArticles[1].title}}</div>
            <div class="desc">{{bannerArticles[1].desc}}</div>
          </div>
        </div>
      </div>
    </div>

    <!--分类主体-->
    <div class="content-box">
      <!--主体左侧-->
      <div class="content-left">
        <div class="content_1">
          <div class="carousel-img borderTL borderTR" :style="{backgroundImage: `url(${bannerArticles[0].img})`}">
            <div class="content-img_footer">
              <span>
                <i class="el-icon-time mr5"></i>
                <span>6天前</span>
              </span>
              <span>
                <i class="el-icon-star-on mr5"></i>
                <span class="mr5">5</span>
                <i class="el-icon-info mr5"></i>
                <span>15</span>
              </span>
            </div>
            <span class="img-btn">DETAIL</span>
          </div>
          <div>
            <h1>Vue + Node 全栈攻略</h1>
            <div class="dec-line">
              嗖嗖嗖嗖嗖嗖，所所所所所所所所所所所所所所，所所所所所所所所所所所嗖嗖嗖嗖嗖嗖所嗖嗖嗖嗖嗖嗖所所所所，所所所所嗖嗖嗖嗖嗖嗖所所所所所所所所所……
            </div>
          </div>
        </div>
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
<style lang="scss">
  @import "../../scss/views/home.scss";
</style>
