MyApp.Views.SearchResults = Backbone.View.extend({

  tmpl: _.template(
    '<p class="placeholder">SearchResultの位置</p>'
  ),

  initialize: function(options) {
    this.$el.html(this.tmpl());
    
    this.collections = options.collections;
    
    MyApp.Mediator.on('search', this.search, this);
    
    this.collections.on('change', this.render, this);
  },
  
  search: function(search){
    
    this.collections.search(search);
    
  },
    
  render: function(){
    
    thsi.$el.html(this.tmpl(thsi.collections.models));
    
  }

});