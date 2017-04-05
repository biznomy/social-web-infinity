import Ember from 'ember';

export default Ember.Component.extend({
	 service: Ember.inject.service('service'),
	 follower:"",
	 didRender : function(){
	 	let inst = this.get("service");
	 	this.set("follower",inst.get("count.friend"))
	 }
});
