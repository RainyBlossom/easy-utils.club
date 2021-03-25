import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeMain from "@/components/HomeMain";
import Explore from "@/components/Explore";
import About from "@/components/About";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: '首页',
        component: HomeMain
    },
    {
        path: '/explore',
        name: '探索',
        component: Explore
    },
    {
        path: '/about',
        name: '关于',
        component: About
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router
