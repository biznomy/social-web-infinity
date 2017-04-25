import Ember from 'ember';

export default Ember.Route.extend({
	queryParams: {
    id: {
      refreshModel: true
    }
  },
  model(params) {
    console.log(params);
    // This gets called upon entering 'articles' route
    // for the first time, and we opt into refiring it upon
    // query param changes by setting `refreshModel:true` above.

    // params has format of { category: "someValueOrJustNull" },
    // which we can forward to the server.
    //return this.get('store').query('article', params);
     var d = Ember.RSVP.hash({
      user:this.store.find('user-info',params.id),
      post:this.store.query('post',{"route":"profile",id : params.id}),

     
        });
     bootstrap_alert.loader('Loading...', 'loader',undefined,d);
     return d;
  }
});
