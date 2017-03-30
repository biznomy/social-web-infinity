import Ember from 'ember';

export default Ember.Component.extend({
service: Ember.inject.service('service'),
	actions: {
		chooseImage(id){
			$("#"+id).click();
		},
      
		post(model){
      let self = this;
			       var formData = new FormData();
             let urlpostfix = "/posts" 
              formData.append("description" , document.getElementById('post-text').value);
              formData.append("files", document.getElementById('post-file-field').files[0]);
              this.get("service").postAjax(urlpostfix, formData ,function(data){
                 document.getElementById('post-text').value = '';
                 document.getElementById('post-file-field').value = '';
                 self.get("succeses")(data);
                },function(data){
                   console.log(data);
                })
    

              		   }
              	      }
 });