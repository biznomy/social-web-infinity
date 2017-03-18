import Ember from 'ember';

export default Ember.Controller.extend({
	onlinePepole : [{phote : "http://thunder-team.com/friend-finder/images/users/user-2.jpg",title:"Dainel gift",status:""},
	                {phote: "http://thunder-team.com/friend-finder/images/users/user-1.jpg",title:"Seia Brown" ,status:"#e5e5e5"},
	                {phote: "http://thunder-team.com/friend-finder/images/users/user-4.jpg",title:"Jonny poll",status:"" }
	               ],
	init : function (){
		var self = this;
		setTimeout(function(){

			 console.log(self.get("model"));


		}, 2000)
	   }	
});
