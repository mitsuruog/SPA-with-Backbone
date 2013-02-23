MyApp.Views.SearchResults = Backbone.View.extend({

//  tmpl: _.template(
//    '<p class="placeholder">SearchResultの位置</p>'
//  ),

  initialize: function(options) {
    //this.$el.html(this.tmpl());
    
    this.collections = options.collections;
    this.tmpl = options.tmpl;
    
    MyApp.Mediator.on('search', this.search, this);
    MyApp.Mediator.on('search:success', this.reset, this);
    
    this.collections.on('reset', this.render, this);
  },
  
  search: function(search){
    
    this.collections.search(search);
    
  },
  
  reset: function(models){
  
    this.collections.reset(models);
  
  },
    
  render: function(){
    
    this.$el.html(this.tmpl(this.collections.models));
    
  }

});