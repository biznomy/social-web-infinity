import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
   service: Ember.inject.service('service'),
       buildURL :function (modelName ,id,snapshot ,requestType,query) {
        let inst =this.get("service");
       
             return inst.get("ip")+":"+inst.get("port")+"/friend/list";
     
        
        //return postfix;
       },  
       // host: this.get("service.ip")+this.get("service.port"),//"http://138.197.217.75:3100",
        headers: { 
           'Content-Type': 'application/json',
           'id-token': SOCIAL_LOGIN.authTokenz
        }
});