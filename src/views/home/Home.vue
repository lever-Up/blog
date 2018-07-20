<template>
  <div class="home">
    <!--博文广告轮播-->
    <div class="banner-box">
      <carousel-card :datas="bannerDatas" class="banner-card"/>
      <pagination-card :data="paginationData"></pagination-card>

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
    <!--博文广告轮播END-->

    <!--分类主体-->
    <div class="content-box">
      <!--主体左侧-->
      <div class="content-left">
        <div class="content_1">
          <div class="img-box carousel-img borderTL borderTR"
               :style="{backgroundImage: `url(${bannerArticles[0].img})`}">
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
          <div class="article-dec borderBL borderBR">
            <h1>Vue + Node 全栈攻略</h1>
            <div class="dec-line">
              嗖嗖嗖嗖嗖嗖，所所所所所所所所所所所所所所，所所所所所所所所所所所嗖嗖嗖嗖嗖嗖所嗖嗖嗖嗖嗖嗖所所所所，所所所所嗖嗖嗖嗖嗖嗖所所所所所所所所所……
              <a class="read-more_text">Read More</a>
            </div>
          </div>
        </div>

        <div class="content_2">
          <div class="img-box borderBL borderTL" :style="{backgroundImage: `url(${bannerArticles[0].img})`}">
            <button class="read-more position-mid">READ MORE</button>
          </div>
          <div class="article-dec">
            <h1>文字文字文字文字</h1>
            <div class="dec-line">
              内容内容内容，内容内容内容内容内容内容内容内容内容，内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容，内容内容内容……
              <a class="read-more_text">Read More</a>
            </div>
          </div>
          <div class="tool-box">
            <div>
              <i class="el-icon-star-on like-icon"></i>
              <span>102</span>
            </div>
            <div>
              <i class="el-icon-upload talk-icon"></i>
              <span>34</span>
            </div>
          </div>
        </div>

        <div class="content_3">
          <h1 class="line-title borderTL borderTR">热门推荐</h1>
          <div class="line-content">
            <div v-for="index in 3" :key="index" class="line-article">
              <div class="img-box" :style="{backgroundImage: `url(${bannerArticles[0].img})`}">
                <div class="cover borderBL borderBR" :style="{backgroundColor: randomColor()}">类别</div>
              </div>
              <div class="article-dec" :class="index === 3? 'no-border':''">
                <h1>嗖嗖嗖嗖嗖嗖所</h1>
                <p>嗖嗖嗖嗖嗖嗖所嗖嗖嗖嗖嗖嗖所所所所所所所所，试试我无无无无无无无无无我偶偶偶偶偶偶胜率嗖嗖嗖嗖嗖嗖所所所所</p>
                <div>
                  <span>
                    <i class="el-icon-star-on mr2"></i>
                    <span class="mr5">5</span>
                    <i class="el-icon-info mr2"></i>
                    <span>15</span>
                  </span>
                </div>
              </div>
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
