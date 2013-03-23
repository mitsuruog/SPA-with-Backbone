MyApp.Views.Tabs = Backbone.View.extend({

	tmpl: MyApp.Templates.tabs,

	initialize: function () {
		
		this.$el.html(this.tmpl());

		this.twitters = new MyApp.Views.SearchResults({
			
			el: this.$el.find('#twitter_list'),
			tmpl: MyApp.Templates.twitter,
			collections: new MyApp.Collections.TwitterList(),
			service: 'twitter'
			
		});

		this.hotppepers = new MyApp.Views.SearchResults({
			
			el: this.$el.find('#hotpepper_list'),
			tmpl: MyApp.Templates.hotpepper,
			collections: new MyApp.Collections.HotpepperList(),
			service: 'hotpepper'
			
		});
		
		MyApp.mediator.on('search', this.selectTab);

	},
	
	selectTab: function(search){
	
		$('a[href^=#' + search.service + ']').tab('show');
	
	}

});