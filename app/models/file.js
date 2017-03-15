import DS from 'ember-data';

export default DS.Model.extend({
_id:  DS.attr("string"),
name: DS.attr("string"),
type: DS.attr("string"),
size: DS.attr("string"),
url:  DS.attr("string")
});
