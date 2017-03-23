import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
    primaryKey: '_id',
    attrs: {
        files: { embedded: 'always' }
    },
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        /*let _ids = "58cfa7d096c3f0286b3fc029";
        //store.peekRecord('user-info',1)
        let data = [];
        for(let u = 0 ;u< payload.result.length; u++){
        	if(payload.result[u].user1._id !== _ids){
        		data.push(payload.result[u].user1);
        	}else if(payload.result[u].user2._id !== _ids){
        		data.push(payload.result[u].user2);
        	}else{

        	}
        }*/
        payload = {users:payload.result};
       
        return this._super(store, primaryModelClass, payload, id, requestType);
    }
});