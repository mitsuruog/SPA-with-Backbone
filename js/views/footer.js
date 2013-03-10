MyApp.Views.Footer = Backbone.View.extend({

  tmpl: _.template(
    '<div class="navbar navbar-inverse navbar-fixed-bottom">' +
    '  <div class="navbar-inner">' +
    '    <div class="container">Copyright (C) 2013 <a href="https://twitter.com/mitsuruog" target="_blank">@mitsuruog</a> All Rights Reserved.</div>' +
    '  </div>' +
    '</div>'  ),

  initialize: function() {
    this.$el.html(this.tmpl());
  }

});