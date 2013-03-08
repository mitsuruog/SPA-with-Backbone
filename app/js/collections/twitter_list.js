MyApp.Collections.TwitterList = Backbone.Collection.extend({

	url: 'http://search.twitter.com/search.json',

	model: MyApp.Models.Twitter,

	search: function (param) {

		this.fetch({
			data: {
				q: encodeURIComponent(param.query),
			},
			dataType: 'jsonp'
		});

	},

	parse: function (response, options) {

		this.response = response;

		return response.results;

	}

});