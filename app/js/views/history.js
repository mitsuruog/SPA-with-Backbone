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
  initialize: function() {

    _.bindAll(this);

    this.searches = this.options.searches;

    this.searches.fetch();

    //TODO 本当はrenderで統一したい。
    this.$el.html(this.tmpl({history: this.searches.toJSON()}));

    MyApp.Mediator.on('history:add', this.addHistory);

    this.searches.on('add remove', this.render);

  },

  /**
   * 検索履歴追加
   * @method addHistory
   * @type {Function}
   * @param {Object} search searchModelオブジェクト
   */
  addHistory: function(search) {

    search.id = +new Date();
    this.searches.create(search);

  },

  /**
   * 検索履歴削除
   * @method removeHistory
   * @type {Function}
   * @param {Object} e Mouseイベント
   */
   removeHistory: function(e) {

    var id = this._getSearch(e).id;
    this.searches.get(id).destroy();

  },

  /**
   * 検索履歴選択
   * @method selectHistory
   * @type {Function}
   * @param {Object} e Mouseイベント
   */
   selectHistory: function(e) {

    var search = this._getSearch(e);
    MyApp.Mediator.trigger('search:history:' + search.service, search);

  },

  /**
   * レンダリング
   * @method render
   * @type {Function}
   */
  render: function() {

    this.$el.html(this.tmpl(this.searches.models));

  },

  /**
   * 検索オブジェクト取得
   * @private
   * @method _getSearch
   * @type {Function}
   * @param {Object} e Mouseイベント
   */
   _getSearch: function(e) {

    var search = {},
    $target = $(e.target).closest('.search');

    search.id = $target.attr('data-id');
    search.service = $target.find('.service').text().replace(/^\(|\)$/g, '');
    search.query = $target.find('.query').text();

    return search;

  }

});