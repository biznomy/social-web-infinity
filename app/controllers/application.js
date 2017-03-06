import Ember from 'ember';

export default Ember.Controller.extend({
	islogedIn:false,
	init : function (){
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
