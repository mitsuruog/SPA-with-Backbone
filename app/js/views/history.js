SPA.Views.History = Backbone.View.extend({

  tmpl: _.template($('#tmpl_history').html()),

  initialize: function() {
    this.$el.html(this.tmpl());
  }

});