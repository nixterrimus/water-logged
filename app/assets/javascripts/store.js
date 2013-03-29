DS.RESTAdapter.configure("plurals", { entry: "entries" });

App.Store = DS.Store.extend({
  revision: 12,
  adapter: DS.RESTAdapter.create(),
});
