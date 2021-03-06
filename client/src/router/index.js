import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue';
import Home from '../views/Home.vue';


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path:'/main',
        name:'Main',
        component:Main
    }
]

const router = new VueRouter({
    routes
})

export default router
