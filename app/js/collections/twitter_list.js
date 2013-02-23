MyApp.Collections.TwitterList = Backbone.Collection.extend({
  
  urlRoot: 'http://search.twitter.com/search.json',
  
  model: MyApp.Models.Twitter,
  
  search: function(param){
    var modelClass = this.model;
    
    this.fetch({
      url: this.urlRoot + '?q=' + encodeURIComponent(param.query),
      dataType: 'jsonp',
      success: function(model, response, options){
        var models = [];
        
        _.each(response && response.results, function(data){
         models.push(new modelClass(data));
        });
        
        MyApp.Mediator.trigger('search:success', models);
      },
      silent: true
    });
    
  }
  
});