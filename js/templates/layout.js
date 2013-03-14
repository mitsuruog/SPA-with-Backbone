this["MyApp"] = this["MyApp"] || {};
this["MyApp"]["Templates"] = this["MyApp"]["Templates"] || {};

this["MyApp"]["Templates"]["footer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "Footer";
  });

this["MyApp"]["Templates"]["history"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "History";
  });

this["MyApp"]["Templates"]["hotpepper"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "Hotpepper";
  });

this["MyApp"]["Templates"]["layout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<header id=\"header-wrap\">\r\n	<div id=\"header-container\">\r\n		<div id=\"header\">\r\n		</div>\r\n	</div>\r\n</header>\r\n\r\n<div id=\"container\">\r\n\r\n	<div id=\"history\">\r\n		<div id=\"history_title\"></div>\r\n		<div id=\"history_list\"></div>\r\n	</div>\r\n\r\n	<div id=\"search_results\">\r\n	</div>\r\n\r\n</div>\r\n\r\n<footer id=\"footer-wrap\">\r\n	<div id=\"footer-container\">\r\n		<div id=\"footer\"></div>\r\n	</div>\r\n</footer>";
  });

this["MyApp"]["Templates"]["search_bar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "Search Bar";
  });

this["MyApp"]["Templates"]["tabs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "Tab\r\n<div id=\"twitter_list\"></div>\r\n<div id=\"hotpepper_list\"></div>\r\n";
  });

this["MyApp"]["Templates"]["twitter"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "Twitter";
  });