MyApp.Views.History = Backbone.View.extend({

  tmpl: _.template(
    '<% _.each(obj, function(search){  %>' +
    '<ul class="search" data-id="<%= search.attributes.id %>">' +
    '  <li class="query"><%- search.attributes.query %></li>' +
    '  <li class="service">(<%- search.attributes.service %>)</li>' +
    '  <li class="search-buttons">' +
    '    <button class="btn btn-mini btn-danger btn-delete">' +
    '      <i class="icon-remove-sign icon-white"></i>' +
    '    </button>' +
    '  </li>' +
    '</ul>' +
    '<% });  %>'
    ),

  events: {
    'click .btn-delete': 'removeSearch'
  },
  
  initialize: function() {
    
    this.searches = this.options.searches;
    
    this.searches.fetch();
    
    this.$el.html(this.tmpl(this.searches.models));
    
    MyApp.Mediator.on('search', this.addSearch, this);
    
    this.searches.on('add remove', this.render, this);
    
  },
  
  addSearch: function(search){
    
    search.id = +new Date();
    this.searches.create(search);
    
  },
  
  removeSearch: function(e){
    
    var id = this._getSearchId(e);
    this.searches.get(id).destroy();
    
  },
  
  render: function(){
  
    this.$el.html(this.tmpl(this.searches.models));
    
  },
  
  _getSearchId: function(e){
    
    return $(e.target).closest('.search').attr('data-id');
    
  }

});