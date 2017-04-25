import Ember from 'ember';

export default Ember.Controller.extend({
    service: Ember.inject.service('service'),
    totalSuggestion: "",
    postezs: "",

    init: function() {
        var self = this;
        let inst = this.get("service");
        $("#header").show();
        var d = {};
            d["_result"] = undefined;

            self.store.findAll('post').then(function(data) {
                d["_result"] = true;
                self.set('postezs', data);
            });
            bootstrap_alert.loader('Loading...', 'loader', undefined, d);
        this.getUser();
        // self.set('model.user',self.store.peekRecord('user-info',1))  

        this.set("totalSuggestion", inst.get("count.suggester"));

    },
    getUser: function() {
        let d = this.store.peekRecord('user-info', 1)
        if (d !== null && d !== undefined && this.get("model") !== undefined && this.get("model")) {
            this.set('model.user', this.store.peekRecord('user-info', 1))
        } else {
            let ds = this;
            setTimeout(function() {
                ds.getUser();
            }, 1000)

        }

    },
    authorsSorting: ['created_at:desc'],
    arrangedContent: Ember.computed.sort('postezs', 'authorsSorting'),
    actions: {
        reloader() {
            var self = this;
            var d = {};
            d["_result"] = undefined;

            self.store.findAll('post').then(function(data) {
                d["_result"] = true;
                self.set('postezs', data);
            });
            bootstrap_alert.loader('Loading...', 'loader', undefined, d);
            // var data = self.get('post123');
            // for(let a = 0; a < data.length; a++) {
            //  console.log(data[a]);
            // }
            // self.set('postezs',data);


            //
            //this.transitionToRoute('home', this.store.findAll('post'));
        },
        sendFriendRequest: function(userData, id) {
            let its = this.get("service");
            its.getAjax("/friend/" + userData.id + "/request", function(data1) {
                console.log(userData);
            }, function(da) {
                console.log(da)
            });
        }
    },


});
