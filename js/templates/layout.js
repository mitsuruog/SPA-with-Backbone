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
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n    <li>\r\n      <span class=\"img\">\r\n        <img src=\""
    + escapeExpression(((stack1 = depth0.logo_image),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n      </span>\r\n      <span class=\"shop\">\r\n        <a href=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.urls),stack1 == null || stack1 === false ? stack1 : stack1.pc)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=\"_blank\">"
    + escapeExpression(((stack1 = depth0.name),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\r\n        <span class=\"catch\">"
    + escapeExpression(((stack1 = depth0['catch']),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\r\n        <span class=\"access\">"
    + escapeExpression(((stack1 = depth0.access),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\r\n        <span class=\"address\">"
    + escapeExpression(((stack1 = depth0.address),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\r\n      </span>\r\n    </li>\r\n    ";
  return buffer;
  }

  buffer += "<ul id=\"hotpepper_list\">\r\n  ";
  stack1 = helpers.each.call(depth0, depth0.models, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</ul>";
  return buffer;
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
  


  return "<ul id=\"tab\" class=\"nav nav-tabs\">\r\n  <li class=\"active\" data-toggle=\"tab\" data-service=\"twitter\">\r\n    <a href=\"#twitter_list\">Twitter</a>\r\n  </li>\r\n  <li class=\"\" data-toggle=\"tab\" data-service=\"hotpepper\">\r\n    <a href=\"#hotpepper_list\">Hotpepper</a>\r\n  </li>\r\n</ul>\r\n<div id=\"tab-content\" class=\"tab-content\">\r\n  <div class=\"tab-pane active\" id=\"twitter_list\" data-service=\"twitter\"></div>\r\n  <div class=\"tab-pane\" id=\"hotpepper_list\" data-service=\"hotpepper\"></div>\r\n</div>";
  });

this["MyApp"]["Templates"]["twitter"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n    <li>\r\n      <span class=\"img\">\r\n        <img src=\""
    + escapeExpression(((stack1 = depth0.profile_image_url),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n      </span>\r\n      <span class=\"author\">\r\n        <a href=\"https://twitter.com/"
    + escapeExpression(((stack1 = depth0.from_user),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=\"_blank\">@"
    + escapeExpression(((stack1 = depth0.from_user),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></span>\r\n        <span class=\"body\">";
  stack2 = ((stack1 = depth0.text_linked),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</span>\r\n        <span class=\"time\"><a href=\"https://twitter.com/"
    + escapeExpression(((stack1 = depth0.from_user),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/status/"
    + escapeExpression(((stack1 = depth0.id_str),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=\"_blank\">"
    + escapeExpression(((stack1 = depth0.created_at),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\r\n      </span>\r\n    </li>\r\n    ";
  return buffer;
  }

  buffer += "<ul id=\"twitter_list\">\r\n  ";
  stack1 = helpers.each.call(depth0, depth0.models, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</ul>";
  return buffer;
  });