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
	   authorsSorting: ['created_at:desc'],
	   arrangedContent: Ember.computed.sort('postezs', 'authorsSorting'),
	   actions : {
	   	reloader(){
	   		var self = this;
			self.set('postezs',self.store.findAll('post'));
			// var data = self.get('post123');
			// for(let a = 0; a < data.length; a++) {
			// 	console.log(data[a]);
			// }
	   		 // self.set('postezs',data);
	         console.log(self.get('postezs'));
	
			//
			//this.transitionToRoute('home', this.store.findAll('post'));
	   	}
	   }

});
