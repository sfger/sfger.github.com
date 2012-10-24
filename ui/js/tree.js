//Define tree{{{
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
		var html = document.getElementsByTagName('html')[0];
		//IE flags{{{
        var isIE = /MSIE/.exec(navigator.userAgent);
        var isIE6 = /MSIE 6.0/.exec(navigator.userAgent);
        var isIE7 = /MSIE 7.0/.exec(navigator.userAgent);
        var isIE8 = /MSIE 8.0/.exec(navigator.userAgent);
        var css1compat = document.compatMode === "CSS1Compat";
		//}}}
		//Object style{{{
		var key_trans = function(key){
			return  key.replace(/\-(\w)/g, function($, $1){ return $1.toUpperCase(); });
		};
		var style = {
			'get' : document.defaultView ? function(el,style){
				var val = document.defaultView.getComputedStyle(el, null).getPropertyValue(style);
				return val ? val : 0;
			} : function(el,style){
				var val = el.currentStyle[key_trans(style)];
				return val==='medium' ? 0 : val;
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
		//}}}
		var resizebar = left.children[0];
		var menu = left.children[1];
		if(data){
			menu.innerHTML = '';
			create_menu(data);
		}
        var now_menu = menu.children[0].children[1];
		var _target = null;
        var winWidth = 0;
        var winHeight = 0;
        var li_height = style.get_outter_height(menu.children[0]);
		if( document.documentMode===7 || (isIE&&(!isIE8)) ) html.style.overflow="hidden";

		//fn preventDefault{{{
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
		//}}}

		//fn resize_left_menu{{{
		var resize_left_menu = function(){
			//alert( parseInt(get_style(left, 'width')) + ' '+ ((css1compat)&&(parseInt(get_style(menu,'border-left-width')) + parseInt(get_style(menu, 'border-right-width')))) + ' ' + parseInt(style.get_outter_width(resizebar)) );
			menu.style.width = parseInt(style.get_outter_width(left))
				- ((css1compat)&&(parseInt(get_style(menu,'border-left-width')) + parseInt(get_style(menu, 'border-right-width'))))
				- parseInt(style.get_outter_width(resizebar)) + 'px';
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
				set_style(cover, {
					'position':'absolute',
					'top':0,
					'left':0,
					'filter':'alpha(opacity=10)',
					'opacity':'0.1',
					'background':'white',
					'width':'100%',
					'height':(document.documentElement.clientHeight || body.clientHeight ) + 'px',
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
						var resizebar_width = parseInt(style.get_outter_width(resizebar));
						var left_width = parseInt(style.get_outter_width(left));
						var width = dragger.children[0].offsetLeft + resizebar_width;
						if(width<125 && left_width>width) width = resizebar_width + ((css1compat)&&(parseInt(get_style(menu,'border-left-width')) + parseInt(get_style(menu, 'border-right-width'))));
						else if( width<125 ) width = 210;
						set_style(left, {'width':width+'px'});
						resize_left_menu();
						resize = false;
						set_style(left, {'position':'static'});
						set_style(dragger, {'display':'none', 'z-index':'-1000'});
						set_style(body, {'cursor':'default'});
						set_style(main.parentNode, {'margin-left':parseInt(get_style(left, 'width')) + 'px'});
						if(isIE){
							width = document.documentElement['clientWidth'];
							main.style.width = winWidth = (css1compat && width || body && body['clientWidth'] || width)
								- parseInt(left.currentStyle['width']) + 'px';
						}
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
				'height': style.get_outter_height(resizebar) + 'px',
				'top':(this.offsetTop===0 ? style.get_outter_height(toper) : this.offsetTop) + 'px',
				'left':this.offsetLeft +'px', 'background-color':'#999'
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
		//}}}
        menu.children[0].children[1].style.display = 'block';

		//window.onload window.onresize{{{
		window.onload = window.onresize = function(e){
			e = e || window.event;
			var width = document.documentElement['clientWidth'];
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
					- parseInt(style.get_outter_width(left, 'width')) + 'px';
			}
			preventDefault(e);
		};
		///}}}

		//menu.onclick{{{
        menu.onclick = function( e ){
            e = e || window.event;
            var target = e.target || e.srcElement;
            if(main.readyState){
                main.onreadystatechange = function(){
                    if( main.readyState == "loaded" || main.readyState == "complete" ){
						var width = document.documentElement['clientWidth'];
                        main.style.height = winHeight;
                    }
                };
            }else{
                main.onload = function(){
                    main.height = document.documentElement.clientHeight - 4 + 'px';
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
		//}}}

		//make ie6 and quirks mode support hover{{{
		if(!css1compat || isIE6){
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
		//}}}
    };
	//}}}
    return window.tree = tree;
})(window);
//}}}

//var data{{{
var data = {
	UI:{
		name:'UI',
		data:{
			popup:{ name: 'popup', url: './ui/bundle/popup/popup.html', item: 1 }
		}
	},
	BookMark:{
		name: '书签',
		data:{
			search:{
				name: '搜索、百科与词典',
				data:{
					baidu:{ name:'Baidu', url:'http://www.baidu.com', item:1 },
					soso:{ name:'SoSo', url:'http://www.soso.com', item:1 },
					google:{ name:'Google', url:'http://www.google.com', item:1 },
					GouGou:{ name:'GouGou', url:'http://www.gougou.com/', item:1 },
					Wikipedia:{ name:'Wikipedia', url:'http://www.wikipedia.org/', item:1 }
				}
			},
			Video:{
				name: '视频',
				data:{
					Youku:{ name:'优酷', url:'http://www.youku.com', item:1 },
					PPS:{ name:'PPS', url:'http://www.pps.tv', item:1 },
					Tudou:{ name:'土豆', url:'http://www.tudou.com/', item:1 },
					'163':{ name:'网易视频', url:'http://v.163.com/', item:1 },
					Xunlei:{ name:'迅雷视频', url:'http://www.xunlei.com/', item:1 }
				}
			},
			WebSite:{
				name: '门户、新闻与社区',
				data:{
					Youku:{ name:'网易', url:'http://www.163.com', item:1 },
					Sina:{ name:'新浪', url:'http://www.sina.com', item:1 },
					sohu:{ name:'搜狐', url:'http://www.sohu.com/', item:1 },
					QQ:{ name:'腾讯', url:'http://www.qq.com/', item:1 },
					Xinhua:{ name:'新华网', url:'http://www.xinhuanet.com/', item:1 }
				}
			},
			Blog:{
				name: '博客',
				data:{
					Cnblogs:{ name:'博客园', url:'http://www.cnblogs.com', item:1 },
					'51CTO':{ name:'51CTO', url:'http://www.51cto.com', item:1 },
					CoolShell:{ name:'CoolShell', url:'http://www.coolshell.com', item:1 },
					CoolShell:{ name:'潘魏增', url:'http://panweizeng.com', item:1 },
					Zihou:{ name:'子猴博客', url:'http://www.zihou.me', item:1 },
					Huangzhilong:{ name:'黄志龙', url:'http://ucren.com/blog/', item:1 },
					'Typeof':{ name:'Typeof', url:'http://typeof.net', item:1 },
					'Heroin':{ name:'Heroin', url:'http://heroin.so', item:1 },
					CSSASS:{ name:'CSSASS', url:'http://www.cssass.com/blog/', item:1 },
					IBMCN:{ name:'IBM-CN', url:'https://www.ibm.com/developerworks/cn/', item:1 },
					Soboom:{ name:'Soboom', url:'http://www.soboom.com/index.html', item:1 },
					ZhangXinXu:{ name:'张鑫旭', url:'http://www.zhangxinxu.com', item:1 }
				}
			},
			Software:{
				name: '软件',
				data:{
					Vim:{ name:'Vim', url:'http://www.vim.org', item:1 },
					Gimp:{ name:'GIMP', url:'http://www.gimp.org', item:1 },
					PHP:{ name:'PHP', url:'http://www.php.net', item:1 },
					Fiddler:{ name:'Fiddler', url:'http://www.fiddler2.com/fiddler2/', item:1 },
					System:{
						name: '系统软件',
						data:{
							Driver:{ name:'驱动精灵', url:'http://www.drivergenius.com', item:1 },
							DiskGenius:{ name:'DiskGenius', url:'http://www.diskgenius.cn/', item:1 }
						}
					},
					Code_manage:{
						name: '版本管理',
						data:{
							Git:{ name:'Git', url:'http://msysgit.github.com/', item:1 },
							Github:{ name:'Github', url:'http://windows.github.com/', item:1 },
							TortoiseSVN:{ name:'TortoiseSVN', url:'http://tortoisesvn.net/', item:1 },
							Win32SVN:{ name:'Win32SVN', url:'http://subversion.apache.org/packages.html#windows', item:1 }
						}
					}
				}
			}
		}
	}
};
///}}}
var toper = document.getElementById("top");
var left  = document.getElementById("left");
var main  = document.getElementById("main");
tree(toper, left, main, data);
/* vim: set fdm=marker : */
