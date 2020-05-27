import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const options = {
  //用来存放数据的
  state: {
    vuex_test: "test",
  },
  //用来修改state的属性
  mutations: {},
  //用来获取state里的东西
  getters: {},
  //经过action派遣后才到达mutation进行处理 此步骤可以省略
  actions: {},
};
export default new Vuex.Store(options);
