window.onload = function(){
	//IE flags{{{
	var css1compat	= document.compatMode === "CSS1Compat";
	var isIE		= /MSIE/.exec(navigator.userAgent);
	var isIE6		= /MSIE 6.0/.exec(navigator.userAgent);
	var isIE8		= /MSIE 8.0/.exec(navigator.userAgent);
	//}}}
	var container	= document.getElementById('login-container');
	var pop_box		= document.getElementById('login-block');
	var pop_close	= document.getElementById('close');
	var pop_btn		= document.getElementById('sfg');
	var	body		= document.body;
	var scrollTop	= 0;
	var is_show		= false;
	var html		= document.getElementsByTagName('html')[0];
	if(isIE6) html.style.overflowY = 'scroll';
	//resize event{{{
	if( !isIE ){
		var evt = document.createEvent("MouseEvents");
		evt.initMouseEvent("resize", true, true, this, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		window.dispatchEvent(evt);
	}
	//}}}
	//Object style{{{
	var key_trans = function(key){
		return  key.replace(/\-(\w)/g, function($, $1){ return $1.toUpperCase(); });
	};
	var style = {
		'get' : document.defaultView ? function(el, style){
			return document.defaultView.getComputedStyle(el, null).getPropertyValue(style);
		} : function(el,style){
			return el.currentStyle[key_trans(style)]=='medium' ? 0 : el.currentStyle[key_trans(style)];
		},
		'set' : function(el, css){
			for(var key in css){
				el.style[key_trans(key)] = css[key];
			}
		}
	};
	//}}}
	//fn popup{{{
	var popup = function(){
		is_show = true;
		container.style.display = 'block';
		var winHeight = css1compat ? document.documentElement['clientHeight'] : body.clientHeight;
		var winWidth  = css1compat ? document.documentElement['clientWidth'] : body.clientWidth;
		style.set(container, {
			'z-index':'9999',
			'position':'absolute',
			'top': scrollTop + 'px',
			'left':'0px',
			'width':winWidth+'px',
			'height':winHeight+'px',
			'opacity':'0.6',
			'filter':'opacity(60)',
			'filter':'alpha(opacity=80)',
			'background':'#ccc'
		});
		style.set(pop_box, {
			'background':'purple',
			'position':'absolute',
			'top':(winHeight-parseInt(style.get(pop_box, 'height')))/4 + 'px',
			'left':(winWidth-parseInt(style.get(pop_box, 'width')))/2 + 'px',
			'margin':'auto'
		});
	};
	//}}}

	//window.onresize{{{
	window.onresize = function(){
		if(!is_show) return false;
		style.set(body, {'overflow':''});
		scrollTop = document.documentElement.scrollTop || window.pageYOffset || body.scrollTop;
		style.set(body, {'overflow':'hidden'});
		var winWidth  = css1compat ? document.documentElement['clientWidth'] : body.clientWidth;
		var winHeight = css1compat ? document.documentElement['clientHeight'] : body.clientHeight;
		style.set(container, {
			'top':scrollTop + 'px',
			'width':winWidth + 'px',
			'height':winHeight + 'px'
		});
		style.set(pop_box, {
			'top':(winHeight-parseInt(style.get(pop_box, 'height')))/4 + 'px',
			'left':(winWidth-parseInt(style.get(pop_box, 'width')))/2 + 'px'
		});
	};
	//}}}
	//pop_btn.onclick{{{
	pop_btn.onclick = function(){
		scrollTop = document.documentElement.scrollTop || window.pageYOffset || body.scrollTop;
		style.set(body, {'overflow':'hidden'});
		if(isIE&&(!isIE8)){
			if(isIE6) html.style.overflowY="";
			html.style.overflow="hidden";
		}
		popup();
	};
	//}}}
	//pop_close.onclick{{{
	pop_close.onclick = function(){
		is_show = false;
		container.style.display = 'none';
		style.set(body, {'overflow':''});
		if(!css1compat) body.scrollTop = scrollTop;
		else document.documentElement.scrollTop = scrollTop;
		if(isIE&&(!isIE8)){
			if(isIE6) html.style.overflowY="scroll";
			html.style.overflow="";
		}
	};
	//}}}
};
/* vim: set fdm=marker: */
