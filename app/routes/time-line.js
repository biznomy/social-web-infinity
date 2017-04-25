import Ember from 'ember';

export default Ember.Route.extend({
	model() {
    //return this.store.findAll('post');
   
     var d = Ember.RSVP.hash({
      user : this.store.peekRecord('user-info',1),
      post: this.get('store').query('post',{"route" : "time-line"})
     // sendPost:this.store.createRecord('home')

    });
     // console.log(d);
      bootstrap_alert.loader('Loading...', 'loader',undefined,d);
     return d;

  }
});
