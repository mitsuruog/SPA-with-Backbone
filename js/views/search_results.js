MyApp.Views.SearchResults = Backbone.View.extend({

	initialize: function () {
		this.$el.html(this.options.tmpl());
	}

});
