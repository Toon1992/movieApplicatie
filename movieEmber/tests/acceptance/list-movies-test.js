import { test } from 'qunit';
import moduleForAcceptance from 'movie-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list movies');

test('should redirect to movies route', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/movies', 'should redirect automatically');
  });
});

test('should list first three movies.', function (assert) {
  visit('/');
  andThen(function () {
    assert.equal(find('.listing').length, 3, 'should see 3 movies');
  });
});
