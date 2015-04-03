import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'contacts/tests/helpers/start-app';

var application;

module('Acceptance: UserCanAddAContact', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /new', function(assert) {
  visit('/new');
  fillIn("input#first-name", "dick");
  fillIn("input#last-name", "burgundy");
  fillIn("input#email", "dick@example.com");
  fillIn("input.phone-number", "1234567");
  click("input.submit");

  andThen(function() {
    assert.equal(find("h2").html(), "dick burgundy");
  });
});
