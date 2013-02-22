MyApp.Views.Footer = Backbone.View.extend({

  tmpl: _.template(
    '<p class="placeholder">フッターの位置</p>'
  ),

  initialize: function() {
    this.$el.html(this.tmpl());
  }

});