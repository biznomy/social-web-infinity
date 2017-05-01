import Ember from 'ember';

export default Ember.Controller.extend({
    service: Ember.inject.service('service'),
    totalSuggestion: "",
    postezs: "",
    followers: "",

    init: function() {
        var self = this;
        let inst = this.get("service");

        this.getUser();
    },
    getUser: function() {
        let d = this.store.peekRecord('user-info', 1)
        let inst = this.get("service");
        if (d !== null && d !== undefined && this.get("model") !== undefined && this.get("model")) {
            this.set('model.user', this.store.peekRecord('user-info', 1));
            this.set("followers", inst.get("count.friend"));
            this.set("totalSuggestion", inst.get("count.suggester"));
        } else {
            let ds = this;
            setTimeout(function() {
                ds.getUser();
            }, 1000)

        }

    },
    authorsSorting: ['created_at:desc'],
    arrangedContent: Ember.computed.sort('model.post', 'authorsSorting'),
    actions: {
        reloader() {
            var self = this;
            self.set('model.post', this.get('store').query('post', { "route": "time-line" }));

            console.log(self.get('postezs'));

        },
        openCropper() {
            this.set("showModel", true);
          //  this.set("profileModel", false);
            $('#myModal').modal('show');
        },
        openPCropper() {
            this.set("profileModel", true);
            //this.set("showModel", false);
            $('#myModal').modal('show');
        },
        croppedCoverImage(data) {
            console.log(data);
            let self = this
             let urlpostfix = "/user/image/cover";
            let obj = {};
            obj["base64"] = data;
            this.get("service").postAjax(urlpostfix, JSON.stringify(obj), function(data) {
            self.set("model.user.coverUrl", data.result.cover);
               self.send("closeModel");
            }, function(data) {
                alert("error on saving image")
            })        
        },
         closeModel() {
           setTimeout(function(){
            $('#myModal').modal('hide');
            this.set("showModel", false);
            this.set("profileModel", false);
           },1000);
        },
         croppedProfileImage(data, data2) {
            let self = this
            let urlpostfix = "/user/image/profile";
            let obj = {};
            obj["base64"] = data;
             //self.set("model.user.photoURL", obj.base64);
               //self.send("closeModel");
            this.get("service").postAjax(urlpostfix, JSON.stringify(obj), function(data) {
                self.set("model.user.photoURL", data.result.photoURL);
               self.send("closeModel");
            }, function(data) {
                alert("error on saving image")
            })

        },
    }

});
