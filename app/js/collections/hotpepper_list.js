MyApp.Collections.HotpepperList = Backbone.Collection.extend({

	url: 'http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=7eda427a8147bf43',

	model: MyApp.Models.Hotpepper,

	search: function (param) {

		this.fetch({
			data: {
				order: 4,
				format: 'jsonp',
				keyword: param.query
			},
			dataType: 'jsonp'
		});

	},

	parse: function (response, options) {

		this.response = response;

		return response.results.shop;

	}

});