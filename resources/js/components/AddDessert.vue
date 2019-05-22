<template>
	<div>
		<!-- <v-btn color="success" @click="add">Success</v-btn> -->
		<v-dialog
	      v-model="dialog"
	      width="500"
	    >
	      <template v-slot:activator="{ on }">
	        <v-btn
	          color="green lighten-2"
	          dark
	          v-on="on"
	        >
	          Add
	        </v-btn>
	      </template>

	      <v-card>
	        <v-card-title
	          class="headline grey lighten-2"
	          primary-title
	        >
	          Add dessert
	        </v-card-title>

	        <v-card-text>
	          <v-form
			    ref="form"
			    v-model="valid"
			    lazy-validation
			  >
			    <v-text-field
			      v-model="form.name"
			      :counter="10"
			      :rules="nameRules"
			      label="Name"
			      required
			    ></v-text-field>
			    <v-text-field
			      v-model="form.calories"
			      :counter="10"
			      :rules="nameRules"
			      label="Calories"
			      required
			    ></v-text-field>

			    <v-text-field
			      v-model="form.fat"
			      :counter="10"
			      :rules="nameRules"
			      label="Fat"
			      required
			    ></v-text-field>

			    <v-text-field
			      v-model="form.carbs"
			      :counter="10"
			      :rules="nameRules"
			      label="Carbs"
			      required
			    ></v-text-field>

			    <v-text-field
			      v-model="form.protein"
			      :counter="10"
			      :rules="nameRules"
			      label="Protein"
			      required
			    ></v-text-field>

			    <v-text-field
			      v-model="form.iron"
			      :counter="10"
			      :rules="nameRules"
			      label="Iron"
			      required
			    ></v-text-field>

			  </v-form>
	        </v-card-text>

	        <v-divider></v-divider>

	        <v-card-actions>
	          <v-spacer></v-spacer>
	          <v-btn
	            color="primary"
	            flat
	            @click="add"
	          >
	            Save	
	          </v-btn>
	        </v-card-actions>
	      </v-card>

	      {{ form }}

	    </v-dialog>
	</div>
</template>

<script type="text/javascript">

	import api from './../api'

	export default {
		data: function(){
			return {
				dialog: false,
				nameRules: [],
				valid: true,
				form: {
					
					name: '',
					calories: '',
					fat: '',
					carbs: '',
					protein: '',
					iron: '',
				}
			}
		},
		methods: {
			add: function(){
				this.dialog = false
				var ss = this.$store._modules.get(['desserts'])

				ss.context.commit('add', this.form)
				api.desserts.add(this.form)
					.then(function(response){
						console.log(response)
					})
					.catch(function(error){
						console.log(error)
					})
			}
		}
	}
</script>