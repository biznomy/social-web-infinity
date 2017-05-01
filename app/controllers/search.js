import Ember from 'ember';

export default Ember.Controller.extend({
    service: Ember.inject.service('service'),
    totalSuggestion: "",
    postezs: "",
    authorsSorting: ['created_at:desc'],
    arrangedContent: Ember.computed.sort('postezs', 'authorsSorting'),
    init: function() {
        var self = this;
        let inst = this.get("service");
        //let textVale = document.getElementById('searchPost_id').value;
        this.set("totalSuggestion", inst.get("count.suggester"));
        //self.set('postezs',self.store.findAll('post'))	
        this.getUser()
    },
    test123: function(id) {
        var self = this;
        let textVale = document.getElementById(id).value;
        self.store.query('post', { "route": "search", "text": textVale }).then(function(lists){

        if (lists.toArray().length > 0) {
            self.set("searchData", true)
            self.set('postezs', lists)
        } else {
            self.set("searchData", false)
        }
            
        });
        self.store.query('user', { "route": "search", "text": textVale }).then(function(lists){

        if (lists.toArray().length > 0) {
            self.set("searchUser", true)
            self.set('users', lists)
        } else {
            self.set("searchUser", false)
        }
            
        });
        //self.set('postezs',self.store.findAll('post'))
        // suggest:this.store.query('user',{"route":"suggester"}),
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

    actions: {
        reloader() {
            var self = this;

        }
    },

});
