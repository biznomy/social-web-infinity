import DS from 'ember-data';

export default DS.Model.extend({
	_id:   DS.attr("string"),
	name:  DS.attr("string"),
	photoURL:DS.attr("string")
});
