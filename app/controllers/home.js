import Ember from 'ember';

export default Ember.Controller.extend({
	service: Ember.inject.service('service'),
	totalSuggestion:"",
	postezs:"",

	init : function (){
		var self = this;
		let inst = this.get("service");
		$("#header").show();
		 self.set('postezs',self.store.findAll('post'))	
		setTimeout(function(){

			 console.log(self.get("model"));


		}, 2000)
	   this.set("totalSuggestion" ,inst.get("count.suggester"));
	   },
	   actions : {
	   	reloader(){
	   		var self = this;
		
	   		 self.set('postezs',self.store.findAll('post'))	
	         console.log(self.get('postezs'));
	
			//
			//this.transitionToRoute('home', this.store.findAll('post'));
	   	}
	   }

});
