SPA.Views.SearchBar = Backbone.View.extend({

  tmpl: _.template($('#tmpl_search_bar').html()),

  initialize: function() {
    this.$el.html(this.tmpl());
  }

});