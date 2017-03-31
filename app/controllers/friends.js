import Ember from 'ember';

export default Ember.Controller.extend({
	service: Ember.inject.service('service'),
	totalSuggestion:"",
	

	init : function (){
		var self = this;
		let inst = this.get("service");
		$("#header").show();
		 self.set('postezs',self.store.findAll('post'))	
		
	 	this.set("followers" ,inst.get("count.friend"));
	   this.set("totalSuggestion" ,inst.get("count.suggester"));
	   },
});
