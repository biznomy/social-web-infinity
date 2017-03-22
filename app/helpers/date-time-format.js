import Ember from 'ember';

export function dateTimeFormat(params/*, hash*/) {
  var d = moment(params[0], "YYYYMMDD").fromNow();
  return "Published "+d;
}

export default Ember.Helper.helper(dateTimeFormat);
