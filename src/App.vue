<template>
  <div>
    <div id="app">
      <img :src="logo" alt />
      <p>Welcome to C-Cli</p>
      <hr />
      <p>
        <a href="http://quancundexiwang.wang/#/home/home" target="blank">个人博客</a>
        <a href="https://github.com/changhao970630/c_cli" target="blank">项目地址</a>
      </p>
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
  }
};
</script>

<style lang="less" scoped>
div {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: red;
  }
}
</style>