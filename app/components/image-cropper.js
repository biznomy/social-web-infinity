import Ember from 'ember';

export default Ember.Component.extend({
    croper : "",
    cropped:false,
	didRender : function(){
        if(this.get("croper") !== ""){
       this.get("croper").destroy();     
        }
         var d = new Croppie(document.getElementById('de-croperId123'), { 
             viewport: { width: 100, height: 100 },
             boundary: { width: 300, height: 300 },
             type:'circle',
            });
       
		 this.set("croper", d);
           //$('#de-croperId123').croppie({ width: 300, height: 300, type: 'square' } );
         /* $('.croppie-container .cr-boundary').css("height","300px");
          $('.croppie-container .cr-boundary').css("width","300px");  
        c.result({'base64', 'viewport', 'png', 1, true }).then(function(da){
         console.log(da);
        })*/
       

        },
        actions : {
            croppie : function(){
                var self = this;
                 this.get("croper").result('base64').then(function(da) {
                   $("#de-croperId123").parent().css("display","none");
            $("#croppedImage").attr("src",da)
        });
            },
            imagesss(id){
                var self = this;
              this.didRender();
               var img ;//= document.getElementById(id).files[0];
                var img1 = document.getElementById(id).value;
                 
                 var fReader = new FileReader();
                fReader.readAsDataURL(document.getElementById(id).files[0]);
                fReader.onloadend = function(event){
                 self.get("croper").bind({
                url:event.target.result,
                orientation: 4
            });
              }
                
            } 
        }
});
