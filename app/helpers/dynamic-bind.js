import Ember from 'ember';

export function dynamicBind(params/*, hash*/) {
 

  return "src="+params[0];
  
  
}

export default Ember.Helper.helper(dynamicBind);
