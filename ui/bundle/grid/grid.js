"use strict";

// fn get_table_content{{{
var get_table_content = function(data, head){
	head = head || Object.keys(data[0]);
	var s = ['<div><div style="overflow:hidden;"><div style="overflow:hidden;"><table class="data-table" cellspacing="0" cellpading="0"><tr class="thead">'];
	head.forEach(function(one, i){
		s.push('<td><div class="d-cell">' + one + '</div></td>');
	});
	s.push('</tr></table></div></div><div style="height:350px;overflow:auto;"><table class="data-table" cellspacing="0" cellpading="0">');
	data.forEach(function(one, i){
		s.push('<tr>' + (function(head){
			var ss = [];
			head.forEach(function(two, k){
				ss.push('<td><div class="d-cell">' + number_format(one[two]) + '</div></td>');
			});
			return ss.join('');
		})(head) + '</tr>');
	});
	s.push('</table></div><div>');
	return s.join('');
};
// }}}

//fn resize_frozen_table{{{
var resize_frozen_table = function(tables, user_options){
	if(tables.length==2){
		var data_tds = tables.eq(1).find('tr:first-child').find('td'),
			fixed_width = (!!(/MSIE|Chrome/.test(navigator.userAgent))) && 1,
			tp0 = tables.eq(0).parent(),
			tp1 = tables.eq(1).parent(),
			width_full = document.compatMode === "CSS1Compat" ? 'auto' : '100%';
		tp0.width(10000);
		tp1.width(10000);
		var cld = tables[0].children[0].children[0].children;
		/*
		for(var i=0, len=cld.length; i<len; i++){
			var w1 = $(cld[i]).width() + fixed_width,
				w2 = data_tds.eq(i).width() + fixed_width,
				w3 = 0,
				that = cld[i];
			decode(w1<w2, true, function(){ w3 = w2; }, function(){ w3 = w1; });
			$('.d-cell', that).css({width:w3});
			data_tds.eq(i).find('.d-cell').css({width:w3});
		}
		*/
		for(var i=0, len=cld.length; i<len; i++){
			var w3 = user_options[i] ? user_options[i] : 140,
				that = cld[i];
			$('.d-cell', that).css({width:w3});
			data_tds.eq(i).find('.d-cell').css({width:w3});
		}
		var scroll_bar_width = tp1.width() - tp1.get(0).scrollWidth + 1 + fixed_width;
		var width = tables.eq(1).width();
		tp1.width(width);
		tables.eq(0).css('width', width);
		tables.eq(1).css('width', width);
		tp1.css({width:width_full});
		tp0.parent().css({width:width_full, overflow:'hidden'});
		$(tp1).on('scroll', function(){
			tp0.parent().get(0).scrollLeft = this.scrollLeft;
		});
	}
};
//}}}

// vim: set fdm=marker :
