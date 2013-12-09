"use strict";
//className{{{
var className = {
	rm : function(el, name){
		if(el.className){
			var list = el.className.split(/\s+/);
			var i, ret = [];
			for(i = list.length-1; i>=0; i--){
				if(list[i]!==name)
					ret.push(list[i]);
			}
			el.className = ret.join(' ');
		}
	},

	add : function(el, name){
		if(el.className){
			var list = el.className.split(/\s+/);
			var i, ret = [];
			for(i = list.length-1; i>=0; i--){
				if(list[i]!==name)
					ret.push(list[i]);
			}
			ret.push(name);
			el.className = ret.join(' ');
		}else{
			el.className = name;
		}
	},

	has : function(el, name){
		if(el.className){
			var list = el.className.split(/\s+/);
			var i, ret = [];
			for(i = list.length-1; i>=0; i--){
				if(list[i]===name)
					return true;
			}
		}
		return false;
	}
};
//}}}

//style{{{
var style = {
	'key_trans' : function(key){
		return  key.replace(/\-(\w)/g, function($, $1){ return $1.toUpperCase(); });
	},
	'get' : function(el, key, return_int){
		var val;
		if( document.defaultView ){
			val = document.defaultView.getComputedStyle(el, null).getPropertyValue(key);
		}else{
			val = el.currentStyle[this.key_trans(key)];
			val = (val==='medium') ? '' : val;
		}
		val = val || 0;
		return return_int ? parseInt(val, 10) : val;
	},
	'set' : function(el, css){
		for(var key in css){
			el.style[this.key_trans(key)] = css[key];
		}
	},
	'get_outter_height' : function(el){
		return this.get(el, 'height', true)
			+ this.get(el, 'border-top-width', true)
			+ this.get(el, 'border-bottom-width', true)
			+ this.get(el, 'padding-top', true)
			+ this.get(el, 'padding-bottom', true);
	},
	'get_outter_width' : function(el){
		return this.get(el, 'width', true)
			+ this.get(el, 'border-left-width', true)
			+ this.get(el, 'border-right-width', true)
			+ this.get(el, 'padding-left', true)
			+ this.get(el, 'padding-right', true);
	}
};
//}}}

//Define tree{{{
(function(window){
	//fn tree{{{
	var tree = function(toper, left, right, data){
		right.innerHTML = '<iframe id="main" src="" frameborder="0" style="float:left;"></iframe>';
		var main = right.children[0];
		var document = window.document;
		var documentElement = document.documentElement;
		var body = document.body;
		var html = document.getElementsByTagName('html')[0];
		//Browser flags{{{
		var isIE = /MSIE/.exec(navigator.userAgent);
		var isIE6 = /MSIE 6.0/.exec(navigator.userAgent);
		var isIE7 = /MSIE 7.0/.exec(navigator.userAgent);
		var isIE8 = /MSIE 8.0/.exec(navigator.userAgent);
		var css1compat = document.compatMode === "CSS1Compat";
		var isSafari = !!/Safari/.exec(navigator.userAgent);
		//}}}
		var resizebar = left.children[0];
		if(!css1compat){
			style.set(toper, {height:style.get_outter_height(toper)});
		}
		var menu = left.children[1];
		var li_height = style.get_outter_height(menu.children[0]);
		if(data){
			//fn create_menu {{{
			var create_menu = function(data){
				var create_outer_menu = function(name, sub){
					var create_sub_item = function(sub){
						var li = document.createElement('li');
						var a = document.createElement('a');
						a.href = sub.url;
						sub.target && ( a.target = sub.target );
						a.innerHTML = sub.name;
						li.appendChild(a);
						return li;
					};
					var create_sub_name = function(name){
						var sub_name = document.createElement('div');
						sub_name.className = 'container';
						sub_name.innerHTML = name;
						return sub_name;
					};
					var root = document.createElement('li');
					root.appendChild(create_sub_name(name));
					var inner_subs = document.createElement('ul');
					inner_subs.style.display = 'none';
					for(var i in sub){
						if( !sub[i].item ){
							inner_subs.appendChild( create_outer_menu(sub[i].name, sub[i].data) );
						}else{
							inner_subs.appendChild( create_sub_item(sub[i]) );
						}
					}
					root.appendChild(inner_subs);
					return root;
				};
				var tmp = null;
				for(var i in data){
					if(!data[i].item){
						tmp = create_outer_menu(data[i].name, data[i].data);
						if(!css1compat) tmp.style.height = li_height + 'px';
						menu.appendChild( tmp );
					}
				}
			};
			//}}}
			menu.innerHTML = '';
			create_menu(data);
			if(!menu.children[0] || !menu.children[0].children || menu.children[0].children.length!=2) return;
		}
		var now_menu = menu.children[0].children[0];
		var _target = null;
		var winWidth = 0;
		var winHeight = 0;
		if( document.documentMode===7 || (isIE&&(!isIE8)) ) html.style.overflow="hidden";

		//fn preventDefault{{{
		var preventDefault = function( e ){
			if(e){
				if(typeof e.preventDefault === 'function'){
					e.preventDefault();
					e.stopPropagation();
				}else{
					e.returnValue = false;
					e.cancelBubble = false;
				}
			}
		};
		//}}}

		//fn resize_left_menu{{{
		var resize_left_menu = function(){
			var width = style.get_outter_width(left)
				- style.get(left, 'padding-left', true)*2
				- ((css1compat)&&(style.get(menu,'border-left-width', true) + style.get(menu, 'border-right-width', true)))
				- style.get(menu, 'padding-left', true)*2
				- style.get_outter_width(resizebar);
			if(width <=0 ){
				style.set(menu, {display:'none'})
			}else{
				style.set(menu, {display:'block'})
				menu.style.width = width + 'px';
			}
		};
		//}}}
		resize_left_menu();
		//resize event create{{{
		if( !isIE ){
			var evt = document.createEvent("MouseEvents");
			evt.initMouseEvent("resize", true, true, this, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
			window.dispatchEvent(evt);
		}
		//}}}
		var resize = false;
		var dragger = null;
		//resizebar.onmousedown{{{
		resizebar.onmousedown = function(e){
			e = e || window.event;
			if(!dragger){
				dragger = document.createElement('div');
				var cover = document.createElement('div');
				style.set(cover, {
					'position':'absolute',
					'top':0,
					'left':0,
					'filter':'alpha(opacity=10)',
					'opacity':'0.1',
					'background':'white',
					'width':'100%',
					'height':(documentElement.clientHeight || body.clientHeight ) + 'px',
					'z-index':2000
				});
				dragger.appendChild( resizebar.cloneNode(true) );
				dragger.appendChild( cover );
				body.appendChild(dragger);
				document.onmousemove = function(e){
					e = e || window.event;
					if(resize){
						if(window.getSelection){
							window.getSelection().removeAllRanges();
						}else  if(document.selection){
							document.selection.empty();
						}
						dragger.children[0].style.left = e.clientX + 'px';
					}
					preventDefault(e);
				};
				document.onmouseup = function(e){
					e = e || window.event;
					if(resize){
						var resizebar_width = style.get_outter_width(resizebar);
						var left_width = style.get_outter_width(left);
						var width = dragger.children[0].offsetLeft + resizebar_width;
						if(width<125 && left_width>width){
							width = resizebar_width
								+ ((css1compat)&&(style.get(menu,'border-left-width', true)
								+ style.get(menu, 'border-right-width', true)));
							style.set(resizebar, {background:'#aad', width:'8px'});
						}else if(width < 125){
							width = 210;
							style.set(resizebar, {background:'#ddf', width:'3px'});
						}
						style.set(left, {'width':width+'px'});
						resize_left_menu();
						resize = false;
						style.set(left, {'position':'static'});
						style.set(dragger, {'display':'none', 'z-index':'-1000'});
						style.set(body, {'cursor':'default'});
						style.set(main.parentNode, {'margin-left':style.get(left, 'width', true) + 'px'});
						if(isIE){
							width = documentElement['clientWidth'];
							main.style.width = winWidth = (css1compat && width || body && body['clientWidth'] || width)
								- style.get(left, 'width', true) + 'px';
						}
						if(isSafari) right.style.width = documentElement['clientWidth'] - style.get_outter_width(left, 'width') + 'px';
					}
					preventDefault(e);
				};
			}else{
				style.set(dragger, {'display':'block'});
			}
			style.set(body, {'cursor':'e-resize'});
			style.set(dragger, {'z-index':'1000'});
			style.set(dragger.children[0], {
				'z-index':'3000',
				'position':'absolute',
				'height': style.get_outter_height(resizebar) + 'px',
				'top':(this.offsetTop===0 ? (css1compat ? style.get_outter_height(toper) : style.get(toper, 'height', true)) : this.offsetTop) + 'px',
				'left':this.offsetLeft +'px',
				'background-color':'#999'
			});
			resize = true;
			preventDefault(e);
		};
		//}}}
		var timer;

		//fn resize_menu_height{{{
		var resize_menu_height = function( target, is_click ){
			var li = target.parentNode;
			var now_li = now_menu.parentNode;
			var sub_ul = li.children[1];
			var lis = li.parentNode.children;
			var inc = isIE ? 20 : 10;
			var set_li_height = li_height - (css1compat ? style.get(li, 'padding-bottom', true) : 0);
			var final_show = function(height, set_li_height){
				if( now_li!==li ){
					now_li.children[1].style.display = 'none';
					now_li.style.fontWeight = 'normal';
					now_li.style.height =  set_li_height + 'px';
				}
				li.style.height = height + 'px';
			};
			var final_hide = function(height){
				sub_ul.style.display = 'none';
				li.style.height = height + 'px';
			};
			var tmp;
			if( is_click ) sub_ul.style.display = sub_ul.style.display!=="block" ? "block" : "none";
			if( li.parentNode===menu ){
				if(sub_ul.style.display==='block'){
					li.style.height = set_li_height + 'px';
					li.style.fontWeight = 'bold';
					tmp = style.get(menu, 'height', true)
						- (css1compat ? 1 : style.get(menu, 'border-top-width', true) + style.get(menu, 'border-bottom-width', true))
						- (lis.length - 1) * li_height;
					if( tmp < 50 ) tmp = 50;
					if(is_click){
						if(timer) clearInterval(timer);
						timer = setInterval(function(){
							if( style.get(li, 'height', true) + inc < tmp ){
								if( now_li!==li && style.get(now_li, 'height', true)>li_height ){
									now_li.style.height = style.get(now_li, 'height', true) - inc + 'px';
								}
								li.style.height = style.get(li, 'height', true) + inc + 'px';
							}else{
								final_show(tmp, set_li_height);
								clearInterval(timer);
								timer = null;
							}
						}, 1);
					}else{
						final_show(tmp, set_li_height);
					}
					li.children[1].style.height = tmp - li_height + 'px';
				}else{
					li.style.fontWeight = 'normal';
					sub_ul.style.display = 'block';
					if(is_click){
						if(timer) clearInterval(timer);
						timer = setInterval(function(){
							if( style.get(li, 'height', true) - inc > li_height ){
								li.style.height = style.get(li, 'height', true) - inc + 'px';
							}else{
								final_hide(set_li_height);
								clearInterval(timer);
								timer = null;
							}
						}, 1);
					}else{
						final_hide(set_li_height);
					}
				}
			}
			if( li.parentNode===menu && is_click ) now_menu = target;
		};
		//}}}

		//window.onload window.onresize{{{
		window.onload = window.onresize = function(e){
			e = e || window.event;
			var width = documentElement['clientWidth'];
			var height = documentElement['clientHeight'];
			var margin = style.get(left, 'width', true);
			height = css1compat && height || body && body['clientHeight'] || height;
			height = height - style.get(toper, 'height', true)
				- (css1compat&&(style.get(toper, 'border-top-width', true) + style.get(toper, 'border-bottom-width', true)));
			right.style.marginLeft = margin + 'px';
			if(isSafari) right.style.width = width - (isSafari&&14) - style.get_outter_width(left, 'width') + 'px';
			menu.style.height = height +
				- (css1compat&&(style.get(menu, 'border-top-width', true) + style.get(menu, 'border-bottom-width', true)))
				- (css1compat&&(style.get(left, 'border-top-width', true) + style.get(left, 'border-bottom-width', true)))
				- (css1compat&&(style.get(left, 'padding-top', true)*2))
				- (css1compat&&(style.get(menu, 'padding-top', true)*2)) - 10 - (css1compat&&2)
				+ 'px';
			main.style.height = winHeight = height - 18 + (isIE6&&4) + 4 - (isIE6&&4) + 'px';
			resizebar.style.height = parseInt(winHeight) + 2 + 'px';
			
			resize_menu_height(now_menu, false);
			if(isIE){
				main.style.width = winWidth = (css1compat && width || body && body['clientWidth'] || width) -18
					- style.get_outter_width(left, 'width') + 'px';
			}
			preventDefault(e);
			if(e.type==='load'){
				//menu.children[0].children[0].click();
				if(menu.children[0].children[0].click){
					menu.children[0].children[0].click();
				}else{
					menu.children[0].children[0].onclick();
				}
			}
		};
		///}}}

		//menu.onclick{{{
		menu.onclick = function( e ){
			e = e || window.event;
			var target = e.target || e.srcElement;
			if(main.readyState){
				main.onreadystatechange = function(){
					if( main.readyState == "loaded" || main.readyState == "complete" ){
						var width = documentElement['clientWidth'];
						main.style.height = winHeight;
					}
				};
			}else{
				main.onload = function(){
					main.height = documentElement.clientHeight - 4 + 'px';
				};
			}
			var now_ul = now_menu.parentNode.children[1];
			if(target.parentNode.parentNode!==menu && (target.nodeName.toLowerCase()=='a' || target.nodeName.toLowerCase()=='div')){
				var get_offsetTop = function(el){
					if(el.parentNode !== document.body){
						return el.offsetTop + get_offsetTop(el.parentNode);
					}
					return 0;
				};
				var view_offset = (isIE7 || document.documentMode==7)
					? (get_offsetTop(target.parentNode) - get_offsetTop(now_ul))
					: (target.parentNode.offsetTop - now_ul.offsetTop);
				view_offset -= now_ul.scrollTop;
				var scroll_val = now_ul.scrollTop + (view_offset - now_ul.clientHeight/2/2);
				var inc = 5;
				if(timer) clearInterval(timer);
				timer = setInterval(function(){
					if( Math.abs(now_ul.scrollTop - scroll_val)>inc ){
						if(now_ul.scrollTop<scroll_val){
							now_ul.scrollTop += inc;
						}else{
							now_ul.scrollTop -= inc;
						}
					}else{
						now_ul.scrollTop = scroll_val;
						clearInterval(timer);
					}
					if(timer && (now_ul.scrollTop+now_ul.clientHeight>=now_ul.scrollHeight || now_ul.scrollTop<=0)) clearInterval(timer);
				}, 10);
			}
			if(target.nodeName.toLowerCase()==="div"){
				resize_menu_height( target, true );
			}else if( target.href ){
				if(_target) className.rm(_target, 'selected');
				_target = target;
				className.add(target, 'selected');
				if(target.target==='_blank') return true;
				else main.src=target.href;
			}
			preventDefault(e);
		};
		//}}}

		//make ie6 and quirks mode support hover{{{
		if(!css1compat || isIE6){
			menu.onmouseover = menu.onmouseout = function(e){
				e = e || window.event;
				var container = e.srcElement || e.target;
				if(container.parentNode.parentNode!==menu && container.nodeName.toLowerCase()==='div'){
					if(e.type==='mouseover') className.add(container, 'hovered');
					else if(e.type==='mouseout') className.rm(container, 'hovered');
				}
				preventDefault( e );
			};
		}
		//}}}
		toper.parentNode.style.display = 'block';
	};
	//}}}
	return window.tree = tree;
})(window);
//}}}
/* vim: set fdm=marker : */
