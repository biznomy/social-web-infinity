import Ember from 'ember';

export default Ember.Controller.extend({
	service: Ember.inject.service('service'),
	search: Ember.inject.controller('search'),
	islogedIn:false,
	isUser:false,
	authTokenKey:"",
	notUser : false,
	userSave : function(inst, data1 ,result){
       let user = this.store.peekRecord('user-info',1)
       if((user === undefined || user === null) || user.id !== data1._id ){
       		data1["id"] = 1;
			data1["coverUrl"] = data1.cover.url;
			inst.store.createRecord('user-info', data1);	
			
       }
         result(true)  
	},
	authError : function(){
		let self = this;
		let its = this.get("service")
		if(self.get("notUser")){
			self.authToken(function(token){
			if(token){
			self.initss();
			}else{
			 self.get("notLogin")(self);	
			}
		});
		}else{
			self.get("notLogin")(self);
		}
		
	},
	init : function(){
		let self = this;
		 SOCIAL_LOGIN.onAuthStateChanged  = function(status, user1){
       if(status){    
         if(!self.get("notUser")){
         self.set("notUser",true);
         self.authError();
         }
         }else{
       self.set("notUser",false);
       self.get("notLogin")(self);
      }
     }
	},
	initss : function (){
		let self = this;
		let its = this.get("service");
		if(document.cookie !== "" && document.cookie !== undefined && document.cookie !== null){
			its.getAjax("/user/me",function(data1){
			self.userSave(self ,data1 , function(){
			self.transitionToRoute('home');
			setTimeout(function(){
				$("#spinner-wrapper").css("display","none");
			},1500)	;
			});
			
			},function(data1){
				self.authError();
			})
		}else{
			self.authError();
		}
       /*setInterval(function(){
       	if(self.get("tokenStatus") !== self.get("service.authTokenezs") ){
         	self.set("tokenStatus", self.get("service.authTokenezs"));	
       	}
       	
       },2000)*/
		
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
	
	authToken:function(result){
		SOCIAL_LOGIN.getToken(function(token) {
		if(token){
		SOCIAL_LOGIN.authTokenz = token;
		document.cookie = token;
	        result(true);
		}else{
			result(false);
		}
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
    this.get("notLogin")(this);
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
 		if(this.get('currentPath') !== "index"){
 			console.log(this.get('currentPath'));
 		}
 	})
 		

 	}.observes('currentPath'),

 	notLogin: function(self){
 		 		self.transitionToRoute('login');
				setTimeout(function(){
						$("#spinner-wrapper").css("display","none");
					},1000)
 	}
});
