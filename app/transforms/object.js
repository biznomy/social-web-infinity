import Ember from 'ember';
import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize: function(serialized) {
        if (Ember.typeOf(serialized) === 'object') {
            return serialized;
        } else {
            return {};
        }
    },

    serialize: function(deserialized) {
        if (Ember.typeOf(deserialized) === 'object') {
            return deserialized;
        } else {
            return {};
        }
    }
});