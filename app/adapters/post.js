import DS from 'ember-data';
export default DS.RESTAdapter.extend({
service: Ember.inject.service('service'),
       buildURL :function (modelName ,id,snapshot ,requestType,query) {
        let inst =this.get("service");
        let postfix = ""
          if(query !== undefined && query.route !== undefined && query.route === 'time-line'){
              postfix = inst.get("ip")+":"+inst.get("port")+"/posts/timeline/me"
          }
          else if (query !== undefined && query.route !== undefined && query.route === 'profile'){
           postfix = inst.get("ip")+":"+inst.get("port")+"/posts/timeline/"+query.id
          }

          else{
              postfix = inst.get("ip")+":"+inst.get("port")+"/posts/wall";
          }
        
        return postfix;
       },  
       // host: this.get("service.ip")+this.get("service.port"),//"http://138.197.217.75:3100",
        headers: { 
           'Content-Type': 'application/json',
           'id-token': SOCIAL_LOGIN.authTokenz
        }
        
    });
