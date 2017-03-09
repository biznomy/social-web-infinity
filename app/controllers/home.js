import Ember from 'ember';

export default Ember.Controller.extend({
	onlinePepole : [{phote : " " },{phote: " "}],
	init : function (){
		var self = this;
		setTimeout(function(){
			console.log(self.get("model"))
		}, 2000)
	   },
	
});
