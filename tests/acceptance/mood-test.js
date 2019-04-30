import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import {
  click,
  currentURL,
  visit
} from '@ember/test-helpers';

module('Acceptance | mood', function(hooks) {
  setupApplicationTest(hooks);

  test('should show rentals as the home page', async function (assert) {
    await visit('/');
    assert.equal(currentURL(), '/', 'should redirect automatically');
  });

  test('Shoult link to information about the app', async function(assert){
    await visit('/');
    await click(".menu-contact")
    assert.equal(currentURL(), '/contact', 'should navigate to contact')
  });

});
