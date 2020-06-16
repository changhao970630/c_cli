<template>
    <div>
        <div id="app">
            <img :src="logo" alt/>
            <p>Welcome to C-Cli</p>
            <p>
                <a href="http://quancundexiwang.wang/#/home/home" target="blank">个人博客</a>
                <a href="https://github.com/changhao970630/c_cli" target="blank">项目地址</a>
            </p>
            <p>
                vuex测试数据：
                {{$store.state.vuex_test}}
            </p>
            <function-comp></function-comp>
            <router-link to="/home">Home</router-link>
            <router-link to="/ch">CodingHappier</router-link>
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
            <div>
                <button @click="testAjax">测试Ajax请求</button>
            </div>
            <div class="jokeWrap" style="">
                <ul style="list-style-type: lower-latinl">
                    <li v-for="item in data" :key="item.hashId">{{item.content}}</li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
    import logo from "@/assets/image/logo.png";
    import functionComp from "@/components/function-comp";

    export default {
        name: "app",
        components: {
            functionComp
        },
        data() {
            return {
                logo: logo,
                data: []
            };
        },
        methods: {
            async testAjax(e) {
                e.preventDefault()
                const res = await this.rq.fetchGet('/api/joke/content/list.php', {
                    sort: "desc",
                    page: 1,
                    pagesize: 10,
                    time: 1418816972,
                    key: "a559a1d63c03b69b2ca61154f692a783"
                })
                this.data = res.result.data
            }
        },
        created() {

        }
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

        p {
            margin: 30px;
        }

        .jokeWrap {
            width: 60%;
            height: 36vh;
            overflow-y: scroll;
            text-align: left;
            display: inline-block;
        }

        .jokeWrap::-webkit-scrollbar {
            width: 10px;
        }

        .jokeWrap::-webkit-scrollbar-thumb {
            background-color: #6962ff;
            border-radius: 100px;
        }
    }
</style>
