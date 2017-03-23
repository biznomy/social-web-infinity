import Ember from 'ember';

export function checker(params/*, hash*/) {
  var d = ""
  if(params[0]%4 == 0 && params[0] !== 0){
     d= "#e5e5e5 !important";
  }else{

  }
  return d;
}

export default Ember.Helper.helper(checker);
