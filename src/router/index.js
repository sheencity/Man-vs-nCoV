import Vue from 'vue';
import Router from 'vue-router';
import City from '../components/city/City';
import home from '../components/home';

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        components: home,
    }, {
        path: '/city/:id',
        name: 'city',
        component: City,
    }],
    // scrollBehavior (to, from, savedPosition) {
    //     return { x: 0, y: 0 }
    //  }
})