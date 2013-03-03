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

this["MyApp"]["Templates"]["layout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<header id=\"search_bar\"></header>\n<div id=\"main\" class=\"container-fluid\">\n  <div class=\"row-fluid\">\n    <div id=\"history\" class=\"span2\"></div>\n    <div id=\"search_results\" class=\"span10\"></div>\n  </div>\n</div>\n<footer id=\"footer\" class=\"footer\"></footer>";
  });

this["MyApp"]["Templates"]["search_bar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"navbar-inner\">\n    <div class=\"container\">\n      <a class=\"brand\" href=\"#\">SPA-with-backbone.js</a>\n      <div class=\"nav-collapse collapse navbar-inverse-collapse\">\n        <form class=\"form-search navbar-search pull-left\" action=\"\">\n          <div class=\"input-append\">\n            <input type=\"text\" name=\"query\" id=\"query\" value=\"\" class=\"search-query\" />\n            <button id=\"btn-search\" class=\"btn btn-primary\">検索</button>\n          </div>\n          <input type=\"radio\" name=\"service\" id=\"twitter\" value=\"twitter\" />\n          <label for=\"twitter\" class=\"inline\">Twitter</label>\n          <input type=\"radio\" name=\"service\" id=\"amazon\" value=\"amazon\" />\n          <label for=\"amazon\">amazon</label>\n        </form>\n        <ul class=\"nav pull-right\">\n          <li>\n            <a href=\"#\">About me</a>\n          </li>\n          <li>\n            <a href=\"#\">Link</a>\n          </li>\n          <li>\n            <a href=\"#\">Link</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>";
  });

this["MyApp"]["Templates"]["tabs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<ul class=\"nav nav-tabs\">\n  <li class=\"active\" data-toggle=\"tab\">\n    <a href=\"#twitter_list\">Twitter</a>\n  </li>\n  <li class=\"\" data-toggle=\"tab\">\n    <a href=\"#amazon_list\">Amazon</a>\n  </li>\n</ul>\n<div class=\"tab-content\">\n  <div class=\"tab-pane active\" id=\"twitter_list\"></div>\n  <div class=\"tab-pane\" id=\"amazon_list\"></div>\n</div>\n      ";
  });

this["MyApp"]["Templates"]["twitter"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li>\n      <span class=\"img\">\n        <img src=\""
    + escapeExpression(((stack1 = depth0.profile_image_url),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n      </span>\n      <span class=\"author\">\n        <a href=\"https://twitter.com/"
    + escapeExpression(((stack1 = depth0.from_user),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=\"_blank\">@"
    + escapeExpression(((stack1 = depth0.from_user),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n\n        <span class=\"body\">"
    + escapeExpression(((stack1 = depth0.text_linked),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n\n        <span class=\"time\"><a href=\"https://twitter.com/"
    + escapeExpression(((stack1 = depth0.from_user),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/status/"
    + escapeExpression(((stack1 = depth0.id_str),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=\"_blank\">"
    + escapeExpression(((stack1 = depth0.created_at),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n      </span>\n    </li>\n    ";
  return buffer;
  }

  buffer += "<ul>\n  ";
  stack1 = helpers.each.call(depth0, depth0.tweet, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>";
  return buffer;
  });