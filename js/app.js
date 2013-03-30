MyApp.App = Backbone.View.extend({

	el: '#app',

	tmpl: MyApp.Templates.layout,

	initialize: function () {

		//Mediator作成
		MyApp.mediator = {};
		_.extend(MyApp.mediator, Backbone.Events);
		
		this.$el.html(this.tmpl());

		this.history = new MyApp.Views.History({
			el: this.$el.find('#history_list'),
			searches: new MyApp.Collections.SearchHistoryList()
		});

		this.searchBar = new MyApp.Views.SearchBar({
			el: this.$el.find('#header')
		});

		this.tabs = new MyApp.Views.Tabs({
			el: this.$el.find('#search_results')
		});

		this.footer = new MyApp.Views.Footer({
			el: this.$el.find('#footer')
		});

	}

});

new MyApp.App();
