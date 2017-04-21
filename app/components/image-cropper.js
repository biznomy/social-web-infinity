import Ember from 'ember';
// used  https://foliotek.github.io/Croppie/
export default Ember.Component.extend({
    croper: "",
    cropped: false,
    didRender: function() {
        var obj = {};
        if (this.get("croper") !== "") {
            this.get("croper").destroy();
        }
        if (this.get('viewPort') == 'post') {
            obj["width"] = 200;
            obj["height"] = 100;
        } else {
            obj["width"] = 100;
            obj["height"] = 100;
        }
        var d = new Croppie(document.getElementById('de-croperId123'), {
            viewport: obj,
            boundary: { width: 300, height: 300 },
            type: 'circle',
        });

        this.set("croper", d);
        //$('#de-croperId123').croppie({ width: 300, height: 300, type: 'square' } );
        /* $('.croppie-container .cr-boundary').css("height","300px");
          $('.croppie-container .cr-boundary').css("width","300px");  
        c.result({'base64', 'viewport', 'png', 1, true }).then(function(da){
         console.log(da);
        })*/


    },
    actions: {
        croppie: function() {
            var self = this;
            this.get("croper").result('base64').then(function(da) {
                $("#de-croperId123").parent().css("display", "none");
                $("#croppedImage").css("display", "block");
                $("#croppedImage").attr("src", da);
                self.succeses(da);
            });
        },
        saveImage() {


        },
        imagesss(id) {
            var self = this;
            $("#de-croperId123").parent().css("display", "block");
            $("#croppedImage").css("display", "none");
            var img; //= document.getElementById(id).files[0];
            var img1 = document.getElementById(id).value;

            var fReader = new FileReader();
            fReader.readAsDataURL(document.getElementById(id).files[0]);
            fReader.onloadend = function(event) {
                self.get("croper").bind({
                    url: event.target.result,
                    orientation: 4
                });
            }

        },
        closeModelzz() {
            this.closeModl();
        }
    }
});
