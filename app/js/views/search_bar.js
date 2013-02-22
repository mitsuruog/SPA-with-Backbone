MyApp.Views.SearchBar = Backbone.View.extend({

  tmpl: _.template(
    '<div class="form-search">' +
    '  <div class="input-append">' +
    '    <input type="text" name="query" id="query" value="" class="search-query" />' +
    '    <button id="btn-search" class="btn btn-primary">検索</button>' +
    '  </div>' +
    '  <input type="radio" name="service" id="twitter" value="twitter" checked />' +
    '  <label for="twitter" class="inline">Twitter</label>' +
    '  <input type="radio" name="service" id="amazon" value="amazon" />' +
    '  <label for="amazon">amazon</label>' +
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
    
    if(twitterChecked){
      this.$el.trigger('search', {
        query: query,
        service: 'twitter'
      });
    }else if(amazonChecked){
      this.$el.trigger('search', {
        query: query,
        service: 'amazon'
      });
    }else{
      console.log('不正な検索サービスが選択されています。');
    }
    
  }

});