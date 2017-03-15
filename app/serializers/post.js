import DS from 'ember-data';

export default DS.RESTSerializer.extend( DS.EmbeddedRecordsMixin, {
	primaryKey: '_id',
	isNewSerializerAPI: true,
	attrs: {
	    'created-by': { embedded: 'always' }
	},
	normalizeResponse(store, primaryModelClass, payload, id, requestType) {
 	let d = payload;

 	return {
 	    data :  d.data.map((info) => {
 		return {
 			id:info._id,
 			type:'post',
 			attributes:info
 		}
 	})
 }
 }
});
