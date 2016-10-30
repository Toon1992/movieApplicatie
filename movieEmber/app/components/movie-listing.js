import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  sortedMovies: Ember.computed.sort('movies', 'sortDefinition'),
  sortDefinition: ['title']
});
