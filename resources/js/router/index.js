import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/Home.vue';

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: HomeView
		}
	]
})

export default router