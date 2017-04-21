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
			            alert('Please enter an email address.');
			            return;
			        }
			        if (password.length < 4) {
			            alert('Please enter a password.');
			            return;
			        }
			    }
			    SOCIAL_LOGIN.login(provider, function(status, result) {
			        if(status){
			        self.get('application').set("notUser",true);
			        self.get('application').authError();
			       
			        }else{
			        	alert(result.message)
			        	console.log("message");
			        }
			    
			    }, email, password);
		},
		signup(){
			console.log("message");
			

		}
	}

});
