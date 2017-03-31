import Ember from 'ember';

export default Ember.Controller.extend({
	service: Ember.inject.service('service'),
	totalSuggestion:"",
	postezs:"",
	authorsSorting: ['created_at:desc'],
	arrangedContent: Ember.computed.sort('postezs', 'authorsSorting'),
	init : function (){
		var self = this;
		let inst = this.get("service");
		//let textVale = document.getElementById('searchPost_id').value;
	   this.set("totalSuggestion" ,inst.get("count.suggester"));
	    //self.set('postezs',self.store.findAll('post'))	
	   },
	   test123 : function(id){
	   	var self = this;
	   let textVale = document.getElementById(id).value;
	   self.set('postezs', self.store.query('post',{"route":"search","text": textVale}))
	   //self.set('postezs',self.store.findAll('post'))
	   // suggest:this.store.query('user',{"route":"suggester"}),
	   },

	   actions : {
	   	reloader(){
	   		var self = this;
			
	   	}
	   },
	  
});
