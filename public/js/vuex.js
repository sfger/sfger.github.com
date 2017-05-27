!function(t,e){"object"===typeof exports&&"undefined"!==typeof module?module.exports=e():"function"===typeof define&&define.amd?define(e):t.Vuex=e()}(this,function(){"use strict";function t(t){x&&(t._devtoolHook=x,x.emit("vuex:init",t),x.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){x.emit("vuex:mutation",t,e)}))}function e(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function n(t){return null!==t&&"object"===typeof t}function o(t){return t&&"function"===typeof t.then}function i(t,e){if(!t)throw new Error("[vuex] "+e)}function r(t,e){if(t.update(e),e.modules)for(var n in e.modules){if(!t.getChild(n))return void console.warn("[vuex] trying to add a new module '"+n+"' on hot reloading, manual reload is needed");r(t.getChild(n),e.modules[n])}}function s(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;u(t,n,[],t._modules.root,!0),a(t,n,e)}function a(t,n,o){var i=t._vm;t.getters={};var r={};e(t._wrappedGetters,function(e,n){r[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{"get":function(){return t._vm[n]},"enumerable":!0})});var s=E.config.silent;E.config.silent=!0,t._vm=new E({"data":{"$$state":n},"computed":r}),E.config.silent=s,t.strict&&d(t),i&&(o&&t._withCommit(function(){i._data.$$state=null}),E.nextTick(function(){return i.$destroy()}))}function u(t,e,n,o,i){var r=!n.length,s=t._modules.getNamespace(n);if(s&&(t._modulesNamespaceMap[s]=o),!r&&!i){var a=m(e,n.slice(0,-1)),f=n[n.length-1];t._withCommit(function(){E.set(a,f,o.state)})}var d=o.context=c(t,s,n);o.forEachMutation(function(e,n){l(t,s+n,e,d)}),o.forEachAction(function(e,n){p(t,s+n,e,d)}),o.forEachGetter(function(e,n){h(t,s+n,e,d)}),o.forEachChild(function(o,r){u(t,e,n.concat(r),o,i)})}function c(t,e,n){var o=""===e,i={"dispatch":o?t.dispatch:function(n,o,i){var r=v(n,o,i),s=r.payload,a=r.options,u=r.type;return a&&a.root||(u=e+u,t._actions[u])?t.dispatch(u,s):void console.error("[vuex] unknown local action type: "+r.type+", global type: "+u)},"commit":o?t.commit:function(n,o,i){var r=v(n,o,i),s=r.payload,a=r.options,u=r.type;a&&a.root||(u=e+u,t._mutations[u])?t.commit(u,s,a):console.error("[vuex] unknown local mutation type: "+r.type+", global type: "+u)}};return Object.defineProperties(i,{"getters":{"get":o?function(){return t.getters}:function(){return f(t,e)}},"state":{"get":function(){return m(t.state,n)}}}),i}function f(t,e){var n={},o=e.length;return Object.keys(t.getters).forEach(function(i){if(i.slice(0,o)===e){var r=i.slice(o);Object.defineProperty(n,r,{"get":function(){return t.getters[i]},"enumerable":!0})}}),n}function l(t,e,n,o){(t._mutations[e]||(t._mutations[e]=[])).push(function(t){n(o.state,t)})}function p(t,e,n,i){(t._actions[e]||(t._actions[e]=[])).push(function(e,r){var s=n({"dispatch":i.dispatch,"commit":i.commit,"getters":i.getters,"state":i.state,"rootGetters":t.getters,"rootState":t.state},e,r);return o(s)||(s=Promise.resolve(s)),t._devtoolHook?s["catch"](function(e){throw t._devtoolHook.emit("vuex:error",e),e}):s})}function h(t,e,n,o){t._wrappedGetters[e]?console.error("[vuex] duplicate getter key: "+e):t._wrappedGetters[e]=function(t){return n(o.state,o.getters,t.state,t.getters)}}function d(t){t._vm.$watch(function(){return this._data.$$state},function(){i(t._committing,"Do not mutate vuex store state outside mutation handlers.")},{"deep":!0,"sync":!0})}function m(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function v(t,e,o){return n(t)&&t.type&&(o=e,e=t,t=t.type),i("string"===typeof t,"Expects string as the type, but found "+typeof t+"."),{"type":t,"payload":e,"options":o}}function y(t){E?console.error("[vuex] already installed. Vue.use(Vuex) should be called only once."):b(E=t)}function _(t){return Array.isArray(t)?t.map(function(t){return{"key":t,"val":t}}):Object.keys(t).map(function(e){return{"key":e,"val":t[e]}})}function g(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function w(t,e,n){var o=t._modulesNamespaceMap[n];return o||console.error("[vuex] module namespace not found in "+e+"(): "+n),o}var b=function(t){function e(){var t=this.$options;t.store?this.$store=t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}if(Number(t.version.split(".")[0])>=2){var n=t.config._lifecycleHooks.indexOf("init")>-1;t.mixin(n?{"init":e}:{"beforeCreate":e})}else{var o=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[e].concat(t.init):e,o.call(this,t)}}},x="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,$=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t},M={"state":{},"namespaced":{}};M.state.get=function(){return this._rawModule.state||{}},M.namespaced.get=function(){return!!this._rawModule.namespaced},$.prototype.addChild=function(t,e){this._children[t]=e},$.prototype.removeChild=function(t){delete this._children[t]},$.prototype.getChild=function(t){return this._children[t]},$.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},$.prototype.forEachChild=function(t){e(this._children,t)},$.prototype.forEachGetter=function(t){this._rawModule.getters&&e(this._rawModule.getters,t)},$.prototype.forEachAction=function(t){this._rawModule.actions&&e(this._rawModule.actions,t)},$.prototype.forEachMutation=function(t){this._rawModule.mutations&&e(this._rawModule.mutations,t)},Object.defineProperties($.prototype,M);var O=function(t){var n=this;this.root=new $(t,!1),t.modules&&e(t.modules,function(t,e){n.register([e],t,!1)})};O.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},O.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")},"")},O.prototype.update=function(t){r(this.root,t)},O.prototype.register=function(t,n,o){var i=this;void 0===o&&(o=!0);var r=this.get(t.slice(0,-1)),s=new $(n,o);r.addChild(t[t.length-1],s),n.modules&&e(n.modules,function(e,n){i.register(t.concat(n),e,o)})},O.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var E,k=function(e){var n=this;void 0===e&&(e={}),i(E,"must call Vue.use(Vuex) before creating a store instance."),i("undefined"!==typeof Promise,"vuex requires a Promise polyfill in this browser.");var o=e.state;void 0===o&&(o={});var r=e.plugins;void 0===r&&(r=[]);var s=e.strict;void 0===s&&(s=!1),this._committing=!1,this._actions=Object.create(null),this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new O(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new E;var c=this,f=this,l=f.dispatch,p=f.commit;this.dispatch=function(t,e){return l.call(c,t,e)},this.commit=function(t,e,n){return p.call(c,t,e,n)},this.strict=s,u(this,o,[],this._modules.root),a(this,o),r.concat(t).forEach(function(t){return t(n)})},j={"state":{}};return j.state.get=function(){return this._vm._data.$$state},j.state.set=function(t){i(!1,"Use store.replaceState() to explicit replace store state.")},k.prototype.commit=function(t,e,n){var o=this,i=v(t,e,n),r=i.type,s=i.payload,a=i.options,u={"type":r,"payload":s},c=this._mutations[r];c?(this._withCommit(function(){c.forEach(function(t){t(s)})}),this._subscribers.forEach(function(t){return t(u,o.state)}),a&&a.silent&&console.warn("[vuex] mutation type: "+r+". Silent option has been removed. Use the filter functionality in the vue-devtools")):console.error("[vuex] unknown mutation type: "+r)},k.prototype.dispatch=function(t,e){var n=v(t,e),o=n.type,i=n.payload,r=this._actions[o];return r?r.length>1?Promise.all(r.map(function(t){return t(i)})):r[0](i):void console.error("[vuex] unknown action type: "+o)},k.prototype.subscribe=function(t){var e=this._subscribers;return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}},k.prototype.watch=function(t,e,n){var o=this;return i("function"===typeof t,"store.watch only accepts a function."),this._watcherVM.$watch(function(){return t(o.state,o.getters)},e,n)},k.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},k.prototype.registerModule=function(t,e){"string"===typeof t&&(t=[t]),i(Array.isArray(t),"module path must be a string or an Array."),this._modules.register(t,e),u(this,this.state,t,this._modules.get(t)),a(this,this.state)},k.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),i(Array.isArray(t),"module path must be a string or an Array."),this._modules.unregister(t),this._withCommit(function(){var n=m(e.state,t.slice(0,-1));E["delete"](n,t[t.length-1])}),s(this)},k.prototype.hotUpdate=function(t){this._modules.update(t),s(this,!0)},k.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(k.prototype,j),"undefined"!==typeof window&&window.Vue&&y(window.Vue),{"Store":k,"install":y,"version":"2.2.1","mapState":g(function(t,e){var n={};return _(e).forEach(function(e){var o=e.key,i=e.val;n[o]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var o=w(this.$store,"mapState",t);if(!o)return;e=o.context.state,n=o.context.getters}return"function"===typeof i?i.call(this,e,n):e[i]},n[o].vuex=!0}),n}),"mapMutations":g(function(t,e){var n={};return _(e).forEach(function(e){var o=e.key,i=e.val;i=t+i,n[o]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];if(!t||w(this.$store,"mapMutations",t))return this.$store.commit.apply(this.$store,[i].concat(e))}}),n}),"mapGetters":g(function(t,e){var n={};return _(e).forEach(function(e){var o=e.key,i=e.val;i=t+i,n[o]=function(){if(!t||w(this.$store,"mapGetters",t))return i in this.$store.getters?this.$store.getters[i]:void console.error("[vuex] unknown getter: "+i)},n[o].vuex=!0}),n}),"mapActions":g(function(t,e){var n={};return _(e).forEach(function(e){var o=e.key,i=e.val;i=t+i,n[o]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];if(!t||w(this.$store,"mapActions",t))return this.$store.dispatch.apply(this.$store,[i].concat(e))}}),n})}});