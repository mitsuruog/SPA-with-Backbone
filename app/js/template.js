this["MyApp"] = this["MyApp"] || {};
this["MyApp"]["Templates"] = this["MyApp"]["Templates"] || {};

this["MyApp"]["Templates"]["history"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n<ul class=\"search\" data-id=\""
    + escapeExpression(((stack1 = depth0.id),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"> \r\n  <li class=\"query\">"
    + escapeExpression(((stack1 = depth0.query),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li> \r\n  <li class=\"service\">("
    + escapeExpression(((stack1 = depth0.service),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")</li> \r\n  <li class=\"search-buttons\"> \r\n    <button class=\"btn btn-mini btn-danger btn-delete\"> \r\n      <i class=\"icon-remove-sign icon-white\"></i> \r\n    </button> \r\n  </li> \r\n</ul> \r\n";
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

  buffer += "<ul>\r\n  ";
  stack1 = helpers.each.call(depth0, depth0.models, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</ul>";
  return buffer;
  });

this["MyApp"]["Templates"]["layout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<header id=\"search_bar\"></header>\r\n<div id=\"main\" class=\"container-fluid\">\r\n  <div class=\"row-fluid\">\r\n    <div id=\"history\" class=\"span2\"></div>\r\n    <div id=\"search_results\" class=\"span10\"></div>\r\n  </div>\r\n</div>\r\n<footer id=\"footer\" class=\"footer\"></footer>";
  });

this["MyApp"]["Templates"]["search_bar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"navbar navbar-inverse navbar-fixed-top\">\r\n  <div class=\"navbar-inner\">\r\n    <div class=\"container\">\r\n      <a class=\"brand\" href=\"#\">SPA-with-backbone.js</a>\r\n      <div class=\"nav-collapse collapse navbar-inverse-collapse\">\r\n        <form class=\"form-search navbar-search pull-left\" action=\"\">\r\n          <div class=\"input-append\">\r\n            <input type=\"text\" name=\"query\" id=\"query\" value=\"\" class=\"search-query\" />\r\n            <button id=\"btn-search\" class=\"btn btn-primary\">検索</button>\r\n          </div>\r\n          <input type=\"radio\" name=\"service\" id=\"twitter\" value=\"twitter\" />\r\n          <label for=\"twitter\" class=\"inline\">Twitter</label>\r\n          <input type=\"radio\" name=\"service\" id=\"hotpepper\" value=\"hotpepper\" />\r\n          <label for=\"hotpepper\">Hotpepper</label>\r\n        </form>\r\n        <ul class=\"nav pull-right\">\r\n          <li>\r\n            <a href=\"#\">About me</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\">Link</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\">Link</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
  });

this["MyApp"]["Templates"]["tabs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<ul id=\"tab\" class=\"nav nav-tabs\">\r\n  <li class=\"active\" data-toggle=\"tab\">\r\n    <a href=\"#twitter_list\">Twitter</a>\r\n  </li>\r\n  <li class=\"\" data-toggle=\"tab\">\r\n    <a href=\"#hotpepper_list\">Hotpepper</a>\r\n  </li>\r\n</ul>\r\n<div id=\"tab-content\" class=\"tab-content\">\r\n  <div class=\"tab-pane active\" id=\"twitter_list\"></div>\r\n  <div class=\"tab-pane\" id=\"hotpepper_list\"></div>\r\n</div>\r\n      ";
  });

this["MyApp"]["Templates"]["twitter"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n    <li>\r\n      <span class=\"img\">\r\n        <img src=\""
    + escapeExpression(((stack1 = depth0.profile_image_url),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n      </span>\r\n      <span class=\"author\">\r\n        <a href=\"https://twitter.com/"
    + escapeExpression(((stack1 = depth0.from_user),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=\"_blank\">@"
    + escapeExpression(((stack1 = depth0.from_user),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\r\n        <span class=\"body\">"
    + escapeExpression(((stack1 = depth0.text_linked),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\r\n        <span class=\"time\"><a href=\"https://twitter.com/"
    + escapeExpression(((stack1 = depth0.from_user),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/status/"
    + escapeExpression(((stack1 = depth0.id_str),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=\"_blank\">"
    + escapeExpression(((stack1 = depth0.created_at),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\r\n      </span>\r\n    </li>\r\n    ";
  return buffer;
  }

  buffer += "<ul>\r\n  ";
  stack1 = helpers.each.call(depth0, depth0.models, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</ul>";
  return buffer;
  });