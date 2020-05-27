<template>
  <div>
    <div id="app">
      <img :src="logo" alt />
      <p>Welcome to C-Cli</p>
      <p>
        <a href="http://quancundexiwang.wang/#/home/home" target="blank">个人博客</a>
        <a href="https://github.com/changhao970630/c_cli" target="blank">项目地址</a>
      </p>
      <p>
        vuex测试数据：
        {{$store.state.vuex_test}}
      </p>
      <router-link to="/home">Home</router-link>
      <router-link to="/ch">CodingHappier</router-link>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import logo from "@/assets/image/logo.png";
export default {
  name: "app",
  data() {
    return {
      logo: logo
    };
  },
  created() {}
};
</script>

<style lang="less" scoped>
div {
  width: 100%;
  text-align: center;
  a {
    color: rgb(103, 116, 231);
    padding: 12px;
  }
  .active-router {
    color: rgba(255, 0, 0, 0.883);
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
</style>