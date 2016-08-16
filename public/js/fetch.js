!function(t){"use strict";function e(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function r(t){return"string"!=typeof t&&(t=String(t)),t}function o(t){this.map={},t instanceof o?t.forEach(function(t,e){this.append(e,t)},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function n(t){return t.bodyUsed?Promise.reject(new TypeError("Already read")):void(t.bodyUsed=!0)}function i(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function s(t){var e=new FileReader;return e.readAsArrayBuffer(t),i(e)}function a(t){var e=new FileReader;return e.readAsText(t),i(e)}function u(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,"string"==typeof t)this._bodyText=t;else if(c.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(c.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(t){if(!c.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t))throw new Error("unsupported BodyInit type")}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type&&this.headers.set("content-type",this._bodyBlob.type))},c.blob?(this.blob=function(){var t=n(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this.blob().then(s)},this.text=function(){var t=n(this);if(t)return t;if(this._bodyBlob)return a(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)}):this.text=function(){var t=n(this);return t?t:Promise.resolve(this._bodyText)},c.formData&&(this.formData=function(){return this.text().then(d)}),this.json=function(){return this.text().then(JSON.parse)},this}function h(t){var e=t.toUpperCase();return y.indexOf(e)>-1?e:t}function f(t,e){e=e||{};var r=e.body;if(f.prototype.isPrototypeOf(t)){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new o(t.headers)),this.method=t.method,this.mode=t.mode,r||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=t;if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new o(e.headers)),this.method=h(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function d(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),o=r.shift().replace(/\+/g," "),n=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(o),decodeURIComponent(n))}}),e}function p(t){var e=new o,r=t.getAllResponseHeaders().trim().split("\n");return r.forEach(function(t){var r=t.trim().split(":"),o=r.shift().trim(),n=r.join(":").trim();e.append(o,n)}),e}function l(t,e){e||(e={}),this.type="default",this.status=e.status,this.ok=this.status>=200&&this.status<300,this.statusText=e.statusText,this.headers=e.headers instanceof o?e.headers:new o(e.headers),this.url=e.url||"",this._initBody(t)}if(!t.fetch){var c={iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};o.prototype.append=function(t,o){t=e(t),o=r(o);var n=this.map[t];n||(n=[],this.map[t]=n),n.push(o)},o.prototype["delete"]=function(t){delete this.map[e(t)]},o.prototype.get=function(t){var r=this.map[e(t)];return r?r[0]:null},o.prototype.getAll=function(t){return this.map[e(t)]||[]},o.prototype.has=function(t){return this.map.hasOwnProperty(e(t))},o.prototype.set=function(t,o){this.map[e(t)]=[r(o)]},o.prototype.forEach=function(t,e){Object.getOwnPropertyNames(this.map).forEach(function(r){this.map[r].forEach(function(o){t.call(e,o,r,this)},this)},this)},o.prototype.keys=function(){var t=[];this.forEach(function(e,r){t.push(r)});var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return c.iterable&&(e[Symbol.iterator]=function(){return e}),e},o.prototype.values=function(){var t=[];this.forEach(function(e){t.push(e)});var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return c.iterable&&(e[Symbol.iterator]=function(){return e}),e},o.prototype.entries=function(){var t=[];this.forEach(function(e,r){t.push([r,e])});var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return c.iterable&&(e[Symbol.iterator]=function(){return e}),e},c.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var y=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];f.prototype.clone=function(){return new f(this)},u.call(f.prototype),u.call(l.prototype),l.prototype.clone=function(){return new l(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},l.error=function(){var t=new l(null,{status:0,statusText:""});return t.type="error",t};var b=[301,302,303,307,308];l.redirect=function(t,e){if(b.indexOf(e)===-1)throw new RangeError("Invalid status code");return new l(null,{status:e,headers:{location:t}})},t.Headers=o,t.Request=f,t.Response=l,t.fetch=function(t,e){return new Promise(function(r,o){function n(){return"responseURL"in s?s.responseURL:/^X-Request-URL:/m.test(s.getAllResponseHeaders())?s.getResponseHeader("X-Request-URL"):void 0}var i;i=f.prototype.isPrototypeOf(t)&&!e?t:new f(t,e);var s=new XMLHttpRequest;s.onload=function(){var t={status:s.status,statusText:s.statusText,headers:p(s),url:n()},e="response"in s?s.response:s.responseText;r(new l(e,t))},s.onerror=function(){o(new TypeError("Network request failed"))},s.open(i.method,i.url,!0),"include"===i.credentials&&(s.withCredentials=!0),"responseType"in s&&c.blob&&(s.responseType="blob"),i.headers.forEach(function(t,e){s.setRequestHeader(e,t)}),s.send("undefined"==typeof i._bodyInit?null:i._bodyInit)})},t.fetch.polyfill=!0}}("undefined"!=typeof self?self:this);