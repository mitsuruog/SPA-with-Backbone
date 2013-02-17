SPA.Views.Footer = Backbone.View.extend({

  tmpl: _.template($('#tmpl_footer').html()),

  initialize: function() {
    this.$el.html(this.tmpl());
  }

});