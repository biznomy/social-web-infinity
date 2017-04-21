import Ember from 'ember';

export default Ember.Component.extend({
    service: Ember.inject.service('service'),
    follower: "",
    showModel: false,
    didRender: function() {
        let inst = this.get("service");
        this.set("follower", inst.get("count.friend"))
    },
    actions: {
        openModel() {
            this.set("showModel", true);
            $('#myModal').modal('show');
        },
        reloader(data, data2) {
            let self = this
            console.log(data);
            let urlpostfix = "/user/image/profile";
            let obj = {};
            obj["base64"] = data;
            this.get("service").postAjax(urlpostfix, JSON.stringify(obj), function(data) {
                self.set("img", data.result.photoURL);
                $('#myModal').modal('hide');
                this.set("showModel", false);
            }, function(data) {
                alert("error on saving image")
            })

        },
        closeModel() {
            $('#myModal').modal('hide');
            this.set("showModel", false);
        }
    }
});
