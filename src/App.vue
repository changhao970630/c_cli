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
    </div>
    <router-view></router-view>
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
  height: 100%;
  text-align: center;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  a {
    color: red;
  }
}
</style>