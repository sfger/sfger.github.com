!function(e,t){"use strict";e.fn.accordion=function(t){var i=e.type(t);if("string"===i)return this.each(function(){var i=e(this).data("ui");if(!i||!i.iAccordion)throw new Error("UI:accordion does not init...");i.iAccordion[t]()}),!0;t=e.extend(!0,{data:[]},t);var n=function(e,t){return new n.prototype.init(e,t)};light.util.getType;return n.prototype={init:function(t,i){var n=this,o=e(t);o.addClass("accordion-container"),this.userOptions=i,this.render=t,t.children||(t.innerHTML="<ul></ul>"),this.titles=[];var s=t.children[0],c=0;if(s.children&&(c=s.children.length))for(var d=0;c>d;d++)if(this.titles.push(s.children[d].children[0]),d===i.selected){this.selectedPanel=s.children[d].children[1];var r=e(this.selectedPanel);document.documentMode<7&&r.css({display:"block"}),r.prev().addClass("selected"),i.fitContent?(this.selectedAnimateHeight=t.offsetHeight-c*s.children[0].offsetHeight,r.css("height",this.selectedAnimateHeight)):r.css("height","auto")}e("#test").delegate(".title",{click:function(){var t=this.parentNode.children[1],o=n.selectedPanel;e(o);o&&e(o.parentNode.children[0]).removeClass("selected"),t!=o?(e(this).addClass("selected"),i.fitContent?e(t).animate({height:n.selectedAnimateHeight},{duration:210,start:function(){document.documentMode<7&&e(this).css({display:"block",overflow:"auto"})}}):e(t).css({display:"none",height:"auto"}).slideDown(210),n.selectedPanel=t):n.selectedPanel=null,o&&e(o).animate({height:0},{duration:210,complete:function(){document.documentMode<7&&e(this).css({display:"none",height:1,overflow:"hidden"})}})}})}},n.prototype.init.prototype=n.prototype,this.each(function(){var i=e(this),o=n(this,e.extend(!0,{},t)),s=i.data("ui");s?s.iAccordion=o:i.data("ui",{iAccordion:o})})}}(jQuery);