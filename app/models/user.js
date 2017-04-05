import DS from 'ember-data';

export default DS.Model.extend({
    "name": DS.attr("string"),
	"uid": DS.attr("string"),
	"regid":DS.attr("string"),
	"files":DS.belongsTo("file"),
	"photoURL": DS.attr("string"),
	"email":DS.attr("string"),
	"gender":DS.attr("string"),
	"_type" : DS.attr("string"),
	cover : DS.belongsTo("file")

});
