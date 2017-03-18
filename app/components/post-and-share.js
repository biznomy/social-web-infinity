import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		chooseImage(id){
			$("#"+id).click();
		},
        /*post1234: function(){
				  var file = document.getElementById('post-file-field').files[0];
				  var text = document.getElementById('post-text').value;
				  this.set('model.sendPost.files', file);
				  this.set('model.sendPost.description', text);	
				  this.get('model.sendPost').save().then(()=>{
				  //this.transitionToRoute('post.show', this.get('model'))
				  //console.log()
				  })
				},*/
		post(model){
			  var formData = new FormData();
              formData.append("description" , document.getElementById('post-text').value);
//formData.append("files", 123456); // number 123456 is immediately converted to a string "123456"

// HTML file input, chosen by user
               formData.append("files", document.getElementById('post-file-field').files[0]);

// JavaScript file-like object
//var content = '<a id="a"><b id="b">hey!</b></a>'; // the body of the new file...
//var blob = new Blob([content], { type: "text/xml"});

//formData.append("webmasterfile", blob);

/*var request = new XMLHttpRequest();
request.open("POST", "http://192.168.1.7:3000/posts");
request.setRequestHeader('id-token', 'wdegfrgvqwertyuio');
request.send(formData);*/

 $.ajax({
        type: "POST",
        url: "http://192.168.1.4:3000/posts",
        data: formData,
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