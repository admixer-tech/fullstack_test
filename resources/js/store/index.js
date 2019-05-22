import Vue from 'vue'
import Vuex from 'vuex'

// import api from '../api'

// Импортирование модулей данных
import desserts from './desserts'

Vue.use(Vuex)


export default new Vuex.Store({
	modules: {
		desserts
	}
})