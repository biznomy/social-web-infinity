import DS from 'ember-data';
export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
    primaryKey: '_id',
     attrs: {
        "cover": { embedded: 'always' }
        
    },
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        console.log(payload);
         payload = {"user-info" : payload}
        return this._super(store, primaryModelClass, payload, id, requestType);
    }
});