import DS from 'ember-data';

export default DS.Model.extend({
  title:DS.attr('string'),
  rating:DS.attr('number'),
  plot_summary:DS.attr('string'),
  year:DS.attr('number'),
  director:DS.attr('string'),
  cast_members:DS.attr('string'),
  writers:DS.attr('string')
});
