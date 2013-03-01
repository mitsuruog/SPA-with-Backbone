MyApp.Views.SearchBar = Backbone.View.extend({

  tmpl: _.template(
    '<div class="navbar navbar-inverse navbar-fixed-top">' +
    '  <div class="navbar-inner">' +
    '    <div class="container">' +
    '      <a class="brand" href="#">SPA-with-backbone.js</a>' +
    '      <div class="nav-collapse collapse navbar-inverse-collapse">' +
    '        <form class="form-search navbar-search pull-left" action="">' +
    '          <div class="input-append">' +
    '            <input type="text" name="query" id="query" value="" class="search-query" />' +
    '            <button id="btn-search" class="btn btn-primary">検索</button>' +
    '          </div>' +
    '          <input type="radio" name="service" id="twitter" value="twitter" checked />' +
    '          <label for="twitter" class="inline">Twitter</label>' +
    '          <input type="radio" name="service" id="amazon" value="amazon" />' +
    '          <label for="amazon">amazon</label>' +
    '        </form>' +
    '        <ul class="nav pull-right">' +
    '          <li><a href="#">About me</a></li>' +
    '          <li><a href="#">Link</a></li>' +
    '          <li><a href="#">Link</a></li>' +
    '        </ul>' +
    '      </div>' +
    '    </div>' +
    '  </div>' +
    '</div>'
  ),
  
  events: {
    'click #btn-search': 'search'
  },
  
  initialize: function() {
    this.$el.html(this.tmpl());
  },
  
  search: function(e){
    
    var twitterChecked = $('#twitter').attr('checked'),
      amazonChecked = $('#amazon').attr('checked'),
      query = $('#query').val();
    
    e.preventDefault();
    
    if(twitterChecked){
      MyApp.Mediator.trigger('search:add', {
        query: query,
        service: 'twitter'
      });
    }else if(amazonChecked){
      MyApp.Mediator.trigger('search:add', {
        query: query,
        service: 'amazon'
      });
    }else{
      console.log('不正な検索サービスが選択されています。');
    }
    
  }

});