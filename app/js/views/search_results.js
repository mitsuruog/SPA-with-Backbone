MyApp.Views.SearchResults = Backbone.View.extend({

	initialize: function (options) {

		_.bindAll(this);

		this.collections = options.collections;
		this.tmpl = options.tmpl;
		this.service = options.service;

		MyApp.Mediator.on('search:add:' + this.service + ' search:history:' + this.service, this.search);

		this.collections.on('reset', this.render);
	},

	search: function (search) {

		this.collections.search(search);

	},

	render: function () {

		this.$el.html(this.tmpl({
			models: this.collections.toJSON()
		}));
		
		MyApp.Mediator.trigger('select:tab', this.$el.data('service'));

	}

});