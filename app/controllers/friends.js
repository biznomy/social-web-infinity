import Ember from 'ember';

export default Ember.Controller.extend({
	service: Ember.inject.service('service'),
	totalSuggestion:"",
	

	init : function (){
		var self = this;
		let inst = this.get("service");
		$("#header").show();
		// self.set('postezs',self.store.findAll('post'))	
		
	 	//this.set("followers" ,inst.get("count.friend"));
	  // this.set("totalSuggestion" ,inst.get("count.suggester"));
	  //this.set("myfriend", this.store.findAll('user')); 
	  //console.log(this.get("model"));
	  // bootstrap_alert.closeLoader();
	  this.getUser();
	   },
	   getUser: function() {
        let d = this.store.peekRecord('user-info', 1)
         let inst = this.get("service");
        if (d !== null && d !== undefined && this.get("model") !== undefined && this.get("model")) {
            this.set('model.user', this.store.peekRecord('user-info', 1));
        	this.set("followers", inst.get("count.friend"));
        	this.set("totalSuggestion", inst.get("count.suggester"));
        } else {
            let ds = this;
            setTimeout(function() {
                ds.getUser();
            }, 1000)

        }

    },
	   actions : {
	   	sendFriendRequest : function(userData ,id){
			let its = this.get("service");
			its.getAjax("/friend/"+userData.id+"/request",function(data1){
			document.getElementById(id).remove(); 
			},function(da){
				console.log(da)
			});
		},
			friendRequestAccept : function(userData ,id){
			let its = this.get("service");
			let self = this; 
			its.getAjax("/friend/"+userData.id+"/accept",function(data1){
			$('[acceptId="'+id+'"]').remove(); 
			},function(da){
				console.log(da)
			});
		}
	   }
});
