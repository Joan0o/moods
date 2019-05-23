import DS from 'ember-data';

const {Model} = DS;

export default Model.extend({
  name: DS.attr(),
  image: DS.attr(),
  mood: DS.attr()
});
