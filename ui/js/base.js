var light={ui:{markChars:{up:"↑",down:"↓",expand:"▼",fold:"▲",close:"×",ok:"√",empty:"&nbsp;&nbsp;"}},util:{slice:Array.prototype.slice,push:Array.prototype.push,toString:Object.prototype.toString,hasOwnProperty:Object.prototype.hasOwnProperty,list2Array:function(e){var t=[],n=light.util.slice;try{t=n.call(e)}catch(r){for(var i=0,l=e.length-1;i<=l;i++)t.push(e[i])}return t},getType:function(e){return light.ui.toString.call(e).slice(8,-1)},isWindow:function(e){return null!=e&&e==e.window},isPlainObject:function(e){if("object"!==light.util.getType(e)||e.nodeType||light.util.isWindow(e))return!1;try{if(e.constructor&&!light.util.hasOwnProperty.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},extend:function(){var e=1,t=arguments[0],n=!1,r=arguments.length;"boolean"==typeof t&&(n=t,t=arguments[e++]||{});var i=light.util.getType,l=i(t);l in{Object:1,Function:1}||(t={}),e===r&&(t={},e--);for(;e<r;e++){var a=arguments[e];if(null!=a)for(var o in a){var c=t[o],s=a[o],u=i(s),f=i(c);if(t!==s)if(n&&s&&light.util.isPlainObject(s)&&"Array"===u){var p="Array"===u?c&&"Array"===f?c:[]:c&&light.util.isPlainObject(s)?c:{};t[o]=light.util.extend(n,p,s)}else void 0!==s&&(t[o]=s)}}return t},createElement:function(e){var t=light.util.getType,n="",r=[],i=null,l=null,a=light.util.createElement,o=t(e);if("Array"===o)for(var c in e)n+=a(e[c]);else if("String"===o||"Number"==o)n=e;else if("Object"===o&&e.name){if(i=e.attr,l=e.children,r=[],i)for(var s in i)if("className"!=s){if("style"==s){var u=i[s],f=t(u);if(i[s]="","Object"==f)for(var p in u)i[s]+=p+":"+u[p]+";";else"String"==f&&(i[s]=u)}r.push(""+s+'="'+i[s]+'"')}else r.push('class="'+i[s]+'"');r.length&&r.unshift(""),l&&"Array"!==t(l)&&(l=[l]),n="<"+e.name+r.join(" ")+">"+(l?a(l):"")+"</"+e.name+">"}else n="";return n},createDomElement:function(e,t){if(e){var n=light.util.getType,r=t?t:document.createDocumentFragment(),i=light.util.createDomElement,l=n(e),a={String:1,Number:1},o=Object.prototype.hasOwnProperty;if(a[l])r.appendChild(document.createTextNode(e));else if("Object"===l&&e.name){var c,s=e.attr,u=e.prop,f=e.children;if(s)for(c in s)if("style"===c){var p=s[c],h=n(p);if("Object"==h)for(var v in p)o.call(p,v)&&(r.style[v]=p[v]);else"String"==h&&(r.style.cssText=p)}else r.setAttribute(c,s[c]);if(u)for(c in u)o.call(u,c)&&("class"==c&&(c="className"),r[c]=u[c]);if(f)if(a[n(f)])r.innerHTML+=f;else{"Array"!==n(f)&&(f=f[y]);for(var d,y=0,g=f.length-1;y<=g;y++)a[n(f[y])]?r.innerHTML+=f[y]:f[y].name&&(d=document.createElement(f[y].name),r.appendChild(d),i(f[y],d))}}r.children||(r.children=r.childNodes),r=null}}},Event:{on:function(e,t,n,r){var i=function(e,t,n){var r=!!window.addEventListener;this[r?"addEventListener":"attachEvent"]((r?"":"on")+e,t,n)};n.bindEventListener=function(e){n.call(e.target||e.srcElement,e||event)},i.apply(t,[e,n.bindEventListener,void 0===r||r])},off:function(e,t,n,r){var i=!!window.removeEventListener;t[i?"removeEventListener":"detachEvent"]((i?"":"on")+e,n.bindEventListener,void 0===r||r)},stop:function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0},prevent:function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}}};