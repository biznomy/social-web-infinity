import DS from 'ember-data';

export default DS.Model.extend({
	 displayName : DS.attr(),
	 files: DS.attr('file'),
     description: DS.attr('string')
});
