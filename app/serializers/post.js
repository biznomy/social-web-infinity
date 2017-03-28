import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
    primaryKey: '_id',
    attrs: {
        "created_by": { embedded: 'always' },
        "files": { embedded: 'always' },
        "comments": { embedded: 'always' },
    },
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        payload = {posts:payload.result,total:payload.count};
        return this._super(store, primaryModelClass, payload, id, requestType);
    }
});