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
      });
    },

    success :function(data, inst){   
      inst.transitionTo('home');
      //window.location = window.location = 'http://localhost:4200';
    },
  actions : {
  	sendComment(id , event) {
        if (event.key === "Enter"){
            let urlpostfix = "/comment/save" 
             var formData = new FormData();
              formData.append("description" , document.getElementById(id).value);
              formData.append("post_id", id);
               this.get("service").postAjax(urlpostfix, formData , this.success, function(data,inst){
                   console.log(data);
                },this);
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
