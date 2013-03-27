App.Router.map(function() {
  this.route("day", { path: "/" });
});

App.DayRoute = Ember.Route.extend({
  model: function() {
    return App.Day.find('today');
  },
});

