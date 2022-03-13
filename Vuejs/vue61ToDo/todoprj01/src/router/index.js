import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/about',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
{
    path: '/todo',
    component: () => import(/* webpackChunkName: "about" */ '../views/TodoView.vue')
}


];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
