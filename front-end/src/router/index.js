import Vue from 'vue';
import VueRouter from 'vue-router'
import CreateProduct from '../views/CreateProduct.vue';
import MainPage from '../views/MainPage.vue';
import HelloWorld from '../views/HelloWorld.vue';
import About from '../views/About.vue';

Vue.use(VueRouter);

const routes = [{
        path: '/home',
        name: 'MainPage',
        component: MainPage
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/create-product',
        name: 'Create-Product',
        component: CreateProduct
    }, {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld,
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router