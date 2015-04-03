import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("contacts", { path: "/" }, function(){
    this.route("new", { path: "new" });
    this.route("show", { path: "/contacts/:contact_id" });
    this.route("edit", { path: "/contacts/:contact_id/edit" });
  });
});

export default Router;
