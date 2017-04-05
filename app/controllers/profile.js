import Ember from 'ember';

export default Ember.Controller.extend({
	service: Ember.inject.service('service'),
	actions : {
		unfriend : function(userData ,id){
			let its = this.get("service");
			
			its.deleteAjax("/friend/"+userData.id+"/unfriend",function(data1){
			document.getElementById(id).innerHTML = "Add Friend"
			},function(da){
				console.log(da)
			},this, userData.id);
		}
	}
});
