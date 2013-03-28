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

App.DayEntriesNewRoute = Ember.Route.extend({
  events: {
    createEntry: function(amount) {
      console.log(amount);
      var day = this.modelFor("day");
      day.get('entries').createRecord( { amount: amount } );
      this.transitionTo('day');
    },
  }
});

