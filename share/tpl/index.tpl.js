define({"index.tpl":"<%\nvar list = [\n{'name':'CSS'       , 'url':'#/css'},\n{'name':'UI'        , 'url':'#/ui'},\n{'name':'Article'   , 'url':'#/article'},\n{'name':'Books'     , 'url':'#/books'},\n{'name':'View Book' , 'url':'#/books/view/1'},\n{'name':'Link'      , 'url':'./ui/html/demos/complex/seaShell.html'}\n];\n%><div class=\"imgc home-page\"><div class=\"imge navi-box\"><h1>Share From Water</h1><% list.forEach(function(one){ %><a href=\"<%= one['url'] %>\"><%= one['name'] %>&#187;</a><% }); %></div>\x3c!--[if lt IE 8]><p class=\"iecp\"></p><![endif]--\x3e</div>"});