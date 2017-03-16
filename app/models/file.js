import DS from 'ember-data';

export default DS.Model.extend({
	"name": DS.attr("string"),
	"uid": DS.attr("string"),
	"type": DS.attr("string"),
	"size": DS.attr("string"),
	"url":  DS.attr("string")
});
