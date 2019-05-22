require('./bootstrap');

window.Vue = require('vue');
// import Vue from 'vue'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import router from './router'
import store from './store'

import Vuetify from 'vuetify'
Vue.use(Vuetify)
import 'material-design-icons-iconfont/dist/material-design-icons.css'
// import '@mdi/font/css/materialdesignicons.css'

import App from './App.vue'

const app = new Vue({
    el: '#app',
    template: '<App></App>',
	components: {
		App
	},
	router,
	store
});
