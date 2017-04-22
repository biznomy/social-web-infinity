import Ember from 'ember';

export default Ember.Route.extend({
	controllerName : "user-info",
	init : function(){
		console.log("this.route");
	}
});
