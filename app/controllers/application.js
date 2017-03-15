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
				
				self.get("authToken")(function(result){
					if(result){
						self.transitionToRoute('home');
						$("#spinner-wrapper").css("display","none");
						
					}else{
						self.transitionToRoute('login');
						$("#spinner-wrapper").css("display","none");
						
						
					}
				});
				
			}else{
				self.transitionToRoute('login');
				$("#spinner-wrapper").css("display","none");
			}
			
		}
	
	 
		
	},
	authToken:function(result){
		SOCIAL_LOGIN.getToken(function(token) {
		SOCIAL_LOGIN.authTokenz = token;
	        result(true)
	})
}
});
