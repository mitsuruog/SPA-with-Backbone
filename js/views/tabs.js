MyApp.Views.Tabs = Backbone.View.extend({

	tmpl: MyApp.Templates.tabs,
	
	events: {
		'click #tab>li': 'changeTab'
	},

	/**
	 * 初期化
	 * @method initialize
	 * @type {Function}
	 */
	initialize: function () {

		_.bindAll(this);

		this.$el.html(this.tmpl());

		MyApp.Mediator.on('select:tab change:tab', this.selectTab);

	},
		
	changeTab: function(e){
		var service = this._getService(e.currentTarget);
		MyApp.Mediator.trigger('change:tab', service);
	},
	
	selectTab: function (service) {

		$('a[href^=#'+ service +']').tab('show');

	},
	
	_getService: function(tab){
		return $(tab).data('service');
	}

});