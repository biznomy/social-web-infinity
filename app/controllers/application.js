import Ember from 'ember';

export default Ember.Controller.extend({
	islogedIn:false,
	init : function (){
		let self = this;
		SOCIAL_LOGIN.onAuthStateChanged  = function(status, user1){
			if(status){
				var u = user1.providerData[0];
				u["id"]= 1 ;
				var user = self.store.createRecord('user-info', u);
                // user;
				self.set("islogedIn",true)
				self.transitionToRoute('home');
			}else{
				self.set("islogedIn",false)	
			}
			
		}
	setTimeout(function(){
		$("#spinner-wrapper").css("display","none");	
	  },1000);
	  if(this.get("islogedIn")){
	  	this.transitionToRoute('home');
	  }else{
	  	this.transitionToRoute('login');
	  }
		
	}
});
