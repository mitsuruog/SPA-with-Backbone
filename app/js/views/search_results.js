MyApp.Views.SearchResults = Backbone.View.extend({

  tmpl: _.template(
    '<p class="placeholder">SearchResultの位置</p>'
  ),

  initialize: function() {
    this.$el.html(this.tmpl());
  }

});