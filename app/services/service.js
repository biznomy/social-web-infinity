/**
 *<p> Primary Service which provides generic interface over other services</p> 
 *<p> Abstracts ConfD JSON RPC or REST service call </p>
 *<p> Initializes services using environment settings </p>   
 * @class primary-service
 * 
 */
import config from '../config/environment';
import Ember from 'ember';

export default Ember.Service.extend({
       start: function() {
        var self = this;
        this.get('_setup')(this);
        this.get("checkStatus")(this)      
    },
    /**
     * <p>
     * Setup service based on various config settings like IP, port and Call
     * </p>
     * @method Setup
     */
    _setup: function(inst) {
        inst.set('ip', config.serverIP);
        inst.set('port', config.port);
    },
    checkStatus : function(self){
      
    },
    checkUser: function(store , userobject, success,error){
        
        //userobject["id"]= 1 ;
        //var user = store.createRecord('user-info', userobject);
            success(true,"user")    
    },
      authToken:function(self){
      SOCIAL_LOGIN.getToken(function(token) {
        SOCIAL_LOGIN.authTokenz = token;
        document.cookie = "id-token':"+token;
            result(true)
    })
  
        },
        
         getAjax: function(urlPostfix ,getSuccess, getError){
                let URL = this.get("ip")+":"+this.get("port")+urlPostfix;
                $.ajax({
                        type: "GET",
                        url: URL,
                        processData: false,
                        contentType: false,
                        headers: { 
                           'id-token': SOCIAL_LOGIN.authTokenz
                        },
                        success: function(data, textStatus, jqXHR) {
                           getSuccess(data, textStatus, jqXHR);
                        },
                        error: function(data, textStatus, jqXHR) {
                           if(data.message.indexOf("Token Not Found")){
                            self.get("authToken")();
                           } 
                           getError(data, textStatus, jqXHR);
                        },
                });
         },
         postAjax : function(urlPostfix, formData ,postSuccess , postError, it){
           let self = this;
            let URL = this.get("ip")+":"+this.get("port")+urlPostfix;
             $.ajax({
                        type: "POST",
                        url: URL,
                        data: formData,
                        processData: false,
                        contentType: false,
                        headers: { 
                           'id-token': SOCIAL_LOGIN.authTokenz
                        },
                        success: function(data, textStatus, jqXHR) {
                           postSuccess(data,it);
                        },
                        error: function(data, textStatus, jqXHR) {
                           if(data.message.indexOf("Token Not Found")){
                            self.get("authToken")();
                           } 
                           postError(data,it);
                        },
                });
         }
   
    
});

