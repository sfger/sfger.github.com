$.fn.tree=function(e){var t=$.type(e);if("string"===t){var n=Array.prototype.slice.call(arguments).slice(1),i=[];return this.each(function(){var t=$(this).data("ui");if(!t||!t.iTree)throw new Error("UI:tree does not init...");i.push(t.iTree[e].apply(t.iTree,n))}),"isLeaf"==e?i[0]:this}e=$.extend(!0,{animate:{time:0},data:[]},e);var o=function(e,t){return new o.prototype.init(e,t)},r=function(t,n,i,o,a){n||(n=1),a||(i.innerHTML='<ul data-deep="0"><li class="line" style="display:block;"><a style="display:none;"><span class="title">__ROOT__</span></a></li></ul>',i=i.children[0].children[0],i.children[0].option={name:"__ROOT__",children:t});var d=document.createElement("ul");d.setAttribute("data-deep",n);for(var s=0,l=t.length-1;s<=l;s++){var c=document.createElement("span"),p=document.createElement("li"),h=document.createElement("a");d.appendChild(p),d.setAttribute("data-deep",n),p.appendChild(h),h.className="line",h.option=t[s];for(var u=t[s].children?1==n?n-2:n-1:n,m=0;m<u;m++){var g=document.createElement("span");h.appendChild(g),g.className=m===u-1?"join":"indent"}var f=document.createElement("span");if(f.className="file",h.appendChild(f),t[s].children){var v=document.createElement("span");h.appendChild(v),v.className="hit",f.className="folder",r(t[s].children,n+1,p,o,!0)}else o.push(d);if(e.checkbox){var b=document.createElement("span");b.className="checkbox"+(t[s].checked?" checkbox-all":""),h.appendChild(b)}h.appendChild(c),c.appendChild(document.createTextNode(t[s].name)),c.className="title"}i.appendChild(d)};return o.prototype={init:function(e,t){var n=this,i=window.document;["Height","Width"].forEach(function(e){n["getView"+e]=function(){var t="BackCompat"===i.compatMode?i.body:i.documentElement;return function(){return t["client"+e]}}(),n["getElement"+e]=function(t){return t&&"none"!==t.style.display?t["offset"+e]:0}});var o=[];r(t.data,1,e,o);var a=$(e.children[0]),d=$(e);if(d.addClass("tree-container"),this.userOptions=t,this.container=d.get(0),this.contents=a.get(0),$(this.contents).delegate("a",{contextmenu:function(e){if(n.userOptions.onContextmenu)return n.userOptions.onContextmenu.bind(this)(e)},click:function(e){return n.isLeaf(this)?($(n.currentElement).removeClass("current"),n.currentElement=this,$(this).addClass("current")):n.toggle(this),n.userOptions.onClick.bind(this)(e)}}),t.checkbox){var s={updateChildCheckState:function(e,t){if(e){var n=e.children,i=n.length;if(n&&i--)for(var o=0;o<=i;o++){var r=n[o],a=r.children[0],d=$(".checkbox",a);d.get(0).className="checkbox",t&&d.addClass("checkbox-all"),a.option.checked=t,s.updateChildCheckState(r.children[1],t)}}},updateParentCheckState:function(e){if(e&&!(e.getAttribute("data-deep")<2)&&"ul"===e.nodeName.toLowerCase()){var t=e.parentNode,n=e.children.length,i=$(">li>a>.checkbox-all",e).length,o=$(".checkbox",t).get(0);if(i&&i===n)o.className="checkbox checkbox-all";else{var r=$(">li>a>.checkbox-some",e).length;r||i?o.className="checkbox checkbox-some":o.className="checkbox"}s.updateParentCheckState(t.parentNode)}}};$(this.contents).delegate(".checkbox",{click:function(){var e=this.parentNode,t=e.parentNode;return s.updateChildCheckState({children:[t]},!e.option.checked),e.parentNode.parentNode.getAttribute("data-deep")>1&&s.updateParentCheckState(t.parentNode),!1}}),$.each(o,function(e,t){s.updateParentCheckState(t)})}if(t.dnd){var l={updatePosition:function(e){$(n.dragingProxyElement).css({top:e.pageY,left:e.pageX+25})},start:function(){$(i).on({mousemove:l.move,mouseup:l.end})},move:function(e){n.disableSelection(),"block"!==n.dragingProxyElement.style.display&&(n.dragingProxyElement.style.display="block"),l.updatePosition(e);var t,o=i.elementFromPoint(e.pageX,e.pageY);if(l.dropPosition=null,o&&($(o).hasClass("line")?t=o:$(o.parentNode).hasClass("line")&&(t=o.parentNode),l.prevLine&&$(l.prevLine).css({border:"",boxSizing:""}),t&&t!=n.dragingElement&&!$.contains(n.dragingElement.parentNode,t))){var r=t.offsetHeight,a=$(t),d=a.position();if(l.prevLine=t,a.css({border:"none"}),e.pageY-d.top<5)a.css({borderTop:"1px dotted red",boxSizing:"border-box"}),l.dropPosition="before";else if(r+d.top-e.pageY<5)a.css({borderBottom:"1px dotted red",boxSizing:"border-box"}),l.dropPosition="after";else{if(n.isLeaf(t))return;a.css({border:"1px dotted red",boxSizing:"border-box"}),l.dropPosition="append"}}},updateChildrenIndext:function(e,t){if(e){var n;n=!e.nodeName||e.nodeType?e.children[0].parentNode:e,n.setAttribute("data-deep",Number(n.parentNode.parentNode.getAttribute("data-deep"))+1);var o=e.children,r=e.children.length,a=t;if(o&&r--){var d=i.createElement("span");d.className="indent";for(var s=0;s<=r;s++){var c=o[s],p=c.children[0];if(a=t,a>=0)for("append"==l.dropPosition&&a++;a--;)p.insertBefore(d.cloneNode(!0),p.children[0]);else for(a=-a,"append"==l.dropPosition&&a--;a--;)p.removeChild(p.children[a]);l.updateChildrenIndext(p.nextSibling,t)}}}},end:function(){if($(n.dragingProxyElement).hide(),$(l.prevLine).css({border:"none"}),$(i).off({mousemove:l.move,mouseup:l.end}),l.dropPosition){if(t.onBeforeDrop){var e=t.onBeforeDrop.bind(n)(l.prevLine,n.dragingElement,l.dropPosition);if(e===!1)return}var o=n.dragingElement.parentNode,r=l.prevLine.parentNode,a=o.parentNode,d=r.parentNode.getAttribute("data-deep")-o.parentNode.getAttribute("data-deep"),c=$(o).index(),p=n.getParentNode(o).option.children,h=p[c];if(p.splice(c,1),"append"===l.dropPosition){if(n.isLeaf(l.prevLine))return;l.prevLine.nextSibling.appendChild(o),l.prevLine.option.children.push(h)}else{var u;r.parentNode===o.parentNode?(u=$(r).index()-($(r).index()>c)+("after"===l.dropPosition),n.getParentNode(r).option.children.splice(u,0,h)):(u=$(r).index()+("after"===l.dropPosition),n.getParentNode(r).option.children.splice(u,0,h)),$(r)[l.dropPosition](o)}l.updateChildrenIndext({children:[o]},d),l.dropPosition=null,t.checkbox&&(o&&s.updateParentCheckState(o.parentNode),a&&s.updateParentCheckState(a),r&&s.updateParentCheckState(r.parentNode)),t.onDrop&&t.onDrop.bind(n)(l.prevLine,n.dragingElement,l.dropPosition)}}};/Chrome/.test(navigator.userAgent)&&$(this.contents).delegate("a",{mouseenter:function(){$(this).addClass("hover")},mouseleave:function(){$(this).removeClass("hover")}}),$(this.contents).delegate("a",{mousedown:function(e){return n.dragingElement=this,n.dragingProxyElement||(n.dragingProxyElement=i.createElement("div"),i.body.appendChild(n.dragingProxyElement),$(n.dragingProxyElement).addClass("tree-draging-proxy")),$(n.dragingProxyElement).html(n.dragingElement.option.name),l.updatePosition(e),l.start(),!1}})}},getParentNode:function(e){var t=null;try{t=e.parentNode.parentNode.children[0]}catch(n){}return t},disableSelection:function(){window.getSelection?window.getSelection().removeAllRanges():document.selection&&document.selection.empty()},isLeaf:function(e){return!e.option.children},toggle:function(e){return this[$(e.nextSibling).is(":visible")?"collapse":"expand"](e),this},expand:function(e){var t="show";return $(e.parentNode).addClass("expanded").find(">a>.hit").addClass("hit-open"),$(e.nextSibling)[t](this.userOptions.animate.time),this},collapse:function(e){var t="hide";return $(e.parentNode).removeClass("expanded").find(">a>.hit").removeClass("hit-open"),$(e.nextSibling)[t](this.userOptions.animate.time),this}},o.prototype.init.prototype=o.prototype,this.each(function(){var t=$(this),n=o(this,$.extend(!0,{},e)),i=t.data("ui");i?i.iTree=n:t.data("ui",{iTree:n})})};