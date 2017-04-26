import Ember from 'ember';

export default Ember.Controller.extend({
	service: Ember.inject.service('service'),
    totalSuggestion: "",
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
           console.log(this.get('model.user'))
            setTimeout(function() {
                ds.getUser();
            }, 1000)

        }

    }

});
