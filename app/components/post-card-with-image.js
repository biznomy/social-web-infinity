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
            alert("entered")
        }else{
        	console.log("key")
        }
    }	
  }
   
});
