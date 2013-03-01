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
    '          <input type="radio" name="service" id="twitter" value="twitter" />' +
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
    this.$el.find('#twitter').attr('checked', true);
  },
  
  search: function(e){
    
    var $checked = this.$el.find('input[type=radio]:checked'),
      query = $('#query').val(),
      service = $checked.val(),
      search = {};
    
    e.preventDefault();
    
    search.query = query;
    search.service = service;
    
    MyApp.Mediator.trigger('search:add:' + service + ' history:add', search);
    
  }

});