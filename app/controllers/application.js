import Ember from 'ember';

export default Ember.Controller.extend({
	service: Ember.inject.service('service'),
	islogedIn:false,
	init : function (){
		let self = this;
		let its = this.get("service")
		this.currentPathDidChange();
		SOCIAL_LOGIN.onAuthStateChanged  = function(status, user1){
			    if(status){	  
						if (PUSH_NOTIFICATION && sendtoserver) {
				           // $(".mdl-layout__tab:eq(1) span").click();
				            sendtoserver = false;
				            PUSH_NOTIFICATION.init();
				        }
					var u = user1.providerData[0];
				//u["id"]= 1 ;
				//var user = self.store.createRecord('user-info', u);
                // user;
				its.checkUser(self.store , u,function(status, obj){
					if(status){
						self.get("authToken")(function(result){
					if(result){
						self.transitionToRoute('home');
					setTimeout(function(){
						$("#spinner-wrapper").css("display","none");
					},1000)	
						
						
					}else{
				   self.get("notLogin")();
						
					}
				});

					}else{
			         self.get("notLogin")();
					}
				});
				
			//sendtoserver = false;
          //  PUSH_NOTIFICATION.init();
			}else{
				self.get("notLogin")();
			}
			
		}
	
	 
		
	},
	authToken:function(result){
		SOCIAL_LOGIN.getToken(function(token) {
		SOCIAL_LOGIN.authTokenz = token;
		document.cookie = "id-token':"+token;
	        result(true)
	})
},
currentPath : '',
 currentPathDidChange: function() {
 		 Ember.run.schedule('afterRender', this, function() {
 		if(this.get('currentPath') !== "index"){
 			console.log(this.get('currentPath'));
 		}
 	})
 		

 	}.observes('currentPath'),
 	notLogin: function(){
 		self.transitionToRoute('login');
				setTimeout(function(){
						$("#spinner-wrapper").css("display","none");
					},1000)
 	}
});
