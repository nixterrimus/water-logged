App.Entry = DS.Model.extend({
  day:    DS.belongsTo('App.Day'),
  amount: DS.attr('number'),
});
