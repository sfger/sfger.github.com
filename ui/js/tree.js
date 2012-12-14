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
		right.innerHTML = '<iframe id="main" src="" frameborder="0"></iframe>';
		var main = right.children[0];
		var document = window.document;
		var body = document.body;
		var html = document.getElementsByTagName('html')[0];
		//Browser flags{{{
		var isIE = /MSIE/.exec(navigator.userAgent);
		var isIE6 = /MSIE 6.0/.exec(navigator.userAgent);
		var isIE7 = /MSIE 7.0/.exec(navigator.userAgent);
		var isIE8 = /MSIE 8.0/.exec(navigator.userAgent);
		var css1compat = document.compatMode === "CSS1Compat";
		var isSafari = /Safari/.exec(navigator.userAgent);
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
						if(sub.target) a.target = sub.target;
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
							//inner_subs.appendChild( create_sub_item(sub[i].name, sub[i].url) );
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
		}
		var now_menu = menu.children[0].children[1];
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
					e.cancelBubble = true;
				}
			}
		};
		//}}}

		//fn resize_left_menu{{{
		var resize_left_menu = function(){
			menu.style.width = style.get_outter_width(left)
				- ((css1compat)&&(style.get(menu,'border-left-width', true) + style.get(menu, 'border-right-width', true)))
				- style.get_outter_width(resizebar) + 'px';
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
					'height':(document.documentElement.clientHeight || body.clientHeight ) + 'px',
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
						if(width<125 && left_width>width) width = resizebar_width + ((css1compat)&&(style.get(menu,'border-left-width', true) + style.get(menu, 'border-right-width', true)));
						else if( width<125 ) width = 210;
						style.set(left, {'width':width+'px'});
						resize_left_menu();
						resize = false;
						style.set(left, {'position':'static'});
						style.set(dragger, {'display':'none', 'z-index':'-1000'});
						style.set(body, {'cursor':'default'});
						style.set(main.parentNode, {'margin-left':style.get(left, 'width', true) + 'px'});
						if(isIE){
							width = document.documentElement['clientWidth'];
							main.style.width = winWidth = (css1compat && width || body && body['clientWidth'] || width)
								- style.get(left, 'width', true) + 'px';
						}
						if(isSafari) right.style.width = document.documentElement['clientWidth'] - style.get_outter_width(left, 'width') + 'px';
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
		menu.children[0].children[1].style.display = 'block';

		//window.onload window.onresize{{{
		window.onload = window.onresize = function(e){
			e = e || window.event;
			var width = document.documentElement['clientWidth'];
			var height = document.documentElement['clientHeight'];
			var margin = style.get(left, 'width', true);
			height = css1compat && height || body && body['clientHeight'] || height;
			height = height - style.get(toper, 'height', true)
				- (css1compat&&(style.get(toper, 'border-top-width', true) + style.get(toper, 'border-bottom-width', true)));
			right.style.marginLeft = margin + 'px';
			if(isSafari) right.style.width = width - style.get_outter_width(left, 'width') + 'px';
			menu.style.height = height +
				- (css1compat&&(style.get(menu, 'border-top-width', true) + style.get(menu, 'border-bottom-width', true)))
				+ 'px';
			main.style.height = winHeight = height + 'px';
			resizebar.style.height = parseInt(winHeight) + 2 + 'px';
			
			resize_menu_height(now_menu, false);
			if(isIE){
				main.style.width = winWidth = (css1compat && width || body && body['clientWidth'] || width)
					- style.get_outter_width(left, 'width') + 'px';
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
					if(_target) className.rm(_target, 'current');
					_target = target;
					className.add(target, 'current');
					if(target.target==='_blank') return true;
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
					if(e.type==='mouseover') className.add(container, 'current');
					else if(e.type==='mouseout') className.rm(container, 'current');
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

//var data{{{
var data = {
	//{{{BookMark
	BookMark:{
		name: '书签',
		data:{
			//Search{{{
			Search:{
				name: '搜索、百科与词典',
				data:{
					baidu:{ name:'Baidu', url:'http://www.baidu.com', item:1 },
					soso:{ name:'SoSo', url:'http://www.soso.com', item:1 },
					google:{ name:'Google', url:'https://www.google.com', item:1, target:'_blank' },
					GouGou:{ name:'GouGou', url:'http://www.gougou.com/', item:1 },
					Wikipedia:{ name:'Wikipedia', url:'http://www.wikipedia.org/', item:1 }
				}
			},
			//}}}
			//Video{{{
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
			//}}}
			//WebSite{{{
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
			//}}}
			//Blog{{{
			Blog:{
				name: '个人博客、社区',
				data:{
					Cnblogs:{ name:'博客园', url:'http://www.cnblogs.com', item:1 },
					LampBlog:{ name:'Lamp Blog', url:'http://www.lampblog.net/ubuntu/find%E5%91%BD%E4%BB%A4/', item:1 },
					CoolShell:{ name:'酷壳', url:'http://coolshell.cn/', item:1 },
					W3cplus:{ name:'w3cplus', url:'http://www.w3cplus.com/', item:1 },
					'51CTO':{ name:'51CTO', url:'http://www.51cto.com', item:1 },
					PanWeiZeng:{ name:'潘魏增', url:'http://panweizeng.com', item:1 },
					Zihou:{ name:'子猴博客', url:'http://www.zihou.me', item:1 },
					'Typeof':{ name:'Typeof', url:'http://typeof.net', item:1 },
					'Heroin':{ name:'Heroin', url:'http://heroin.so', item:1 },
					CSSASS:{ name:'CSSASS', url:'http://www.cssass.com/blog/', item:1 },
					IBMCN:{ name:'IBM-CN', url:'https://www.ibm.com/developerworks/cn/', item:1 },
					Soboom:{ name:'Soboom', url:'http://www.soboom.com/index.html', item:1 },
					ZhangXinXu:{ name:'张鑫旭', url:'http://www.zhangxinxu.com', item:1 },
					Moon:{ name:'月光博客', url:'http://www.williamlong.info/', item:1 },
					Ruanyifeng:{ name:'阮一峰', url:'http://www.ruanyifeng.com/blog/', item:1 },
					Front:{ name:'前端观察', url:'http://www.qianduan.net/', item:1 },
					Webrebuild:{ name:'webrebuild', url:'http://www.webrebuild.org/', item:1 },
					Blueidea:{ name:'蓝色梦想', url:'http://www.blueidea.com/', item:1 },
					JueYing:{ name:'绝影', url:'http://blog.csdn.net/hitetoshi/', item:1 }
				}
			},
			//}}}
			//BlogNewTech{{{
			BlogNewTech:{
				name: '团队博客',
				data:{
					QQ:{
						name: '腾讯',
						data:{
							Client:{ name:'QQ客户端团队博客', url:'http://impd.tencent.com/', item:1 },
							FrontTeam:{ name:'腾讯Web前端 AlloyTeam', url:'http://www.alloyteam.com/', item:1 },
							Game:{ name:'TGideas游戏设计', url:'http://tgideas.qq.com/', item:1 },
							WSD:{ name:'WSD 用户体验', url:'http://mxd.tencent.com/', item:1 },
							ECD:{ name:'ECD电商用户体验', url:'http://ecd.tencent.com/', item:1 },
							CDC:{ name:'CDC用户研究与体验设计中心', url:'http://cdc.tencent.com/', item:1 },
							ISUX:{ name:'ISUX社交用户体验设计部', url:'http://isux.tencent.com/blog', item:1 }
						}
					},
					TaoBao:{
						name: '淘宝',
						data:{
							UED:{ name:'淘宝UED', url:'http://ued.taobao.com/', item:1 },
							QA:{ name:'淘宝QA', url:'http://rdc.taobao.com/blog/qa/', item:1 },
							Test:{ name:'淘测试', url:'http://www.taobaotest.com/', item:1 },
							DBA:{ name:'淘宝DBA', url:'http://www.taobaodba.com/', item:1 },
							JM:{ name:'淘宝JAVA中间件', url:'http://rdc.taobao.com/team/jm/', item:1 },
							CORE:{ name:'淘宝核心技术团队', url:'http://rdc.taobao.com/blog/cs/', item:1 },
							ISUX:{ name:'淘宝搜索技术团队', url:'http://www.searchtb.com/', item:1 },
							UX:{ name:'一淘UX', url:'http://ux.etao.com/', item:1 }
						}
					},
					Alibaba:{
						name: '阿里巴巴',
						data:{
							UED_Inter:{ name:'阿里巴巴国际站UED', url:'http://www.aliued.com/', item:1 },
							UED_CN:{ name:'阿里巴巴中文站UED', url:'http://www.aliued.cn/', item:1 },
							Data:{ name:'阿里集团数据平台', url:'http://www.alidata.org/', item:1 }
						}
					},
					AliPay:{
						name: '支付宝',
						data:{
							PED:{ name:'支付宝PED', url:'http://ped.alipay.com/', item:1 },
							UED:{ name:'支付宝UED', url:'http://ued.alipay.com/', item:1 },
							User_search:{ name:'支付宝用户研究', url:'http://ued.alipay.com/ur', item:1 }
						}
					},
					Sohu:{
						name: '搜狐',
						data:{
							MUED:{ name:'搜狐MUED', url:'http://mued.sohu.com/', item:1 },
							FocusUED:{ name:'搜狐焦点UED', url:'http://ued.focus.cn/wordpress/', item:1 },
							UED:{ name:'搜狐UED', url:'http://ued.sohu.com/', item:1 }
						}
					},
					Baidu:{
						name: '百度',
						data:{
							MUX:{ name:'百度MUX', url:'http://mux.baidu.com/', item:1 },
							UFO:{ name:'百度UFO', url:'http://www.baiduux.com/', item:1 },
							UED:{ name:'百度UED', url:'http://ued.baidu.com/', item:1 }
						}
					},
					Sina:{
						name: '新浪',
						data:{
							UDC:{ name:'新浪微博UDC', url:'http://udc.weibo.com/', item:1 },
							UED:{ name:'新浪UED', url:'http://ued.sina.com/', item:1 }
						}
					},
					Ctrip:{ name:'携程UED', url:'http://ued.ctrip.com/', item:1 },
					RenRen:{ name:'人人FED', url:'http://fed.renren.com/', item:1 },
					WangYi:{ name:'网易UEDC', url:'http://uedc.163.com/', item:1 },
					QiHu:{ name:'奇虎75Team', url:'http://www.75team.com/', item:1 },
					SoGou:{ name:'搜狗UED', url:'http://ued.sogou.com/', item:1 },
					Floor19:{ name:'19楼UED', url:'http://blog.19ued.com/', item:1 }
				}
			},
			//}}}
			//Software{{{
			Software:{
				name: '软件',
				data:{
					Vim:{ name:'Vim', url:'http://www.vim.org', item:1 },
					Gimp:{ name:'GIMP', url:'http://www.gimp.org', item:1 },
					PHP:{ name:'PHP', url:'http://www.php.net', item:1 },
					Scala:{ name:'Scala', url:'http://www.scala-lang.org', item:1 },
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
			},
			//}}}
			//Tools{{{
			Tools:{
				name: '小工具',
				data:{
					Emmet:{ name:'Emmet', url:'http://docs.emmet.io/', item:1 },
					VimZenCoding :{ name:'Vim Zencoding', url:'https://github.com/mattn/zencoding-vim', item:1, target:'_blank' },
					Linr:{ name:'Linr', url:'http://hi.baidu.com/vickeychen', item:1 },
					Figure:{ name:'HTML5轮廓工具', url:'http://gsnedders.html5.org/', item:1 }
				}
			},
			//}}}
			//Tech{{{
			Tech:{
				name: 'Tech',
				data:{
					SAE:{ name:'SinaAppEngine', url:'http://sae.sina.com.cn/', item:1 },
					GoogleDev:{ name:'Google Developers', url:'https://developers.google.com/academy/apis/commerce/?hl=zh-cn', item:1, target:'_blank' },
					MSDN:{ name:'MSDN', url:'http://msdn.microsoft.com/en-us/library/ms683218%28VS.85%29.aspx', item:1 },
					GoogleAna:{ name:'谷歌流量分析', url:'https://www.google.com/analytics/web/?hl=zh-CN', item:1 }
				}
			}
			//}}}
		}
	},
	//}}}
	//{{{JavaScript
	JavaScript:{
		name:'JavaScript',
		data:{
			application:{
				name: '应用',
				data: {
					JQuery:{ name: 'JQuery', url: 'http://jquery.com/', item: 1 },
					SeaJs:{ name: 'seajs', url: 'http://seajs.org/', item: 1 },
					Qwrap:{ name: 'Qwrap', url: 'http://qwrap.com/', item: 1 },
					WindJS:{ name: 'WindJS', url: 'http://windjs.org/cn/', item: 1 }
				}
			},
			Blog:{
				name: 'Share',
				data: {
					Huangzhilong:{ name:'Dron', url:'http://ucren.com/blog/', item:1 },
					Franky:{ name: 'Franky', url: 'http://www.cnblogs.com/_franky', item: 1 },
					Rubylouvre:{ name: '司徒正美', url: 'http://www.cnblogs.com/rubylouvre', item: 1 },
					Otakustay:{ name: 'Gray Zhang', url: 'http://otakustay.com/', item: 1 },
					JKisJK:{ name: 'JKisJK', url: 'http://www.cnblogs.com/jkisjk', item: 1 }
				}
			}
		}
	},
	//}}}
	//{{{NodeJS
	NodeJS:{
		name:'NodeJS',
		data:{
			application:{
				name: '应用',
				data: {
					Curl:{ name: 'Curl', url: 'https://github.com/cujojs/curl', item: 1, target:"_blank" }
				}
			},
			Blog:{
				name: 'Share',
				data: {
					NodeJS:{ name: 'NodeJS官网', url: 'http://nodejs.org/', item: 1 }
				}
			}
		}
	},
	//}}}
	//UI{{{
	UI:{
		name:'UI',
		data:{
			popup:{ name: 'popup', url: './ui/bundle/popup/popup.html', item: 1 }
		}
	}
	//}}}
};
///}}}
var toper = document.getElementById("top");
var left  = document.getElementById("left");
var right  = document.getElementById("right");
tree(toper, left, right, data);
/* vim: set fdm=marker : */
