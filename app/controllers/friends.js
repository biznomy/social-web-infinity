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
	  //this.set("myfriend", this.store.findAll('user')); 
	  console.log(this.get("model"));
	   },
	   actions : {
	   	sendFriendRequest : function(userData ,id){
			let its = this.get("service");
			its.getAjax("/friend/"+userData.id+"/request",function(data1){
			document.getElementById(id).remove(); 
			},function(da){
				console.log(da)
			});
		},
			friendRequestAccept : function(userData ,id){
			let its = this.get("service");
			let self = this; 
			its.getAjax("/friend/"+userData.id+"/accept",function(data1){
			$('[acceptId="'+id+'"]').remove(); 
			},function(da){
				console.log(da)
			});
		}
	   }
});
