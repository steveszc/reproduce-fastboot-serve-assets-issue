import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    if (typeof FastBoot !== 'undefined') {
      return 'FastBoot running on the server';
    } else {
      return 'Ember JS running in the client';
    }
  }
});
