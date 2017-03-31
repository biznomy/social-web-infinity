import Ember from 'ember';

export default Ember.Controller.extend({
	service: Ember.inject.service('service'),
	totalSuggestion:"",
	postezs:"",
	followers:"",

	init : function (){
		var self = this;
		let inst = this.get("service");
		
		this.set("followers" ,inst.get("count.friend"));

	   this.set("totalSuggestion" ,inst.get("count.suggester"));
	   },
	   authorsSorting: ['created_at:desc'],
	   arrangedContent: Ember.computed.sort('model.post', 'authorsSorting'),
	   actions : {
	   	reloader(){
	   		var self = this;
			self.set('model.post',this.get('store').query('post',{"route" : "time-line"}));
			
	         console.log(self.get('postezs'));
	
	   	}
	   }

});
