(function(window){
	//className{{{
	var rm_class = function(el, name){
		if(el.className){
			var list = el.className.split(/\s+/);
			var i, ret = [];
			for(i = list.length-1; i>=0; i--){
				if(list[i]!==name)
					ret.push(list[i]);
			}
			el.className = ret.join(' ');
		}
	};

	var add_class = function(el, name){
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
	};

	var has_class = function(el, name){
		if(el.className){
			var list = el.className.split(/\s+/);
			var i, ret = [];
			for(i = list.length-1; i>=0; i--){
				if(list[i]===name)
					return true;
			}
		}
		return false;
	};
	//}}}
	//fn create_menu {{{
	var create_menu = function(data){
		var create_outer_menu = function(name, sub){
			var create_sub_item = function(name, href){
				var li = document.createElement('li');
				var a = document.createElement('a');
				a.href = href;
				a.innerHTML = name;
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
					inner_subs.appendChild( create_sub_item(sub[i].name, sub[i].url) );
				}
			}
			root.appendChild(inner_subs);
			return root;
		};
		for(var i in data){
			if(!data[i].item){
				menu.appendChild( create_outer_menu(data[i].name, data[i].data) );
			}
		}
	};
	//}}}
	//fn tree{{{
    var tree = function(toper, left, main, data){
        var document = window.document;
		var body = document.body;
		var key_trans = function(key){
			return  key.replace(/\-(\w)/g, function($, $1){ return $1.toUpperCase(); });
		};
		var style = {
			'get' : document.defaultView ? function(el,style){
				return document.defaultView.getComputedStyle(el, null).getPropertyValue(style);
			} : function(el,style){
				return el.currentStyle[key_trans(style)]=='medium' ? 0 : el.currentStyle[key_trans(style)];
			},
			'set' : function(el, css){
				for(var key in css){
					el.style[key_trans(key)] = css[key];
				}
			},
			'get_outter_height' : function(el){
				return parseInt(get_style(el, 'height'))
					+ (css1compat ? (parseInt(get_style(el, 'border-top-width')) + parseInt(get_style(el, 'border-bottom-width'))) : 0)
					+ (css1compat ? (parseInt(get_style(el, 'padding-top')) + parseInt(get_style(el, 'padding-bottom'))) : 0);
			},
			'get_outter_width' : function(el){
				return parseInt(get_style(el, 'width'))
					+ (css1compat ? (parseInt(get_style(el, 'border-left-width')) + parseInt(get_style(el, 'border-right-width'))) : 0)
					+ (css1compat ? (parseInt(get_style(el, 'padding-left')) + parseInt(get_style(el, 'padding-right'))) : 0);
			}
		};
		var get_style = style.get;
		var set_style = style.set;
		var resizebar = left.children[0];
		var menu = left.children[1];
		if(data){
			menu.innerHTML = '';
			create_menu(data);
		}
        var now_menu = menu.children[0].children[1];
		var _target = null;
        var isIE = /MSIE/.exec(navigator.userAgent);
        var css1compat = document.compatMode === "CSS1Compat";
        var winWidth = 0;
        var winHeight = 0;
        //var li_height = parseInt(get_style(menu.children[0], 'height')) + (css1compat ? parseInt(get_style(menu.children[0], 'padding-bottom')) : 0);
        var li_height = style.get_outter_height(menu.children[0]);
		if( document.documentMode===7 ) body.parentNode.style.overflow = 'hidden';
        var preventDefault = function( e ){
			if(e){
				if(typeof e.preventDefault === 'function'){
					e.preventDefault();
					e.stopPropagation();
				}else{
					e.returnValue = false;
					e.cancelBubble = true;
				}
			}
        };

		var resize_left_menu = function(){
			menu.style.width = parseInt(get_style(left, 'width'))
				- (css1compat&&(parseInt(get_style(menu,'border-left-width')) + parseInt(get_style(menu, 'border-right-width'))))
				- parseInt(get_style(resizebar, 'width'))
				- (css1compat&&(parseInt(get_style(resizebar, 'border-right-width')))) + 'px';
		};
		resize_left_menu();
        if( !isIE ){
            var evt = document.createEvent("MouseEvents");
            evt.initMouseEvent("resize", true, true, this, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            window.dispatchEvent(evt);
        }
		var resize = false;
		var dragger = null;
		resizebar.onmousedown = function(e){
			e = e || window.event;
			if(!dragger){
				dragger = document.createElement('div');
				var cover = document.createElement('div');
				set_style(cover, {
					'position':'absolute',
					'top':0,
					'left':0,
					'filter':'alpha(opacity=1)',
					'opacity':'0.01',
					'background':'white',
					'width':'100%',
					'height':'100%',
					'z-index':2000
				});
				dragger.appendChild( resizebar.cloneNode() );
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
						var width = dragger.children[0].offsetLeft;
						if(width<100) width = 125;
						set_style(left, {'width':width+'px'});
						resize_left_menu();
						resize = false;
						set_style(left, {'position':'static'});
						set_style(dragger, {'display':'none', 'z-index':'-1000'});
						set_style(body, {'cursor':'default'});
					}
					preventDefault(e);
				};
			}else{
				set_style(dragger, {'display':'block'});
			}
			set_style(body, {'cursor':'e-resize'});
			set_style(dragger, {'z-index':'1000'});
			set_style(dragger.children[0], {
				'z-index':'3000',
				'position':'absolute',
				'height': style.get_outter_height(resizebar),
				'top':(this.offsetTop===0 ? style.get_outter_height(toper) : this.offsetTop) + 'px',
				'left':this.offsetLeft +'px', 'background-color':'#999'
			});
			resize = true;
			preventDefault(e);
		};
		var timer;

        var resize_menu_height = function( target, is_click ){
            var li = target.parentNode;
			var now_li = now_menu.parentNode;
            var sub_ul = li.children[1];
            var lis = li.parentNode.children;
			var inc = isIE ? 20 : 10;
			var set_li_height = li_height - (css1compat ? parseInt(get_style(li, 'padding-bottom')) : 0);
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
					tmp = parseInt(get_style(menu, 'height'))
						- (css1compat ? 1 : (parseInt(get_style(menu, 'border-top-width')) + parseInt(get_style(menu, 'border-bottom-width'))))
						- (lis.length - 1) * li_height;
					if( tmp < 50 ) tmp = 50;
					if(is_click){
						if(timer) clearInterval(timer);
						timer = setInterval(function(){
							if( parseInt(get_style(li, 'height')) + inc < tmp ){
								if( now_li!==li && parseInt(get_style(now_li, 'height'))>li_height ){
									now_li.style.height = parseInt(get_style(now_li, 'height')) - inc + 'px';
								}
								li.style.height = parseInt(get_style(li, 'height')) + inc + 'px';
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
							if( parseInt(get_style(li, 'height')) - inc > li_height ){
								li.style.height = parseInt(get_style(li, 'height')) - inc + 'px';
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
        menu.children[0].children[1].style.display = 'block';

		window.top.onload = window.onresize = function(e){
			e = e || window.event;
			var width = window.document.documentElement['clientWidth'];
			var height = document.documentElement['clientHeight'];
			var margin = parseInt(get_style(left, 'width'));
			height = css1compat && height || body && body['clientHeight'] || height;
			height = height - parseInt(get_style(toper, 'height'))
				- (css1compat&&(parseInt(get_style(toper, 'border-top-width')) + parseInt(get_style(toper, 'border-bottom-width'))));
			main.parentNode.style.marginLeft = margin + 'px';
			menu.style.height = height +
				- (css1compat&&(parseInt(get_style(menu, 'border-top-width')) + parseInt(get_style(menu, 'border-bottom-width'))))
				+ 'px';
			main.style.height = winHeight = height + 'px';
			resizebar.style.height = parseInt(winHeight) + 2 + 'px';
			
			resize_menu_height(now_menu, false);
			if(isIE){
				main.style.width = winWidth = (css1compat && width || body && body['clientWidth'] || width)
					- parseInt(left.currentStyle['width']) + 'px';
			}
			preventDefault(e);
		};

        menu.onclick = function( e ){
            e = e || window.event;
            var target = e.target || e.srcElement;
            if(main.readyState){
                main.onreadystatechange = function(){
                    if( main.readyState == "loaded" || main.readyState == "complete" ){
                        main.style.height = winHeight;
                        main.style.width = winWidth;
                    }
                };
            }else{
                main.onload = function(){
                    main.height = document.documentElement.clientHeight - 4;
                };
            }
            if(target.nodeName.toLowerCase()==="div"){
				resize_menu_height( target, true );
            }else{
                if( target.href ){
					if(_target) rm_class(_target, 'current');
					_target = target;
					add_class(target, 'current');
					main.src=target.href;
				}
            }
            preventDefault( e );
        };
		if(!css1compat){
			menu.onmouseover = menu.onmouseout = function(){
				var e = window.event;
				var container = e.srcElement;
				if(container.parentNode.parentNode!==menu && container.nodeName.toLowerCase()==='div'){
					if(e.type==='mouseover') add_class(container, 'current');
					else if(e.type==='mouseout') rm_class(container, 'current');
				}
				preventDefault( e );
			};
		}
    };
	//}}}
    return window.tree = tree;
})(window);
/* vim: set fdm=marker : */
