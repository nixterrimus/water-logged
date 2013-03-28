App.Day = DS.Model.extend({
  entries:   DS.hasMany('App.Entry'),
  goal:      DS.attr('number'),

  total: function() {
    var sum = this.get('entries').reduce(function(prevVal, item) {
      return (prevVal || 0) + item.amount;
    });

    return (sum || 0);

  }.property('entries.@each.amount')

});
