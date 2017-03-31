import Ember from 'ember';

export function dateTimeFormat(params/*, hash*/) {
  var d = moment(params[0], "YYYYMMDD").fromNow();
  if(params[1] !== undefined && params[1] === "timeline"){
  	return d;
  }else{
  return "Published "+d;	
  }
  
}

export default Ember.Helper.helper(dateTimeFormat);
