MyApp.Views.Tabs = Backbone.View.extend({

	tmpl: MyApp.Templates.tabs,

	/**
	 * 初期化
	 * @method initialize
	 * @type {Function}
	 */
	initialize: function () {

		_.bindAll(this);

		this.$el.html(this.tmpl());

		MyApp.Mediator.on('select:tab', this.selectTab);

	},

	selectTab: function (param) {

		$('a[href=#'+ param.target +']').tab('show');

	}

});