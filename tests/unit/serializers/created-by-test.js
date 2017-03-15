import { moduleForModel, test } from 'ember-qunit';

moduleForModel('created-by', 'Unit | Serializer | created by', {
  // Specify the other units that are required for this test.
  needs: ['serializer:created-by']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
