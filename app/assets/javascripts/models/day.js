App.Day = DS.Model.extend({
  entries:   DS.hasMany('App.Entry'),
  goal:      DS.attr('number')
});
