import DS from 'ember-data';

export default DS.Model.extend({
    "name": DS.attr("string"),
	"uid": DS.attr("string"),
	"regid":DS.attr("string"),
	"files":DS.belongsTo("file") 
});
