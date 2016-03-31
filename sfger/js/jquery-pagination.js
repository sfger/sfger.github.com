!function(e,a){"use strict";e.fn.pagination=function(t){var i=e.type(t);if("string"===i){var n=Array.prototype.slice.call(arguments).slice(1);return this.each(function(){var a=e(this).data("ui");if(!a||!a.iPagination)throw new Error("UI:window does not init...");a.iPagination[t].apply(a.iPagination,n)}),!0}t=e.extend(!0,{useAjax:!1,dataSize:0,show:5,pageSize:25,pageNumber:null,pageNumberQueryName:"pageNumber",showPreNext:!0,showPreNextOnEdge:!0,prePageAlias:"上一页",nextPageAlias:"下一页",pageSizeList:[10,25,50,100]},t);var r=function(e,a){return new r.prototype.init(e,a)};return r.prototype={render:null,pageCount:1,init:function(a,t){this.userOptions=t;var i=t.render;this.pageCount=Math.ceil(t.dataSize/t.pageSize),this.pageCount=this.pageCount<1?1:this.pageCount,e(i).addClass("pagination-ctn");var n,r;n=t.pageNumber,t.useAjax?r="javascript:;":(this.pageNumberRegExp=new RegExp("([?&]{1}"+t.pageNumberQueryName+"=)([^&]*)"),n=this.pageNumberRegExp.exec(location.href),n&&n[2]&&(n=n[2]),n?(r=location.href.replace(this.pageNumberRegExp,"$1"),n=parseInt(n,10),isNaN(n)&&(n=1)):(r=location.search?location.href+"&"+t.pageNumberQueryName+"=":location.href+"?"+t.pageNumberQueryName+"=",n=1)),n=n>this.pageCount?this.pageCount:n,t.pageNumber=n,this.url=r,this.update(n,t.dataSize),this.initEvent()},update:function(a,t){var i=this.userOptions;!isNaN(t)&&Number(t)>=0&&(i.dataSize=t,this.pageCount=Math.ceil(i.dataSize/i.pageSize)||1),e(i.render).html(this.navishow(a,this.pageCount,this.url,i.show)+'&nbsp;<div class="form"><span>第</span><input name="'+i.pageNumberQueryName+'" class="page" type="text" value="" /><a href="javascript:;" class="go">GO</a><span>页</span></div>&nbsp;<div class="desc">共<span class="dataSize">'+i.dataSize+"</span>条记录</div>")},initEvent:function(){var a=this,t=this.userOptions,i=t.render;e(i).on({keyup:function(t){if(-1!=e.inArray(t.keyCode,[8,37,39]))return!0;var i=parseInt(this.value,10)||1;return i>1&&40===t.keyCode&&--i,i<a.pageCount&&38===t.keyCode&&++i,1>i&&(i=1),i>a.pageCount&&(i=a.pageCount),this.value=i,!1}},".page"),e(i).on("click",".go",function(){var n=e(".page",i).val();return!n||isNaN(n)?!1:(n=n>a.pageCount?a.pageCount:1>n?1:n,t.useAjax?(t.pageNumber=Number(n),t.onChangePage&&t.onChangePage.call(a,t.pageNumber,a.pageCount),a.update(t.pageNumber)):a.pageNumberRegExp.test(location.href)?location.href=location.href.replace(a.pageNumberRegExp,"$1"+n):location.href+=(/\?/.test(location.href)?"&":"?")+t.pageNumberQueryName+"="+n,!1)}),t.useAjax&&e(i).on("click",".pn:not(.disabled)",function(){t.pageNumber=Number(this.getAttribute("pageNumber")),t.onChangePage&&t.onChangePage.call(a,t.pageNumber,a.pageCount),a.update(t.pageNumber)})},getNaviNode:function(e,a,t){var i=this.userOptions;i.useAjax||(e=e.replace(this.pageNumberRegExp,"$1"+a));var n=function(){return t===i.prePageAlias?" prev":t===i.nextPageAlias?" next":""}();return(1>a||a>this.pageCount)&&(n+=" disabled"),e='<a href="'+(a>0&&a<=this.pageCount?e:"javascript:;")+'" pageNumber="'+a+'" class="pn'+n+'">'+t+"</a>"},getPlainChild:function(e){return'<a href="javascript:;" class="'+("..."===e?"plain":"current")+'">'+e+"</a>"},navishow:function(e,t,i,n){n=n==a?11:n;var r=Math.floor(n/2),s=0,o='<div class="pc">',p=this.userOptions;if((p.showPreNextOnEdge||p.showPreNext&&e>1)&&(o+=this.getNaviNode(i,e-1,p.prePageAlias||"上一页")),n>=t)for(s=1;t>=s;s++)o+=s==e?this.getPlainChild(s):this.getNaviNode(i,s,s);else{if(r+2>e-2)for(s=1;e>=s;s++)o+=s==e?this.getPlainChild(s):this.getNaviNode(i,s,s);else for(o+=this.getNaviNode(i,1,1),t!=n+1&&(o+=this.getPlainChild("...")),s=e-r+(t-e-r>0?0:t-e-r);e>=s;s++)o+=s==e?this.getPlainChild(s):this.getNaviNode(i,s,s);if(r+3>t-e)for(s=e+1;t>=s;s++)o+=s==e?this.getPlainChild(s):this.getNaviNode(i,s,s);else{for(e=parseInt(e,10),s=e+1;e+r-(e-r>1?0:e-r-1)>=s;s++)o+=s==e?this.getPlainChild(s):this.getNaviNode(i,s,s);t!=n+1&&(o+=this.getPlainChild("...")),o+=this.getNaviNode(i,t,t)}}return(p.showPreNextOnEdge||p.showPreNext&&e!=t)&&(o+=this.getNaviNode(i,e+1,p.nextPageAlias||"下一页")),o+"</div>"}},r.prototype.init.prototype=r.prototype,this.each(function(){var a=e(this),i=r(this,e.extend(!0,{render:this},t)),n=a.data("ui");n?n.iPagination=i:a.data("ui",{iPagination:i})})}}(jQuery);