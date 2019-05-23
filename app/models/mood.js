import DS from 'ember-data';

const {Model} = DS;

export default Model.extend({
  user: DS.attr('string'),
  path: DS.attr('string')
});
