'use strict'

// 判断是否是微信浏览器的函数
export function isWeiXin () {
  let ua = window.navigator.userAgent.toLowerCase()
  let check = ua.match(/MicroMessenger/i)
  if (check) {
    return check[0] === 'micromessenger'
  }
  return false
}

// 判断系统属性
export function checkSystem () {
  const u = navigator.userAgent || navigator.appVersion
  const sys = {
    trident: u.indexOf('Trident') > -1, // IE
    presto: u.indexOf('Presto') > -1, // opera
    webKit: u.indexOf('AppleWebKit') > -1, // apple gogole
    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, // firefox
    mobile: !!u.match(/AppleWebKit.*Mobile.*/), // is mobile
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios
    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // android or uc
    iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, // iPhone or QQHD
    iPad: u.indexOf('iPad') > -1, // iPad
    webApp: u.indexOf('Safari') === -1, // web
    google: u.indexOf('Chrome') > -1,
    wx: isWeiXin(), // 是否微信
    qq: u.match(/\sQQ/i) === 'qq' // 是否QQ
  }
  console.log('浏览器属性', sys)
  return sys
}

// getUrlParams
export function getUrlParam (name) {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)') // 构造一个含有目标参数的正则表达式对象
  let r = window.location.search.substr(1).match(reg) // 匹配目标参数
  if (r != null) {
    return unescape(r[2]) // 返回参数值
  } else {
    return null
  }
}
