import Ember from "ember";

export default Ember.Controller.extend({
  actions: {
    update: function() {
      const contact = this.get("model");
      contact.save();
      this.transitionToRoute("contacts.show", contact);
    },
  }
});
