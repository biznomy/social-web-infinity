import DS from 'ember-data';

export default DS.Model.extend({
_id: DS.attr("string"),
user_id:DS.belongsTo('created-by'),
description: DS.attr("string"),
post : DS.belongsTo("post")
});
