import Ember from 'ember';

export default Ember.Controller.extend({
	service: Ember.inject.service('service'),
	application: Ember.inject.controller('application'),
	isSignup : false,
	social : "",
	init : function(){
	//social = new SOCIAL_LOGIN.onAuthStateChanged
	$("#header").hide();	
	},
	actions:{
		signUpVeiw(){
			    this.toggleProperty('isSignup');
		},
		login(provider){
			let self = this;
			let inst = self.get("service")
			 var email = '',password = '';
			    if (provider == "password") {
			        email = document.getElementById('login-email').value;
			        password = document.getElementById('login-password').value;
			        if (email.length < 4) {
			           // alert('Please enter an email address.');
			           bootstrap_alert.elm('Please Enter Valid Email', 'danger', 2000,"#errorMsg");
                         // available: success, info, warning, danger
                        
			            return;
			        }
			        if (password.length < 4) {
			           // alert('Please enter a password.');
			            bootstrap_alert.elm('Please Enter Correct Password.', 'danger', 2000 ,"#errorMsg");
			            return;
			        }
			    }
			    bootstrap_alert.loader('Loading...', 'loader');
			    SOCIAL_LOGIN.login(provider, function(status, result) {
			        if(status){
			        self.get('application').set("notUser",true);
			        self.get('application').authError();
			     bootstrap_alert.closeLoader();  
			        }else{
			        	//alert(result.message)
			        bootstrap_alert.elm(result.message, 'danger', 2000,"#errorMsg");
			        console.log("message");
			        bootstrap_alert.closeLoader();
			        }
			    
			    }, email, password);
		},
		signup(){
			console.log("message");
			

		}
	}

});
