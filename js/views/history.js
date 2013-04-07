MyApp.Views.History = Backbone.View.extend({

	tmpl: MyApp.Templates.history,

	events: {
		'click .btn_delete': 'removeHistory'
	},

	initialize: function () {

		_.bindAll(this);

		this.searches = this.options.searches;

		this.searches.fetch();
		this.render();

		MyApp.mediator.on('search', this.addHistory);

		this.listenTo(this.searches, 'add remove', this.render);

	},

	addHistory: function (search) {

		search.id = +new Date();
		this.searches.create(search);

	},

	removeHistory: function (e) {

		var id = this._getHistory(e).id;
		this.searches.get(id).destroy();

	},
	
	render: function () {

		this.$el.html(this.tmpl({
			history: this.searches.toJSON()
		}));

	},
	
	_getHistory: function (e) {

		var history = {},
		$target = $(e.target).closest('.history');

		history.id = $target.attr('data-id');
		history.service = $target.find('.service').text().replace(/^\(|\)$/g, '');
		history.query = $target.find('.query').text();

		return history;

	}

});