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
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n<ul class=\"history\" data-id=\""
    + escapeExpression(((stack1 = depth0.id),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n  <li class=\"history_contents\">\r\n    <span class=\"query\">"
    + escapeExpression(((stack1 = depth0.query),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\r\n    <span class=\"service\">("
    + escapeExpression(((stack1 = depth0.service),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")</span>\r\n  </li>\r\n  <li class=\"history_buttons\">\r\n    <i class=\"icon-remove-sign icon-white btn_delete\"></i>\r\n  </li>\r\n</ul>\r\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.history, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["MyApp"]["Templates"]["hotpepper"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "Hotpepper";
  });

this["MyApp"]["Templates"]["layout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<header id=\"header-wrap\">\r\n	<div id=\"header-container\">\r\n		<div id=\"header\">\r\n		</div>\r\n	</div>\r\n</header>\r\n\r\n<div id=\"container\">\r\n\r\n	<div id=\"history\">\r\n		<div id=\"history_title\">Search History</div>\r\n		<div id=\"history_list\"></div>\r\n	</div>\r\n\r\n	<div id=\"search_results\">\r\n	</div>\r\n\r\n</div>\r\n\r\n<footer id=\"footer-wrap\">\r\n	<div id=\"footer-container\">\r\n		<div id=\"footer\"></div>\r\n	</div>\r\n</footer>";
  });

this["MyApp"]["Templates"]["search_bar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"navbar navbar-inverse\">\r\n  <div class=\"navbar-inner\">\r\n   <a class=\"brand\" href=\"#\" title=\"How to build single page application with Backbone.js\">SPA-with-Backbone.js</a>\r\n   <div class=\"nav-collapse collapse navbar-inverse-collapse\">\r\n     <form class=\"form-search navbar-search pull-left\" action=\"\">\r\n       <div class=\"input-append\">\r\n         <input type=\"text\" name=\"query\" id=\"query\" value=\"\" class=\"search-query\" />\r\n         <button id=\"btn_search\" class=\"btn btn-inverse\">\r\n           <i class=\"icon-search icon-white\"></i>\r\n         </button>\r\n       </div>\r\n       <div id=\"search_types\">\r\n         <input type=\"radio\" name=\"service\" id=\"twitter\" value=\"twitter\" />\r\n         <label for=\"twitter\" class=\"inline\">Twitter</label>\r\n         <input type=\"radio\" name=\"service\" id=\"hotpepper\" value=\"hotpepper\" />\r\n         <label for=\"hotpepper\">Hotpepper</label>\r\n       </div>\r\n     </form>\r\n   </div>\r\n  </div>\r\n</div>";
  });

this["MyApp"]["Templates"]["tabs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "Tab\r\n<div id=\"twitter_list\"></div>\r\n<div id=\"hotpepper_list\"></div>";
  });

this["MyApp"]["Templates"]["twitter"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "Twitter";
  });