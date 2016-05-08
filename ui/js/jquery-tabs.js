!function(e,t){"use strict";e.fn.tabs=function(i){var n=e.type(i);if("string"===n){var s=Array.prototype.slice.call(arguments).slice(1);return this.each(function(){var t=e(this).data("ui");if(!t||!t.iTab)throw new Error("UI:tabs does not init...");t.iTab[i].apply(t.iTab,s)}),!0}i=e.extend(!0,{height:80,tabWidth:160,contentFit:!1,eventType:"click",border:!0,icon:null,selected:0,position:"north"},i);var r=Array.prototype.slice,a=Object.prototype.toString,h=function(e){return a.call(e).slice(8,-1)},l=function(e){var t="",i=[],n=null,s=null,r=l,a=h(e);if("Array"===a)for(var c in e)t+=r(e[c]);else if("String"===a||"Number"==a)t=e;else if("Object"===a&&e.name){if(n=e.attr,s=e.children,i=[],n)for(var o in n)if("className"!=o){if("style"==o){var d=n[o],p=h(d);if(n[o]="","Object"==p)for(var u in d)n[o]+=u+":"+d[u]+";";else"String"==p&&(n[o]=d)}i.push(""+o+'="'+n[o]+'"')}else i.push('class="'+n[o]+'"');i.length&&i.unshift(""),s&&"Array"!==h(s)&&(s=[s]),t="<"+e.name+i.join(" ")+">"+(s?r(s):"")+"</"+e.name+">"}else t="";return t},c=function(e){var t=[];try{t=r.call(e)}catch(i){for(var n=0,s=e.length-1;s>=n;n++)t.push(e[n])}return t};Array.prototype.indexOf=Array.prototype.indexOf||function(t,i){return e.inArray(t,this,i)},i.renders=r.call(this);var o=function(e,t){return new o.prototype.init(e,t)};return o.prototype={init:function(t,i){this.render=t,this.userOptions=i,this.headers=e(t.children[0].children).toArray(),this.panels=e(t.children[1].children).toArray(),e(this.panels).addClass("tab-content");var n=this,s=e(t);if(s.addClass("tab-ctn"),this.headers.length&&(e(this.headers[i.selected]).addClass("current"),e(this.panels).parent().show().end().hide().eq(i.selected).show()),i.contentFit){var r=t.children[1].offsetHeight-t.children[1].clientHeight,a=t.parentNode;e(window).on("resize.tab-content-fit",function(){e(t.children[1]).css({height:a.clientHeight-r-t.children[0].offsetHeight+"px"})}).resize()}e(t.children[0]).on({click:function(){n.select(n.headers.indexOf(this))}},"li").on({click:function(){return n.close(n.headers.indexOf(this.parentNode.parentNode)),!1}},".closer")},add:function(n,s){var r=this.render,a=this.headers.length,h="before";s===t&&(s=a),0>s&&(s=0),a?s>=a&&(s=a,h="after"):(s=0,e(r.children[1]).show());var o=l({name:"li",children:{name:"a",attr:{href:"javascript:"},children:function(){var e=['<!--[if lt IE 8]><p class="iecp"></p><![endif]-->','<span class="title">'+n.title+"</span>"];return n.icon&&e.unshift(l({name:"span",attr:{className:"icon icon-"+n.icon}})),n.closable&&e.push(l({name:"span",attr:{className:"closer"},children:"&times;"})),e}()}}),d=e(l({name:"div",attr:{className:"tab-content",style:{display:"none"}}}));if(this.headers.length){var p="after"===h?s-1:s;e(this.headers[p])[h](o),e(this.panels[p])[h](d.append(n.content))}else e(r.children[0]).html(o),e(r.children[1]).html(d.append(n.content));this.headers=c(r.children[0].children),this.panels=c(r.children[1].children),s<=this.userOptions.selected&&this.userOptions.selected++,n.select&&this.select(s);var u=this.render;return i.contentFit&&(u.children[1].style.height=u.parentNode.offsetHeight-u.children[0].offsetHeight-1+"px"),this},remove:function(e){this.close(e)},close:function(e){var t=this.headers.splice(e,1)[0],i=this.panels.splice(e,1)[0];t.parentNode.removeChild(t),i.parentNode.removeChild(i);var n=this.userOptions;return n.selected==e?this.headers.length?this.select(e-1>0?e-1:0):n.selected=null:n.selected>e&&n.selected--,this},select:function(t){var i=this.userOptions.selected;return 0>t||t>this.headers.length-1?!1:(e(this.headers[i]).removeClass("current"),e(this.headers[t]).addClass("current"),e(this.panels[i]).hide(),e(this.panels[t]).show(),this.userOptions.selected=t,this.userOptions.onSelect&&this.userOptions.onSelect(this.panels[t],t),this)}},o.prototype.init.prototype=o.prototype,this.each(function(){var t=e(this),n=o(this,e.extend(!0,{},i)),s=t.data("ui");s?s.iTab=n:t.data("ui",{iTab:n})})}}(jQuery);