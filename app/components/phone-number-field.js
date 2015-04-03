import Ember from "ember";

export default Ember.Component.extend({

  numberField: Ember.TextField.extend({
    keyDown: function(e) {
      e.preventDefault();
      console.log(e);
    }.on("keyDown"),
  }),

  actions: {
    keyPress: function(e) {
      console.log(e)
    }
  },
});
