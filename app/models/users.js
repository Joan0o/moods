import DS from 'ember-data';
//import { deflateRawSync } from 'zlib';
const { Model } = DS;

export default Model.extend({
    name: DS.attr(),
    mood: DS.attr(),
    id: DS.attr(),
    image: DS.attr()
});
