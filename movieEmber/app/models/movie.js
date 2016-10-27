import DS from 'ember-data';

export default DS.Model.extend({
  title:DS.attr('string'),
  rating:DS.attr('number'),
  description:DS.attr('string'),
  year:DS.attr('number'),
  director:DS.attr('string'),
  stars:DS.attr('string'),
  image:DS.attr('string')
});
