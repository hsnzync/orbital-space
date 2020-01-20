import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from './Main.vue';
import Planets from './components/Planets.vue';
import Moons from './components/Moons.vue';

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.use(VueRouter);
Vue.use(BootstrapVue);

Vue.component('font-awesome-icon', FontAwesomeIcon);
const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Planets',
            component: Planets,
            props: true
        },
        {
            path: '/moons',
            name: 'Moons',
            component: Moons,
            props: true
        }
    ],
    mode: 'history'
});

router.replace('/');
Vue.config.productionTip = false;
library.add(faFilter);
library.add(faBars);

new Vue({
    el: '#app',
    components: {
        Main
    },
    router,
    render: h => h(Main)
}).$mount('#main');
