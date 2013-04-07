MyApp.Views.SearchResults = Backbone.View.extend({

	initialize: function () {
		
		_.bindAll(this);

		this.collections = this.options.collections;
		this.tmpl = this.options.tmpl;
		this.service = this.options.service;

		MyApp.mediator.on('search:' + this.service, this.search);

		this.listenTo(this.collections, 'reset', this.render);
		
	},
	
	
search: function(search){

	this.collections.search(search);

},

render: function () {

		this.$el.html(this.tmpl({
			models: this.collections.toJSON()
		}));

	}
	
});
