import Ember from 'ember';

export default Ember.Controller.extend({
	service: Ember.inject.service('service'),
	search: Ember.inject.controller('search'),
	islogedIn:false,
	isUser:false,
	authTokenKey:"",
	init : function (){
		let self = this;
		let its = this.get("service")
       setInterval(function(){
       	if(self.get("tokenStatus") !== self.get("service.authTokenezs") ){
         	self.set("tokenStatus", self.get("service.authTokenezs"));	
       	}
       	
       },2000)
		
		//this.currentPathDidChange();
		/*SOCIAL_LOGIN.onAuthStateChanged  = function(status, user1){
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
						//this.store.find("user-info","me");
					if(!self.get("isUser")){
						its.getAjax("/user/me",function(data1){
					data1["id"] = 1;
					data1["coverUrl"] = data1.cover.url;
					self.store.createRecord('user-info', data1);	
					self.transitionToRoute('home');
					self.set("isUser" , true);
					setTimeout(function(){
						$("#spinner-wrapper").css("display","none");
					},1000)	
					},function(){

					})	
					}
						
					}else{
				   self.get("notLogin")(self);
						
					}
				});

					}else{
			         self.get("notLogin")(self);
					}
				});
				
			//sendtoserver = false;
          //  PUSH_NOTIFICATION.init();
			}else{
				self.get("notLogin")(self);
			}
			
		}*/
	
	 
		
	},
	starter : function(){
			
	}.observes("tokenStatus"),
	authToken:function(result){
		SOCIAL_LOGIN.getToken(function(token) {
		SOCIAL_LOGIN.authTokenz = token;
		document.cookie = token;
	        result(true)
	})
},
actions : {
logout(){
	 if (PUSH_NOTIFICATION && !sendtoserver) {
        PUSH_NOTIFICATION.deleteToken(function(r) {
            console.log(r);
            SOCIAL_LOGIN.logout();
        });
         $("#header").hide();
         SOCIAL_LOGIN.logout();

       // clearMessages();
    } else {
        SOCIAL_LOGIN.logout();
    }

},

searchPost(id ,event){
	if (event.key === "Enter"){
		if(this.get('currentPath') !== "search"){
			this.transitionToRoute('search');   
		}
         
         this.get('search').test123(id);	  
        }else{

        }
}

},
currentPath : '',
 currentPathDidChange: function() {
 		 Ember.run.schedule('afterRender', this, function() {
 		//if(this.get('currentPath') !== "index"){
 			console.log(this.get('currentPath'));
 		//}
 	})
 		

 	}.observes('currentPath'),

 	notLogin: function(self){
 		 		self.transitionToRoute('login');
				setTimeout(function(){
						$("#spinner-wrapper").css("display","none");
					},1000)
 	}
});
