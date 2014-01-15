"use strict";
// Extend ECMAScript5 features {{{
if(!Object.keys){
	Object.keys = function(o){
		if(o !== Object(o)){
			throw new TypeError('Object.keys called on a non-object');
		}
		var k=[], p;
		for(p in o){
			if(Object.prototype.hasOwnProperty.call(o,p)){
				k.push(p);
			}
		}
		return k;
	};
}
if(typeof Array.prototype.forEach != "function"){
	Array.prototype.forEach = function(fn, scope){
		for(var i=0,len=this.length; i<len; ++i){
			if(i in this){
				fn.call(scope, this[i], i, this);
			}
		}
	};
}
if(!Function.prototype.bind){
	Function.prototype.bind = function(oThis){
		if(typeof this!=="function"){
			throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
		}
		var aArgs = Array.prototype.slice.call(arguments, 1), 
			fToBind = this, 
			fNOP    = function(){},
			fBound  = function(){
				return fToBind.apply(
					this instanceof fNOP && oThis ? this : oThis || window,
					aArgs.concat(Array.prototype.slice.call(arguments))
				);
			};
		fNOP.prototype   = this.prototype;
		fBound.prototype = new fNOP();
		return fBound;
	};
}
if(typeof Array.prototype.indexOf != "function"){
	Array.prototype.indexOf = function(searchElement, fromIndex){
		var index = -1;
		fromIndex = fromIndex*1 || 0;
		for (var k=0, length=this.length; k<length; k++) {
			if(k>=fromIndex && this[k]===searchElement){
				index = k;
				break;
			}
		}
		return index;
	};
}
if(typeof Array.prototype.lastIndexOf != "function"){
	Array.prototype.lastIndexOf = function(searchElement, fromIndex){
		var index = -1, length = this.length;
		fromIndex = fromIndex*1 || length-1;
		for(var k=length-1; k>-1; k-=1){
			if(k<=fromIndex && this[k] === searchElement){
				index = k;
				break;
			}
		}
		return index;
	};
}
if(typeof Array.prototype.reduce != "function"){
	Array.prototype.reduce = function(callback, initialValue){
		var previous = initialValue, k = 0, length = this.length;
		if(typeof initialValue === "undefined"){
			previous = this[0];
			k = 1;
		}

		if(typeof callback === "function"){
			for(k; k<length; k++){
				this.hasOwnProperty(k) && (previous = callback(previous, this[k], k, this));
			}
		}
		return previous;
	};
}

if(typeof Array.prototype.reduceRight != "function"){
	Array.prototype.reduceRight = function(callback, initialValue ){
		var length = this.length, k = length - 1, previous = initialValue;
		if(typeof initialValue === "undefined"){
			previous = this[length - 1];
			k--;
		}
		if(typeof callback === "function"){
			for(k; k>-1; k-=1){          
				this.hasOwnProperty(k) && (previous = callback(previous, this[k], k, this));
			}
		}
		return previous;
	};
}
if(!Date.now){
	Date.now = function(){
		return (new Date).valueOf();
	};
}
if(!String.prototype.trim){
	String.prototype.trim = function(){
		return this.replace(/^\s+|\s+$/g, '');
	};
}
if(typeof Array.prototype.map != "function"){
	Array.prototype.map = function(fn, context){
		var arr = [];
		if(typeof fn === "function"){
			for(var k=0, length=this.length; k<length; k++) {
				arr.push(fn.call(context, this[k], k, this));
			}
		}
		return arr;
	};
}
if(typeof Array.prototype.filter != "function"){
	Array.prototype.filter = function(fn, context){
		var arr = [];
		if(typeof fn === "function"){
			for(var k=0, length=this.length; k<length; k++){
				fn.call(context, this[k], k, this) && arr.push(this[k]);
			}
		}
		return arr;
	};
}
if(typeof Array.prototype.some != "function"){
	Array.prototype.some = function(fn, context){
		var passed = false;
		if(typeof fn === "function"){
			for (var k=0, length=this.length; k<length; k++) {
				if(passed === true) break;
				passed = !!fn.call(context, this[k], k, this);
			}
		}
		return passed;
	};
}
if(typeof Array.prototype.every != "function"){
	Array.prototype.every = function(fn, context){
		var passed = true;
		if(typeof fn === "function"){
			for(var k=0, length=this.length; k<length; k++){
				if(passed === false) break;
				passed = !!fn.call(context, this[k], k, this);
			}
		}
		return passed;
	};
}
// }}}

var get_global = function(){
	return this || (1, eval)('this');
};
var global = get_global();
var toString = Object.prototype.toString;
var clog = function(txt){
	global.console && console.log(txt);
};
var object_dump = function(e){
	for(var i in e){
		clog(i+': '+e[i]);
	}
};
var str_pad = function(nu, len, chr, lr){
	return (nu=[String(nu), ''])[+!(lr=+(lr=='r'))]
		+ new Array(((len=((len||2)+1-nu[0].length))>0)?len:0).join(chr||' ')
		+ nu[lr];
};
var strtotime = function( str ){
	//if(!str || (typeof str.replace != 'function')) return false;
	return Date.parse( str.replace(/-/g, '/') )/1000;
};
var get_object_type = function(obj){
	return toString.call(obj).slice(8, -1);
};

//fn http_build_query{{{
var http_build_query = function(o){
    var temp= [], ret = '', type;
    for(var i in o){
		type = get_object_type(o[i]);
		if(type=='String' || type=='Number'){
			temp.push((arguments[1]&&arguments[1]+'[]'||i)+"="+encodeURIComponent(o[i]));
		}else if(type=='Array'){
			temp.push(http_build_query(o[i], i));
		}
	}
    ret = temp.join("&");
	return ret;
};
//}}}

//fn number_format{{{
var number_format = function(n, c){
	n = n || 0;
	return n.toString().replace(
		/(^\d+)/,
		function(n){
			return n.replace(new RegExp("\\B(?=(\\d{"+(c||3)+"})+$)", 'g'), ',');
		}
	);
};
//}}}

//fn decode{{{
var decode = function(){
    var args = Array.prototype.slice.call(arguments);
    var val = args.shift();
    var ret = null;
    for(var i=0; i<args.length; i+=2){
        if(val===args[i] && (i+1 in args)){
			if(get_object_type(args[i+1])!='Function'){
				ret = args[i+1];
			}else{
				ret = args[i+1](args[i], val);
			}
			break;
		}else if((i+1)==args.length){
			var tmp = args[args.length-1];
			if(get_object_type(tmp)!='Function'){
				ret = tmp;
			}else{
				ret = tmp(val);
			}
		}
    }
    return ret;
};
//}}}

//fn create_node {{{
var create_node = function(node){
	var cd = '',
		at=[],
		attr = null,
		children = null,
		fn = create_node,
		node_type = get_object_type(node);
	if(node_type === 'Array'){
		for(var j in node) cd += fn(node[j]);
	}else{
		if(node_type==="String" || node_type=="Number"){
			cd = node;
		}else if(node_type==='Object' && node.name){
			attr = node.attr, children = node.children, at = [];
			if(attr){
				for(var key in attr){
					if(key=='style'){
						var style = attr[key];
						var ot = get_object_type(style);
						attr[key] = '';
						if(ot=='Object'){
							for(var sk in style){
								attr[key] += sk + ':' + style[sk] + ';';
							}
						}else if(ot=='String'){
							attr[key] = style;
						}
					}
					at.push('' + key + '="' + attr[key] + '"');
				}
			}
			if(at.length) at.unshift('');
			if(get_object_type(children) !== 'Array') children = [children];
			cd = '<' + node.name + at.join(' ') + '>' + fn(children) + '</' + node.name + '>';
		} else cd = '';
	}
	return cd;
};
//}}}

//fn date{{{
var date = function(format, timestamp){
    var a, jsdate=((timestamp) ? new Date(timestamp*1000) : new Date());
    var pad = function(n, c){
        if((n = n + "").length < c){
            return new Array(++c - n.length).join("0") + n;
        } else {
            return n;
        }
    };
    var txt_weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var txt_ordin = {1:"st", 2:"nd", 3:"rd", 21:"st", 22:"nd", 23:"rd", 31:"st"};
    var txt_months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var f = {
        // Day
        d: function(){return pad(f.j(), 2);},
        D: function(){return f.l().substr(0,3);},
        j: function(){return jsdate.getDate();},
        l: function(){return txt_weekdays[f.w()];},
        N: function(){return f.w() + 1;},
        S: function(){return txt_ordin[f.j()] ? txt_ordin[f.j()] : 'th';},
        w: function(){return jsdate.getDay();},
        z: function(){return (jsdate - new Date(jsdate.getFullYear() + "/1/1")) / 864e5 >> 0;},
       
        // Week
        W: function(){
            var a = f.z(), b = 364 + f.L() - a;
            var nd2, nd = (new Date(jsdate.getFullYear() + "/1/1").getDay() || 7) - 1;
            if(b <= 2 && ((jsdate.getDay() || 7) - 1) <= 2 - b){
                return 1;
            } else{
                if(a <= 2 && nd >= 4 && a >= (6 - nd)){
                    nd2 = new Date(jsdate.getFullYear() - 1 + "/12/31");
                    return date("W", Math.round(nd2.getTime()/1000));
                } else{
                    return (1 + (nd <= 3 ? ((a + nd) / 7) : (a - (7 - nd)) / 7) >> 0);
                }
            }
        },
       
        // Month
        F: function(){return txt_months[f.n()];},
        m: function(){return pad(f.n(), 2);},
        M: function(){return f.F().substr(0,3);},
        n: function(){return jsdate.getMonth() + 1;},
        t: function(){
            var n;
            if( (n = jsdate.getMonth() + 1) == 2 ){
                return 28 + f.L();
            } else{
                if( n & 1 && n < 8 || !(n & 1) && n > 7 ){
                    return 31;
                } else{
                    return 30;
                }
            }
        },
       
        // Year
        L: function(){var y = f.Y();return (!(y & 3) && (y % 1e2 || !(y % 4e2))) ? 1 : 0;},
        //o not supported yet
        Y: function(){return jsdate.getFullYear();},
        y: function(){return (jsdate.getFullYear() + "").slice(2);},
       
        // Time
        a: function(){return jsdate.getHours() > 11 ? "pm" : "am";},
        A: function(){return f.a().toUpperCase();},
        B: function(){
            // peter paul koch:
            var off = (jsdate.getTimezoneOffset() + 60)*60;
            var theSeconds = (jsdate.getHours() * 3600) + (jsdate.getMinutes() * 60) + jsdate.getSeconds() + off;
            var beat = Math.floor(theSeconds/86.4);
            if (beat > 1000) beat -= 1000;
            if (beat < 0) beat += 1000;
            if ((String(beat)).length == 1) beat = "00"+beat;
            if ((String(beat)).length == 2) beat = "0"+beat;
            return beat;
        },
        g: function(){return jsdate.getHours() % 12 || 12;},
        G: function(){return jsdate.getHours();},
        h: function(){return pad(f.g(), 2);},
        H: function(){return pad(jsdate.getHours(), 2);},
        i: function(){return pad(jsdate.getMinutes(), 2);},
        s: function(){return pad(jsdate.getSeconds(), 2);},
        //u not supported yet
       
        // Timezone
        //e not supported yet
        //I not supported yet
        O: function(){
            var t = pad(Math.abs(jsdate.getTimezoneOffset()/60*100), 4);
            if (jsdate.getTimezoneOffset() > 0) t = "-" + t; else t = "+" + t;
            return t;
        },
        P: function(){var O = f.O();return (O.substr(0, 3) + ":" + O.substr(3, 2));},
        //T not supported yet
        //Z not supported yet
       
        // Full Date/Time
        c: function(){return f.Y() + "-" + f.m() + "-" + f.d() + "T" + f.h() + ":" + f.i() + ":" + f.s() + f.P();},
        //r not supported yet
        U: function(){return Math.round(jsdate.getTime()/1000);}
    };
       
    return format.replace(/[\\]?([a-zA-Z])/g, function(t, s){
		var ret = '';
        if( t!=s ){
            // escaped
            ret = s;
        } else if( f[s] ){
            // a date function exists
            ret = f[s]();
        } else{
            // nothing special
            ret = s;
        }
        return ret;
    });
};
//}}}

//date_helper{{{
(function(global){
	var date_helper = function($t){
		return new date_helper.prototype.init($t);
	};
	date_helper.prototype = {
		date         : '',
		current_date : '',

		datetime         : '',
		current_datetime : '',

		timestamp         : 0,
		current_timestamp : 0,

		init:function($t){
			if(!$t) $t = null;
			this.set_date($t);
			return this;
		},
		get_timestamp:function($t){
			return ! isNaN($t) ? $t : strtotime($t);
		},
		get_interval:function($etime, $stime){
			if(!$etime) $etime = null;
			if(!$stime) $stime = null;
			$etime = ($etime===null) ? this.current_timestamp : this.get_timestamp($etime);
			$stime = ($stime===null) ? this.timestamp         : this.get_timestamp($stime);
			return $etime - $stime;
		},
		get_offset:function($edate, $sdate){
			if(!$edate) $edate = null;
			if(!$sdate) $sdate = null;
			return this.get_interval($edate, $sdate) / 86400;
		},
		set_date:function($t){
			if(!$t) $t = null;
			if($t===null) $t = Math.round(new Date().getTime()/1000);
			var $timestamp = this.get_timestamp($t);

			this.timestamp = $timestamp;
			this.date      = date('Y-m-d', $timestamp);
			this.datetime  = date('Y-m-d H:i:s', $timestamp);
			return this.reset_current_date();
		},
		reset_current_date:function(){
			return this.set_current_date(this.timestamp);
		},
		set_current_date:function($t){
			var $timestamp = this.get_timestamp($t);

			this.current_timestamp = $timestamp;
			this.current_date      = this.php_date();
			this.current_datetime  = this.php_date('Y-m-d H:i:s');
			return this;
		},
		get_offset_date: function($offset, $type){
			if(!$type) $type = 'd';
			var $year, $timestamp;
			$offset = parseInt($offset);
			switch($type){
			case 'Y':
				$year = parseInt(this.php_date('Y')) + $offset;
				return this.set_current_date( this.php_date($year+"-m-d H:i:s") );
				break;
			case 'm':
				var $tmonth = parseInt(this.php_date('Y')*12) + parseInt(this.php_date('m')) + parseInt($offset);
				$year   = Math.floor($tmonth / 12);
				var $month = Math.floor($tmonth % 12);
				if($month<10) $month = '0' + $month;
				var $other  = this.php_date('d H:i:s');
				return this.set_current_date($year+'-'+$month+'-'+$other);
				break;
			case 'w':
				$timestamp = $offset * 7 * 86400;
				break;
			case 'H':
				$timestamp = $offset * 3600;
				break;
			case 'i':
				$timestamp = $offset * 60;
				break;
			case 's':
				$timestamp = $offset;
				break;
			default://d
				$timestamp = $offset * 86400;
				break;
			}
			return this.set_current_date(this.current_timestamp + $timestamp);
		},
		php_date:function($formatter){
			if(!$formatter) $formatter = 'Y-m-d';
			return date($formatter, this.current_timestamp);
		},
		get_first_date_of_month:function(){
			var $offset = -(this.php_date('j') -1);
			return this.get_offset_date($offset);
		},
		get_last_date_of_month:function(){
			var $offset = this.php_date('t') - this.php_date('j');
			return this.get_offset_date($offset);
		},

		get_first_date_of_season:function(){
			var $ts = this.current_timestamp;
			var $m  = 3 * (Math.ceil(date('m', $ts)/3)-1)+1;
			if($m!=10) $m = '0' + $m;
			var $ret    = date("Y-"+$m+"-01", $ts);
			var $offset = (strtotime($ret) - this.current_timestamp) / 86400;
			return this.get_offset_date($offset);
		},
		get_last_date_of_season:function(){
			return this.get_first_date_of_season()
						.get_offset_date(+120)
						.get_first_date_of_season()
						.get_offset_date(-1);
		}

	};
	date_helper.prototype.init.prototype = date_helper.prototype;
	return global.date_helper = date_helper;
})(global);
//}}}

// vim: fdm=marker :
