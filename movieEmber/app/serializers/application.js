import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  isNewSerializerAPI: true,

  normalizeArrayResponse: function(store, primaryModelClass, payload, id, requestType) {
    var normalizedRecords = [];

    payload.map(function(record){
      record.type = primaryModelClass.modelName;
      normalizedRecords.push(record);
    });

    var obj = {};
    obj[primaryModelClass.modelName] = normalizedRecords;


    return this._super(store, primaryModelClass, obj, id, requestType);
   }
});
