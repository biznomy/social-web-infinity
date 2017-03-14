import Ember from 'ember';

export default Ember.Controller.extend({
	isSignup : false,
	social : "",
	init : function(){
	//social = new SOCIAL_LOGIN.onAuthStateChanged	
	},
	actions:{
		signUpVeiw(){
			    this.toggleProperty('isSignup');
		},
		login(provider){
			alert(provider);
			 var email = '',password = '';
			    if (provider == "password") {
			        email = document.getElementById('email').value;
			        password = document.getElementById('password').value;
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
			        console.log(result);
			       
			    }, email, password);
		},
		signup(){

		}
	}

});
