MyApp.Views.Tabs = Backbone.View.extend({

	tmpl: MyApp.Templates.tabs,

	events: {
		'click #tab>li': 'changeTab'
	},

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

		MyApp.mediator.on('search historySearch', this.selectTab);

	},

	changeTab: function (e) {

		var service = this._getService(e.currentTarget);
		MyApp.mediator.trigger('changeTab', service);

	},

	selectTab: function (search) {

		$('a[href^=#' + search.service + ']').tab('show');

	},

	_getService: function (tab) {

		return $(tab).data('service');

	}

});