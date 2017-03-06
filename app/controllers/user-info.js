import Ember from 'ember';

export default Ember.Controller.extend({
	isSignup : false,
	init : function() {
		console.log("Hello I am Called");
	},
	actions:{
		signUpVeiw(){
			    this.toggleProperty('isSignup');
		}
	}

});
