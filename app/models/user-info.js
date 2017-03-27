import DS from 'ember-data';

export default DS.Model.extend({
  dob: DS.attr("string"),
  name: DS.attr("string"),
  bio: DS.attr("string"),
  photoURL: DS.attr("string"),
  uid: DS.attr("string"),
  phone: DS.attr("string"),
  email: DS.attr("string"),
  address1: DS.attr("string"),
  city: DS.attr("string"),
  state: DS.attr("string"),
  pincode: DS.attr("string"),
  cover : DS.belongsTo("file")
});
