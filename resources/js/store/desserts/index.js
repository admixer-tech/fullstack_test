
import api from './../../api'

const state = {
	desserts:  []
}

const getters = {
	allDesserts: function(state){
		return state.desserts;
	}
}

const mutations = {
	add: function(state, item){
		state.desserts.push(item)
	},
	setAll: function(state, items){
		state.desserts = items
	}
}

const actions = {
	getAllFromServer(context){
		api.desserts.get()
			.then(function(response) {
				context.commit('setAll', response.data)
			})
	}
}


export default {
	// namespaced: true,
	state,
	getters,
	mutations,
	actions
}