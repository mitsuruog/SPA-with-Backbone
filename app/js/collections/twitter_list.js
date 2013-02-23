MyApp.Collections.TwitterList = Backbone.Collection.extend({
  
  urlRoot: 'http://search.twitter.com/search.json',
  
  model: MyApp.Models.Twitter,
  
  search: function(param){
    
    this.fetch({
      url: this.urlRoot + '?q=' + encodeURIComponent(param.query),
      success: function(model, data, options){
        console.log(data);
      }
    });
    
  }  
  
});