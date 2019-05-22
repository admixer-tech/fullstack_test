import axios from 'axios'

export default {
	add(form){
		return axios.post('/api/desserts', form)
	},
	get(){
		return axios.get('/api/desserts')
	}
}