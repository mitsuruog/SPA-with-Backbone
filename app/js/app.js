MyApp.App = Backbone.View.extend({

  el: '#app',
  
  tmpl: _.template(
    '<header id="search_bar"></header>' +
    '<div id="main" class="container-fluid">' +
    '    <div class="row-fluid">' +
    '    <div id="history" class="span2"></div>' +
    '    <div id="search_results" class="span10">' +
    '      <ul class="nav nav-tabs">' +
    '        <li class="active" data-toggle="tab">' +
    '          <a href="#twitter_list">Twitter</a>' +
    '        </li>' +
    '        <li class="" data-toggle="tab">' +
    '          <a href="#amazon_list">Amazon</a>' +
    '        </li>' +
    '      </ul>' +
    '      <div class="tab-content">' +
    '        <div class="tab-pane active" id="twitter_list"></div>' +
    '        <div class="tab-pane" id="amazon_list"></div>' +
    '      </div>' +
    '    </div>' +
    '  </div>' +
    '</div>' +
    '<footer id="footer" class="footer"></footer>'
  ),

  tmplTwitter: _.template(
    '<ul>' +
    '<% _.each(obj, function(tweet){  %>' +
    '  <li>' +
    '    <span class="img"><img src="<%= tweet.profile_image_url %>"></span>' +
    '    <span class="author"><a href="https://twitter.com/<%= tweet.from_user %>" target="_blank">@<%= tweet.from_user %></span>' +
    '    <span class="body"><%- tweet.text_linked %></span>' +
    '    <span class="time"><a href="https://twitter.com/<%= tweet.from_user %>/status/<%= tweet.id_str %>" target="_blank"><%= tweet.created_at %></a></span>' +
    '  </li>' +
    '<% }); %>' +
    '</ul>'
  ),
  
  tmplAmazon: _.template(
    ''
  ),
  
  events: {
//    'search #search_bar': 'newSerach'
  },

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
      el : ''
    });

    this.twitterResult = new MyApp.Views.SearchResults({
      el: this.$el.find('#twitter_list'),
      collections: new MyApp.Collections.TwitterList(),
      tmpl: this.tmplTwitter
    });
    
//    this.amazonResult = new MyApp.Views.SearchResults({
//      el: this.$el.find('#search_results'),
//      model: MyApp.Models.Amazon,
//      tmpl: this.tmplAmazon
//    });
    
    this.footer = new MyApp.Views.Footer({
      el: this.$el.find('#footer')
    });
    
  }

});

new MyApp.App();