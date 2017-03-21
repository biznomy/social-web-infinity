import DS from 'ember-data';
export default DS.RESTAdapter.extend({
service: Ember.inject.service('service'),
       buildURL :function (params) {
        console.log(params);
        let inst =this.get("service");
        return inst.get("ip")+":"+inst.get("port")+"/posts/timeline"
       },  
       // host: this.get("service.ip")+this.get("service.port"),//"http://138.197.217.75:3100",
        headers: { 
           'Content-Type': 'application/json',
           'id-token': SOCIAL_LOGIN.authTokenz
        }
        
    });