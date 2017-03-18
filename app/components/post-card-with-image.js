import Ember from 'ember';

export default Ember.Component.extend({
  confirm: function(data) {
      $.ajax({
        data: data,
        method: 'POST',
        url: 'process-payment'
      }).then((digitalInventory) => {
        this.store.pushPayload(digitalInventory);
        this.transitionTo('thank-you');
      });
    },
  actions : {
  	sendComment(event) {
  		console.log(this.get("user"));
        if (event.keyCode === 13){
            //alert("entered")
        }else{
        	console.log("key")
        }
    }	,
    postcomment(id){
      console.log(id)
      ///comment/save  138.197.217.75
      //description=cghfchg
     // post_id=58be9471a2f0bc2f85a4fd08
    },
    postLike(id){
     $.ajax({
        type: "GET",
        url: "http://192.168.1.4:3000/like/"+id+"/set",
       // data: formData,
        processData: false,
        contentType: false,
        headers: { 
           'id-token': SOCIAL_LOGIN.authTokenz
        },
        success: function(data, textStatus, jqXHR) {
           //process data
           console.log(data)
        },
        error: function(data, textStatus, jqXHR) {
           //process error msg
           console.log(data)
        },
});
    }
  }
  
   
});
