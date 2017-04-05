import Ember from 'ember';

export default Ember.Controller.extend({
	service: Ember.inject.service('service'),
	actions : {
		sendFriendRequest : function(userData ,id){
			let its = this.get("service");
			its.getAjax("/friend/"+userData.id+"/request",function(data1){
			document.getElementById(id).innerHTML = "Unfriend"
			},function(da){
				console.log(da)
			});
		}
	}
});
