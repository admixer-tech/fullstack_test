<template>
	<div>
		
		<add-dessert></add-dessert>

		<v-data-table
		    :headers="headers"
		    :items="desserts"
		    class="elevation-1"
		  >
		    <template v-slot:items="props">
		      <td>{{ props.item.name }}</td>
		      <td class="text-xs-right">{{ props.item.calories }}</td>
		      <td class="text-xs-right">{{ props.item.fat }}</td>
		      <td class="text-xs-right">{{ props.item.carbs }}</td>
		      <td class="text-xs-right">{{ props.item.protein }}</td>
		      <td class="text-xs-right">{{ props.item.iron }}</td>
		    </template>
		</v-data-table>

	</div>
</template>

<script type="text/javascript">

	import AddDessert from '../components/AddDessert.vue'
	import api from './../api'
	import { mapGetters } from 'vuex';

	export default {
		components: {
			AddDessert
		},
		computed: {
		    /*...mapGetters([
		      desserts: 'desserts/allDesserts',
		    ])*/
		    desserts(){
		    	return this.$store._modules.get(['desserts']).context.getters.allDesserts
		    }
		},

		data: function(){
			return {
				headers: [
					{
						text: 'Dessert (100g serving)',
						align: 'left',
						sortable: false,
						value: 'name'
					},
					{ text: 'Calories', value: 'calories' },
					{ text: 'Fat (g)', value: 'fat' },
					{ text: 'Carbs (g)', value: 'carbs' },
					{ text: 'Protein (g)', value: 'protein' },
					{ text: 'Iron (%)', value: 'iron' }
		        ],
		        // desserts: []
      
			}
		},

		methods: {
			add: function(){

			}
		},

		mounted(){
			var that = this
			var desserts = []
			this.$store._modules.get(['desserts']).context.dispatch('getAllFromServer')
		}
	}
</script>

