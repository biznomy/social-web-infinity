import Ember from 'ember';

export default Ember.Route.extend({
	model() {
    //return this.store.findAll('post');
   
     var d = Ember.RSVP.hash({
      user : this.store.peekRecord('user-info',1),
      post: this.store.findAll('post',{ reload: true }),
      sendPost:this.store.createRecord('home')

    });
     // console.log(d);
     return d;

  }

 
});
