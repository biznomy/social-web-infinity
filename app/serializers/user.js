import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
    primaryKey: '_id',
    attrs: {
        files: { embedded: 'always' }
    },
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        payload = {users:payload};
        return this._super(store, primaryModelClass, payload, id, requestType);
    }
});