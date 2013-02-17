SPA.App = Backbone.View.extend({

  el: '#app',
  
  tmpl: _.template($('#tmpl_layout').html()),

  initialize: function() {
    
    this.$el.html(this.tmpl());

    this.history = new SPA.Views.History({
      el: this.$el.find('#history')
    });

    this.searchBar = new SPA.Views.SearchBar({
      el: this.$el.find('#search_bar')
    });

    this.searchResult = new SPA.Views.SearchResults({
      el: this.$el.find('#search_results')
    });
    
    this.footer = new SPA.Views.Footer({
      el: this.$el.find('#footer')
    });
    
  }

});

new SPA.App();