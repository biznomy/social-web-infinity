import Ember from 'ember';

export default Ember.Component.extend({
    service: Ember.inject.service('service'),
    showModel: false,
    actions: {
        chooseImage(id) {
            //$("#"+id).click();
            this.set("showModel", true);
            $('#myModal').modal('show');
        },

        post(model) {
            let self = this;
            // var formData = new FormData();
            var obj = {};
            let urlpostfix = "/post/save/base64";
            var fReader = new FileReader();
            obj["description"] = document.getElementById('post-text').value;
            obj["base64"] = self.get("croppedImage");
            console.log(obj);
            self.get("service").postAjax(urlpostfix, JSON.stringify(obj), function(data) {
                document.getElementById('post-text').value = '';
                document.getElementById('post-file-field').value = '';
                self.get("succeses")(data);
            }, function(data) {
                console.log(data);
            })

            // formData.append("description" , document.getElementById('post-text').value);
            //formData.append("files", document.getElementById('post-file-field').files[0]);
        },
        reloader(data, data2) {

            this.set("croppedImage", data);
            $('#myModal').modal('hide');
            this.set("showModel", false);

        },
        closeModel() {
            $('#myModal').modal('hide');
            this.set("showModel", false);
        }
    }
});
