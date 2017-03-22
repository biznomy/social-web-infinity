import Ember from 'ember';

export default Ember.Controller.extend({
	islogedIn:false,
	init : function (){
		let self = this;
		this.currentPathDidChange();
		SOCIAL_LOGIN.onAuthStateChanged  = function(status, user1){
			    if(status){	  
						if (PUSH_NOTIFICATION && sendtoserver) {
				           // $(".mdl-layout__tab:eq(1) span").click();
				            sendtoserver = false;
				            PUSH_NOTIFICATION.init();
				        }
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
			//sendtoserver = false;
          //  PUSH_NOTIFICATION.init();
			}else{
				self.transitionToRoute('login');
				$("#spinner-wrapper").css("display","none");
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
 		

 	}.observes('currentPath')
});
