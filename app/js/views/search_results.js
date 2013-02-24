MyApp.Views.SearchResults = Backbone.View.extend({

  initialize: function(options) {
    
    _.bindAll(this);

    this.collections = options.collections;
    this.tmpl = options.tmpl;
    
    MyApp.Mediator.on('search', this.search);
    
    this.collections.on('reset', this.render);
  },
  
  search: function(search){
    
    this.collections.search(search);
    
  },
  
  render: function(){
    
    this.$el.html(this.tmpl(this.collections.toJSON()));
    
  }

});