import Ember from "ember";

export default Ember.Controller.extend({
  actions: {
    delete: function(contact) {
      contact.destroyRecord();
      this.transitionToRoute("contacts");
    },
  }
});
