import DS from 'ember-data';

export default DS.RESTSerializer.extend( DS.EmbeddedRecordsMixin, {
	
	attrs: {
	    created_by: { 
	    	 serialize: 'records',
           deserialize: 'records'
	    }
	},
	normalizeResponse(store, primaryModelClass, payload, id, requestType) {
 	let d = payload;

 	return {
 	    data :  d.map((info) => {
 		info.created_by["id"] = info.created_by.id;
 		info.created_by["type"] = "created-by";
 		return {
 			id:info._id,
 			type:'post',
 			attributes:info


 		}
 	})
 }
 }
});
