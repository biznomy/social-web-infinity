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
    authToken:function(self){
      
  
}
   
    
});

