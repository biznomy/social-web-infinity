import DS from 'ember-data';

export default DS.Model.extend({
description: DS.attr("string"),
post : DS.belongsTo("post"),
user_id :DS.belongsTo("created-by"),
});
