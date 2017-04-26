import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        //return this.store.findAll('post');
      
        var d = Ember.RSVP.hash({
           // user: this.store.peekRecord('user-info', 1),
            myfriends: this.store.query('user', { "type": "friend" }),
            suggest: this.store.query('user', { "type": "suggestion" }),
            requests: this.store.query('user', { "type": "requestIn" })
        });
        // bootstrap_alert.closeLoader();
        // console.log(d);
        bootstrap_alert.loader('Loading...', 'loader',undefined,d);
        return d;
    }
});
