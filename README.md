# Backbone.jsでSingle page アプリケーションを作る方法
### How to build single page application with Backbone.js

=================
## <a name='mokuji'>目次</a>
1. [はじめに](#intro)
1. [ワイアーフレーム](#wireframe)
1. [ページ構成・使用ライブラリ](#pageStructure)
1. [View統治ポリシー](#viewManagePolicies)
1. [ワイアーフレーム作成](#makeWireframe)
1. [イベント統治ポリシー](#eventManagePolicies)
1. [SearchBarからHistoryへのイベント伝播](#searchToHistory)
1. [HistoryからSearchResultへのイベント伝播](#historyToResult)
1. [SearchBarからSearchResultへのイベント伝播](#searchToResult)
1. [Tabから他のViewへのイベント伝播](#tabToOther)
1. [仕上げ](#finish)
1. [まとめ](#summary)
 
## <a name='intro'>はじめに</a>

Backbone.jsでアプリケーションを作成した際に、Viewが大きくなるという経験をしたことがある方も多いと思います。Viewが肥大化した場合、私達はViewをある単位の塊りで分割しようと試みるのですが、どのように分割するのが最善かという事は常に頭を悩ませるポイントです。

さらに、Viewを細かく分割した場合、それらをどのように結合してアプリケーションを作成するのが最善かという、新しい悩みも生まれます。

このチュートリアルでは、これらView分割に起因する問題についての私なりの最善策です。もちろんBackbone.jsでアプリケーションを作る方法は一つではありませし、View以外にまつわる問題が存在することも事実です。今回はそれら別の問題があることも認めつつ、Backbone.jsでアプリケーションを作る上で、まず最初に直面するView分割と結合に重点を置いて説明します。

## <a name='wireframe'>ワイアーフレーム</a>

作成するアプリケーションは幾つかのViewで構成されます。

* SearchBar：Webサービスに対してキーワード検索する。検索した場合、Historyに履歴が追加され、Resultsに結果が表示される。
* History：検索履歴。検索履歴をクリックすることで再検索することができる。
* Tab：Resultに表示する検索サービスを切り替えることができる。
* Result：検索結果を表示する。

ワイアーフレームのイメージは次の通りです。

<img src="./img/wireframe.png">

## <a name='pageStructure'>ページ構成</a>

### ページ構成・使用ライブラリ

ページ構成は以下の通りです。


### 使用ライブラリ

以下のライブラリを使用しています。

* Backbone.js
* Underscore.js
* jQuery
* backbone.localStorage.js
* moment.js
* handlebars.js（任意）

デザインはBootstrapです。

####　補足

テンプレートエンジンにhandlebars.jsを利用しています。
こちらはUnderscore.jsのtemplateや他のテンプレートエンジンで代用することも可能です。

また、CSSプリプロセッサにStylusを利用していますが、この説明ではコンパイル後のピュアなCSSをベースに話を進めていきます。（とは言っても、CSSがメインテーマではないため、ほとんど話には登場しません。）

これらにはビルドプロセスが必須ですので、Gruntを使ってビルドしています。
Gruntの設定については詳しく説明しませんが、Gruntfile.jsはこちらを参照してください。

## <a name='viewManagePolicies'>View統治ポリシー</a>

<img src="./img/viewPolicy.png">

## <a name='makeWireframe'>ワイアーフレーム作成</a>

**index.html**
````html
<!DOCTYPE html>
<!--[if lt IE 7 ]> <html lang="ja" class="no-js ie6"> <![endif]-->
<!--[if IE 7 ]>    <html lang="ja" class="no-js ie7"> <![endif]-->
<!--[if IE 8 ]>    <html lang="ja" class="no-js ie8"> <![endif]-->
<!--[if IE 9 ]>    <html lang="ja" class="no-js ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html lang="ja" class="no-js"> <!--<![endif]-->
<head>
  <meta charset="utf-8" />
  <meta name="description" content="" />
  <meta name="author" content="" />
  <title>How to build single page application with Backbone.js</title>
  <link href="css/main.css" rel="stylesheet" media="screen" />
</head>
<body>

  <a href="https://github.com/mitsuruog/SPA-with-Backbone.git"><img style="position: fixed; top: 0; right: 0; border: 0;z-index: 999;" src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png" alt="Fork me on GitHub"></a>
  <!--app root  -->
  <div id="app"></div>
  
  <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
  <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
  <script type="text/javascript" src="assets/js/underscore-1.4.4.js"></script>
  <script type="text/javascript" src="assets/js/backbone-0.9.10.js"></script>
  <script type="text/javascript" src="assets/js/handlebars-1.0.0-rc.3.js"></script>
 
  <script type="text/javascript" src="js/namespace.js"></script>
  <script type="text/javascript" src="js/templates/layout.js"></script>
  <script type="text/javascript" src="js/views/search_bar.js"></script>
  <script type="text/javascript" src="js/views/tabs.js"></script>
  <script type="text/javascript" src="js/views/search_results.js"></script>
  <script type="text/javascript" src="js/views/history.js"></script>
  <script type="text/javascript" src="js/views/footer.js"></script>
  <script type="text/javascript" src="js/app.js"></script> 
 
</body>
</html>
````
**js/namespace.js**
````javascript
var MyApp = {
    Models: {},
    Collections: {},
    Views: {},
    App: {},
    Templates: {}
};
````
**js/app.js**
````javascript
MyApp.App = Backbone.View.extend({

 el: '#app',

  tmpl: MyApp.Templates.layout,

  initialize: function () {

    this.$el.html(this.tmpl());

    this.history = new MyApp.Views.History({
      el: this.$el.find('#history_list')
    });

    this.searchBar = new MyApp.Views.SearchBar({
      el: this.$el.find('#header')
    });

    this.tabs = new MyApp.Views.Tabs({
      el: this.$el.find('#search_results')
    });

    this.footer = new MyApp.Views.Footer({
      el: this.$el.find('#footer')
    });

  }

});

new MyApp.App();
````
**js/views/search_bar.js**
````javascript
MyApp.Views.SearchBar = Backbone.View.extend({

  tmpl: MyApp.Templates.search_bar,

  initialize: function() {
    this.$el.html(this.tmpl());
  }

});
````

**js/views/history.js**
````javascript
MyApp.Views.History = Backbone.View.extend({

 tmpl: MyApp.Templates.history,

  initialize: function () {
    this.$el.html(this.tmpl());
  }

});
````

**js/views/tabs.js**
````javascript
MyApp.Views.Tabs = Backbone.View.extend({

 tmpl: MyApp.Templates.tabs,

  initialize: function () {
    
    this.$el.html(this.tmpl());

    this.twitters = new MyApp.Views.SearchResults({
      el: this.$el.find('#twitter_list'),
      tmpl: MyApp.Templates.twitter
    });

    this.hotppepers = new MyApp.Views.SearchResults({
      el: this.$el.find('#hotpepper_list'),
      tmpl: MyApp.Templates.hotpepper
    });

  }

});
````

**js/views/search_result.js**
````javascript
MyApp.Views.SearchResults = Backbone.View.extend({

 initialize: function () {
    this.$el.html(this.options.tmpl());
  }

});
````

**js/views/footer.js**
````javascript
MyApp.Views.Footer = Backbone.View.extend({

  tmpl: MyApp.Templates.footer,

  initialize: function() {
    this.$el.html(this.tmpl());
  }

});
````

**hbs/layput.hbs**
````html
<header id="header-wrap">
 <div id="header-container">
    <div id="header">
    </div>
  </div>
</header>

<div id="container">

  <div id="history">
    <div id="history_title"></div>
    <div id="history_list"></div>
  </div>

  <div id="search_results">
  </div>

</div>

<footer id="footer-wrap">
  <div id="footer-container">
    <div id="footer"></div>
  </div>
</footer>
````

**hbs/*.hbs**
````html
// hbs/search_bar.hbs
Search Bar

// hbs/history.hbs
History

// hbs/tabs.hbs
Tab
<div id="twitter_list"></div>
<div id="hotpepper_list"></div>

// hbs/twitter.hbs
Twitter

// hbs/hotppeper.hbs
Hotppeper

// hbs/footer.hbs
Footer

````

**css/main.css**
````css
@charset "utf-8";
body {
  margin: 0;
  padding: 0;
}
#header-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
#header-container {
  height: 34px;
}
#header {
  width: 100%;
  margin: 0 auto;
  position: relative;
}
#container {
  margin: 0 auto;
  overflow: auto;
  padding-top: 35px;
  padding-bottom: 25px;
}
#history {
  float: left;
  width: 30%;
}
#search_results {
  float: right;
  width: 70%;
}
#footer-wrap {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
#footer-container {
  height: 24px;
}
#footer {
  width: 100%;
  margin: 0 auto;
  position: relative;
}
header,
footer {
  border: 1px solid #000;
}
````
<img src="./img/phase-1.png">

## <a name='eventManagePolicies'>イベント統治ポリシー</a>

## <a name='searchToHistory'>SearchBarからHistoryへのイベント伝播</a>

**js/app.js**
````javascript
MyApp.App = Backbone.View.extend({

  el: '#app',

  tmpl: MyApp.Templates.layout,

  initialize: function () {

    //Mediator作成
    MyApp.mediator = {};
    _.extend(MyApp.mediator, Backbone.Events);

    this.$el.html(this.tmpl());

    this.history = new MyApp.Views.History({
      el: this.$el.find('#history_list'),
      searches: new MyApp.Collections.SearchHistoryList()
    });

//some...

  }

});

new MyApp.App();
````

**js/views/search_bar.js**
````javascript
MyApp.Views.SearchBar = Backbone.View.extend({

  tmpl: MyApp.Templates.search_bar,

  events: {
    'click #btn-search': 'search'
  },
  
  //some...
  
  search: function(e){
    
    var $checked = this.$el.find('input[type=radio]:checked'),
      query = $('#query').val(),
      service = $checked.val(),
      search = {};
    
    e.preventDefault();
    
    search.query = query;
    search.service = service;
    
    //「search:サービス名」と「history:add」イベントを発火する
    MyApp.mediator.trigger('search:' + service + ' history:add', search);
    
  }

});
````

**js/views/search_bar.js**
````javascript
MyApp.Views.History = Backbone.View.extend({

  tmpl: MyApp.Templates.history,

  //Localレベルイベントの定義
  events: {
    'click .btn_delete': 'removeHistory'
  },

  initialize: function () {

    _.bindAll(this);

    this.searches = this.options.searches;

    this.searches.fetch();
    this.render();

    //Globalレベルイベントをバインド
    MyApp.mediator.on('history:add', this.addHistory);

    //Localレベルイベントをバインド
    this.searches.on('add remove', this.render);

  },

  addHistory: function (search) {

    search.id = +new Date();
    this.searches.create(search);

  },

  removeHistory: function (e) {

    var id = this._getHistory(e).id;
    this.searches.get(id).destroy();

  },

  render: function () {

    this.$el.html(this.tmpl({
      history: this.searches.toJSON()
    }));

  },

  _getHistory: function (e) {

    var history = {},
    $target = $(e.target).closest('.history');

    history.id = $target.attr('data-id');
    history.service = $target.find('.service').text().replace(/^\(|\)$/g, '');
    history.query = $target.find('.query').text();

    return history;

  }

});
````

**js/collections/search_history_list.js**
````javascript
MyApp.Collections.SearchHistoryList = Backbone.Collection.extend({
  
  localStorage: new Backbone.LocalStorage('mitsuruog_SPA_searchHistory')
  
});
````

**hbs/search_bar.hbs**
````html
<div class="navbar navbar-inverse">
  <div class="navbar-inner">
   <a class="brand" href="#" title="How to build single page application with Backbone.js">SPA-with-Backbone.js</a>
   <div class="nav-collapse collapse navbar-inverse-collapse">
     <form class="form-search navbar-search pull-left" action="">
       <div class="input-append">
         <input type="text" name="query" id="query" value="" class="search-query" />
         <button id="btn-search" class="btn btn-inverse">
           <i class="icon-search icon-white"></i>
         </button>
       </div>
       <div id="search_types">
         <input type="radio" name="service" id="twitter" value="twitter" />
         <label for="twitter" class="inline">Twitter</label>
         <input type="radio" name="service" id="hotpepper" value="hotpepper" />
         <label for="hotpepper">Hotpepper</label>
       </div>
     </form>
   </div>
  </div>
</div>
````

**hbs/history.hbs**
````html
{{#each history}}
<ul class="history" data-id="{{this.id}}">
  <li class="history_contents">
    <span class="query">{{this.query}}</span>
    <span class="service">({{this.service}})</span>
  </li>
  <li class="history_buttons">
    <i class="icon-remove-sign icon-white btn_delete"></i>
  </li>
</ul>
{{/each}}
````

**css/main.css**
````css
 @charset  "utf-8";
body {
  margin: 0;
  padding: 0;
  color: #333;
  background: #2d335b;
}
ul,
ol {
  margin: 0;
}
 #header-wrap  {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
 #header-container  {
  height: 34px;
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0, #292c3e), color-stop(1, #13152a));
  background: -webkit-linear-gradient(top, #292c3e 0%, #13152a 100%);
  background: -moz-linear-gradient(top, #292c3e 0%, #13152a 100%);
  background: -o-linear-gradient(top, #292c3e 0%, #13152a 100%);
  background: -ms-linear-gradient(top, #292c3e 0%, #13152a 100%);
  background: linear-gradient(top, #292c3e 0%, #13152a 100%);
  color:  #bfbfbf ;
}
 #header  {
  width: 100%;
  margin: 0 auto;
  position: relative;
}
 #search_types  {
  margin-left: 10px;
  display: inline;
}
.search-query {
  -webkit-border-radius: 4px;
  border-radius: 4px;
}
.navbar-inverse .navbar-inner {
  background: transparent;
  border: none;
}
 #container  {
  margin: 0 auto;
  overflow: auto;
  padding-top: 35px;
  padding-bottom: 25px;
}
 #history  {
  float: left;
  width: 30%;
  background: #2d335b;
  color:  #aaa ;
}
 #history_title  {
  background-color: #1f203b;
  height: 23px;
  padding: 4px;
}
.history {
  border-bottom: 1px solid rgba(0,0,0,0.2);
  -webkit-box-shadow: rgba(170,170,170,0.3) 0 1px 0 inset;
  box-shadow: rgba(170,170,170,0.3) 0 1px 0 inset;
  padding: 9px 4px;
}
.history:hover {
  background-color: #1f203b;
}
.history .btn_delete {
  visibility: hidden;
}
.history:hover .btn_delete {
  visibility: visible;
}
.history {
  zoom: 1;
}
.history:before,
.history:after {
  content: "";
  display: table;
}
.history:after {
  clear: both;
}
 #history_list  li {
  list-style-type: none;
  float: left;
}
.history_buttons {
  float: right !important;
}
 #search_results  {
  float: right;
  width: 70%;
  background:  #f9f9f9 ;
}
 #footer-wrap  {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
 #footer-container  {
  height: 24px;
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0, #292c3e), color-stop(1, #13152a));
  background: -webkit-linear-gradient(top, #292c3e 0%, #13152a 100%);
  background: -moz-linear-gradient(top, #292c3e 0%, #13152a 100%);
  background: -o-linear-gradient(top, #292c3e 0%, #13152a 100%);
  background: -ms-linear-gradient(top, #292c3e 0%, #13152a 100%);
  background: linear-gradient(top, #292c3e 0%, #13152a 100%);
  color:  #bfbfbf ;
}
 #footer  {
  width: 100%;
  margin: 0 auto;
  position: relative;
}
````

## <a name='historyToResult'>HistoryからSearchResultへのイベント伝播</a>

## <a name='searchToResult'>SearchBarからSearchResultへのイベント伝播</a>

## <a name='tabToOther'>Tabから他のViewへのイベント伝播</a>

## <a name='finish'>仕上げ</a>

## <a name='summary'>まとめ</a>
