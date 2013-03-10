/**
 * 検索履歴View
 *
 * @class MyApp.Views.History
 */
MyApp.Views.History = Backbone.View.extend({

	/**
	 * 検索履歴テンプレート
	 * @method tmpl
	 * @type {Function}
	 */
	tmpl: MyApp.Templates.history,

	events: {
		'click .btn-delete': 'removeHistory',
		'click .query': 'selectHistory',
		'click .service': 'selectHistory'
	},

	/**
	 * 初期化
	 * @method initialize
	 * @type {Function}
	 */
	initialize: function () {

		_.bindAll(this);

		this.searches = this.options.searches;

		this.searches.fetch();
		this.render();
		
		MyApp.Mediator.on('history:add', this.addHistory);
		MyApp.Mediator.on('change:tab', this.searchCurrentHistory);

		this.searches.on('add remove', this.render);

	},

	/**
	 * 検索履歴追加
	 * @method addHistory
	 * @type {Function}
	 * @param {Object} search searchModelオブジェクト
	 */
	addHistory: function (search) {

		search.id = +new Date();
		this.searches.create(search);

	},

	/**
	 * 検索履歴削除
	 * @method removeHistory
	 * @type {Function}
	 * @param {Object} e Mouseイベント
	 */
	removeHistory: function (e) {

		var id = this._getHistory(e).id;
		this.searches.get(id).destroy();

	},

	/**
	 * 検索履歴選択
	 * @method selectHistory
	 * @type {Function}
	 * @param {Object} e Mouseイベント
	 */
	selectHistory: function (e) {

		var history = this._getHistory(e);
		MyApp.Mediator.trigger('search:history:' + history.service, history);

	},

	/**
	 * レンダリング
	 * @method render
	 * @type {Function}
	 */
	render: function () {

		this.$el.html(this.tmpl({
			history: this.searches.toJSON()
		}));

	},
	
	searchCurrentHistory: function(service){
		
		var historys =[],
				history;
				
		historys = this.searches.where({service: service});
		if(historys.length){
			
			history = historys[0].attributes;
			MyApp.Mediator.trigger('search:history:' + history.service, history);
		
		}
		MyApp.Mediator.trigger('select:tab:', service);

	},

	/**
	 * 検索履歴オブジェクト取得
	 * @private
	 * @method _getHistory
	 * @type {Function}
	 * @param {Object} e Mouseイベント
	 */
	_getHistory: function (e) {

		var history = {},
		$target = $(e.target).closest('.history');

		history.id = $target.attr('data-id');
		history.service = $target.find('.service').text().replace(/^\(|\)$/g, '');
		history.query = $target.find('.query').text();

		return history;

	}

});