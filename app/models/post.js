import DS from 'ember-data';

export default DS.Model.extend({

  _id : DS.attr("string"),
  created_at: DS.attr("string"),
  like_count: DS.attr("number"),
  'created-by' : DS.belongsTo("created-by")
});
		

