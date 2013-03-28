App.Router.map(function() {
  this.resource("day", { path: "/" }, function() {
    this.route('entries.new',{ path: "entries/new" });
  });
});

App.DayRoute = Ember.Route.extend({
  model: function() {
    return App.Day.find('today');
  },
});

