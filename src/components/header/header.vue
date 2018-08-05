<template>
  <div class="header-nav">
    <div class="header-inner">
      <div id="logo">
        <a href="/">
          <img src="../../images/logo.png" title="blog" alt="blog"/>
        </a>
      </div>
      <ul id="nav">
        <li v-for="tool in tools" :key="tool.id" :class="tool.class">
          <a :href="tool.href">{{tool.label}}</a>
        </li>
        <li><a class="nav-more"/></li>

        <li class="nav-search">
          <input value="" type="search" class="nav-search-text" autocomplete="off" placeholder="Search " @input="inputChange"/>
        </li>
        <li class="sign-up">
          <!--注册-->
          <a>Sign up</a>
        </li>
        <li class="sign-in">
          <!--登录-->
          <a href="/login">Sign In</a>
          <div class="head-down-box sign-in-box">
            <ul>
              <li><a href="/login"><svg-icon icon-name="icon-wx" icon-style="margin-right:10px"/> 微信登录</a></li>
              <li><a href="/login"><svg-icon icon-name="icon-qq" icon-style="margin-right:10px"/> QQ登录</a></li>
              <li><a href="/login"><svg-icon icon-name="icon-mobile-cover" icon-style="margin-right:10px"/> 手机登录</a></li>
              <li><a href="/login"><svg-icon icon-name="icon-email" icon-style="margin-right:10px"/> 邮箱登录</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script src="./header.js"/>
<style lang="sass">
  @import "./header.scss"
</style>
