define(function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="../dist/",t(0)}({0:function(e,exports,t){"use strict";require.config({baseUrl:"../../../js/",urlArgs:document.getElementById("requirejs").getAttribute("data-version"),map:{"*":{css:"require-css"}},paths:{jquery:"../../public/js/jquery"},shim:{}}),require(["jquery"],function($){t(194),t(195),t(196),t(197);var e=$(".left-menu"),n=$(".tab-ctn"),r=$("#page");r.layout({panel:{toggle:!0,resize:!0,each:{north:{toggle:!1,resize:!1},south:{toggle:!1,resize:!1},west:{toggle:!0,resize:!0},east:{toggle:!1,resize:!1}}},panelBar:{size:1,each:{west:{width:4}}}}).show();var o=t(198);e.tree({data:o,animate:{time:115},onClick:function(){var t=this.option;if(!e.tree("isLeaf",this))return!1;if("https://"===t.url.slice(0,8)||"_blank"==t.target){var r=window.open(t.url);r.opener=null}else n.tabs("add",{title:t.name,content:'<iframe src="'+t.url+'" frameborder="0" style="height:100%;width:100%;display:block;"></iframe>',closable:!0,select:!0})},onContextmenu:function(t){if(t.altKey&&e.tree("isLeaf",this)){try{var n=window.open(this.option.url);n.opener=null}catch(e){}return!1}}}),n.tabs({width:1200,height:60,tabWidth:150,contentFit:!0,border:!0,position:"north"});var i='<div class="imgc" style="height:100%;">\n\t\t<div class="imge">欢迎来朴水做客！</div>\n\t\t<!--[if lt IE 8]><p class="iecp"></p><![endif]-->\n\t</div>';n.tabs("add",{title:"主页",content:i,closable:!0,select:!0})})},194:function(e,exports,t){var n,r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};/*!
	 * https://github.com/es-shims/es5-shim
	 * @license es5-shim Copyright 2009-2014 by contributors, MIT License
	 * see https://github.com/es-shims/es5-shim/blob/master/LICENSE
	 */
!function(o,i){n=i,r="function"==typeof n?n.call(exports,t,exports,e):n,!(void 0!==r&&(e.exports=r))}(void 0,function(){function e(){}function t(e){return e=+e,e!==e?e=0:0!==e&&e!==1/0&&e!==-(1/0)&&(e=(e>0||-1)*Math.floor(Math.abs(e))),e}function n(e){var t="undefined"==typeof e?"undefined":o(e);return null===e||"undefined"===t||"boolean"===t||"number"===t||"string"===t}function r(e){var t,r,o;if(n(e))return e;if(r=e.valueOf,u(r)&&(t=r.call(e),n(t)))return t;if(o=e.toString,u(o)&&(t=o.call(e),n(t)))return t;throw new TypeError}var i=Function.prototype.call,a=Array.prototype,s=Object.prototype,l=a.slice,c=Array.prototype.splice,h=(Array.prototype.push,Array.prototype.unshift),p=s.toString,u=function(e){return"[object Function]"===s.toString.call(e)},d=function(e){return"[object RegExp]"===s.toString.call(e)},m=function(e){return"[object Array]"===p.call(e)},f=function(e){var t=p.call(e),n="[object Arguments]"===t;return n||(n=!m(t)&&null!==e&&"object"===("undefined"==typeof e?"undefined":o(e))&&"number"==typeof e.length&&e.length>=0&&u(e.callee)),n};Function.prototype.bind||(Function.prototype.bind=function(t){var n=this;if(!u(n))throw new TypeError("Function.prototype.bind called on incompatible "+n);for(var r=l.call(arguments,1),o=function e(){if(this instanceof c){var e=n.apply(this,r.concat(l.call(arguments)));return Object(e)===e?e:this}return n.apply(t,r.concat(l.call(arguments)))},i=Math.max(0,n.length-r.length),a=[],s=0;s<i;s++)a.push("$"+s);var c=Function("binder","return function ("+a.join(",")+"){return binder.apply(this,arguments)}")(o);return n.prototype&&(e.prototype=n.prototype,c.prototype=new e,e.prototype=null),c});var g,y,w,b,v,x=i.bind(s.hasOwnProperty);(v=x(s,"__defineGetter__"))&&(g=i.bind(s.__defineGetter__),y=i.bind(s.__defineSetter__),w=i.bind(s.__lookupGetter__),b=i.bind(s.__lookupSetter__));var S=function(){var e={};return Array.prototype.splice.call(e,0,0,1),1===e.length}(),N=0===[1].splice(0).length,k=function(){var e=[1,2],t=e.splice();return 2===e.length&&m(t)&&0===t.length}();k&&(Array.prototype.splice=function(e,t){return 0===arguments.length?[]:c.apply(this,arguments)}),N&&S||(Array.prototype.splice=function(e,n){if(0===arguments.length)return[];var r=arguments;return this.length=Math.max(t(this.length),0),arguments.length>0&&"number"!=typeof n&&(r=l.call(arguments),r.length<2?r.push(t(n)):r[1]=t(n)),c.apply(this,r)}),1!==[].unshift(0)&&(Array.prototype.unshift=function(){return h.apply(this,arguments),this.length}),Array.isArray||(Array.isArray=m);var C=Object("a"),E="a"!==C[0]||!(0 in C),A=function(e){var t=!0,n=!0;return e&&(e.call("foo",function(e,n,r){"object"!==("undefined"==typeof r?"undefined":o(r))&&(t=!1)}),e.call([1],function(){"use strict";n="string"==typeof this},"x")),!!e&&t&&n};Array.prototype.forEach&&A(Array.prototype.forEach)||(Array.prototype.forEach=function(e){var t=Z(this),n=E&&"[object String]"===p.call(this)?this.split(""):t,r=arguments[1],o=-1,i=n.length>>>0;if(!u(e))throw new TypeError;for(;++o<i;)o in n&&e.call(r,n[o],o,t)}),Array.prototype.map&&A(Array.prototype.map)||(Array.prototype.map=function(e){var t=Z(this),n=E&&"[object String]"===p.call(this)?this.split(""):t,r=n.length>>>0,o=Array(r),i=arguments[1];if(!u(e))throw new TypeError(e+" is not a function");for(var a=0;a<r;a++)a in n&&(o[a]=e.call(i,n[a],a,t));return o}),Array.prototype.filter&&A(Array.prototype.filter)||(Array.prototype.filter=function(e){var t,n=Z(this),r=E&&"[object String]"===p.call(this)?this.split(""):n,o=r.length>>>0,i=[],a=arguments[1];if(!u(e))throw new TypeError(e+" is not a function");for(var s=0;s<o;s++)s in r&&(t=r[s],e.call(a,t,s,n)&&i.push(t));return i}),Array.prototype.every&&A(Array.prototype.every)||(Array.prototype.every=function(e){var t=Z(this),n=E&&"[object String]"===p.call(this)?this.split(""):t,r=n.length>>>0,o=arguments[1];if(!u(e))throw new TypeError(e+" is not a function");for(var i=0;i<r;i++)if(i in n&&!e.call(o,n[i],i,t))return!1;return!0}),Array.prototype.some&&A(Array.prototype.some)||(Array.prototype.some=function(e){var t=Z(this),n=E&&"[object String]"===p.call(this)?this.split(""):t,r=n.length>>>0,o=arguments[1];if(!u(e))throw new TypeError(e+" is not a function");for(var i=0;i<r;i++)if(i in n&&e.call(o,n[i],i,t))return!0;return!1});var j=!1;Array.prototype.reduce&&(j="object"===o(Array.prototype.reduce.call("es5",function(e,t,n,r){return r}))),Array.prototype.reduce&&j||(Array.prototype.reduce=function(e){var t=Z(this),n=E&&"[object String]"===p.call(this)?this.split(""):t,r=n.length>>>0;if(!u(e))throw new TypeError(e+" is not a function");if(!r&&1===arguments.length)throw new TypeError("reduce of empty array with no initial value");var o,i=0;if(arguments.length>=2)o=arguments[1];else for(;;){if(i in n){o=n[i++];break}if(++i>=r)throw new TypeError("reduce of empty array with no initial value")}for(;i<r;i++)i in n&&(o=e.call(void 0,o,n[i],i,t));return o});var O=!1;Array.prototype.reduceRight&&(O="object"===o(Array.prototype.reduceRight.call("es5",function(e,t,n,r){return r}))),Array.prototype.reduceRight&&O||(Array.prototype.reduceRight=function(e){var t=Z(this),n=E&&"[object String]"===p.call(this)?this.split(""):t,r=n.length>>>0;if(!u(e))throw new TypeError(e+" is not a function");if(!r&&1===arguments.length)throw new TypeError("reduceRight of empty array with no initial value");var o,i=r-1;if(arguments.length>=2)o=arguments[1];else for(;;){if(i in n){o=n[i--];break}if(--i<0)throw new TypeError("reduceRight of empty array with no initial value")}if(i<0)return o;do i in n&&(o=e.call(void 0,o,n[i],i,t));while(i--);return o}),Array.prototype.indexOf&&[0,1].indexOf(1,2)===-1||(Array.prototype.indexOf=function(e){var n=E&&"[object String]"===p.call(this)?this.split(""):Z(this),r=n.length>>>0;if(!r)return-1;var o=0;for(arguments.length>1&&(o=t(arguments[1])),o=o>=0?o:Math.max(0,r+o);o<r;o++)if(o in n&&n[o]===e)return o;return-1}),Array.prototype.lastIndexOf&&[0,1].lastIndexOf(0,-3)===-1||(Array.prototype.lastIndexOf=function(e){var n=E&&"[object String]"===p.call(this)?this.split(""):Z(this),r=n.length>>>0;if(!r)return-1;var o=r-1;for(arguments.length>1&&(o=Math.min(o,t(arguments[1]))),o=o>=0?o:r-Math.abs(o);o>=0;o--)if(o in n&&e===n[o])return o;return-1});var T=Object.keys&&function(){return 2===Object.keys(arguments).length}(1,2);if(Object.keys){if(!T){var z=Object.keys;Object.keys=function(e){return z(f(e)?Array.prototype.slice.call(e):e)}}}else{var P=!{toString:null}.propertyIsEnumerable("toString"),D=function(){}.propertyIsEnumerable("prototype"),I=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],_=I.length;Object.keys=function(e){var t=u(e),n=f(e),r=null!==e&&"object"===("undefined"==typeof e?"undefined":o(e)),i=r&&"[object String]"===p.call(e);if(!r&&!t&&!n)throw new TypeError("Object.keys called on a non-object");var a=[],s=D&&t;if(i||n)for(var l=0;l<e.length;++l)a.push(String(l));else for(var c in e)s&&"prototype"===c||!x(e,c)||a.push(String(c));if(P)for(var h=e.constructor,d=h&&h.prototype===e,m=0;m<_;m++){var g=I[m];d&&"constructor"===g||!x(e,g)||a.push(g)}return a}}var M=-621987552e5,L="-000001";Date.prototype.toISOString&&new Date(M).toISOString().indexOf(L)!==-1||(Date.prototype.toISOString=function(){var e,t,n,r,o;if(!isFinite(this))throw new RangeError("Date.prototype.toISOString called on non-finite value.");for(r=this.getUTCFullYear(),o=this.getUTCMonth(),r+=Math.floor(o/12),o=(o%12+12)%12,e=[o+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()],r=(r<0?"-":r>9999?"+":"")+("00000"+Math.abs(r)).slice(0<=r&&r<=9999?-4:-6),t=e.length;t--;)n=e[t],n<10&&(e[t]="0"+n);return r+"-"+e.slice(0,2).join("-")+"T"+e.slice(2).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"});var F=!1;try{F=Date.prototype.toJSON&&null===new Date(NaN).toJSON()&&new Date(M).toJSON().indexOf(L)!==-1&&Date.prototype.toJSON.call({toISOString:function(){return!0}})}catch(e){}F||(Date.prototype.toJSON=function(e){var t,n=Object(this),o=r(n);if("number"==typeof o&&!isFinite(o))return null;if(t=n.toISOString,"function"!=typeof t)throw new TypeError("toISOString property is not callable");return t.call(n)});var B=1e15===Date.parse("+033658-09-27T01:46:40.000Z"),U=!isNaN(Date.parse("2012-04-04T24:00:00.500Z"))||!isNaN(Date.parse("2012-11-31T23:59:59.000Z")),R=isNaN(Date.parse("2000-01-01T00:00:00.000Z"));Date.parse&&!R&&!U&&B||(Date=function(e){function t(n,r,o,i,a,s,l){var c=arguments.length;if(this instanceof e){var h=1===c&&String(n)===n?new e(t.parse(n)):c>=7?new e(n,r,o,i,a,s,l):c>=6?new e(n,r,o,i,a,s):c>=5?new e(n,r,o,i,a):c>=4?new e(n,r,o,i):c>=3?new e(n,r,o):c>=2?new e(n,r):c>=1?new e(n):new e;return h.constructor=t,h}return e.apply(this,arguments)}function n(e,t){var n=t>1?1:0;return i[t]+Math.floor((e-1969+n)/4)-Math.floor((e-1901+n)/100)+Math.floor((e-1601+n)/400)+365*(e-1970)}function r(t){return Number(new e(1970,0,1,0,0,0,t))}var o=new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),i=[0,31,59,90,120,151,181,212,243,273,304,334,365];for(var a in e)t[a]=e[a];return t.now=e.now,t.UTC=e.UTC,t.prototype=e.prototype,t.prototype.constructor=t,t.parse=function t(i){var a=o.exec(i);if(a){var s,l=Number(a[1]),t=Number(a[2]||1)-1,c=Number(a[3]||1)-1,h=Number(a[4]||0),p=Number(a[5]||0),u=Number(a[6]||0),d=Math.floor(1e3*Number(a[7]||0)),m=Boolean(a[4]&&!a[8]),f="-"===a[9]?1:-1,g=Number(a[10]||0),y=Number(a[11]||0);return h<(p>0||u>0||d>0?24:25)&&p<60&&u<60&&d<1e3&&t>-1&&t<12&&g<24&&y<60&&c>-1&&c<n(l,t+1)-n(l,t)&&(s=60*(24*(n(l,t)+c)+h+g*f),s=1e3*(60*(s+p+y*f)+u)+d,m&&(s=r(s)),-864e13<=s&&s<=864e13)?s:NaN}return e.parse.apply(this,arguments)},t}(Date)),Date.now||(Date.now=function(){return(new Date).getTime()}),Number.prototype.toFixed&&"0.000"===8e-5.toFixed(3)&&"0"!==.9.toFixed(0)&&"1.25"===1.255.toFixed(2)&&"1000000000000000128"===(0xde0b6b3a7640080).toFixed(0)||!function(){function e(e,t){for(var n=-1;++n<a;)t+=e*s[n],s[n]=t%i,t=Math.floor(t/i)}function t(e){for(var t=a,n=0;--t>=0;)n+=s[t],s[t]=Math.floor(n/e),n=n%e*i}function n(){for(var e=a,t="";--e>=0;)if(""!==t||0===e||0!==s[e]){var n=String(s[e]);""===t?t=n:t+="0000000".slice(0,7-n.length)+n}return t}function r(e,t,n){return 0===t?n:t%2===1?r(e,t-1,n*e):r(e*e,t/2,n)}function o(e){for(var t=0;e>=4096;)t+=12,e/=4096;for(;e>=2;)t+=1,e/=2;return t}var i,a,s;i=1e7,a=6,s=[0,0,0,0,0,0],Number.prototype.toFixed=function i(a){var s,l,c,i,h,p,u,d;if(s=Number(a),s=s!==s?0:Math.floor(s),s<0||s>20)throw new RangeError("Number.toFixed called with invalid number of decimals");if(l=Number(this),l!==l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(c="",l<0&&(c="-",l=-l),i="0",l>1e-21)if(h=o(l*r(2,69,1))-69,p=h<0?l*r(2,-h,1):l/r(2,h,1),p*=4503599627370496,h=52-h,h>0){for(e(0,p),u=s;u>=7;)e(1e7,0),u-=7;for(e(r(10,u,1),0),u=h-1;u>=23;)t(1<<23),u-=23;t(1<<u),e(1,1),t(2),i=n()}else e(0,p),e(1<<-h,0),i=n()+"0.00000000000000000000".slice(2,2+s);return s>0?(d=i.length,i=d<=s?c+"0.0000000000000000000".slice(0,s-d+2)+i:c+i.slice(0,d-s)+"."+i.slice(d-s)):i=c+i,i}}();var $=String.prototype.split;2!=="ab".split(/(?:ab)*/).length||4!==".".split(/(.?)(.?)/).length||"t"==="tesst".split(/(s)*/)[1]||4!=="test".split(/(?:)/,-1).length||"".split(/.?/).length||".".split(/()()/).length>1?!function(){var e=void 0===/()??/.exec("")[1];String.prototype.split=function(t,n){var r=this;if(void 0===t&&0===n)return[];if("[object RegExp]"!==p.call(t))return $.call(this,t,n);var o,i,a,s,l=[],c=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.extended?"x":"")+(t.sticky?"y":""),h=0;for(t=new RegExp(t.source,c+"g"),r+="",e||(o=new RegExp("^"+t.source+"$(?!\\s)",c)),n=void 0===n?-1>>>0:Y(n);(i=t.exec(r))&&(a=i.index+i[0].length,!(a>h&&(l.push(r.slice(h,i.index)),!e&&i.length>1&&i[0].replace(o,function(){for(var e=1;e<arguments.length-2;e++)void 0===arguments[e]&&(i[e]=void 0)}),i.length>1&&i.index<r.length&&Array.prototype.push.apply(l,i.slice(1)),s=i[0].length,h=a,l.length>=n)));)t.lastIndex===i.index&&t.lastIndex++;return h===r.length?!s&&t.test("")||l.push(""):l.push(r.slice(h)),l.length>n?l.slice(0,n):l}}():"0".split(void 0,0).length&&(String.prototype.split=function(e,t){return void 0===e&&0===t?[]:$.call(this,e,t)});var q=String.prototype.replace,J=function(){var e=[];return"x".replace(/x(.)?/g,function(t,n){e.push(n)}),1===e.length&&"undefined"==typeof e[0]}();if(J||(String.prototype.replace=function(e,t){var n=u(t),r=d(e)&&/\)[*?]/.test(e.source);if(n&&r){var o=function n(r){var o=arguments.length,n=e.lastIndex;e.lastIndex=0;var i=e.exec(r);return e.lastIndex=n,i.push(arguments[o-2],arguments[o-1]),t.apply(this,i)};return q.call(this,e,o)}return q.call(this,e,t)}),"".substr&&"b"!=="0b".substr(-1)){var H=String.prototype.substr;String.prototype.substr=function(e,t){return H.call(this,e<0&&(e=this.length+e)<0?0:e,t)}}var G="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff",W="​";if(!String.prototype.trim||G.trim()||!W.trim()){G="["+G+"]";var V=new RegExp("^"+G+G+"*"),X=new RegExp(G+G+"*$");String.prototype.trim=function(){if(void 0===this||null===this)throw new TypeError("can't convert "+this+" to object");return String(this).replace(V,"").replace(X,"")}}8===parseInt(G+"08")&&22===parseInt(G+"0x16")||(parseInt=function(e){var t=/^0[xX]/;return function(n,r){return n=String(n).trim(),Number(r)||(r=t.test(n)?16:10),e(n,r)}}(parseInt));var Z=function(e){if(null==e)throw new TypeError("can't convert "+e+" to object");return Object(e)},Y=function(e){return e>>>0}})},195:function(e,exports){"use strict";$.fn.layout=function(e){var t=$.type(e);if("string"===t)return this.each(function(){var t=$(this).data("ui");if(!t||!t.iLayout)throw new Error("UI:layout does not init...");t.iLayout[e]()}),!0;e=$.extend(!0,{panel:{toggle:!0,resize:!0,each:{north:{toggle:!1,resize:!1},south:{toggle:!1,resize:!1},west:{toggle:!0,resize:!0},east:{toggle:!0,resize:!0}}},panelBar:{size:5,each:{north:{},south:{},west:{},east:{}}}},e);var n=function e(t,n){return new e.prototype.init(t,n)};return n.prototype={init:function(e,t){this.box=e,$(e).addClass("layout-container"),this.userOptions=t,this.panels={north:$(">.layout-north",e).get(0),south:$(">.layout-south",e).get(0),west:$(">.layout-middle-container>.layout-west",e).get(0),east:$(">.layout-middle-container>.layout-east",e).get(0),center:$(">.layout-middle-container>.layout-center",e).get(0)};var n=t.panelBar,r=n.each,o=n.size;this.panelBars={north:$(".bar-north",e).css({height:r.north.height||o}).get(0),south:$(".bar-south",e).css({height:r.south.height||o}).get(0),west:$(">.layout-middle-container>.bar-west",e).css({width:r.west.width||o}).get(0),east:$(">.layout-middle-container>.bar-east",e).css({width:r.east.width||o}).get(0)};var i=this;$(["Height","Width"]).each(function(e,t){i["getView"+t]=function(){var e="BackCompat"===document.compatMode?document.body:document.documentElement;return function(){return e["client"+t]}}(),i["getElement"+t]=function(e){return e&&"none"!==e.style.display?e["offset"+t]:0}}),t.panel.resize&&this.panelResize(),t.panel.toggle&&this.init_toggle(),$(window).resize(function(){i.resize()}),this.resize()},disableSelection:function(){window.getSelection?window.getSelection().removeAllRanges():document.selection&&document.selection.empty()},panelResize:function(){var e=this.box,t=this;$(">.resize-bar,>.layout-middle-container>.resize-bar",e).on({mousedown:function(n){if($(n.target).hasClass("ib-col"))return!1;var r=t.userOptions.panel.each,o=this,i=$(o);if(i.hasClass("bar-north")&&r.north.resize===!1||i.hasClass("bar-south")&&r.south.resize===!1||i.hasClass("bar-west")&&r.west.resize===!1||i.hasClass("bar-east")&&r.east.resize===!1)return!1;var a=i.hasClass("bar-south")?i.next():i.prev();a.is(":visible")||a.show();var s=e.cover?$(e.cover).show():$("<div></div>").appendTo(document.body);e.cover=s.get(0),s.css({position:"absolute",opacity:.1,filter:"alpha(opacity=10)",background:"white",zIndex:50,top:0,left:0,width:t.getElementWidth(t.box),height:t.getElementHeight(t.box)});var l=this.proxy?$(this.proxy).show():$(this).clone().html("").appendTo(document.body);this.proxy=l.get(0),l.css({position:"absolute",opacity:.5,filter:"alpha(opacity=50)",zIndex:100,width:this.offsetWidth,height:this.offsetHeight,top:$(this).position().top,left:$(this).position().left,background:"black"});var c={mousemove:function(e){return t.disableSelection(),l.hasClass("bar-east")||l.hasClass("bar-west")?l.css({left:e.pageX}):l.css({top:e.pageY}),!1},mouseup:function(n){$([o.proxy,e.cover]).hide();var r=n.pageX,s=n.pageY,l=t.box.getBoundingClientRect();r-=l.left,s-=l.top;var h=t.userOptions.panelBar.size,p=t.userOptions.panelBar.each;return i.hasClass("bar-west")?a.css({width:r}):i.hasClass("bar-east")?a.css({width:t.getElementWidth(t.box)-r-(p.east.width||h)}):i.hasClass("bar-north")?a.css({height:s}):i.hasClass("bar-south")&&a.css({height:t.getElementHeight(t.box)-s-(p.south.height||h)}),$(document).off("mousemove",c.mousemove),$(document).off("mouseup",c.mouseup),$(window).trigger("resize"),!1}};$(document).on(c)}})},init_toggle:function(){var e=this;$(">.layout-middle-container>.resize-bar .ib-col, >.resize-bar .ib-col",this.box).click(function(){return e.panelToggle($(this).parent()),!1})},panelToggle:function(e){var t=e.hasClass("bar-south")?e.next():e.prev(),n=this.userOptions.panel.each;if(e.hasClass("bar-north")&&n.north.toggle===!1||e.hasClass("bar-south")&&n.south.toggle===!1||e.hasClass("bar-west")&&n.west.toggle===!1||e.hasClass("bar-east")&&n.east.toggle===!1)return!1;var r=t.get(0).style;"none"!==r.display?(t.width("0px"),t.hide()):(e.get(0).style.cursor="","0px"===r.width&&(r.width=""),"0px"===r.height&&(r.height=""),t.show()),this.resize()},resize:function(){var e=this.getElementHeight,t=this.panels,n=this.panelBars,r=/MSIE 6/,o=document.documentMode,i=this.getElementHeight(this.box)-e(t.north)-e(t.south)-e(n.north)-e(n.south);if($(">.layout-middle-container",this.box).height(i),5===o||r.test(navigator.userAgent)){var a=this.getElementWidth,s=this.getElementWidth(this.box)-a(t.west)-a(t.east)-a(n.west)-a(n.east);$(">.layout-middle-container>.layout-center",this.box).css({width:s,height:i}),$(">.layout-middle-container>div",this.box).height(i)}}},n.prototype.init.prototype=n.prototype,this.each(function(){var t=$(this),r=n(this,$.extend(!0,{},e)),o=t.data("ui");o?o.iLayout=r:t.data("ui",{iLayout:r})})}},196:function(e,exports){"use strict";$.fn.tree=function(e){var t=$.type(e);if("string"===t){var n=Array.prototype.slice.call(arguments).slice(1),r=[];return this.each(function(){var t=$(this).data("ui");if(!t||!t.iTree)throw new Error("UI:tree does not init...");r.push(t.iTree[e].apply(t.iTree,n))}),"isLeaf"==e?r[0]:this}e=$.extend(!0,{animate:{time:0},data:[]},e);var o=function e(t,n){return new e.prototype.init(t,n)},i=function t(n,r,o,i,a){r||(r=1),a||(o.innerHTML='<ul data-deep="1"><li class="line" style="display:block;"><a href="javascript:" style="display:none;"><span class="title">__ROOT__</span></a></li></ul>',o=o.children[0].children[0],o.children[0].option={name:"__ROOT__",children:n});var s=document.createElement("ul");s.setAttribute("data-deep",r);for(var l=0,c=n.length-1;l<=c;l++){var h=document.createElement("span"),p=document.createElement("li"),u=document.createElement("a");s.appendChild(p),s.setAttribute("data-deep",r),p.appendChild(u),u.href="javascript:",u.className="line",u.option=n[l];for(var d=n[l].children?1==r?r-2:r-1:r,m=0;m<d;m++){var f=document.createElement("span");u.appendChild(f),f.className=m===d-1?"join":"indent"}var g=document.createElement("span");if(g.className="file",u.appendChild(g),n[l].children){var y=document.createElement("span");u.appendChild(y),y.className="hit",g.className="folder",t(n[l].children,r+1,p,i,!0)}else i.push(s);if(e.checkbox){var w=document.createElement("span");w.className="checkbox"+(n[l].checked?" checkbox-all":""),u.appendChild(w)}u.appendChild(h),h.appendChild(document.createTextNode(n[l].name)),h.className="title"}o.appendChild(s)};return o.prototype={init:function(e,t){var n=this,r=window.document;["Height","Width"].forEach(function(e){n["getView"+e]=function(){var t="BackCompat"===r.compatMode?r.body:r.documentElement;return function(){return t["client"+e]}}(),n["getElement"+e]=function(t){return t&&"none"!==t.style.display?t["offset"+e]:0}});var o=[];i(t.data,1,e,o);var a=$(e.children[0]),s=$(e);if(s.addClass("tree-container"),this.userOptions=t,this.container=s.get(0),this.contents=a.get(0),$(this.contents).delegate("a",{contextmenu:function(e){if(n.userOptions.onContextmenu)return n.userOptions.onContextmenu.bind(this)(e)},click:function(e){return n.isLeaf(this)?($(n.currentElement).removeClass("current"),n.currentElement=this,$(this).addClass("current")):n.toggle(this),n.userOptions.onClick.bind(this)(e)}}),t.checkbox){var l={updateChildCheckState:function(e,t){if(e){var n=e.children,r=n.length;if(n&&r--)for(var o=0;o<=r;o++){var i=n[o],a=i.children[0],s=$(".checkbox",a);s.get(0).className="checkbox",t&&s.addClass("checkbox-all"),a.option.checked=t,l.updateChildCheckState(i.children[1],t)}}},updateParentCheckState:function(e){if(e&&!(e.getAttribute("data-deep")<2)&&"ul"===e.nodeName.toLowerCase()){var t=e.parentNode,n=e.children.length,r=$(">li>a>.checkbox-all",e).length,o=$(".checkbox",t).get(0);if(r&&r===n)o.className="checkbox checkbox-all";else{var i=$(">li>a>.checkbox-some",e).length;i||r?o.className="checkbox checkbox-some":o.className="checkbox"}l.updateParentCheckState(t.parentNode)}}};$(this.contents).delegate(".checkbox",{click:function(){var e=this.parentNode,t=e.parentNode;return l.updateChildCheckState({children:[t]},!e.option.checked),e.parentNode.parentNode.getAttribute("data-deep")>1&&l.updateParentCheckState(t.parentNode),!1}}),$.each(o,function(e,t){l.updateParentCheckState(t)})}if(t.dnd){var c={updatePosition:function(e){$(n.dragingProxyElement).css({top:e.pageY,left:e.pageX+25})},start:function(){$(r).on({mousemove:c.move,mouseup:c.end})},move:function(e){n.disableSelection(),"block"!==n.dragingProxyElement.style.display&&(n.dragingProxyElement.style.display="block"),c.updatePosition(e);var t,o=r.elementFromPoint(e.pageX,e.pageY);if(c.dropPosition=null,o&&($(o).hasClass("line")?t=o:$(o.parentNode).hasClass("line")&&(t=o.parentNode),c.prevLine&&$(c.prevLine).css({border:"",boxSizing:""}),t&&t!=n.dragingElement&&!$.contains(n.dragingElement.parentNode,t))){var i=t.offsetHeight,a=$(t),s=a.position();if(c.prevLine=t,a.css({border:"none"}),e.pageY-s.top<5)a.css({borderTop:"1px dotted red",boxSizing:"border-box"}),c.dropPosition="before";else if(i+s.top-e.pageY<5)a.css({borderBottom:"1px dotted red",boxSizing:"border-box"}),c.dropPosition="after";else{if(n.isLeaf(t))return;a.css({border:"1px dotted red",boxSizing:"border-box"}),c.dropPosition="append"}}},updateChildrenIndext:function(e,t){if(e){var n;n=!e.nodeName||e.nodeType?e.children[0].parentNode:e,n.setAttribute("data-deep",Number(n.parentNode.parentNode.getAttribute("data-deep"))+1);var o=e.children,i=e.children.length,a=t;if(o&&i--){var s=r.createElement("span");s.className="indent";for(var l=0;l<=i;l++){var h=o[l],p=h.children[0];if(a=t,a>=0)for("append"==c.dropPosition&&a++;a--;)p.insertBefore(s.cloneNode(!0),p.children[0]);else for(a=-a,"append"==c.dropPosition&&a--;a--;)p.removeChild(p.children[a]);c.updateChildrenIndext(p.nextSibling,t)}}}},end:function(){if($(n.dragingProxyElement).hide(),$(c.prevLine).css({border:"none"}),$(r).off({mousemove:c.move,mouseup:c.end}),c.dropPosition){if(t.onBeforeDrop){var e=t.onBeforeDrop.bind(n)(c.prevLine,n.dragingElement,c.dropPosition);if(e===!1)return}var o=n.dragingElement.parentNode,i=c.prevLine.parentNode,a=o.parentNode,s=i.parentNode.getAttribute("data-deep")-o.parentNode.getAttribute("data-deep"),h=$(o).index(),p=n.getParentNode(o).option.children,u=p[h];if(p.splice(h,1),"append"===c.dropPosition){if(n.isLeaf(c.prevLine))return;c.prevLine.nextSibling.appendChild(o),c.prevLine.option.children.push(u)}else{var d;i.parentNode===o.parentNode?(d=$(i).index()-($(i).index()>h)+("after"===c.dropPosition),n.getParentNode(i).option.children.splice(d,0,u)):(d=$(i).index()+("after"===c.dropPosition),n.getParentNode(i).option.children.splice(d,0,u)),$(i)[c.dropPosition](o)}c.updateChildrenIndext({children:[o]},s),c.dropPosition=null,t.checkbox&&(o&&l.updateParentCheckState(o.parentNode),a&&l.updateParentCheckState(a),i&&l.updateParentCheckState(i.parentNode)),t.onDrop&&t.onDrop.bind(n)(c.prevLine,n.dragingElement,c.dropPosition)}}};/Chrome/.test(navigator.userAgent)&&$(this.contents).delegate("a",{mouseenter:function(){$(this).addClass("hover")},mouseleave:function(){$(this).removeClass("hover")}}),$(this.contents).delegate("a",{mousedown:function(e){return n.dragingElement=this,n.dragingProxyElement||(n.dragingProxyElement=r.createElement("div"),r.body.appendChild(n.dragingProxyElement),$(n.dragingProxyElement).addClass("tree-draging-proxy")),$(n.dragingProxyElement).html(n.dragingElement.option.name),c.updatePosition(e),c.start(),!1}})}},getParentNode:function(e){var t=null;try{t=e.parentNode.parentNode.children[0]}catch(e){}return t},disableSelection:function(){window.getSelection?window.getSelection().removeAllRanges():document.selection&&document.selection.empty()},isLeaf:function(e){return!e.option.children},toggle:function(e){return this[$(e.nextSibling).is(":visible")?"collapse":"expand"](e),this},expand:function(e){var t="show";return $(e.parentNode).addClass("expanded").find(">a>.hit").addClass("hit-open"),$(e.nextSibling)[t](this.userOptions.animate.time),this},collapse:function(e){var t="hide";return $(e.parentNode).removeClass("expanded").find(">a>.hit").removeClass("hit-open"),$(e.nextSibling)[t](this.userOptions.animate.time),this}},o.prototype.init.prototype=o.prototype,this.each(function(){var t=$(this),n=o(this,$.extend(!0,{},e)),r=t.data("ui");r?r.iTree=n:t.data("ui",{iTree:n})})}},197:function(e,exports){"use strict";$.fn.tabs=function(e){var t=$.type(e);if("string"===t){var n=Array.prototype.slice.call(arguments).slice(1);return this.each(function(){var t=$(this).data("ui");if(!t||!t.iTab)throw new Error("UI:tabs does not init...");t.iTab[e].apply(t.iTab,n)}),!0}e=$.extend(!0,{height:80,tabWidth:160,contentFit:!1,eventType:"click",border:!0,icon:null,selected:0,position:"north"},e);var r=Array.prototype.slice,o=Object.prototype.toString,i=function(e){return o.call(e).slice(8,-1)},a=function e(t){var n="",r=[],o=null,a=null,s=e,l=i(t);if("Array"===l)for(var c in t)n+=s(t[c]);else if("String"===l||"Number"==l)n=t;else if("Object"===l&&t.name){if(o=t.attr,a=t.children,r=[],o)for(var h in o)if("className"!=h){if("style"==h){var p=o[h],u=i(p);if(o[h]="","Object"==u)for(var d in p)o[h]+=d+":"+p[d]+";";else"String"==u&&(o[h]=p)}r.push(""+h+'="'+o[h]+'"')}else r.push('class="'+o[h]+'"');r.length&&r.unshift(""),a&&"Array"!==i(a)&&(a=[a]),n="<"+t.name+r.join(" ")+">"+(a?s(a):"")+"</"+t.name+">"}else n="";return n},s=function(e){var t=[];try{t=r.call(e)}catch(r){for(var n=0,o=e.length-1;n<=o;n++)t.push(e[n])}return t};Array.prototype.indexOf=Array.prototype.indexOf||function(e,t){return $.inArray(e,this,t)},e.renders=r.call(this);var l=function e(t,n){return new e.prototype.init(t,n)};return l.prototype={init:function(e,t){this.render=e,this.userOptions=t,this.headers=$(e.children[0].children).toArray(),this.panels=$(e.children[1].children).toArray(),$(this.panels).addClass("tab-content");var n=this,r=$(e);if(r.addClass("tab-ctn"),this.headers.length&&($(this.headers[t.selected]).addClass("current"),$(this.panels).parent().show().end().hide().eq(t.selected).show()),t.contentFit){var o=e.children[1].offsetHeight-e.children[1].clientHeight,i=e.parentNode;$(window).on("resize.tab-content-fit",function(){$(e.children[1]).css({height:i.clientHeight-o-e.children[0].offsetHeight+"px"})}).resize()}$(e.children[0]).on({click:function(){n.select(n.headers.indexOf(this))}},"li").on({click:function(){return n.close(n.headers.indexOf(this.parentNode.parentNode)),!1}},".closer")},add:function(t,n){var r=this.render,o=this.headers.length,i="before";void 0===n&&(n=o),n<0&&(n=0),o?n>=o&&(n=o,i="after"):(n=0,$(r.children[1]).show());var l=a({name:"li",children:{name:"a",attr:{href:"javascript:"},children:function(){var e=['<!--[if lt IE 8]><p class="iecp"></p><![endif]-->','<span class="title">'+t.title+"</span>"];return t.icon&&e.unshift(a({name:"span",attr:{className:"icon icon-"+t.icon}})),t.closable&&e.push(a({name:"span",attr:{className:"closer"},children:"&times;"})),e}()}}),c=$(a({name:"div",attr:{className:"tab-content",style:{display:"none"}}}));if(this.headers.length){var h="after"===i?n-1:n;$(this.headers[h])[i](l),$(this.panels[h])[i](c.append(t.content))}else $(r.children[0]).html(l),$(r.children[1]).html(c.append(t.content));this.headers=s(r.children[0].children),this.panels=s(r.children[1].children),n<=this.userOptions.selected&&this.userOptions.selected++,t.select&&this.select(n);var p=this.render;return e.contentFit&&(p.children[1].style.height=p.parentNode.offsetHeight-p.children[0].offsetHeight-1+"px"),this},remove:function(e){this.close(e)},close:function(e){var t=this.headers.splice(e,1)[0],n=this.panels.splice(e,1)[0];t.parentNode.removeChild(t),n.parentNode.removeChild(n);var r=this.userOptions;return r.selected==e?this.headers.length?this.select(e-1>0?e-1:0):r.selected=null:r.selected>e&&r.selected--,this},select:function(e){var t=this.userOptions.selected;return!(e<0||e>this.headers.length-1)&&($(this.headers[t]).removeClass("current"),$(this.headers[e]).addClass("current"),$(this.panels[t]).hide(),$(this.panels[e]).show(),this.userOptions.selected=e,this.userOptions.onSelect&&this.userOptions.onSelect(this.panels[e],e),this)}},l.prototype.init.prototype=l.prototype,this.each(function(){var t=$(this),n=l(this,$.extend(!0,{},e)),r=t.data("ui");r?r.iTab=n:t.data("ui",{iTab:n})})}},198:function(e,exports,t){var n;n=function(){return[{name:"收藏",children:[{name:"团队博客",children:[{name:"腾讯",children:[{name:"腾讯Web前端 AlloyTeam",url:"http://www.alloyteam.com/"},{name:"TGideas游戏设计",url:"http://tgideas.qq.com/"},{name:"WSD 用户体验",url:"http://mxd.tencent.com/"},{name:"CDC用户研究与体验设计中心",url:"http://cdc.tencent.com/"}]},{name:"淘宝",children:[{name:"淘宝FED",url:"http://taobaofed.org/"},{name:"一淘UX",url:"http://ux.etao.com/"}]},{name:"阿里巴巴",children:[{name:"阿里中间件",url:"http://jm.taobao.org/"},{name:"阿里巴巴国际站UED",url:"http://www.aliued.com/"},{name:"阿里巴巴中文站UED",url:"http://www.aliued.cn/"}]},{name:"百度",children:[{name:"百度MUX",url:"http://mux.baidu.com/"},{name:"百度FEX",url:"http://fex.baidu.com/"},{name:"ecomfe",url:"http://ecomfe.github.io/"},{name:"百度UED",url:"http://ued.baidu.com/"}]},{name:"奇虎75Team",url:"http://www.75team.com/"},{name:"携程UED",url:"http://ued.ctrip.com/"},{name:"网易UEDC",url:"http://uedc.163.com/"},{name:"新浪UED",url:"http://ued.sina.com/"}]},{name:"个人博客、社区",children:[{name:"博客园",url:"http://www.cnblogs.com"},{name:"掘金",url:"http://gold.xitu.io/welcome"},{name:"众成翻译",url:"http://www.zcfy.cc/"},{name:"Geek.CSDN",url:"http://geek.csdn.net/"},{name:"阮一峰",url:"http://www.ruanyifeng.com/blog/",target:"_blank"},{name:"张鑫旭",url:"http://www.zhangxinxu.com"},{name:"w3cplus",url:"http://www.w3cplus.com/"},{name:"36kr",url:"http://www.36kr.com/"},{name:"welefen",url:"http://www.welefen.com/"},{name:"IBM-CN",url:"https://www.ibm.com/developerworks/cn/"},{name:"月光博客",url:"http://www.williamlong.info/"},{name:"前端观察",url:"http://www.qianduan.net/"},{name:"大前端",url:"http://www.daqianduan.com/"},{name:"酷壳",url:"http://coolshell.cn/"},{name:"Typeof",url:"http://typeof.net"},{name:"cloudgamer",url:"http://www.cnblogs.com/cloudgamer/"},{name:"ziyunfei",url:"http://www.cnblogs.com/ziyunfei/"},{name:"imququ",url:"https://imququ.com/"},{name:"hacker-scripts",url:"https://github.com/NARKOZ/hacker-scripts"},{name:"HTML580",url:"http://www.html580.com/"}]},{name:"Web-UI",children:[{name:"Material",url:"http://www.material-ui.com/#/"},{
name:"Bootstrap",url:"http://getbootstrap.com/"},{name:"AntDesign",url:"https://ant.design/"},{name:"AntV",url:"http://antv.alipay.com/",target:"_blank"},{name:"G2",url:"https://g2.alipay.com/"},{name:"zrender",url:"http://ecomfe.github.io/zrender/"},{name:"Fit",url:"http://fit.baidu.com/components/pc/menu"},{name:"qunee",url:"http://qunee.com/"},{name:"SUI",url:"http://m.sui.taobao.org/"},{name:"LayUI",url:"http://www.layui.com/"},{name:"React-web",url:"https://github.com/taobaofed/react-web"},{name:"Polymer",url:"https://github.com/Polymer/polymer"},{name:"Dragula",url:"https://github.com/bevacqua/dragula"},{name:"zi-han",url:"http://www.zi-han.net/"},{name:"AdminLTE",url:"https://github.com/almasaeed2010/AdminLTE"},{name:"FitVidsJS",url:"http://fitvidsjs.com/"},{name:"Kendo-UI",url:"http://www.telerik.com/kendo-ui"},{name:"HT",url:"http://www.hightopo.com/demos/index.html"}]},{name:"协议、文档、标准",children:[{name:"ES6",url:"http://es6.ruanyifeng.com/"},{name:"MathJS",url:"http://mathjs.org/"},{name:"w3help",url:"http://www.w3help.org/"},{name:"JS标准参考中文",url:"http://javascript.ruanyifeng.com/"},{name:"JSON",url:"http://www.json.org/"},{name:"Git Magic",url:"http://www-cs-students.stanford.edu/~blynn/gitmagic/intl/zh_cn/ch09.html"},{name:"WXOpen",url:"https://mp.weixin.qq.com/"}]},{name:"组织、工具、书籍",children:[{name:"JavascripToo",url:"http://www.javascriptoo.com/"},{name:"HTML5Rock",url:"http://www.html5rocks.com/zh/resources"},{name:"Email-ToolBox",url:"http://email-toolbox.com/"},{name:"Programming-Books",url:"https://github.com/vhf/free-programming-books"},{name:"Javascript-Guide",url:"https://github.com/airbnb/javascript"},{name:"Front-End-Collect",url:"https://github.com/foru17/front-end-collect"},{name:"BestBooks",url:"http://bestcbooks.com/"}]},{name:"软件",children:[{name:"Vim",children:[{name:"Vim官网",url:"http://www.vim.org/"},{name:"Vim官网代理",url:"http://vim.wendal.net/"},{name:"GitHub vim-scripts",url:"https://github.com/vim-scripts?tab=repositories"},{name:"vimer",url:"http://www.vimer.cn/"}]},{name:"GIMP",url:"http://www.gimp.org"},{name:"PHP",url:"http://www.php.net"},{name:"Scala",url:"http://www.scala-lang.org"},{name:"JSDom",url:"https://github.com/tmpvar/jsdom"},{name:"Fiddler",url:"http://www.fiddler2.com/fiddler2/"},{name:"BitBucket",url:"https://bitbucket.org/"},{name:"系统软件",children:[{name:"驱动精灵",url:"http://www.drivergenius.com"},{name:"DiskGenius",url:"http://www.diskgenius.cn/"}]},{name:"版本管理",children:[{name:"Git",url:"http://msysgit.github.com/"},{name:"Github",url:"http://windows.github.com/"},{name:"TortoiseSVN",url:"http://tortoisesvn.net/"},{name:"Win32SVN",url:"http://subversion.apache.org/packages.html#windows"}]}]},{name:"小工具",children:[{name:"Emmet",url:"http://docs.emmet.io/"},{name:"Less",url:"https://github.com/groenewege/vim-less",target:"_blank"},{name:"Vim Zencoding",url:"https://github.com/mattn/zencoding-vim",target:"_blank"},{name:"HTML5轮廓工具",url:"http://gsnedders.html5.org/"},{name:"Trello",url:"https://trello.com"},{name:"ProcessOn",url:"https://www.processon.com/"},{name:"马克飞象",url:"https://maxiang.io/"},{name:"Dexpot",url:"http://dexpot.de/"},{name:"有道笔记",url:"https://note.youdao.com"}]},{name:"Tech",children:[{name:"SinaAppEngine",url:"http://sae.sina.com.cn/"},{name:"MSDN",url:"http://msdn.microsoft.com/en-us/library/ms683218%28VS.85%29.aspx"},{name:"Google Developers",url:"https://developers.google.com/academy/apis/commerce/?hl=zh-cn",target:"_blank"},{name:"谷歌流量分析",url:"https://www.google.com/analytics/web/?hl=zh-CN",target:"_blank"},{name:"Java document",url:"http://docs.oracle.com/javase/6/docs/api/overview-summary.html"},{name:"Codeplex",url:"http://www.codeplex.com/"}]},{name:"搜索、百科与词典",children:[{name:"Baidu",url:"http://www.baidu.com"},{name:"SoSo",url:"http://www.soso.com"},{name:"Google",url:"https://www.google.com",target:"_blank"},{name:"Wikipedia",url:"http://www.wikipedia.org/"}]},{name:"视频",children:[{name:"优酷",url:"http://www.youku.com"},{name:"PPS",url:"http://www.pps.tv"},{name:"土豆",url:"http://www.tudou.com/"},{name:"网易视频",url:"http://v.163.com/"},{name:"迅雷视频",url:"http://www.xunlei.com/"},{name:"风云直播",url:"http://www.fengyunzhibo.com/"}]}]},{name:"JavaScript",children:[{name:"应用",children:[{name:"JQuery",url:"http://jquery.com/"},{name:"Underscore",url:"https://github.com/documentcloud/underscore/"},{name:"Backbone",url:"https://github.com/documentcloud/backbone/"},{name:"iscroll",url:"http://iscrolljs.com/"},{name:"x-tag",url:"http://x-tag.github.io/overview"},{name:"SnapSVG",url:"http://snapsvg.io/"},{name:"JSDoc",url:"https://github.com/jsdoc3/jsdoc"},{name:"WindJS",url:"http://windjs.org/cn/"},{name:"Impress",url:"http://bartaz.github.io/impress.js/#/bored"},{name:"MessengerJS",url:"http://biqing.github.io/MessengerJS/"}]},{name:"Share",children:[{name:"Dron",url:"http://ucren.com/blog/"},{name:"Franky",url:"http://www.cnblogs.com/_franky"},{name:"司徒正美",url:"http://www.cnblogs.com/rubylouvre"},{name:"Gray Zhang",url:"http://otakustay.com/"},{name:"JKisJK",url:"http://www.cnblogs.com/jkisjk"},{name:"cloudgamer",url:"http://www.cnblogs.com/cloudgamer/"}]}]},{name:"NodeJS",children:[{name:"应用",children:[{name:"Curl",url:"https://github.com/cujojs/curl",target:"_blank"}]},{name:"Share",children:[{name:"NodeJS官网",url:"http://nodejs.org/"},{name:"npmjs",url:"https://www.npmjs.com/"}]}]}]}.call(exports,t,exports,e),!(void 0!==n&&(e.exports=n))}})});