<template>
  <div id="app">
    <img src="./assets/logo.png"><br>
    <button @click="goBack">后退</button>
    <button @click="goAhead">前进</button>
    <button @click="goHome">首页</button><br>
    <!-- 利用URL传递参数 -->
    <router-link to="/">首页</router-link>
    <router-link to="/params/33/你好">利用URL传递参数</router-link>
    <!-- redirect重定向路由 -->
    <router-link to="/goHome">goHome</router-link>
    <router-link to="/goParams/66/lsx">goParams</router-link>
    <!-- 利用alias重定向路由   redirect是改变URL alias不改变URL改变router-view中的内容 -->
    <router-link to="/aliasParams/88/hhh">aliasParams</router-link>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <!-- <router-view name="left" style="float:left;width:50%;height:200px;background:#ccc"></router-view>
    <router-view name="right" style="float:left;width:50%;height:200px;background:yellow"></router-view> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    goBack(){
      this.$router.go(-1);
    },
    goAhead(){
      this.$router.go(1)
    },
    goHome(){
      this.$router.push('/')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity .5s;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  transition: opacity .5s;
}
</style>
