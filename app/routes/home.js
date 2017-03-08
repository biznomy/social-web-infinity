import Ember from 'ember';

export default Ember.Route.extend({
	model() {
    
     return Ember.RSVP.hash({
      user : this.store.peekRecord('user-info',1),
      //albums: this.store.findAll('album')
    });
  }
 
});
