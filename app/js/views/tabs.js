MyApp.Views.Tabs = Backbone.View.extend({
  
  tmpl : MyApp.Templates.tabs,
  
  /**
   * 初期化
   * @method initialize
   * @type {Function}
   */
  initialize: function() {
    this.$el.html(this.tmpl());
  }
  
});