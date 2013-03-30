MyApp.Models.Twitter = Backbone.Model.extend({

	set: function (attrs, options) {

		if (attrs.text) {
			attrs.text_linked = twttr.txt.autoLink(attrs.text);
		}
		if (attrs.created_at) {
			attrs.created_at = moment(attrs.created_at).format('YYYY/MM/DD HH:MM:SS');
		}

		return Backbone.Model.prototype.set.call(this, attrs, options);
	}

});