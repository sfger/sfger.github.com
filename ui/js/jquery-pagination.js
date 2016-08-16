$.fn.pagination=function(e){var a=$.type(e);if("string"===a){var t=Array.prototype.slice.call(arguments).slice(1);return this.each(function(){var a=$(this).data("ui");if(!a||!a.iPagination)throw new Error("UI:window does not init...");a.iPagination[e].apply(a.iPagination,t)}),!0}e=$.extend(!0,{useAjax:!1,dataSize:0,show:5,pageSize:25,pageNumber:null,pageNumberQueryName:"pageNumber",showPreNext:!0,showPreNextOnEdge:!0,prePageAlias:"上一页",nextPageAlias:"下一页",pageSizeList:[10,25,50,100]},e);var i=function(e,a){return new i.prototype.init(e,a)};return i.prototype={render:null,pageCount:1,init:function(e,a){this.userOptions=a;var t=a.render;this.pageCount=Math.ceil(a.dataSize/a.pageSize),this.pageCount=this.pageCount<1?1:this.pageCount,$(t).addClass("pagination-ctn");var i,n;i=a.pageNumber,a.useAjax?n="javascript:;":(this.pageNumberRegExp=new RegExp("([?&]{1}"+a.pageNumberQueryName+"=)([^&]*)"),i=this.pageNumberRegExp.exec(location.href),i&&i[2]&&(i=i[2]),i?(n=location.href.replace(this.pageNumberRegExp,"$1"),i=parseInt(i,10),isNaN(i)&&(i=1)):(n=location.search?location.href+"&"+a.pageNumberQueryName+"=":location.href+"?"+a.pageNumberQueryName+"=",i=1)),i=i>this.pageCount?this.pageCount:i,a.pageNumber=i,this.url=n,this.update(i,a.dataSize),this.initEvent()},update:function(e,a){var t=this.userOptions;!isNaN(a)&&Number(a)>=0&&(t.dataSize=a,this.pageCount=Math.ceil(t.dataSize/t.pageSize)||1),$(t.render).html(this.navishow(e,this.pageCount,this.url,t.show)+'&nbsp;<div class="form"><span>第</span><input name="'+t.pageNumberQueryName+'" class="page" type="text" value="" /><a href="javascript:;" class="go">GO</a><span>页</span></div>&nbsp;<div class="desc">共<span class="dataSize">'+t.dataSize+"</span>条记录</div>")},initEvent:function(){var e=this,a=this.userOptions,t=a.render;$(t).on({keyup:function(a){if(-1!=$.inArray(a.keyCode,[8,37,39]))return!0;var t=parseInt(this.value,10)||1;return t>1&&40===a.keyCode&&--t,t<e.pageCount&&38===a.keyCode&&++t,t<1&&(t=1),t>e.pageCount&&(t=e.pageCount),this.value=t,!1}},".page"),$(t).on("click",".go",function(){var i=$(".page",t).val();return!(!i||isNaN(i))&&(i=i>e.pageCount?e.pageCount:i<1?1:i,a.useAjax?(a.pageNumber=Number(i),a.onChangePage&&a.onChangePage.call(e,a.pageNumber,e.pageCount),e.update(a.pageNumber)):e.pageNumberRegExp.test(location.href)?location.href=location.href.replace(e.pageNumberRegExp,"$1"+i):location.href+=(/\?/.test(location.href)?"&":"?")+a.pageNumberQueryName+"="+i,!1)}),a.useAjax&&$(t).on("click",".pn:not(.disabled)",function(){a.pageNumber=Number(this.getAttribute("pageNumber")),a.onChangePage&&a.onChangePage.call(e,a.pageNumber,e.pageCount),e.update(a.pageNumber)})},getNaviNode:function(e,a,t){var i=this.userOptions;i.useAjax||(e=e.replace(this.pageNumberRegExp,"$1"+a));var n=function(){return t===i.prePageAlias?" prev":t===i.nextPageAlias?" next":""}();return(a<1||a>this.pageCount)&&(n+=" disabled"),e='<a href="'+(a>0&&a<=this.pageCount?e:"javascript:;")+'" pageNumber="'+a+'" class="pn'+n+'">'+t+"</a>"},getPlainChild:function(e){return'<a href="javascript:;" class="'+("..."===e?"plain":"current")+'">'+e+"</a>"},navishow:function(e,a,t,i){i=void 0==i?11:i;var n=Math.floor(i/2),r=0,s='<div class="pc">',o=this.userOptions;if((o.showPreNextOnEdge||o.showPreNext&&e>1)&&(s+=this.getNaviNode(t,e-1,o.prePageAlias||"上一页")),a<=i)for(r=1;r<=a;r++)s+=r==e?this.getPlainChild(r):this.getNaviNode(t,r,r);else{if(e-2<n+2)for(r=1;r<=e;r++)s+=r==e?this.getPlainChild(r):this.getNaviNode(t,r,r);else for(s+=this.getNaviNode(t,1,1),a!=i+1&&(s+=this.getPlainChild("...")),r=e-n+(a-e-n>0?0:a-e-n);r<=e;r++)s+=r==e?this.getPlainChild(r):this.getNaviNode(t,r,r);if(a-e<n+3)for(r=e+1;r<=a;r++)s+=r==e?this.getPlainChild(r):this.getNaviNode(t,r,r);else{for(e=parseInt(e,10),r=e+1;r<=e+n-(e-n>1?0:e-n-1);r++)s+=r==e?this.getPlainChild(r):this.getNaviNode(t,r,r);a!=i+1&&(s+=this.getPlainChild("...")),s+=this.getNaviNode(t,a,a)}}return(o.showPreNextOnEdge||o.showPreNext&&e!=a)&&(s+=this.getNaviNode(t,e+1,o.nextPageAlias||"下一页")),s+"</div>"}},i.prototype.init.prototype=i.prototype,this.each(function(){var a=$(this),t=i(this,$.extend(!0,{render:this},e)),n=a.data("ui");n?n.iPagination=t:a.data("ui",{iPagination:t})})};