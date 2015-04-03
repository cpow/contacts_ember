import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    const contact = this.store.createRecord("contact");
    contact.get("phones").createRecord();

    return contact;
  },

  deactivate: function() {
    const contact = this.get("controller.model");

    if (!contact.get("isSaving") && contact.get("isNew")) {
      contact.deleteRecord();
    }
  },
});
