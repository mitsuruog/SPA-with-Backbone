MyApp.Models.Hotpepper = Backbone.Model.extend({

	set: function (attrs, options) {

		if (attrs.hoge) {
			//nattrs.hoge = some...;
		}

		return Backbone.Model.prototype.set.call(this, attrs, options);

	}

});