import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
    //return this.store.findAll('post');
   
     var d = Ember.RSVP.hash({
      user : this.store.peekRecord('user-info',1),
      myfriend: this.store.findAll('user'),
      suggest:this.store.query('user',{"route":"suggester"}),
      requests:this.store.query('user',{"route":"request"})
     
    });
     // console.log(d);
     return d;

  }
});
