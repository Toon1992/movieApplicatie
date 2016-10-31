import Ember from 'ember';

export default Ember.Component.extend({
  tagName:'table',
  sortedMovies: Ember.computed.sort('movies', 'sortDefinition'),
  sortBy: 'id',
  reverseSort: false,
  sortDefinition: Ember.computed('sortBy', 'reverseSort', function() {
    let sortOrder = this.get('reverseSort') ? 'desc' : 'asc';
    return [ `${this.get('sortBy')}:${sortOrder}` ];
  })
});
