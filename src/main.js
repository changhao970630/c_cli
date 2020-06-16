import("./style/main.scss");
import rq from "./http/request"
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.prototype.rq = rq
new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
