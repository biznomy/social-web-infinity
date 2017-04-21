import DS from 'ember-data';

export default DS.Model.extend({
  created_at: DS.attr("string"),
  title : DS.attr("string"),
  description:DS.attr("string"),
  created_by : DS.belongsTo("created-by"),
  comments : DS.hasMany("comment"),
  like_count: DS.attr("number"),
  comment_count: DS.attr("number"),
   __v: DS.attr("number"),
  files : DS.belongsTo("file"),
  like : DS.attr("boolean")
});
		

