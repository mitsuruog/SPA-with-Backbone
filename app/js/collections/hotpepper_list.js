MyApp.Collections.HotpepperList = Backbone.Collection.extend({

	url: 'http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=7eda427a8147bf43',

	model: MyApp.Models.Hotpepper,

	search: function (param) {
		//    var _this = this;
		//    
		//    $.ajax({
		//      url: this.urlRoot,
		//      dataType: 'jsonp',
		//      data: {
		//        order: 4,
		//        format: 'jsonp',
		//        keyword: param.query//encodeURIComponent(param.query)
		//      }
		//    }).done(function(data){
		//      
		//      _this.reset(data.results);
		//      
		//    }).fail(function(){
		//      
		//      MyApp.Mediator.trigger('error', arguments);
		//      
		//    });

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