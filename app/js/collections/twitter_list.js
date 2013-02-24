MyApp.Collections.TwitterList = Backbone.Collection.extend({
  
  urlRoot: 'http://search.twitter.com/search.json',
  
  model: MyApp.Models.Twitter,
  
  search: function(param){
    var _this = this;
    
    $.ajax({
      url: this.urlRoot,
      dataType: 'jsonp',
      data: {q:  encodeURIComponent(param.query)},
    }).done(function(data){
      _this.reset(data.results);
    }).fail(function(){
      MyApp.Mediator.trigger('error', arguments);
    });
  }
  
});