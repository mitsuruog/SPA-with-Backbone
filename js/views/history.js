MyApp.Views.History = Backbone.View.extend({

	tmpl: MyApp.Templates.history,

	initialize: function () {
		this.$el.html(this.tmpl());
	}

});
