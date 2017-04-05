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
		 this.getUser();
		 // self.set('model.user',self.store.peekRecord('user-info',1))	

	   this.set("totalSuggestion" ,inst.get("count.suggester"));
	   },
	   getUser : function(){
	   	let d = this.store.peekRecord('user-info',1)
	   	 if(d !== null && d !== undefined && this.get("model") !== undefined && this.get("model")){
	   	 	this.set('model.user',this.store.peekRecord('user-info',1))
	   	 }else{
	   	 	let ds = this;
	   	 	setTimeout(function(){
	   	 	ds.getUser();	
	   	 	},1000)
	   	 	
	   	 }

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
	   	},
	   	sendFriendRequest : function(userData ,id){
			let its = this.get("service");
			its.getAjax("/friend/"+userData.id+"/request",function(data1){
			document.getElementById(id).remove(); 
			},function(da){
				console.log(da)
			});
		}
	   },


});
