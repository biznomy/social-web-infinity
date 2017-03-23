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
    sendComment(id ,url , nme ,event) {
    
        if (event.key === "Enter"){
            let urlpostfix = "/comment/save" 
             var formData = new FormData();
             var des = document.getElementById(id).value
              formData.append("description" , des);
              formData.append("post_id", id);

               let str =  '<div class="post-comment"><img src="'+url+'" alt="" class="profile-photo-sm" />'+
                          '<p><a href="timeline.html" class="profile-link">'+nme+' </a><i class="em em-laughing"></i>'+des+'</p>'+
                           '</div>';
              this.get("service").postAjax(urlpostfix, formData , this.success, function(data,inst){
              let elm = $("[comment-container='"+id+"']");               
                elm.append(str);
                document.getElementById(id).value = ""
                },this);
        }
    } ,
    postLike(id){
     let self = this;
     let elm = $("[post-like-id='"+id+"']");
      let status = elm.find("i").hasClass("unlike");
      if(status){
         let urlPostfix = "/like/"+id+"/set";
      this.get("service").getAjax(urlPostfix,function(data){
      let count = Number(elm.text())
      elm.html('<i class="icon ion-thumbsup" ></i> '+(++count));
      },function(data){
         console.log(data);
      })
    }else{
      let urlPostfix = "/like/"+id+"/unset";
      this.get("service").getAjax(urlPostfix,function(data){
      let count = Number(elm.text())
      elm.html('<i class="icon ion-thumbsup unlike" ></i> '+(--count));
      },function(data){
         console.log(data);
      })
    }
    
    }
  }
  
  
});
