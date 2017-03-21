import Ember from 'ember';

export default Ember.Component.extend({
  service: Ember.inject.service('service'),
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
  	sendComment(id , event) {
        if (event.key === "Enter"){
            let urlpostfix = "/comment/save" 
             var formData = new FormData();
              formData.append("description" , document.getElementById(id).value);
              formData.append("post_id", id);
               this.get("service").postAjax(urlpostfix, formData ,function(data){
                  console.log(data);
                },function(data){
                   console.log(data);
                })
        }else{
        	//console.log("key")
        }
    }	,
    postLike(id){
     let self = this;
      let urlPostfix = "/like/"+id+"/set";
      this.get("service").getAjax(urlPostfix,function(data){
       
      },function(data){
         console.log(data);
      })
    
    }
  }
  
   
});
