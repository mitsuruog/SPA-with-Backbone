SPA.Views.SearchResults = Backbone.View.extend({

  tmpl: _.template($('#tmpl_search_results').html()),

  initialize: function() {
    this.$el.html(this.tmpl());
  }

});