<template>
  <div>
    <img :src="logo" alt />
    <p>Welcome to C-Cli</p>
  </div>
</template>

<script>
import logo from "./assets/image/logo.png";
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
}
</style>