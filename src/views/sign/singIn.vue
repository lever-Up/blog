<template>
  <transition name="fade">
    <div class="loading-background">
      <img id="loading-background" alt="loading-background" src=""/>
      <div class="sing-box">
        <div class="position-relative" style="height: 100%;">
          <div class="flex-row-center sing-tab-wrap">
            <h1 v-for="item in sing" :key="item.value" class="tab-item" @click.stop="changeTab(item.value)">
              <span :class="item.value === currentSing ? 'active' : ''" class="tab-label">{{item.label}}</span>
            </h1>
          </div>
          <form name="singInForm" class="sing-in-form" v-show="currentSing === 'SingIn'">
            <div>
              <label for="inAccount">
                <svg-icon icon-name="icon-iconfont_dog" icon-style="width: 40px;height:40px;margin: 0 0 0 5px;"/>
              </label>
              <input name="account" id="inAccount" placeholder="account" :autocomplete="false"/>
            </div>
            <div>
              <label for="inPassword">
                <svg-icon icon-name="icon-key" icon-style="height:40px;margin:0"/>
              </label>
              <input name="password" id="inPassword" placeholder="password" type="password" :autocomplete="false"/>
            </div>
            <div>
              <label for="inCode">
                <svg-icon icon-name="icon-yanzhengma" icon-style="height:40px;margin:0"/>
              </label>
              <input name="code" id="inCode" placeholder="code"/>
              <span class="code-num">{{code}}</span>
            </div>
            <div class="sing-footer">
              <button class="sing-btn">SingIn</button>
            </div>

          </form>
          <form name="singUpForm" class="sing-in-form" v-show="currentSing === 'SingUp'">
            <div>
              <label for="account">
                <svg-icon icon-name="icon-iconfont_dog" icon-style="width: 40px;height:40px;margin: 0 0 0 5px;"/>
              </label>
              <input name="account" id="account"/>
            </div>
            <div>
              <label for="password">
                <svg-icon icon-name="icon-key" icon-style="height:40px;margin:0"/>
              </label>
              <input name="password" id="password"/>
            </div>
            <div>
              <label for="code">
                <svg-icon icon-name="icon-yanzhengma" icon-style="height:40px;margin:0"/>
              </label>
              <input name="code" id="code"/>
              <span class="code-num">{{code}}</span>
            </div>
          </form>
          <div class="under-footer">
            <div class="under-label">第三方</div>
            <ul class="flex-row-center under-icons">
              <li><a><svg-icon icon-name="icon-wx" icon-style="width:40px;height:40px;margin-right:10px"/></a></li>
              <li><a><svg-icon icon-name="icon-qq" icon-style="width:40px;height:40px;margin-right:10px"/></a></li>
              <li><a><svg-icon icon-name="icon-mobile-cover" icon-style="width:40px;height:40px;margin-right:10px"/></a></li>
            </ul>
            <div class="forget-password">忘记密码</div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script src="./signIn.js" />

<style scoped lang="scss">
  @import "./singIn.scss";
</style>
