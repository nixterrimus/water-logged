App.Entry = DS.Model.extend({
  day:    DS.belongsTo('App.Day'),
  recordedAt:   DS.attr('date'),

  daysAgo: function() {
    now = new Date().getTime();
    return Math.floor((now - this.get('recordedAt')) / 86400000);
  }.property(),

});
