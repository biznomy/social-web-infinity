import Ember from 'ember';

export default Ember.Route.extend({
	model() {
    var d = this.store.findAll('post')
     /*var d = Ember.RSVP.hash({
      user : this.store.peekRecord('user-info',1),
      post: this.store.findAll('post')

    });*/
     console.log(d);
     return d;
  }
 
});
