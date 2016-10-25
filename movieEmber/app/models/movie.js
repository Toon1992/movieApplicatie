import DS from 'ember-data';

export default DS.Model.extend({
  title:DS.attr(),
  rating:DS.attr(),
  description:DS.attr(),
  year:DS.attr(),
  director:DS.attr(),
  stars:DS.attr(),
  image:DS.attr()
});
