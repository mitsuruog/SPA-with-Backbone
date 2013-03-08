MyApp.App = Backbone.View.extend({

  el: '#app',

  tmpl: MyApp.Templates.layout,
  
  tmplTwitter: MyApp.Templates.twitter,
  
  tmplHotpepper: MyApp.Templates.hotpepper,
    
  initialize: function() {
    
    //Mediator作成
    _.extend(MyApp.Mediator, Backbone.Events);
    
    this.$el.html(this.tmpl());

    this.history = new MyApp.Views.History({
      el: this.$el.find('#history'),
      searches: new MyApp.Collections.SearchList()
    });

    this.searchBar = new MyApp.Views.SearchBar({
      el: this.$el.find('#search_bar')
    });

    this.tabs = new MyApp.Views.Tabs({
      el: this.$el.find('#search_results')
    });

    this.twitterResult = new MyApp.Views.SearchResults({
      el: this.$el.find('#twitter_list'),
      collections: new MyApp.Collections.TwitterList(),
      tmpl: this.tmplTwitter,
      service: 'twitter'
    });

    this.hotpepperResult = new MyApp.Views.SearchResults({
      el: this.$el.find('#hotpepper_list'),
      collections: new MyApp.Collections.HotpepperList(),
      tmpl: this.tmplHotpepper,
      service: 'hotpepper'
    });
 
		this.footer = new MyApp.Views.Footer({
      el: this.$el.find('#footer')
    });
    
  }

});

new MyApp.App();