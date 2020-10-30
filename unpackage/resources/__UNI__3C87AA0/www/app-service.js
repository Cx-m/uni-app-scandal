var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'common-list-right data-v-1499a112'])
Z([3,'u-f-aj data-v-1499a112'])
Z([3,'__l'])
Z([3,'data-v-1499a112'])
Z([[6],[[7],[3,'item']],[3,'sex']])
Z([[6],[[7],[3,'item']],[3,'userage']])
Z([3,'3cdb7cb2-1'])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'isguanzhu']]])
Z([3,'u-f-ajc data-v-1499a112'])
Z([[6],[[7],[3,'item']],[3,'titleimg']])
Z([[6],[[7],[3,'item']],[3,'video']])
Z([[6],[[7],[3,'item']],[3,'sharea']])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'maskshow']])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'common-list-right data-v-2a069383'])
Z([3,'u-f-aj data-v-2a069383'])
Z([3,'__l'])
Z([3,'data-v-2a069383'])
Z([[6],[[7],[3,'item']],[3,'sex']])
Z([[6],[[7],[3,'item']],[3,'userage']])
Z([3,'6cf1c04e-1'])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'isguanzhu']]])
Z([3,'u-f-l data-v-2a069383'])
Z([[6],[[7],[3,'item']],[3,'video']])
Z([[6],[[7],[3,'item']],[3,'sharea']])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'index-listthree u-f-ajc data-v-5aa762eb'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'opendetail']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'video']])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([1,false])
Z([3,'data-v-27363847'])
Z([1,true])
Z(z[3])
Z([3,'119b0318-1'])
Z([[4],[[5],[[5],[[5],[1,'default']],[1,'left']],[1,'right']]])
Z([3,'index1'])
Z([3,'item'])
Z([[7],[3,'tabs']])
Z([3,'id'])
Z([3,'__e'])
Z([[4],[[5],[[5],[[5],[1,'u-f-ajc data-v-27363847']],[[2,'?:'],[[2,'=='],[[7],[3,'tabindex']],[[7],[3,'index1']]],[1,'active'],[1,'']]],[[2,'?:'],[[2,'!=='],[[7],[3,'tabindex']],[[7],[3,'index1']]],[1,'activeno'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changeindex']],[[4],[[5],[[7],[3,'index1']]]]]]]]]]]])
Z([[2,'=='],[[7],[3,'tabindex']],[[7],[3,'index1']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'zhitiao u-f-a data-v-83b699b4'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'opendetail']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'>'],[[6],[[7],[3,'item']],[3,'papertext']],[1,0]])
Z([3,'__l'])
Z([3,'data-v-83b699b4'])
Z([[6],[[7],[3,'item']],[3,'papertext']])
Z([3,'error'])
Z([3,'a704bea2-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'text']])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'uni-navbar'])
Z([[4],[[5],[[5],[[5],[[5],[1,'uni-navbar__content']],[[2,'?:'],[[7],[3,'fixed']],[1,'uni-navbar--fixed'],[1,'']]],[[2,'?:'],[[7],[3,'border']],[1,'uni-navbar--shadow'],[1,'']]],[[2,'?:'],[[7],[3,'border']],[1,'uni-navbar--border'],[1,'']]]])
Z([[2,'+'],[[2,'+'],[1,'background-color:'],[[7],[3,'backgroundColor']]],[1,';']])
Z([[7],[3,'statusBar']])
Z([3,'__l'])
Z([3,'b36518fc-1'])
Z([3,'uni-navbar__header uni-navbar__content_view'])
Z([[2,'+'],[[2,'+'],[1,'color:'],[[7],[3,'color']]],[1,';']])
Z([3,'__e'])
Z([3,'uni-navbar__header-btns uni-navbar__content_view'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onClickLeft']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'leftIcon']],[3,'length']])
Z(z[4])
Z([[7],[3,'color']])
Z([3,'24'])
Z([[7],[3,'leftIcon']])
Z([3,'b36518fc-2'])
Z([[6],[[7],[3,'leftText']],[3,'length']])
Z([3,'left'])
Z([3,'uni-navbar__header-container uni-navbar__content_view'])
Z([[6],[[7],[3,'title']],[3,'length']])
Z(z[8])
Z(z[9])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onClickRight']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'rightIcon']],[3,'length']])
Z(z[4])
Z(z[13])
Z(z[14])
Z([[7],[3,'rightIcon']])
Z([3,'b36518fc-3'])
Z([[2,'&&'],[[6],[[7],[3,'rightText']],[3,'length']],[[2,'!'],[[6],[[7],[3,'rightIcon']],[3,'length']]]])
Z([3,'right'])
Z([[7],[3,'fixed']])
Z(z[3])
Z(z[4])
Z([3,'b36518fc-4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showPopup']])
Z([3,'__e'])
Z([[4],[[5],[[5],[[5],[[5],[[5],[1,'uni-popup__wrapper']],[[7],[3,'type']]],[[7],[3,'ani']]],[[2,'?:'],[[7],[3,'animation']],[1,'ani'],[1,'']]],[[2,'?:'],[[2,'!'],[[7],[3,'custom']]],[1,'uni-custom'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'close']],[[4],[[5],[1,true]]]]]]]]]]])
Z(z[1])
Z([3,'uni-popup__wrapper-box'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'clear']],[[4],[[5],[1,'$event']]]]]]]]]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'data-v-b092eea4'])
Z([[6],[[7],[3,'item']],[3,'sex']])
Z([[6],[[7],[3,'item']],[3,'age']])
Z([3,'2f5d01cc-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'chat-big'])
Z([[6],[[7],[3,'item']],[3,'persontime']])
Z([[4],[[5],[[5],[1,'user-chat-list u-f-d']],[[2,'?:'],[[6],[[7],[3,'item']],[3,'isme']],[1,'user-char-me'],[1,'']]]])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'isme']]])
Z([3,'user-chat-title u-f-ajc'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'text']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'img']])
Z([[6],[[7],[3,'item']],[3,'isme']])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'list']])
Z([3,'3db16520-1'])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'commonlist']],[3,'commonarry']])
Z(z[3])
Z(z[0])
Z([[7],[3,'index']])
Z([[7],[3,'item']])
Z([[2,'+'],[1,'3db16520-2-'],[[7],[3,'index']]])
Z(z[0])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^submit']],[[4],[[5],[[4],[[5],[1,'submit']]]]]]]]])
Z([3,'3db16520-3'])
Z(z[0])
Z(z[12])
Z([[4],[[5],[[4],[[5],[[5],[1,'^ismask']],[[4],[[5],[[4],[[5],[1,'alertmask']]]]]]]]])
Z([[7],[3,'maskshow']])
Z([[7],[3,'providerList']])
Z([3,'3db16520-4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z(z[1])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^clickLeft']],[[4],[[5],[[4],[[5],[1,'back']]]]]]]],[[4],[[5],[[5],[1,'^clickRigth']],[[4],[[5],[[4],[[5],[1,'submit']]]]]]]]])
Z([1,true])
Z([3,'icon iconfont icon-fanhui'])
Z([3,'发布'])
Z(z[4])
Z([3,'46f82400-1'])
Z([[4],[[5],[1,'default']]])
Z(z[0])
Z(z[1])
Z(z[1])
Z(z[1])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^deleted']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'deleted']],[[4],[[5],[1,'$0']]]],[[4],[[5],[1,'index']]]]]]]]]],[[4],[[5],[[5],[1,'^previewImage']],[[4],[[5],[[4],[[5],[1,'previewImage']]]]]]]],[[4],[[5],[[5],[1,'^chooseImage']],[[4],[[5],[[4],[[5],[1,'chooseImage']]]]]]]]])
Z([[7],[3,'imageList']])
Z([3,'46f82400-2'])
Z(z[0])
Z([[7],[3,'show']])
Z([3,'46f82400-3'])
Z(z[9])
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z(z[1])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^tabtap']],[[4],[[5],[[4],[[5],[1,'tabtap']]]]]]]],[[4],[[5],[[5],[1,'^watchscroll']],[[4],[[5],[[4],[[5],[1,'watchscroll']]]]]]]]])
Z([[7],[3,'linewidth']])
Z([[7],[3,'scroll']])
Z([[7],[3,'tabindex']])
Z([[7],[3,'tablist']])
Z([3,'8dd740cc-1'])
Z(z[1])
Z([3,'swiper-box'])
Z(z[6])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'watchchange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[7],[3,'swheigth']],[1,'px']]],[1,';']])
Z([3,'index1'])
Z([3,'items'])
Z([[7],[3,'newlist']])
Z(z[14])
Z(z[1])
Z([3,'list'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[[5],[1,'loadtop']],[[4],[[5],[[7],[3,'index1']]]]]]]]]]]])
Z([3,'true'])
Z([[2,'>'],[[6],[[6],[[7],[3,'items']],[3,'list']],[3,'length']],[1,0]])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'items']],[3,'list']])
Z(z[23])
Z(z[0])
Z(z[1])
Z(z[1])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^guanzhu']],[[4],[[5],[[4],[[5],[[5],[1,'guanzhu']],[[4],[[5],[[7],[3,'index']]]]]]]]]]],[[4],[[5],[[5],[1,'^caozuo']],[[4],[[5],[[4],[[5],[[5],[1,'caozuo']],[[4],[[5],[[5],[1,'$event']],[[7],[3,'index']]]]]]]]]]]])
Z([[7],[3,'index']])
Z([[7],[3,'item']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'8dd740cc-2-'],[[7],[3,'index1']]],[1,'-']],[[7],[3,'index']]])
Z(z[0])
Z([[6],[[7],[3,'items']],[3,'loadtext']])
Z([[2,'+'],[1,'8dd740cc-3-'],[[7],[3,'index1']]])
Z(z[0])
Z([[2,'+'],[1,'8dd740cc-4-'],[[7],[3,'index1']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z(z[1])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^change']],[[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'^openadd']],[[4],[[5],[[4],[[5],[1,'openadd']]]]]]]]])
Z([[7],[3,'tabindex']])
Z([[7],[3,'tabs']])
Z([3,'1cdd0ce0-1'])
Z(z[1])
Z([3,'swiper-box'])
Z(z[4])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'watchchange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[7],[3,'swheigth']],[1,'px']]],[1,';']])
Z(z[1])
Z([3,'list'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[1,'loadtop']]]]]]]]])
Z([3,'true'])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'guanzhu']],[3,'list']])
Z(z[16])
Z(z[0])
Z(z[1])
Z([[4],[[5],[[4],[[5],[[5],[1,'^isgz']],[[4],[[5],[[4],[[5],[[5],[1,'isgz']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([[7],[3,'index']])
Z([[7],[3,'item']])
Z([[2,'+'],[1,'1cdd0ce0-2-'],[[7],[3,'index']]])
Z(z[13])
Z(z[15])
Z([[6],[[7],[3,'topic']],[3,'fenlei']])
Z(z[0])
Z([3,'1cdd0ce0-3'])
Z(z[16])
Z(z[17])
Z([[6],[[7],[3,'topic']],[3,'lists']])
Z(z[16])
Z(z[0])
Z(z[23])
Z(z[24])
Z([[2,'+'],[1,'1cdd0ce0-4-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'big animated fadeInLeft fast'])
Z([3,'__l'])
Z([3,'__e'])
Z(z[2])
Z(z[2])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^hidepop']],[[4],[[5],[[4],[[5],[1,'hidepop']]]]]]]],[[4],[[5],[[5],[1,'^friends']],[[4],[[5],[[4],[[5],[1,'friends']]]]]]]],[[4],[[5],[[5],[1,'^clear']],[[4],[[5],[[4],[[5],[1,'clear']]]]]]]]])
Z([[7],[3,'showpop']])
Z([3,'91fbcbb4-1'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'list']])
Z(z[8])
Z(z[1])
Z([[7],[3,'item']])
Z([[2,'+'],[1,'91fbcbb4-2-'],[[7],[3,'index']]])
Z(z[1])
Z([[7],[3,'loadtext']])
Z([3,'91fbcbb4-3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'>'],[[6],[[7],[3,'list']],[3,'length']],[1,0]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'list']])
Z(z[1])
Z([3,'__l'])
Z([[7],[3,'index']])
Z([[7],[3,'item']])
Z([[2,'+'],[1,'50cad900-1-'],[[7],[3,'index']]])
Z(z[5])
Z([[7],[3,'loadtext']])
Z([3,'50cad900-2'])
Z([[2,'&&'],[[7],[3,'isseach']],[[2,'<'],[[6],[[7],[3,'list']],[3,'length']],[1,1]]])
Z(z[5])
Z([3,'50cad900-3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'topicobj']])
Z([3,'d9884004-1'])
Z(z[0])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^tabtap']],[[4],[[5],[[4],[[5],[1,'tabtap']]]]]]]]])
Z([3,'width:50%;'])
Z([[7],[3,'linewidth']])
Z([[7],[3,'scroll']])
Z([[7],[3,'tabindex']])
Z([[7],[3,'tablist']])
Z([3,'d9884004-2'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'topiclista']])
Z(z[12])
Z([[2,'=='],[[7],[3,'tabindex']],[[7],[3,'index']]])
Z([3,'listindex'])
Z([3,'lista'])
Z([[6],[[7],[3,'item']],[3,'list']])
Z(z[17])
Z(z[0])
Z(z[4])
Z([[4],[[5],[[4],[[5],[[5],[1,'^isgz']],[[4],[[5],[[4],[[5],[[5],[1,'isgz']],[[4],[[5],[[7],[3,'listindex']]]]]]]]]]]])
Z([[7],[3,'listindex']])
Z([[7],[3,'lista']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'d9884004-3-'],[[7],[3,'index']]],[1,'-']],[[7],[3,'listindex']]])
Z(z[0])
Z([[6],[[7],[3,'item']],[3,'loadtext']])
Z([[2,'+'],[1,'d9884004-4-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z(z[1])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^tabtap']],[[4],[[5],[[4],[[5],[1,'tabtap']]]]]]]],[[4],[[5],[[5],[1,'^watchscroll']],[[4],[[5],[[4],[[5],[1,'watchscroll']]]]]]]]])
Z([[7],[3,'linewidth']])
Z([[7],[3,'scroll']])
Z([[7],[3,'tabindex']])
Z([[7],[3,'tablist']])
Z([3,'0787f680-1'])
Z(z[1])
Z([3,'swiper-box'])
Z(z[6])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'watchchange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[7],[3,'swheigth']],[1,'px']]],[1,';']])
Z([3,'index1'])
Z([3,'items'])
Z([[7],[3,'newlist']])
Z(z[14])
Z(z[1])
Z([3,'list'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[[5],[1,'loadtop']],[[4],[[5],[[7],[3,'index1']]]]]]]]]]]])
Z([3,'true'])
Z([[2,'>'],[[6],[[6],[[7],[3,'items']],[3,'list']],[3,'length']],[1,0]])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'items']],[3,'list']])
Z(z[23])
Z(z[0])
Z([[7],[3,'index']])
Z([[7],[3,'item']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'0787f680-2-'],[[7],[3,'index1']]],[1,'-']],[[7],[3,'index']]])
Z(z[0])
Z([[6],[[7],[3,'items']],[3,'loadtext']])
Z([[2,'+'],[1,'0787f680-3-'],[[7],[3,'index1']]])
Z(z[0])
Z([[2,'+'],[1,'0787f680-4-'],[[7],[3,'index1']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'arr']])
Z(z[0])
Z([3,'__l'])
Z([[7],[3,'index']])
Z([[7],[3,'item']])
Z([[2,'+'],[1,'2fd6efe0-1-'],[[7],[3,'index']]])
Z(z[4])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^submit']],[[4],[[5],[[4],[[5],[1,'submit']]]]]]]]])
Z([3,'2fd6efe0-2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'body'])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^tabtap']],[[4],[[5],[[4],[[5],[1,'tabtap']]]]]]]]])
Z([3,'width:33.3%;'])
Z([[7],[3,'linewidth']])
Z([[7],[3,'scroll']])
Z([[7],[3,'tabindex']])
Z([[7],[3,'tablist']])
Z([3,'c746cdc0-1'])
Z(z[2])
Z([3,'swiper-box'])
Z(z[7])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'watchchange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[7],[3,'swheigth']],[1,'px']]],[1,';']])
Z([3,'index1'])
Z([3,'items'])
Z([[7],[3,'newlist']])
Z(z[15])
Z(z[2])
Z([3,'list'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[[5],[1,'loadtop']],[[4],[[5],[[7],[3,'index1']]]]]]]]]]]])
Z([3,'true'])
Z([[2,'>'],[[6],[[6],[[7],[3,'items']],[3,'list']],[3,'length']],[1,0]])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'items']],[3,'list']])
Z(z[24])
Z(z[1])
Z([[7],[3,'index']])
Z([[7],[3,'item']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'c746cdc0-2-'],[[7],[3,'index1']]],[1,'-']],[[7],[3,'index']]])
Z(z[1])
Z([[6],[[7],[3,'items']],[3,'loadtext']])
Z([[2,'+'],[1,'c746cdc0-3-'],[[7],[3,'index1']]])
Z(z[1])
Z([[2,'+'],[1,'c746cdc0-4-'],[[7],[3,'index1']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./compoents/common/comon-news.wxml','./compoents/common/load-more.wxml','./compoents/common/no-thing.wxml','./compoents/common/share-more.wxml','./compoents/common/tag-sex.wxml','./compoents/common/upload-image.wxml','./compoents/detail/common-list.wxml','./compoents/detail/detailinfo.wxml','./compoents/index/index-list.wxml','./compoents/index/swiper-head.wxml','./compoents/news/news-nab-bar.wxml','./compoents/news/topic-list.wxml','./compoents/news/topic-news.wxml','./compoents/paper/paper-list.wxml','./compoents/paper/paper-pop.wxml','./compoents/topic/topic.wxml','./compoents/uni-badge/uni-badge.wxml','./compoents/uni-icon/uni-icon.wxml','./compoents/uni-nav-bar/uni-nav-bar.wxml','./compoents/uni-popup/uni-popup.wxml','./compoents/uni-status-bar/uni-status-bar.wxml','./compoents/user-list/user-list.wxml','./compoents/userchat/user-chat-list.wxml','./compoents/userchat/user-chat.wxml','./pages/detail/detail.wxml','./pages/fabu/fabu.wxml','./pages/home/home.wxml','./pages/index/index.wxml','./pages/news/news.wxml','./pages/paper/paper.wxml','./pages/search/search.wxml','./pages/topicdetail/topicdetail.wxml','./pages/topicnav/topicnav.wxml','./pages/userchat/userchat.wxml','./pages/userlist/userlist.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('view')
_rz(z,oB,'class',0,e,s,gg)
var xC=_n('view')
_rz(z,xC,'class',1,e,s,gg)
var fE=_mz(z,'tag-sex',['bind:__l',2,'class',1,'sex',2,'userage',3,'vueId',4],[],e,s,gg)
_(xC,fE)
var oD=_v()
_(xC,oD)
if(_oz(z,7,e,s,gg)){oD.wxVkey=1
}
oD.wxXCkey=1
_(oB,xC)
var cF=_n('view')
_rz(z,cF,'class',8,e,s,gg)
var hG=_v()
_(cF,hG)
if(_oz(z,9,e,s,gg)){hG.wxVkey=1
}
var oH=_v()
_(cF,oH)
if(_oz(z,10,e,s,gg)){oH.wxVkey=1
}
var cI=_v()
_(cF,cI)
if(_oz(z,11,e,s,gg)){cI.wxVkey=1
}
hG.wxXCkey=1
oH.wxXCkey=1
cI.wxXCkey=1
_(oB,cF)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var tM=_v()
_(r,tM)
if(_oz(z,0,e,s,gg)){tM.wxVkey=1
}
tM.wxXCkey=1
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var oR=_n('view')
_rz(z,oR,'class',0,e,s,gg)
var fS=_n('view')
_rz(z,fS,'class',1,e,s,gg)
var hU=_mz(z,'tag-sex',['bind:__l',2,'class',1,'sex',2,'userage',3,'vueId',4],[],e,s,gg)
_(fS,hU)
var cT=_v()
_(fS,cT)
if(_oz(z,7,e,s,gg)){cT.wxVkey=1
}
cT.wxXCkey=1
_(oR,fS)
var oV=_n('view')
_rz(z,oV,'class',8,e,s,gg)
var cW=_v()
_(oV,cW)
if(_oz(z,9,e,s,gg)){cW.wxVkey=1
}
var oX=_v()
_(oV,oX)
if(_oz(z,10,e,s,gg)){oX.wxVkey=1
}
cW.wxXCkey=1
oX.wxXCkey=1
_(oR,oV)
_(r,oR)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var aZ=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1],[],e,s,gg)
var t1=_v()
_(aZ,t1)
if(_oz(z,3,e,s,gg)){t1.wxVkey=1
}
t1.wxXCkey=1
_(r,aZ)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var o4=_mz(z,'uni-nav-bar',['bind:__l',0,'border',1,'class',1,'fixed',2,'statusBar',3,'vueId',4,'vueSlots',5],[],e,s,gg)
var x5=_v()
_(o4,x5)
var o6=function(c8,f7,h9,gg){
var cAB=_mz(z,'view',['bindtap',11,'class',1,'data-event-opts',2],[],c8,f7,gg)
var oBB=_v()
_(cAB,oBB)
if(_oz(z,14,c8,f7,gg)){oBB.wxVkey=1
}
oBB.wxXCkey=1
_(h9,cAB)
return h9
}
x5.wxXCkey=2
_2z(z,9,o6,e,s,gg,x5,'item','index1','id')
_(r,o4)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var eFB=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1],[],e,s,gg)
var bGB=_v()
_(eFB,bGB)
if(_oz(z,3,e,s,gg)){bGB.wxVkey=1
var oHB=_mz(z,'uni-badge',['bind:__l',4,'class',1,'text',2,'type',3,'vueId',4],[],e,s,gg)
_(bGB,oHB)
}
bGB.wxXCkey=1
bGB.wxXCkey=3
_(r,eFB)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var cLB=_v()
_(r,cLB)
if(_oz(z,0,e,s,gg)){cLB.wxVkey=1
}
cLB.wxXCkey=1
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var cOB=_n('view')
_rz(z,cOB,'class',0,e,s,gg)
var lQB=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var aRB=_v()
_(lQB,aRB)
if(_oz(z,3,e,s,gg)){aRB.wxVkey=1
var tSB=_mz(z,'uni-status-bar',['bind:__l',4,'vueId',1],[],e,s,gg)
_(aRB,tSB)
}
var eTB=_mz(z,'view',['class',6,'style',1],[],e,s,gg)
var bUB=_mz(z,'view',['bindtap',8,'class',1,'data-event-opts',2],[],e,s,gg)
var oVB=_v()
_(bUB,oVB)
if(_oz(z,11,e,s,gg)){oVB.wxVkey=1
var oXB=_mz(z,'uni-icon',['bind:__l',12,'color',1,'size',2,'type',3,'vueId',4],[],e,s,gg)
_(oVB,oXB)
}
var xWB=_v()
_(bUB,xWB)
if(_oz(z,17,e,s,gg)){xWB.wxVkey=1
}
var fYB=_n('slot')
_rz(z,fYB,'name',18,e,s,gg)
_(bUB,fYB)
oVB.wxXCkey=1
oVB.wxXCkey=3
xWB.wxXCkey=1
_(eTB,bUB)
var cZB=_n('view')
_rz(z,cZB,'class',19,e,s,gg)
var h1B=_v()
_(cZB,h1B)
if(_oz(z,20,e,s,gg)){h1B.wxVkey=1
}
var o2B=_n('slot')
_(cZB,o2B)
h1B.wxXCkey=1
_(eTB,cZB)
var c3B=_mz(z,'view',['bindtap',21,'class',1,'data-event-opts',2],[],e,s,gg)
var o4B=_v()
_(c3B,o4B)
if(_oz(z,24,e,s,gg)){o4B.wxVkey=1
var a6B=_mz(z,'uni-icon',['bind:__l',25,'color',1,'size',2,'type',3,'vueId',4],[],e,s,gg)
_(o4B,a6B)
}
var l5B=_v()
_(c3B,l5B)
if(_oz(z,30,e,s,gg)){l5B.wxVkey=1
}
var t7B=_n('slot')
_rz(z,t7B,'name',31,e,s,gg)
_(c3B,t7B)
o4B.wxXCkey=1
o4B.wxXCkey=3
l5B.wxXCkey=1
_(eTB,c3B)
_(lQB,eTB)
aRB.wxXCkey=1
aRB.wxXCkey=3
_(cOB,lQB)
var oPB=_v()
_(cOB,oPB)
if(_oz(z,32,e,s,gg)){oPB.wxVkey=1
var e8B=_v()
_(oPB,e8B)
if(_oz(z,33,e,s,gg)){e8B.wxVkey=1
var b9B=_mz(z,'uni-status-bar',['bind:__l',34,'vueId',1],[],e,s,gg)
_(e8B,b9B)
}
e8B.wxXCkey=1
e8B.wxXCkey=3
}
oPB.wxXCkey=1
oPB.wxXCkey=3
_(r,cOB)
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var xAC=_v()
_(r,xAC)
if(_oz(z,0,e,s,gg)){xAC.wxVkey=1
var oBC=_mz(z,'view',['bindtap',1,'class',1,'data-event-opts',2],[],e,s,gg)
var fCC=_mz(z,'view',['catchtap',4,'class',1,'data-event-opts',2],[],e,s,gg)
var cDC=_n('slot')
_(fCC,cDC)
_(oBC,fCC)
_(xAC,oBC)
}
xAC.wxXCkey=1
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var oFC=_n('slot')
_(r,oFC)
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
var oHC=_mz(z,'tag-sex',['bind:__l',0,'class',1,'sex',1,'userage',2,'vueId',3],[],e,s,gg)
_(r,oHC)
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var aJC=_n('view')
_rz(z,aJC,'class',0,e,s,gg)
var tKC=_v()
_(aJC,tKC)
if(_oz(z,1,e,s,gg)){tKC.wxVkey=1
}
var eLC=_n('view')
_rz(z,eLC,'class',2,e,s,gg)
var bMC=_v()
_(eLC,bMC)
if(_oz(z,3,e,s,gg)){bMC.wxVkey=1
}
var xOC=_n('view')
_rz(z,xOC,'class',4,e,s,gg)
var oPC=_v()
_(xOC,oPC)
if(_oz(z,5,e,s,gg)){oPC.wxVkey=1
}
var fQC=_v()
_(xOC,fQC)
if(_oz(z,6,e,s,gg)){fQC.wxVkey=1
}
oPC.wxXCkey=1
fQC.wxXCkey=1
_(eLC,xOC)
var oNC=_v()
_(eLC,oNC)
if(_oz(z,7,e,s,gg)){oNC.wxVkey=1
}
bMC.wxXCkey=1
oNC.wxXCkey=1
_(aJC,eLC)
tKC.wxXCkey=1
_(r,aJC)
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
var oTC=_n('view')
var cUC=_mz(z,'detai-linfo',['bind:__l',0,'item',1,'vueId',1],[],e,s,gg)
_(oTC,cUC)
var oVC=_v()
_(oTC,oVC)
var lWC=function(tYC,aXC,eZC,gg){
var o2C=_mz(z,'common-list',['bind:__l',7,'index',1,'item',2,'vueId',3],[],tYC,aXC,gg)
_(eZC,o2C)
return eZC
}
oVC.wxXCkey=4
_2z(z,5,lWC,e,s,gg,oVC,'item','index','index')
var x3C=_mz(z,'user-chat',['bind:__l',11,'bind:submit',1,'data-event-opts',2,'vueId',3],[],e,s,gg)
_(oTC,x3C)
var o4C=_mz(z,'share-more',['bind:__l',15,'bind:ismask',1,'data-event-opts',2,'maskshow',3,'providerList',4,'vueId',5],[],e,s,gg)
_(oTC,o4C)
_(r,oTC)
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
var c6C=_n('view')
var h7C=_mz(z,'uni-nav-bar',['bind:__l',0,'bind:clickLeft',1,'bind:clickRigth',1,'data-event-opts',2,'fixed',3,'leftIcon',4,'rightText',5,'statusBar',6,'vueId',7,'vueSlots',8],[],e,s,gg)
_(c6C,h7C)
var o8C=_mz(z,'upload-image',['bind:__l',10,'bind:chooseImage',1,'bind:deleted',2,'bind:previewImage',3,'data-event-opts',4,'imageList',5,'vueId',6],[],e,s,gg)
_(c6C,o8C)
var c9C=_mz(z,'uni-popup',['bind:__l',17,'show',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(c6C,c9C)
_(r,c6C)
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
var aBD=_n('view')
var tCD=_mz(z,'swiper-head',['bind:__l',0,'bind:tabtap',1,'bind:watchscroll',1,'data-event-opts',2,'linewidth',3,'scroll',4,'tabindex',5,'tablist',6,'vueId',7],[],e,s,gg)
_(aBD,tCD)
var eDD=_mz(z,'swiper',['bindchange',9,'class',1,'current',2,'data-event-opts',3,'style',4],[],e,s,gg)
var bED=_v()
_(eDD,bED)
var oFD=function(oHD,xGD,fID,gg){
var hKD=_mz(z,'scroll-view',['scrollY',-1,'bindscrolltolower',18,'class',1,'data-event-opts',2,'scrollWithAnimation',3],[],oHD,xGD,gg)
var oLD=_v()
_(hKD,oLD)
if(_oz(z,22,oHD,xGD,gg)){oLD.wxVkey=1
var cMD=_v()
_(oLD,cMD)
var oND=function(aPD,lOD,tQD,gg){
var bSD=_mz(z,'index-list',['bind:__l',27,'bind:caozuo',1,'bind:guanzhu',2,'data-event-opts',3,'index',4,'item',5,'vueId',6],[],aPD,lOD,gg)
_(tQD,bSD)
return tQD
}
cMD.wxXCkey=4
_2z(z,25,oND,oHD,xGD,gg,cMD,'item','index','index')
var oTD=_mz(z,'load-more',['bind:__l',34,'loadtext',1,'vueId',2],[],oHD,xGD,gg)
_(oLD,oTD)
}
else{oLD.wxVkey=2
var xUD=_mz(z,'no-thing',['bind:__l',37,'vueId',1],[],oHD,xGD,gg)
_(oLD,xUD)
}
oLD.wxXCkey=1
oLD.wxXCkey=3
oLD.wxXCkey=3
_(fID,hKD)
return fID
}
bED.wxXCkey=4
_2z(z,16,oFD,e,s,gg,bED,'items','index1','index1')
_(aBD,eDD)
_(r,aBD)
return r
}
e_[x[27]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
var fWD=_n('view')
var cXD=_mz(z,'news-nab-bar',['bind:__l',0,'bind:change',1,'bind:openadd',1,'data-event-opts',2,'tabindex',3,'tabs',4,'vueId',5],[],e,s,gg)
_(fWD,cXD)
var hYD=_mz(z,'swiper',['bindchange',7,'class',1,'current',2,'data-event-opts',3,'style',4],[],e,s,gg)
var oZD=_mz(z,'scroll-view',['scrollY',-1,'bindscrolltolower',12,'class',1,'data-event-opts',2,'scrollWithAnimation',3],[],e,s,gg)
var c1D=_v()
_(oZD,c1D)
var o2D=function(a4D,l3D,t5D,gg){
var b7D=_mz(z,'comon-news',['bind:__l',20,'bind:isgz',1,'data-event-opts',2,'index',3,'item',4,'vueId',5],[],a4D,l3D,gg)
_(t5D,b7D)
return t5D
}
c1D.wxXCkey=4
_2z(z,18,o2D,e,s,gg,c1D,'item','index','index')
_(hYD,oZD)
var o8D=_mz(z,'scroll-view',['scrollY',-1,'class',26,'scrollWithAnimation',1],[],e,s,gg)
var x9D=_mz(z,'topic-news',['arryfenlei',28,'bind:__l',1,'vueId',2],[],e,s,gg)
_(o8D,x9D)
var o0D=_v()
_(o8D,o0D)
var fAE=function(hCE,cBE,oDE,gg){
var oFE=_mz(z,'topic-list',['bind:__l',35,'index',1,'item',2,'vueId',3],[],hCE,cBE,gg)
_(oDE,oFE)
return oDE
}
o0D.wxXCkey=4
_2z(z,33,fAE,e,s,gg,o0D,'item','index','index')
_(hYD,o8D)
_(fWD,hYD)
_(r,fWD)
return r
}
e_[x[28]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
var aHE=_n('view')
_rz(z,aHE,'class',0,e,s,gg)
var tIE=_mz(z,'paper-pop',['bind:__l',1,'bind:clear',1,'bind:friends',2,'bind:hidepop',3,'data-event-opts',4,'showpop',5,'vueId',6],[],e,s,gg)
_(aHE,tIE)
var eJE=_v()
_(aHE,eJE)
var bKE=function(xME,oLE,oNE,gg){
var cPE=_mz(z,'paper-list',['bind:__l',12,'item',1,'vueId',2],[],xME,oLE,gg)
_(oNE,cPE)
return oNE
}
eJE.wxXCkey=4
_2z(z,10,bKE,e,s,gg,eJE,'item','index','index')
var hQE=_mz(z,'load-more',['bind:__l',15,'loadtext',1,'vueId',2],[],e,s,gg)
_(aHE,hQE)
_(r,aHE)
return r
}
e_[x[29]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
var cSE=_n('view')
var oTE=_v()
_(cSE,oTE)
if(_oz(z,0,e,s,gg)){oTE.wxVkey=1
var lUE=_v()
_(oTE,lUE)
var aVE=function(eXE,tWE,bYE,gg){
var x1E=_mz(z,'index-list',['bind:__l',5,'index',1,'item',2,'vueId',3],[],eXE,tWE,gg)
_(bYE,x1E)
return bYE
}
lUE.wxXCkey=4
_2z(z,3,aVE,e,s,gg,lUE,'item','index','index')
var o2E=_mz(z,'load-more',['bind:__l',9,'loadtext',1,'vueId',2],[],e,s,gg)
_(oTE,o2E)
}
else{oTE.wxVkey=2
var f3E=_v()
_(oTE,f3E)
if(_oz(z,12,e,s,gg)){f3E.wxVkey=1
var c4E=_mz(z,'no-thing',['bind:__l',13,'vueId',1],[],e,s,gg)
_(f3E,c4E)
}
f3E.wxXCkey=1
f3E.wxXCkey=3
}
oTE.wxXCkey=1
oTE.wxXCkey=3
oTE.wxXCkey=3
_(r,cSE)
return r
}
e_[x[30]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
var o6E=_n('view')
var c7E=_mz(z,'to-pic',['bind:__l',0,'item',1,'vueId',1],[],e,s,gg)
_(o6E,c7E)
var o8E=_mz(z,'swiper-head',['bind:__l',3,'bind:tabtap',1,'data-event-opts',2,'itemwidth',3,'linewidth',4,'scroll',5,'tabindex',6,'tablist',7,'vueId',8],[],e,s,gg)
_(o6E,o8E)
var l9E=_v()
_(o6E,l9E)
var a0E=function(eBF,tAF,bCF,gg){
var xEF=_v()
_(bCF,xEF)
if(_oz(z,16,eBF,tAF,gg)){xEF.wxVkey=1
var oFF=_v()
_(xEF,oFF)
var fGF=function(hIF,cHF,oJF,gg){
var oLF=_mz(z,'comon-news',['bind:__l',21,'bind:isgz',1,'data-event-opts',2,'index',3,'item',4,'vueId',5],[],hIF,cHF,gg)
_(oJF,oLF)
return oJF
}
oFF.wxXCkey=4
_2z(z,19,fGF,eBF,tAF,gg,oFF,'lista','listindex','listindex')
var lMF=_mz(z,'load-more',['bind:__l',27,'loadtext',1,'vueId',2],[],eBF,tAF,gg)
_(xEF,lMF)
}
xEF.wxXCkey=1
xEF.wxXCkey=3
return bCF
}
l9E.wxXCkey=4
_2z(z,14,a0E,e,s,gg,l9E,'item','index','index')
_(r,o6E)
return r
}
e_[x[31]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
var tOF=_n('view')
var ePF=_mz(z,'swiper-head',['bind:__l',0,'bind:tabtap',1,'bind:watchscroll',1,'data-event-opts',2,'linewidth',3,'scroll',4,'tabindex',5,'tablist',6,'vueId',7],[],e,s,gg)
_(tOF,ePF)
var bQF=_mz(z,'swiper',['bindchange',9,'class',1,'current',2,'data-event-opts',3,'style',4],[],e,s,gg)
var oRF=_v()
_(bQF,oRF)
var xSF=function(fUF,oTF,cVF,gg){
var oXF=_mz(z,'scroll-view',['scrollY',-1,'bindscrolltolower',18,'class',1,'data-event-opts',2,'scrollWithAnimation',3],[],fUF,oTF,gg)
var cYF=_v()
_(oXF,cYF)
if(_oz(z,22,fUF,oTF,gg)){cYF.wxVkey=1
var oZF=_v()
_(cYF,oZF)
var l1F=function(t3F,a2F,e4F,gg){
var o6F=_mz(z,'topic-list',['bind:__l',27,'index',1,'item',2,'vueId',3],[],t3F,a2F,gg)
_(e4F,o6F)
return e4F
}
oZF.wxXCkey=4
_2z(z,25,l1F,fUF,oTF,gg,oZF,'item','index','index')
var x7F=_mz(z,'load-more',['bind:__l',31,'loadtext',1,'vueId',2],[],fUF,oTF,gg)
_(cYF,x7F)
}
else{cYF.wxVkey=2
var o8F=_mz(z,'no-thing',['bind:__l',34,'vueId',1],[],fUF,oTF,gg)
_(cYF,o8F)
}
cYF.wxXCkey=1
cYF.wxXCkey=3
cYF.wxXCkey=3
_(cVF,oXF)
return cVF
}
oRF.wxXCkey=4
_2z(z,16,xSF,e,s,gg,oRF,'items','index1','index1')
_(tOF,bQF)
_(r,tOF)
return r
}
e_[x[32]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[33]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
var c0F=_n('view')
var hAG=_v()
_(c0F,hAG)
var oBG=function(oDG,cCG,lEG,gg){
var tGG=_mz(z,'user-chat-list',['bind:__l',4,'index',1,'item',2,'vueId',3],[],oDG,cCG,gg)
_(lEG,tGG)
return lEG
}
hAG.wxXCkey=4
_2z(z,2,oBG,e,s,gg,hAG,'item','index','index')
var eHG=_mz(z,'user-chat',['bind:__l',8,'bind:submit',1,'data-event-opts',2,'vueId',3],[],e,s,gg)
_(c0F,eHG)
_(r,c0F)
return r
}
e_[x[33]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
var oJG=_n('view')
_rz(z,oJG,'class',0,e,s,gg)
var xKG=_mz(z,'swiper-head',['bind:__l',1,'bind:tabtap',1,'data-event-opts',2,'itemwidth',3,'linewidth',4,'scroll',5,'tabindex',6,'tablist',7,'vueId',8],[],e,s,gg)
_(oJG,xKG)
var oLG=_mz(z,'swiper',['bindchange',10,'class',1,'current',2,'data-event-opts',3,'style',4],[],e,s,gg)
var fMG=_v()
_(oLG,fMG)
var cNG=function(oPG,hOG,cQG,gg){
var lSG=_mz(z,'scroll-view',['scrollY',-1,'bindscrolltolower',19,'class',1,'data-event-opts',2,'scrollWithAnimation',3],[],oPG,hOG,gg)
var aTG=_v()
_(lSG,aTG)
if(_oz(z,23,oPG,hOG,gg)){aTG.wxVkey=1
var tUG=_v()
_(aTG,tUG)
var eVG=function(oXG,bWG,xYG,gg){
var f1G=_mz(z,'user-list',['bind:__l',28,'index',1,'item',2,'vueId',3],[],oXG,bWG,gg)
_(xYG,f1G)
return xYG
}
tUG.wxXCkey=4
_2z(z,26,eVG,oPG,hOG,gg,tUG,'item','index','index')
var c2G=_mz(z,'load-more',['bind:__l',32,'loadtext',1,'vueId',2],[],oPG,hOG,gg)
_(aTG,c2G)
}
else{aTG.wxVkey=2
var h3G=_mz(z,'no-thing',['bind:__l',35,'vueId',1],[],oPG,hOG,gg)
_(aTG,h3G)
}
aTG.wxXCkey=1
aTG.wxXCkey=3
aTG.wxXCkey=3
_(cQG,lSG)
return cQG
}
fMG.wxXCkey=4
_2z(z,17,cNG,e,s,gg,fMG,'items','index1','index1')
_(oJG,oLG)
_(r,oJG)
return r
}
e_[x[34]]={f:m34,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/index/index","pages/news/news","pages/home/home","pages/paper/paper","compoents/index/index-list","pages/search/search","pages/fabu/fabu","pages/topicnav/topicnav","pages/topicdetail/topicdetail","compoents/topic/topic","pages/userlist/userlist","pages/userchat/userchat","pages/detail/detail"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"仿糗事百科","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#FFFFFF"},"tabBar":{"color":"#333333","selectedColor":"#FFDF34","borderStyle":"white","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","iconPath":"static/shouye.png","selectedIconPath":"static/shouyesd.png","text":"糗事"},{"pagePath":"pages/news/news","iconPath":"static/zixun.png","selectedIconPath":"static/zixunsd.png","text":"动态"},{"pagePath":"pages/paper/paper","iconPath":"static/xiaoxi.png","selectedIconPath":"static/xiaoxisd.png","text":"小纸条"},{"pagePath":"pages/home/home","iconPath":"static/wode.png","selectedIconPath":"static/wodesd.png","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"糗事百科","compilerVersion":"2.6.5","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['compoents/common/comon-news.json']={"component":true,"usingComponents":{"tag-sex":"/compoents/common/tag-sex"}};
__wxAppCode__['compoents/common/comon-news.wxml']=$gwx('./compoents/common/comon-news.wxml');

__wxAppCode__['compoents/common/load-more.json']={"usingComponents":{},"component":true};
__wxAppCode__['compoents/common/load-more.wxml']=$gwx('./compoents/common/load-more.wxml');

__wxAppCode__['compoents/common/no-thing.json']={"usingComponents":{},"component":true};
__wxAppCode__['compoents/common/no-thing.wxml']=$gwx('./compoents/common/no-thing.wxml');

__wxAppCode__['compoents/common/share-more.json']={"usingComponents":{},"component":true};
__wxAppCode__['compoents/common/share-more.wxml']=$gwx('./compoents/common/share-more.wxml');

__wxAppCode__['compoents/common/tag-sex.json']={"component":true,"usingComponents":{}};
__wxAppCode__['compoents/common/tag-sex.wxml']=$gwx('./compoents/common/tag-sex.wxml');

__wxAppCode__['compoents/common/upload-image.json']={"usingComponents":{},"component":true};
__wxAppCode__['compoents/common/upload-image.wxml']=$gwx('./compoents/common/upload-image.wxml');

__wxAppCode__['compoents/detail/common-list.json']={"usingComponents":{},"component":true};
__wxAppCode__['compoents/detail/common-list.wxml']=$gwx('./compoents/detail/common-list.wxml');

__wxAppCode__['compoents/detail/detailinfo.json']={"component":true,"usingComponents":{"tag-sex":"/compoents/common/tag-sex"}};
__wxAppCode__['compoents/detail/detailinfo.wxml']=$gwx('./compoents/detail/detailinfo.wxml');

__wxAppCode__['compoents/index/index-list.json']={"usingComponents":{}};
__wxAppCode__['compoents/index/index-list.wxml']=$gwx('./compoents/index/index-list.wxml');

__wxAppCode__['compoents/index/swiper-head.json']={"usingComponents":{},"component":true};
__wxAppCode__['compoents/index/swiper-head.wxml']=$gwx('./compoents/index/swiper-head.wxml');

__wxAppCode__['compoents/news/news-nab-bar.json']={"usingComponents":{"uni-nav-bar":"/compoents/uni-nav-bar/uni-nav-bar"},"component":true};
__wxAppCode__['compoents/news/news-nab-bar.wxml']=$gwx('./compoents/news/news-nab-bar.wxml');

__wxAppCode__['compoents/news/topic-list.json']={"usingComponents":{},"component":true};
__wxAppCode__['compoents/news/topic-list.wxml']=$gwx('./compoents/news/topic-list.wxml');

__wxAppCode__['compoents/news/topic-news.json']={"usingComponents":{},"component":true};
__wxAppCode__['compoents/news/topic-news.wxml']=$gwx('./compoents/news/topic-news.wxml');

__wxAppCode__['compoents/paper/paper-list.json']={"component":true,"usingComponents":{"uni-badge":"/compoents/uni-badge/uni-badge"}};
__wxAppCode__['compoents/paper/paper-list.wxml']=$gwx('./compoents/paper/paper-list.wxml');

__wxAppCode__['compoents/paper/paper-pop.json']={"usingComponents":{},"component":true};
__wxAppCode__['compoents/paper/paper-pop.wxml']=$gwx('./compoents/paper/paper-pop.wxml');

__wxAppCode__['compoents/topic/topic.json']={"usingComponents":{}};
__wxAppCode__['compoents/topic/topic.wxml']=$gwx('./compoents/topic/topic.wxml');

__wxAppCode__['compoents/uni-badge/uni-badge.json']={"component":true,"usingComponents":{}};
__wxAppCode__['compoents/uni-badge/uni-badge.wxml']=$gwx('./compoents/uni-badge/uni-badge.wxml');

__wxAppCode__['compoents/uni-icon/uni-icon.json']={"component":true,"usingComponents":{}};
__wxAppCode__['compoents/uni-icon/uni-icon.wxml']=$gwx('./compoents/uni-icon/uni-icon.wxml');

__wxAppCode__['compoents/uni-nav-bar/uni-nav-bar.json']={"component":true,"usingComponents":{"uni-status-bar":"/compoents/uni-status-bar/uni-status-bar","uni-icon":"/compoents/uni-icon/uni-icon"}};
__wxAppCode__['compoents/uni-nav-bar/uni-nav-bar.wxml']=$gwx('./compoents/uni-nav-bar/uni-nav-bar.wxml');

__wxAppCode__['compoents/uni-popup/uni-popup.json']={"usingComponents":{},"component":true};
__wxAppCode__['compoents/uni-popup/uni-popup.wxml']=$gwx('./compoents/uni-popup/uni-popup.wxml');

__wxAppCode__['compoents/uni-status-bar/uni-status-bar.json']={"component":true,"usingComponents":{}};
__wxAppCode__['compoents/uni-status-bar/uni-status-bar.wxml']=$gwx('./compoents/uni-status-bar/uni-status-bar.wxml');

__wxAppCode__['compoents/user-list/user-list.json']={"component":true,"usingComponents":{"tag-sex":"/compoents/common/tag-sex"}};
__wxAppCode__['compoents/user-list/user-list.wxml']=$gwx('./compoents/user-list/user-list.wxml');

__wxAppCode__['compoents/userchat/user-chat-list.json']={"usingComponents":{},"component":true};
__wxAppCode__['compoents/userchat/user-chat-list.wxml']=$gwx('./compoents/userchat/user-chat-list.wxml');

__wxAppCode__['compoents/userchat/user-chat.json']={"usingComponents":{},"component":true};
__wxAppCode__['compoents/userchat/user-chat.wxml']=$gwx('./compoents/userchat/user-chat.wxml');

__wxAppCode__['pages/detail/detail.json']={"navigationBarTitleText":"内容页","scrollIndicator":"none","bounce":"none","titleNView":{"buttons":[{"type":"menu"}]},"usingComponents":{"detai-linfo":"/compoents/detail/detailinfo","common-list":"/compoents/detail/common-list","user-chat":"/compoents/userchat/user-chat","share-more":"/compoents/common/share-more"}};
__wxAppCode__['pages/detail/detail.wxml']=$gwx('./pages/detail/detail.wxml');

__wxAppCode__['pages/fabu/fabu.json']={"titleNView":false,"usingComponents":{"uni-nav-bar":"/compoents/uni-nav-bar/uni-nav-bar","upload-image":"/compoents/common/upload-image","uni-popup":"/compoents/uni-popup/uni-popup"}};
__wxAppCode__['pages/fabu/fabu.wxml']=$gwx('./pages/fabu/fabu.wxml');

__wxAppCode__['pages/home/home.json']={"navigationBarTitleText":"我的","scrollIndicator":"none","bounce":"none","titleNView":{"buttons":[{"type":"menu"}]},"usingComponents":{}};
__wxAppCode__['pages/home/home.wxml']=$gwx('./pages/home/home.wxml');

__wxAppCode__['pages/index/index.json']={"scrollIndicator":"none","bounce":"none","titleNView":{"searchInput":{"align":"center","backgroundColor":"#F7F7F7","placeholder":"搜索糗事","placeholderColor":"#CCCCCC","borderRadius":"4px","disabled":true},"buttons":[{"color":"#FF9619","float":"left","fontSize":"22px","fontSrc":"/static/font/icon.ttf","text":""},{"color":"#000000","float":"right","fontSize":"22px","fontSrc":"/static/font/icon.ttf","text":""}]},"usingComponents":{"index-list":"/compoents/index/index-list","swiper-head":"/compoents/index/swiper-head","load-more":"/compoents/common/load-more","no-thing":"/compoents/common/no-thing"}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/news/news.json']={"titleNView":false,"scrollIndicator":"none","bounce":"none","usingComponents":{"comon-news":"/compoents/common/comon-news","news-nab-bar":"/compoents/news/news-nab-bar","load-more":"/compoents/common/load-more","topic-news":"/compoents/news/topic-news","topic-list":"/compoents/news/topic-list"}};
__wxAppCode__['pages/news/news.wxml']=$gwx('./pages/news/news.wxml');

__wxAppCode__['pages/paper/paper.json']={"enablePullDownRefresh":true,"scrollIndicator":"none","bounce":"none","titleNView":{"titleText":"小纸条","buttons":[{"color":"#000000","colorPressed":"#BBBBBB","float":"left","fontSize":"22px","fontSrc":"/static/font/icon.ttf","text":"","fontWeight":"bold"},{"color":"#000000","colorPressed":"#BBBBBB","float":"right","fontSize":"22px","fontSrc":"/static/font/icon.ttf","text":"","fontWeight":"bold"}]},"usingComponents":{"paper-list":"/compoents/paper/paper-list","load-more":"/compoents/common/load-more","paper-pop":"/compoents/paper/paper-pop"}};
__wxAppCode__['pages/paper/paper.wxml']=$gwx('./pages/paper/paper.wxml');

__wxAppCode__['pages/search/search.json']={"enablePullDownRefresh":true,"scrollIndicator":"none","bounce":"none","titleNView":{"autoBackButton":false,"searchInput":{"align":"center","backgroundColor":"#F7F7F7","placeholder":"搜索糗事","placeholderColor":"#CCCCCC","borderRadius":"4px"},"buttons":[{"color":"#000000","float":"right","fontSize":"14px","text":"取消"}]},"usingComponents":{"index-list":"/compoents/index/index-list","load-more":"/compoents/common/load-more","no-thing":"/compoents/common/no-thing"}};
__wxAppCode__['pages/search/search.wxml']=$gwx('./pages/search/search.wxml');

__wxAppCode__['pages/topicdetail/topicdetail.json']={"scrollIndicator":"none","titleNView":{"titleText":"话题详情","type":"transparent","buttons":[{"type":"menu"}]},"bounce":"none","usingComponents":{"to-pic":"/compoents/topic/topic","swiper-head":"/compoents/index/swiper-head","comon-news":"/compoents/common/comon-news","load-more":"/compoents/common/load-more"}};
__wxAppCode__['pages/topicdetail/topicdetail.wxml']=$gwx('./pages/topicdetail/topicdetail.wxml');

__wxAppCode__['pages/topicnav/topicnav.json']={"bounce":"none","titleNView":{"titleText":"话题分类","autoBackButton":"false","buttons":[{"color":"#333","float":"left","fontSize":"22px","fontSrc":"/static/font/icon.ttf","text":""}]},"usingComponents":{"swiper-head":"/compoents/index/swiper-head","load-more":"/compoents/common/load-more","no-thing":"/compoents/common/no-thing","topic-list":"/compoents/news/topic-list"}};
__wxAppCode__['pages/topicnav/topicnav.wxml']=$gwx('./pages/topicnav/topicnav.wxml');

__wxAppCode__['pages/userchat/userchat.json']={"navigationBarTitleText":"聊天页","bounce":"none","titleNView":{"buttons":[{"color":"#000000","colorPressed":"#BBBBBB","float":"right","fontSize":"18px","fontSrc":"/static/font/icon.ttf","text":"","fontWeight":"bold"}]},"usingComponents":{"user-chat":"/compoents/userchat/user-chat","user-chat-list":"/compoents/userchat/user-chat-list"}};
__wxAppCode__['pages/userchat/userchat.wxml']=$gwx('./pages/userchat/userchat.wxml');

__wxAppCode__['pages/userlist/userlist.json']={"animationType":"slide-in-left","scrollIndicator":"none","bounce":"none","titleNView":{"autoBackButton":false,"searchInput":{"align":"center","backgroundColor":"#F7F7F7","placeholder":"搜索糗事","placeholderColor":"#CCCCCC","borderRadius":"4px"},"buttons":[{"color":"#000000","float":"right","fontSize":"14px","text":"取消","fontWeight":"bold"}]},"usingComponents":{"swiper-head":"/compoents/index/swiper-head","user-list":"/compoents/user-list/user-list","load-more":"/compoents/common/load-more","no-thing":"/compoents/common/no-thing"}};
__wxAppCode__['pages/userlist/userlist.wxml']=$gwx('./pages/userlist/userlist.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"486d":function(n,t,e){"use strict";e.r(t);var u=e("ab33");for(var o in u)"default"!==o&&function(n){e.d(t,n,function(){return u[n]})}(o);e("6808");var a,r,c,f,i=e("f0c5"),l=Object(i["a"])(u["default"],a,r,!1,null,null,null,!1,c,f);t["default"]=l.exports},"4acf":function(n,t,e){"use strict";(function(n){e("1641"),e("921b");var t=o(e("66fd")),u=o(e("486d"));function o(n){return n&&n.__esModule?n:{default:n}}function a(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},u=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(u=u.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),u.forEach(function(t){r(n,t,e[t])})}return n}function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}t.default.config.productionTip=!1,u.default.mpType="app";var c=new t.default(a({},u.default));n(c).$mount()}).call(this,e("6e42")["createApp"])},6808:function(n,t,e){"use strict";var u=e("f668"),o=e.n(u);o.a},"6a1a":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={onLaunch:function(){n("log","App Launch"," at App.vue:4")},onShow:function(){n("log","App Show"," at App.vue:7")},onHide:function(){n("log","App Hide"," at App.vue:10")}};t.default=e}).call(this,e("0de9")["default"])},ab33:function(n,t,e){"use strict";e.r(t);var u=e("6a1a"),o=e.n(u);for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);t["default"]=o.a},f668:function(n,t,e){}},[["4acf","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function o(o) {
    for (var t, r, p = o[0], a = o[1], i = o[2], m = 0, u = []; m < p.length; m++) {
      r = p[m], s[r] && u.push(s[r][0]), s[r] = 0;
    }

    for (t in a) {
      Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
    }

    l && l(o);

    while (u.length) {
      u.shift()();
    }

    return c.push.apply(c, i || []), n();
  }

  function n() {
    for (var e, o = 0; o < c.length; o++) {
      for (var n = c[o], t = !0, r = 1; r < n.length; r++) {
        var p = n[r];
        0 !== s[p] && (t = !1);
      }

      t && (c.splice(o--, 1), e = a(a.s = n[0]));
    }

    return e;
  }

  var t = {},
      r = {
    "common/runtime": 0
  },
      s = {
    "common/runtime": 0
  },
      c = [];

  function p(e) {
    return a.p + "" + e + ".js";
  }

  function a(o) {
    if (t[o]) return t[o].exports;
    var n = t[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return e[o].call(n.exports, n, n.exports, a), n.l = !0, n.exports;
  }

  a.e = function (e) {
    var o = [],
        n = {
      "compoents/common/load-more": 1,
      "compoents/common/no-thing": 1,
      "compoents/index/swiper-head": 1,
      "compoents/common/comon-news": 1,
      "compoents/news/news-nab-bar": 1,
      "compoents/news/topic-list": 1,
      "compoents/news/topic-news": 1,
      "compoents/paper/paper-list": 1,
      "compoents/paper/paper-pop": 1,
      "compoents/common/upload-image": 1,
      "compoents/uni-nav-bar/uni-nav-bar": 1,
      "compoents/uni-popup/uni-popup": 1,
      "compoents/user-list/user-list": 1,
      "compoents/userchat/user-chat": 1,
      "compoents/userchat/user-chat-list": 1,
      "compoents/common/share-more": 1,
      "compoents/detail/common-list": 1,
      "compoents/detail/detailinfo": 1,
      "compoents/common/tag-sex": 1,
      "compoents/uni-badge/uni-badge": 1,
      "compoents/uni-icon/uni-icon": 1,
      "compoents/uni-status-bar/uni-status-bar": 1
    };
    r[e] ? o.push(r[e]) : 0 !== r[e] && n[e] && o.push(r[e] = new Promise(function (o, n) {
      for (var t = ({
        "compoents/common/load-more": "compoents/common/load-more",
        "compoents/common/no-thing": "compoents/common/no-thing",
        "compoents/index/swiper-head": "compoents/index/swiper-head",
        "compoents/common/comon-news": "compoents/common/comon-news",
        "compoents/news/news-nab-bar": "compoents/news/news-nab-bar",
        "compoents/news/topic-list": "compoents/news/topic-list",
        "compoents/news/topic-news": "compoents/news/topic-news",
        "compoents/paper/paper-list": "compoents/paper/paper-list",
        "compoents/paper/paper-pop": "compoents/paper/paper-pop",
        "compoents/common/upload-image": "compoents/common/upload-image",
        "compoents/uni-nav-bar/uni-nav-bar": "compoents/uni-nav-bar/uni-nav-bar",
        "compoents/uni-popup/uni-popup": "compoents/uni-popup/uni-popup",
        "compoents/user-list/user-list": "compoents/user-list/user-list",
        "compoents/userchat/user-chat": "compoents/userchat/user-chat",
        "compoents/userchat/user-chat-list": "compoents/userchat/user-chat-list",
        "compoents/common/share-more": "compoents/common/share-more",
        "compoents/detail/common-list": "compoents/detail/common-list",
        "compoents/detail/detailinfo": "compoents/detail/detailinfo",
        "compoents/common/tag-sex": "compoents/common/tag-sex",
        "compoents/uni-badge/uni-badge": "compoents/uni-badge/uni-badge",
        "compoents/uni-icon/uni-icon": "compoents/uni-icon/uni-icon",
        "compoents/uni-status-bar/uni-status-bar": "compoents/uni-status-bar/uni-status-bar"
      }[e] || e) + ".wxss", s = a.p + t, c = document.getElementsByTagName("link"), p = 0; p < c.length; p++) {
        var i = c[p],
            m = i.getAttribute("data-href") || i.getAttribute("href");
        if ("stylesheet" === i.rel && (m === t || m === s)) return o();
      }

      var u = document.getElementsByTagName("style");

      for (p = 0; p < u.length; p++) {
        i = u[p], m = i.getAttribute("data-href");
        if (m === t || m === s) return o();
      }

      var l = document.createElement("link");
      l.rel = "stylesheet", l.type = "text/css", l.onload = o, l.onerror = function (o) {
        var t = o && o.target && o.target.src || s,
            c = new Error("Loading CSS chunk " + e + " failed.\n(" + t + ")");
        c.request = t, delete r[e], l.parentNode.removeChild(l), n(c);
      }, l.href = s;
      var d = document.getElementsByTagName("head")[0];
      d.appendChild(l);
    }).then(function () {
      r[e] = 0;
    }));
    var t = s[e];
    if (0 !== t) if (t) o.push(t[2]);else {
      var c = new Promise(function (o, n) {
        t = s[e] = [o, n];
      });
      o.push(t[2] = c);
      var i,
          m = document.createElement("script");
      m.charset = "utf-8", m.timeout = 120, a.nc && m.setAttribute("nonce", a.nc), m.src = p(e), i = function i(o) {
        m.onerror = m.onload = null, clearTimeout(u);
        var n = s[e];

        if (0 !== n) {
          if (n) {
            var t = o && ("load" === o.type ? "missing" : o.type),
                r = o && o.target && o.target.src,
                c = new Error("Loading chunk " + e + " failed.\n(" + t + ": " + r + ")");
            c.type = t, c.request = r, n[1](c);
          }

          s[e] = void 0;
        }
      };
      var u = setTimeout(function () {
        i({
          type: "timeout",
          target: m
        });
      }, 12e4);
      m.onerror = m.onload = i, document.head.appendChild(m);
    }
    return Promise.all(o);
  }, a.m = e, a.c = t, a.d = function (e, o, n) {
    a.o(e, o) || Object.defineProperty(e, o, {
      enumerable: !0,
      get: n
    });
  }, a.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, a.t = function (e, o) {
    if (1 & o && (e = a(e)), 8 & o) return e;
    if (4 & o && "object" === typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (a.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & o && "string" != typeof e) for (var t in e) {
      a.d(n, t, function (o) {
        return e[o];
      }.bind(null, t));
    }
    return n;
  }, a.n = function (e) {
    var o = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return a.d(o, "a", o), o;
  }, a.o = function (e, o) {
    return Object.prototype.hasOwnProperty.call(e, o);
  }, a.p = "/", a.oe = function (e) {
    throw console.error(e), e;
  };
  var i = global["webpackJsonp"] = global["webpackJsonp"] || [],
      m = i.push.bind(i);
  i.push = o, i = i.slice();

  for (var u = 0; u < i.length; u++) {
    o(i[u]);
  }

  var l = m;
  n();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"031c":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={pages:{"pages/index/index":{scrollIndicator:"none",bounce:"none",titleNView:{searchInput:{align:"center",backgroundColor:"#F7F7F7",placeholder:"搜索糗事",placeholderColor:"#CCCCCC",borderRadius:"4px",disabled:!0},buttons:[{color:"#FF9619",float:"left",fontSize:"22px",fontSrc:"/static/font/icon.ttf",text:""},{color:"#000000",float:"right",fontSize:"22px",fontSrc:"/static/font/icon.ttf",text:""}]}},"pages/news/news":{titleNView:!1,scrollIndicator:"none",bounce:"none"},"pages/home/home":{navigationBarTitleText:"我的",scrollIndicator:"none",bounce:"none",titleNView:{buttons:[{type:"menu"}]}},"pages/paper/paper":{enablePullDownRefresh:!0,scrollIndicator:"none",bounce:"none",titleNView:{titleText:"小纸条",buttons:[{color:"#000000",colorPressed:"#BBBBBB",float:"left",fontSize:"22px",fontSrc:"/static/font/icon.ttf",text:"",fontWeight:"bold"},{color:"#000000",colorPressed:"#BBBBBB",float:"right",fontSize:"22px",fontSrc:"/static/font/icon.ttf",text:"",fontWeight:"bold"}]}},"compoents/index/index-list":{},"pages/search/search":{enablePullDownRefresh:!0,scrollIndicator:"none",bounce:"none",titleNView:{autoBackButton:!1,searchInput:{align:"center",backgroundColor:"#F7F7F7",placeholder:"搜索糗事",placeholderColor:"#CCCCCC",borderRadius:"4px"},buttons:[{color:"#000000",float:"right",fontSize:"14px",text:"取消"}]}},"pages/fabu/fabu":{titleNView:!1},"pages/topicnav/topicnav":{bounce:"none",titleNView:{titleText:"话题分类",autoBackButton:"false",buttons:[{color:"#333",float:"left",fontSize:"22px",fontSrc:"/static/font/icon.ttf",text:""}]}},"pages/topicdetail/topicdetail":{scrollIndicator:"none",titleNView:{titleText:"话题详情",type:"transparent",buttons:[{type:"menu"}]},bounce:"none"},"compoents/topic/topic":{},"pages/userlist/userlist":{animationType:"slide-in-left",scrollIndicator:"none",bounce:"none",titleNView:{autoBackButton:!1,searchInput:{align:"center",backgroundColor:"#F7F7F7",placeholder:"搜索糗事",placeholderColor:"#CCCCCC",borderRadius:"4px"},buttons:[{color:"#000000",float:"right",fontSize:"14px",text:"取消",fontWeight:"bold"}]}},"pages/userchat/userchat":{navigationBarTitleText:"聊天页",bounce:"none",titleNView:{buttons:[{color:"#000000",colorPressed:"#BBBBBB",float:"right",fontSize:"18px",fontSrc:"/static/font/icon.ttf",text:"",fontWeight:"bold"}]}},"pages/detail/detail":{navigationBarTitleText:"内容页",scrollIndicator:"none",bounce:"none",titleNView:{buttons:[{type:"menu"}]}}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"仿糗事百科",navigationBarBackgroundColor:"#FFFFFF",backgroundColor:"#FFFFFF"}};e.default=r},"0de9":function(t,e,n){"use strict";function r(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function o(){return"string"===typeof __channelId__&&__channelId__}function i(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var i=e.shift();if(o())return e.push(e.pop().replace("at ","uni-app:///")),console[i]["apply"](console,e);var a=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(o){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=r(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t}),s="";if(a.length>1){var u=a.pop();s=a.join("---COMMA---"),0===u.indexOf(" at ")?s+=u:s+="---COMMA---"+u}else s=a[0];console[i](s)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},"147b":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={getChatTime:function(t,e){if(t=t.toString().length<13?1e3*t:t,e=e.toString().length<13?1e3*e:e,(parseInt(t)-parseInt(e))/1e3>300)return this.gettime(t)},gettime:function(t){t=t.toString().length<13?1e3*t:t;var e=(new Date).getTime(),n=(e-parseInt(t))/1e3;return n<43200?this.dateFormat(new Date(t),"{A} {t}:{ii}"):n<518400?this.dateFormat(new Date(t),"{Mon}月{DD}日 {A} {t}:{ii}"):this.dateFormat(new Date(t),"{Y}-{MM}-{DD} {A} {t}:{ii}")},parseNumber:function(t){return t<10?"0"+t:t},dateFormat:function(t,e){var n={},r=/\{([^}]+)\}/,o=["1","2","3","4","5","6","7","8","9","10","11","12"];n["Y"]=t.getFullYear(),n["M"]=t.getMonth()+1,n["MM"]=this.parseNumber(n["M"]),n["Mon"]=o[n["M"]-1],n["D"]=t.getDate(),n["DD"]=this.parseNumber(n["D"]),n["h"]=t.getHours(),n["hh"]=this.parseNumber(n["h"]),n["t"]=n["h"]>12?n["h"]-12:n["h"],n["tt"]=this.parseNumber(n["t"]),n["A"]=n["h"]>12?"下午":"上午",n["i"]=t.getMinutes(),n["ii"]=this.parseNumber(n["i"]),n["s"]=t.getSeconds(),n["ss"]=this.parseNumber(n["s"]);while(r.test(e))e=e.replace(r,n[RegExp.$1]);return e}},o={gettime:r};e.default=o},1641:function(t,e,n){},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.11
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(t){return void 0===t||null===t}function o(t){return void 0!==t&&null!==t}function i(t){return!0===t}function a(t){return!1===t}function s(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function u(t){return null!==t&&"object"===typeof t}var c=Object.prototype.toString;function f(t){return"[object Object]"===c.call(t)}function l(t){return"[object RegExp]"===c.call(t)}function p(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function h(t){return o(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function d(t){return null==t?"":Array.isArray(t)||f(t)&&t.toString===c?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function y(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}y("slot,component",!0);var _=y("key,ref,slot,slot-scope,is");function g(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var m=Object.prototype.hasOwnProperty;function b(t,e){return m.call(t,e)}function w(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var $=/-(\w)/g,O=w(function(t){return t.replace($,function(t,e){return e?e.toUpperCase():""})}),S=w(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),A=/\B([A-Z])/g,x=w(function(t){return t.replace(A,"-$1").toLowerCase()});function k(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function j(t,e){return t.bind(e)}var E=Function.prototype.bind?j:k;function D(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function P(t,e){for(var n in e)t[n]=e[n];return t}function C(t){for(var e={},n=0;n<t.length;n++)t[n]&&P(e,t[n]);return e}function T(t,e,n){}var I=function(t,e,n){return!1},N=function(t){return t};function R(t,e){if(t===e)return!0;var n=u(t),r=u(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var o=Array.isArray(t),i=Array.isArray(e);if(o&&i)return t.length===e.length&&t.every(function(t,n){return R(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(o||i)return!1;var a=Object.keys(t),s=Object.keys(e);return a.length===s.length&&a.every(function(n){return R(t[n],e[n])})}catch(c){return!1}}function B(t,e){for(var n=0;n<t.length;n++)if(R(t[n],e))return n;return-1}function F(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var M=["component","directive","filter"],L=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],V={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:I,isReservedAttr:I,isUnknownElement:I,getTagNamespace:T,parsePlatformTagName:N,mustUseProp:I,async:!0,_lifecycleHooks:L},U=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function q(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function H(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var z=new RegExp("[^"+U.source+".$_\\d]");function J(t){if(!z.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var W,G="__proto__"in{},K="undefined"!==typeof window,X="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Y=X&&WXEnvironment.platform.toLowerCase(),Q=K&&window.navigator.userAgent.toLowerCase(),Z=Q&&/msie|trident/.test(Q),tt=(Q&&Q.indexOf("msie 9.0"),Q&&Q.indexOf("edge/")>0),et=(Q&&Q.indexOf("android"),Q&&/iphone|ipad|ipod|ios/.test(Q)||"ios"===Y),nt=(Q&&/chrome\/\d+/.test(Q),Q&&/phantomjs/.test(Q),Q&&Q.match(/firefox\/(\d+)/),{}.watch);if(K)try{var rt={};Object.defineProperty(rt,"passive",{get:function(){}}),window.addEventListener("test-passive",null,rt)}catch(no){}var ot=function(){return void 0===W&&(W=!K&&!X&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),W},it=K&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function at(t){return"function"===typeof t&&/native code/.test(t.toString())}var st,ut="undefined"!==typeof Symbol&&at(Symbol)&&"undefined"!==typeof Reflect&&at(Reflect.ownKeys);st="undefined"!==typeof Set&&at(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ct=T,ft=0,lt=function(){"undefined"!==typeof SharedObject?this.id=SharedObject.uid++:this.id=ft++,this.subs=[]};function pt(t){lt.SharedObject.targetStack.push(t),lt.SharedObject.target=t}function ht(){lt.SharedObject.targetStack.pop(),lt.SharedObject.target=lt.SharedObject.targetStack[lt.SharedObject.targetStack.length-1]}lt.prototype.addSub=function(t){this.subs.push(t)},lt.prototype.removeSub=function(t){g(this.subs,t)},lt.prototype.depend=function(){lt.SharedObject.target&&lt.SharedObject.target.addDep(this)},lt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},lt.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},lt.SharedObject.target=null,lt.SharedObject.targetStack=[];var dt=function(t,e,n,r,o,i,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=o,this.ns=void 0,this.context=i,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},vt={child:{configurable:!0}};vt.child.get=function(){return this.componentInstance},Object.defineProperties(dt.prototype,vt);var yt=function(t){void 0===t&&(t="");var e=new dt;return e.text=t,e.isComment=!0,e};function _t(t){return new dt(void 0,void 0,void 0,String(t))}function gt(t){var e=new dt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var mt=Array.prototype,bt=Object.create(mt),wt=["push","pop","shift","unshift","splice","sort","reverse"];wt.forEach(function(t){var e=mt[t];H(bt,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var o,i=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":o=n;break;case"splice":o=n.slice(2);break}return o&&a.observeArray(o),a.dep.notify(),i})});var $t=Object.getOwnPropertyNames(bt),Ot=!0;function St(t){Ot=t}var At=function(t){this.value=t,this.dep=new lt,this.vmCount=0,H(t,"__ob__",this),Array.isArray(t)?(G?t.push!==t.__proto__.push?kt(t,bt,$t):xt(t,bt):kt(t,bt,$t),this.observeArray(t)):this.walk(t)};function xt(t,e){t.__proto__=e}function kt(t,e,n){for(var r=0,o=n.length;r<o;r++){var i=n[r];H(t,i,e[i])}}function jt(t,e){var n;if(u(t)&&!(t instanceof dt))return b(t,"__ob__")&&t.__ob__ instanceof At?n=t.__ob__:Ot&&!ot()&&(Array.isArray(t)||f(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new At(t)),e&&n&&n.vmCount++,n}function Et(t,e,n,r,o){var i=new lt,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,u=a&&a.set;s&&!u||2!==arguments.length||(n=t[e]);var c=!o&&jt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return lt.SharedObject.target&&(i.depend(),c&&(c.dep.depend(),Array.isArray(e)&&Ct(e))),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||s&&!u||(u?u.call(t,e):n=e,c=!o&&jt(e),i.notify())}})}}function Dt(t,e,n){if(Array.isArray(t)&&p(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(Et(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Pt(t,e){if(Array.isArray(t)&&p(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||b(t,e)&&(delete t[e],n&&n.dep.notify())}}function Ct(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Ct(e)}At.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Et(t,e[n])},At.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)jt(t[e])};var Tt=V.optionMergeStrategies;function It(t,e){if(!e)return t;for(var n,r,o,i=ut?Reflect.ownKeys(e):Object.keys(e),a=0;a<i.length;a++)n=i[a],"__ob__"!==n&&(r=t[n],o=e[n],b(t,n)?r!==o&&f(r)&&f(o)&&It(r,o):Dt(t,n,o));return t}function Nt(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,o="function"===typeof t?t.call(n,n):t;return r?It(r,o):o}:e?t?function(){return It("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Rt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?Bt(n):n}function Bt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Ft(t,e,n,r){var o=Object.create(t||null);return e?P(o,e):o}Tt.data=function(t,e,n){return n?Nt(t,e,n):e&&"function"!==typeof e?t:Nt(t,e)},L.forEach(function(t){Tt[t]=Rt}),M.forEach(function(t){Tt[t+"s"]=Ft}),Tt.watch=function(t,e,n,r){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var o={};for(var i in P(o,t),e){var a=o[i],s=e[i];a&&!Array.isArray(a)&&(a=[a]),o[i]=a?a.concat(s):Array.isArray(s)?s:[s]}return o},Tt.props=Tt.methods=Tt.inject=Tt.computed=function(t,e,n,r){if(!t)return e;var o=Object.create(null);return P(o,t),e&&P(o,e),o},Tt.provide=Nt;var Mt=function(t,e){return void 0===e?t:e};function Lt(t,e){var n=t.props;if(n){var r,o,i,a={};if(Array.isArray(n)){r=n.length;while(r--)o=n[r],"string"===typeof o&&(i=O(o),a[i]={type:null})}else if(f(n))for(var s in n)o=n[s],i=O(s),a[i]=f(o)?o:{type:o};else 0;t.props=a}}function Vt(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var o=0;o<n.length;o++)r[n[o]]={from:n[o]};else if(f(n))for(var i in n){var a=n[i];r[i]=f(a)?P({from:i},a):{from:a}}else 0}}function Ut(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function qt(t,e,n){if("function"===typeof e&&(e=e.options),Lt(e,n),Vt(e,n),Ut(e),!e._base&&(e.extends&&(t=qt(t,e.extends,n)),e.mixins))for(var r=0,o=e.mixins.length;r<o;r++)t=qt(t,e.mixins[r],n);var i,a={};for(i in t)s(i);for(i in e)b(t,i)||s(i);function s(r){var o=Tt[r]||Mt;a[r]=o(t[r],e[r],n,r)}return a}function Ht(t,e,n,r){if("string"===typeof n){var o=t[e];if(b(o,n))return o[n];var i=O(n);if(b(o,i))return o[i];var a=S(i);if(b(o,a))return o[a];var s=o[n]||o[i]||o[a];return s}}function zt(t,e,n,r){var o=e[t],i=!b(n,t),a=n[t],s=Kt(Boolean,o.type);if(s>-1)if(i&&!b(o,"default"))a=!1;else if(""===a||a===x(t)){var u=Kt(String,o.type);(u<0||s<u)&&(a=!0)}if(void 0===a){a=Jt(r,o,t);var c=Ot;St(!0),jt(a),St(c)}return a}function Jt(t,e,n){if(b(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Wt(e.type)?r.call(t):r}}function Wt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Gt(t,e){return Wt(t)===Wt(e)}function Kt(t,e){if(!Array.isArray(e))return Gt(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(Gt(e[n],t))return n;return-1}function Xt(t,e,n){pt();try{if(e){var r=e;while(r=r.$parent){var o=r.$options.errorCaptured;if(o)for(var i=0;i<o.length;i++)try{var a=!1===o[i].call(r,t,e,n);if(a)return}catch(no){Qt(no,r,"errorCaptured hook")}}}Qt(t,e,n)}finally{ht()}}function Yt(t,e,n,r,o){var i;try{i=n?t.apply(e,n):t.call(e),i&&!i._isVue&&h(i)&&!i._handled&&(i.catch(function(t){return Xt(t,r,o+" (Promise/async)")}),i._handled=!0)}catch(no){Xt(no,r,o)}return i}function Qt(t,e,n){if(V.errorHandler)try{return V.errorHandler.call(null,t,e,n)}catch(no){no!==t&&Zt(no,null,"config.errorHandler")}Zt(t,e,n)}function Zt(t,e,n){if(!K&&!X||"undefined"===typeof console)throw t;console.error(t)}var te,ee=[],ne=!1;function re(){ne=!1;var t=ee.slice(0);ee.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&at(Promise)){var oe=Promise.resolve();te=function(){oe.then(re),et&&setTimeout(T)}}else if(Z||"undefined"===typeof MutationObserver||!at(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())te="undefined"!==typeof setImmediate&&at(setImmediate)?function(){setImmediate(re)}:function(){setTimeout(re,0)};else{var ie=1,ae=new MutationObserver(re),se=document.createTextNode(String(ie));ae.observe(se,{characterData:!0}),te=function(){ie=(ie+1)%2,se.data=String(ie)}}function ue(t,e){var n;if(ee.push(function(){if(t)try{t.call(e)}catch(no){Xt(no,e,"nextTick")}else n&&n(e)}),ne||(ne=!0,te()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var ce=new st;function fe(t){le(t,ce),ce.clear()}function le(t,e){var n,r,o=Array.isArray(t);if(!(!o&&!u(t)||Object.isFrozen(t)||t instanceof dt)){if(t.__ob__){var i=t.__ob__.dep.id;if(e.has(i))return;e.add(i)}if(o){n=t.length;while(n--)le(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)le(t[r[n]],e)}}}var pe=w(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function he(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return Yt(r,null,arguments,e,"v-on handler");for(var o=r.slice(),i=0;i<o.length;i++)Yt(o[i],null,t,e,"v-on handler")}return n.fns=t,n}function de(t,e,n,o,a,s){var u,c,f,l;for(u in t)c=t[u],f=e[u],l=pe(u),r(c)||(r(f)?(r(c.fns)&&(c=t[u]=he(c,s)),i(l.once)&&(c=t[u]=a(l.name,c,l.capture)),n(l.name,c,l.capture,l.passive,l.params)):c!==f&&(f.fns=c,t[u]=f));for(u in e)r(t[u])&&(l=pe(u),o(l.name,e[u],l.capture))}function ve(t,e,n,i){var a=e.options.mpOptions&&e.options.mpOptions.properties;if(r(a))return n;var s=e.options.mpOptions.externalClasses||[],u=t.attrs,c=t.props;if(o(u)||o(c))for(var f in a){var l=x(f),p=_e(n,c,f,l,!0)||_e(n,u,f,l,!1);p&&n[f]&&-1!==s.indexOf(l)&&i[O(n[f])]&&(n[f]=i[O(n[f])])}return n}function ye(t,e,n,i){var a=e.options.props;if(r(a))return ve(t,e,{},i);var s={},u=t.attrs,c=t.props;if(o(u)||o(c))for(var f in a){var l=x(f);_e(s,c,f,l,!0)||_e(s,u,f,l,!1)}return ve(t,e,s,i)}function _e(t,e,n,r,i){if(o(e)){if(b(e,n))return t[n]=e[n],i||delete e[n],!0;if(b(e,r))return t[n]=e[r],i||delete e[r],!0}return!1}function ge(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function me(t){return s(t)?[_t(t)]:Array.isArray(t)?we(t):void 0}function be(t){return o(t)&&o(t.text)&&a(t.isComment)}function we(t,e){var n,a,u,c,f=[];for(n=0;n<t.length;n++)a=t[n],r(a)||"boolean"===typeof a||(u=f.length-1,c=f[u],Array.isArray(a)?a.length>0&&(a=we(a,(e||"")+"_"+n),be(a[0])&&be(c)&&(f[u]=_t(c.text+a[0].text),a.shift()),f.push.apply(f,a)):s(a)?be(c)?f[u]=_t(c.text+a):""!==a&&f.push(_t(a)):be(a)&&be(c)?f[u]=_t(c.text+a.text):(i(t._isVList)&&o(a.tag)&&r(a.key)&&o(e)&&(a.key="__vlist"+e+"_"+n+"__"),f.push(a)));return f}function $e(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function Oe(t){var e=Se(t.$options.inject,t);e&&(St(!1),Object.keys(e).forEach(function(n){Et(t,n,e[n])}),St(!0))}function Se(t,e){if(t){for(var n=Object.create(null),r=ut?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++){var i=r[o];if("__ob__"!==i){var a=t[i].from,s=e;while(s){if(s._provided&&b(s._provided,a)){n[i]=s._provided[a];break}s=s.$parent}if(!s)if("default"in t[i]){var u=t[i].default;n[i]="function"===typeof u?u.call(e):u}else 0}}return n}}function Ae(t,e){if(!t||!t.length)return{};for(var n={},r=0,o=t.length;r<o;r++){var i=t[r],a=i.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,i.context!==e&&i.fnContext!==e||!a||null==a.slot)i.asyncMeta&&i.asyncMeta.data&&"page"===i.asyncMeta.data.slot?(n["page"]||(n["page"]=[])).push(i):(n.default||(n.default=[])).push(i);else{var s=a.slot,u=n[s]||(n[s]=[]);"template"===i.tag?u.push.apply(u,i.children||[]):u.push(i)}}for(var c in n)n[c].every(xe)&&delete n[c];return n}function xe(t){return t.isComment&&!t.asyncFactory||" "===t.text}function ke(t,e,r){var o,i=Object.keys(e).length>0,a=t?!!t.$stable:!i,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&r&&r!==n&&s===r.$key&&!i&&!r.$hasNormal)return r;for(var u in o={},t)t[u]&&"$"!==u[0]&&(o[u]=je(e,u,t[u]))}else o={};for(var c in e)c in o||(o[c]=Ee(e,c));return t&&Object.isExtensible(t)&&(t._normalized=o),H(o,"$stable",a),H(o,"$key",s),H(o,"$hasNormal",i),o}function je(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:me(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function Ee(t,e){return function(){return t[e]}}function De(t,e){var n,r,i,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,i=t.length;r<i;r++)n[r]=e(t[r],r,r,r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r,r,r);else if(u(t))if(ut&&t[Symbol.iterator]){n=[];var c=t[Symbol.iterator](),f=c.next();while(!f.done)n.push(e(f.value,n.length,r++,r)),f=c.next()}else for(a=Object.keys(t),n=new Array(a.length),r=0,i=a.length;r<i;r++)s=a[r],n[r]=e(t[s],s,r,r);return o(n)||(n=[]),n._isVList=!0,n}function Pe(t,e,n,r){var o,i=this.$scopedSlots[t];i?(n=n||{},r&&(n=P(P({},r),n)),o=i(n,this,n._i)||e):o=this.$slots[t]||e;var a=n&&n.slot;return a?this.$createElement("template",{slot:a},o):o}function Ce(t){return Ht(this.$options,"filters",t,!0)||N}function Te(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Ie(t,e,n,r,o){var i=V.keyCodes[e]||n;return o&&r&&!V.keyCodes[e]?Te(o,r):i?Te(i,t):r?x(r)!==e:void 0}function Ne(t,e,n,r,o){if(n)if(u(n)){var i;Array.isArray(n)&&(n=C(n));var a=function(a){if("class"===a||"style"===a||_(a))i=t;else{var s=t.attrs&&t.attrs.type;i=r||V.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var u=O(a),c=x(a);if(!(u in i)&&!(c in i)&&(i[a]=n[a],o)){var f=t.on||(t.on={});f["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function Re(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e?r:(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Fe(r,"__static__"+t,!1),r)}function Be(t,e,n){return Fe(t,"__once__"+e+(n?"_"+n:""),!0),t}function Fe(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&Me(t[r],e+"_"+r,n);else Me(t,e,n)}function Me(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Le(t,e){if(e)if(f(e)){var n=t.on=t.on?P({},t.on):{};for(var r in e){var o=n[r],i=e[r];n[r]=o?[].concat(o,i):i}}else;return t}function Ve(t,e,n,r){e=e||{$stable:!n};for(var o=0;o<t.length;o++){var i=t[o];Array.isArray(i)?Ve(i,e,n):i&&(i.proxy&&(i.fn.proxy=!0),e[i.key]=i.fn)}return r&&(e.$key=r),e}function Ue(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function qe(t,e){return"string"===typeof t?e+t:t}function He(t){t._o=Be,t._n=v,t._s=d,t._l=De,t._t=Pe,t._q=R,t._i=B,t._m=Re,t._f=Ce,t._k=Ie,t._b=Ne,t._v=_t,t._e=yt,t._u=Ve,t._g=Le,t._d=Ue,t._p=qe}function ze(t,e,r,o,a){var s,u=this,c=a.options;b(o,"_uid")?(s=Object.create(o),s._original=o):(s=o,o=o._original);var f=i(c._compiled),l=!f;this.data=t,this.props=e,this.children=r,this.parent=o,this.listeners=t.on||n,this.injections=Se(c.inject,o),this.slots=function(){return u.$slots||ke(t.scopedSlots,u.$slots=Ae(r,o)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return ke(t.scopedSlots,this.slots())}}),f&&(this.$options=c,this.$slots=this.slots(),this.$scopedSlots=ke(t.scopedSlots,this.$slots)),c._scopeId?this._c=function(t,e,n,r){var i=on(s,t,e,n,r,l);return i&&!Array.isArray(i)&&(i.fnScopeId=c._scopeId,i.fnContext=o),i}:this._c=function(t,e,n,r){return on(s,t,e,n,r,l)}}function Je(t,e,r,i,a){var s=t.options,u={},c=s.props;if(o(c))for(var f in c)u[f]=zt(f,c,e||n);else o(r.attrs)&&Ge(u,r.attrs),o(r.props)&&Ge(u,r.props);var l=new ze(r,u,a,i,t),p=s.render.call(null,l._c,l);if(p instanceof dt)return We(p,r,l.parent,s,l);if(Array.isArray(p)){for(var h=me(p)||[],d=new Array(h.length),v=0;v<h.length;v++)d[v]=We(h[v],r,l.parent,s,l);return d}}function We(t,e,n,r,o){var i=gt(t);return i.fnContext=n,i.fnOptions=r,e.slot&&((i.data||(i.data={})).slot=e.slot),i}function Ge(t,e){for(var n in e)t[O(n)]=e[n]}He(ze.prototype);var Ke={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;Ke.prepatch(n,n)}else{var r=t.componentInstance=Qe(t,Sn);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;jn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(Cn(n,"onServiceCreated"),Cn(n,"onServiceAttached"),n._isMounted=!0,Cn(n,"mounted")),t.data.keepAlive&&(e._isMounted?Hn(n):Dn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Pn(e,!0):e.$destroy())}},Xe=Object.keys(Ke);function Ye(t,e,n,a,s){if(!r(t)){var c=n.$options._base;if(u(t)&&(t=c.extend(t)),"function"===typeof t){var f;if(r(t.cid)&&(f=t,t=vn(f,c),void 0===t))return dn(f,e,n,a,s);e=e||{},hr(t),o(e.model)&&en(t.options,e);var l=ye(e,t,s,n);if(i(t.options.functional))return Je(t,l,e,n,a);var p=e.on;if(e.on=e.nativeOn,i(t.options.abstract)){var h=e.slot;e={},h&&(e.slot=h)}Ze(e);var d=t.options.name||s,v=new dt("vue-component-"+t.cid+(d?"-"+d:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:l,listeners:p,tag:s,children:a},f);return v}}}function Qe(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return o(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function Ze(t){for(var e=t.hook||(t.hook={}),n=0;n<Xe.length;n++){var r=Xe[n],o=e[r],i=Ke[r];o===i||o&&o._merged||(e[r]=o?tn(i,o):i)}}function tn(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function en(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var i=e.on||(e.on={}),a=i[r],s=e.model.callback;o(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(i[r]=[s].concat(a)):i[r]=s}var nn=1,rn=2;function on(t,e,n,r,o,a){return(Array.isArray(n)||s(n))&&(o=r,r=n,n=void 0),i(a)&&(o=rn),an(t,e,n,r,o)}function an(t,e,n,r,i){if(o(n)&&o(n.__ob__))return yt();if(o(n)&&o(n.is)&&(e=n.is),!e)return yt();var a,s,u;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),i===rn?r=me(r):i===nn&&(r=ge(r)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||V.getTagNamespace(e),a=V.isReservedTag(e)?new dt(V.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!o(u=Ht(t.$options,"components",e))?new dt(e,n,r,void 0,void 0,t):Ye(u,n,t,r,e)):a=Ye(e,n,t,r);return Array.isArray(a)?a:o(a)?(o(s)&&sn(a,s),o(n)&&un(n),a):yt()}function sn(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),o(t.children))for(var a=0,s=t.children.length;a<s;a++){var u=t.children[a];o(u.tag)&&(r(u.ns)||i(n)&&"svg"!==u.tag)&&sn(u,e,n)}}function un(t){u(t.style)&&fe(t.style),u(t.class)&&fe(t.class)}function cn(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,o=r&&r.context;t.$slots=Ae(e._renderChildren,o),t.$scopedSlots=n,t._c=function(e,n,r,o){return on(t,e,n,r,o,!1)},t.$createElement=function(e,n,r,o){return on(t,e,n,r,o,!0)};var i=r&&r.data;Et(t,"$attrs",i&&i.attrs||n,null,!0),Et(t,"$listeners",e._parentListeners||n,null,!0)}var fn,ln=null;function pn(t){He(t.prototype),t.prototype.$nextTick=function(t){return ue(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,o=n._parentVnode;o&&(e.$scopedSlots=ke(o.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=o;try{ln=e,t=r.call(e._renderProxy,e.$createElement)}catch(no){Xt(no,e,"render"),t=e._vnode}finally{ln=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof dt||(t=yt()),t.parent=o,t}}function hn(t,e){return(t.__esModule||ut&&"Module"===t[Symbol.toStringTag])&&(t=t.default),u(t)?e.extend(t):t}function dn(t,e,n,r,o){var i=yt();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:o},i}function vn(t,e){if(i(t.error)&&o(t.errorComp))return t.errorComp;if(o(t.resolved))return t.resolved;var n=ln;if(n&&o(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),i(t.loading)&&o(t.loadingComp))return t.loadingComp;if(n&&!o(t.owners)){var a=t.owners=[n],s=!0,c=null,f=null;n.$on("hook:destroyed",function(){return g(a,n)});var l=function(t){for(var e=0,n=a.length;e<n;e++)a[e].$forceUpdate();t&&(a.length=0,null!==c&&(clearTimeout(c),c=null),null!==f&&(clearTimeout(f),f=null))},p=F(function(n){t.resolved=hn(n,e),s?a.length=0:l(!0)}),d=F(function(e){o(t.errorComp)&&(t.error=!0,l(!0))}),v=t(p,d);return u(v)&&(h(v)?r(t.resolved)&&v.then(p,d):h(v.component)&&(v.component.then(p,d),o(v.error)&&(t.errorComp=hn(v.error,e)),o(v.loading)&&(t.loadingComp=hn(v.loading,e),0===v.delay?t.loading=!0:c=setTimeout(function(){c=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,l(!1))},v.delay||200)),o(v.timeout)&&(f=setTimeout(function(){f=null,r(t.resolved)&&d(null)},v.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function yn(t){return t.isComment&&t.asyncFactory}function _n(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(o(n)&&(o(n.componentOptions)||yn(n)))return n}}function gn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&$n(t,e)}function mn(t,e){fn.$on(t,e)}function bn(t,e){fn.$off(t,e)}function wn(t,e){var n=fn;return function r(){var o=e.apply(null,arguments);null!==o&&n.$off(t,r)}}function $n(t,e,n){fn=t,de(e,n||{},mn,bn,wn,t),fn=void 0}function On(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var o=0,i=t.length;o<i;o++)r.$on(t[o],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,o=t.length;r<o;r++)n.$off(t[r],e);return n}var i,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var s=a.length;while(s--)if(i=a[s],i===e||i.fn===e){a.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?D(n):n;for(var r=D(arguments,1),o='event handler for "'+t+'"',i=0,a=n.length;i<a;i++)Yt(n[i],e,r,e,o)}return e}}var Sn=null;function An(t){var e=Sn;return Sn=t,function(){Sn=e}}function xn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function kn(t){t.prototype._update=function(t,e){var n=this,r=n.$el,o=n._vnode,i=An(n);n._vnode=t,n.$el=o?n.__patch__(o,t):n.__patch__(n.$el,t,e,!1),i(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Cn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||g(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Cn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function jn(t,e,r,o,i){var a=o.data.scopedSlots,s=t.$scopedSlots,u=!!(a&&!a.$stable||s!==n&&!s.$stable||a&&t.$scopedSlots.$key!==a.$key),c=!!(i||t.$options._renderChildren||u);if(t.$options._parentVnode=o,t.$vnode=o,t._vnode&&(t._vnode.parent=o),t.$options._renderChildren=i,t.$attrs=o.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){St(!1);for(var f=t._props,l=t.$options._propKeys||[],p=0;p<l.length;p++){var h=l[p],d=t.$options.props;f[h]=zt(h,d,e,t)}St(!0),t.$options.propsData=e}t._$updateProperties&&t._$updateProperties(t),r=r||n;var v=t.$options._parentListeners;t.$options._parentListeners=r,$n(t,r,v),c&&(t.$slots=Ae(i,o.context),t.$forceUpdate())}function En(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Dn(t,e){if(e){if(t._directInactive=!1,En(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Dn(t.$children[n]);Cn(t,"activated")}}function Pn(t,e){if((!e||(t._directInactive=!0,!En(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Pn(t.$children[n]);Cn(t,"deactivated")}}function Cn(t,e){pt();var n=t.$options[e],r=e+" hook";if(n)for(var o=0,i=n.length;o<i;o++)Yt(n[o],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),ht()}var Tn=[],In=[],Nn={},Rn=!1,Bn=!1,Fn=0;function Mn(){Fn=Tn.length=In.length=0,Nn={},Rn=Bn=!1}var Ln=Date.now;if(K&&!Z){var Vn=window.performance;Vn&&"function"===typeof Vn.now&&Ln()>document.createEvent("Event").timeStamp&&(Ln=function(){return Vn.now()})}function Un(){var t,e;for(Ln(),Bn=!0,Tn.sort(function(t,e){return t.id-e.id}),Fn=0;Fn<Tn.length;Fn++)t=Tn[Fn],t.before&&t.before(),e=t.id,Nn[e]=null,t.run();var n=In.slice(),r=Tn.slice();Mn(),zn(n),qn(r),it&&V.devtools&&it.emit("flush")}function qn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Cn(r,"updated")}}function Hn(t){t._inactive=!1,In.push(t)}function zn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Dn(t[e],!0)}function Jn(t){var e=t.id;if(null==Nn[e]){if(Nn[e]=!0,Bn){var n=Tn.length-1;while(n>Fn&&Tn[n].id>t.id)n--;Tn.splice(n+1,0,t)}else Tn.push(t);Rn||(Rn=!0,ue(Un))}}var Wn=0,Gn=function(t,e,n,r,o){this.vm=t,o&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Wn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="","function"===typeof e?this.getter=e:(this.getter=J(e),this.getter||(this.getter=T)),this.value=this.lazy?void 0:this.get()};Gn.prototype.get=function(){var t;pt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(no){if(!this.user)throw no;Xt(no,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&fe(t),ht(),this.cleanupDeps()}return t},Gn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Gn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Gn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Jn(this)},Gn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||u(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(no){Xt(no,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Gn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Gn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Gn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||g(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var Kn={enumerable:!0,configurable:!0,get:T,set:T};function Xn(t,e,n){Kn.get=function(){return this[e][n]},Kn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Kn)}function Yn(t){t._watchers=[];var e=t.$options;e.props&&Qn(t,e.props),e.methods&&ar(t,e.methods),e.data?Zn(t):jt(t._data={},!0),e.computed&&nr(t,e.computed),e.watch&&e.watch!==nt&&sr(t,e.watch)}function Qn(t,e){var n=t.$options.propsData||{},r=t._props={},o=t.$options._propKeys=[],i=!t.$parent;i||St(!1);var a=function(i){o.push(i);var a=zt(i,e,n,t);Et(r,i,a),i in t||Xn(t,"_props",i)};for(var s in e)a(s);St(!0)}function Zn(t){var e=t.$options.data;e=t._data="function"===typeof e?tr(e,t):e||{},f(e)||(e={});var n=Object.keys(e),r=t.$options.props,o=(t.$options.methods,n.length);while(o--){var i=n[o];0,r&&b(r,i)||q(i)||Xn(t,"_data",i)}jt(e,!0)}function tr(t,e){pt();try{return t.call(e,e)}catch(no){return Xt(no,e,"data()"),{}}finally{ht()}}var er={lazy:!0};function nr(t,e){var n=t._computedWatchers=Object.create(null),r=ot();for(var o in e){var i=e[o],a="function"===typeof i?i:i.get;0,r||(n[o]=new Gn(t,a||T,T,er)),o in t||rr(t,o,i)}}function rr(t,e,n){var r=!ot();"function"===typeof n?(Kn.get=r?or(e):ir(n),Kn.set=T):(Kn.get=n.get?r&&!1!==n.cache?or(e):ir(n.get):T,Kn.set=n.set||T),Object.defineProperty(t,e,Kn)}function or(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),lt.SharedObject.target&&e.depend(),e.value}}function ir(t){return function(){return t.call(this,this)}}function ar(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?T:E(e[n],t)}function sr(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var o=0;o<r.length;o++)ur(t,n,r[o]);else ur(t,n,r)}}function ur(t,e,n,r){return f(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function cr(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Dt,t.prototype.$delete=Pt,t.prototype.$watch=function(t,e,n){var r=this;if(f(e))return ur(r,t,e,n);n=n||{},n.user=!0;var o=new Gn(r,t,e,n);if(n.immediate)try{e.call(r,o.value)}catch(i){Xt(i,r,'callback for immediate watcher "'+o.expression+'"')}return function(){o.teardown()}}}var fr=0;function lr(t){t.prototype._init=function(t){var e=this;e._uid=fr++,e._isVue=!0,t&&t._isComponent?pr(e,t):e.$options=qt(hr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,xn(e),gn(e),cn(e),Cn(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&Oe(e),Yn(e),"mp-toutiao"!==e.mpHost&&$e(e),"mp-toutiao"!==e.mpHost&&Cn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function pr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var o=r.componentOptions;n.propsData=o.propsData,n._parentListeners=o.listeners,n._renderChildren=o.children,n._componentTag=o.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function hr(t){var e=t.options;if(t.super){var n=hr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var o=dr(t);o&&P(t.extendOptions,o),e=t.options=qt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function dr(t){var e,n=t.options,r=t.sealedOptions;for(var o in n)n[o]!==r[o]&&(e||(e={}),e[o]=n[o]);return e}function vr(t){this._init(t)}function yr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=D(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function _r(t){t.mixin=function(t){return this.options=qt(this.options,t),this}}function gr(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,o=t._Ctor||(t._Ctor={});if(o[r])return o[r];var i=t.name||n.options.name;var a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=qt(n.options,t),a["super"]=n,a.options.props&&mr(a),a.options.computed&&br(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,M.forEach(function(t){a[t]=n[t]}),i&&(a.options.components[i]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=P({},a.options),o[r]=a,a}}function mr(t){var e=t.options.props;for(var n in e)Xn(t.prototype,"_props",n)}function br(t){var e=t.options.computed;for(var n in e)rr(t.prototype,n,e[n])}function wr(t){M.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&f(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function $r(t){return t&&(t.Ctor.options.name||t.tag)}function Or(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!l(t)&&t.test(e)}function Sr(t,e){var n=t.cache,r=t.keys,o=t._vnode;for(var i in n){var a=n[i];if(a){var s=$r(a.componentOptions);s&&!e(s)&&Ar(n,i,r,o)}}}function Ar(t,e,n,r){var o=t[e];!o||r&&o.tag===r.tag||o.componentInstance.$destroy(),t[e]=null,g(n,e)}lr(vr),cr(vr),On(vr),kn(vr),pn(vr);var xr=[String,RegExp,Array],kr={name:"keep-alive",abstract:!0,props:{include:xr,exclude:xr,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Ar(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){Sr(t,function(t){return Or(e,t)})}),this.$watch("exclude",function(e){Sr(t,function(t){return!Or(e,t)})})},render:function(){var t=this.$slots.default,e=_n(t),n=e&&e.componentOptions;if(n){var r=$r(n),o=this,i=o.include,a=o.exclude;if(i&&(!r||!Or(i,r))||a&&r&&Or(a,r))return e;var s=this,u=s.cache,c=s.keys,f=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;u[f]?(e.componentInstance=u[f].componentInstance,g(c,f),c.push(f)):(u[f]=e,c.push(f),this.max&&c.length>parseInt(this.max)&&Ar(u,c[0],c,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},jr={KeepAlive:kr};function Er(t){var e={get:function(){return V}};Object.defineProperty(t,"config",e),t.util={warn:ct,extend:P,mergeOptions:qt,defineReactive:Et},t.set=Dt,t.delete=Pt,t.nextTick=ue,t.observable=function(t){return jt(t),t},t.options=Object.create(null),M.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,P(t.options.components,jr),yr(t),_r(t),gr(t),wr(t)}Er(vr),Object.defineProperty(vr.prototype,"$isServer",{get:ot}),Object.defineProperty(vr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(vr,"FunctionalRenderContext",{value:ze}),vr.version="2.6.11";var Dr="[object Array]",Pr="[object Object]";function Cr(t,e){var n={};return Tr(t,e),Ir(t,e,"",n),n}function Tr(t,e){if(t!==e){var n=Rr(t),r=Rr(e);if(n==Pr&&r==Pr){if(Object.keys(t).length>=Object.keys(e).length)for(var o in e){var i=t[o];void 0===i?t[o]=null:Tr(i,e[o])}}else n==Dr&&r==Dr&&t.length>=e.length&&e.forEach(function(e,n){Tr(t[n],e)})}}function Ir(t,e,n,r){if(t!==e){var o=Rr(t),i=Rr(e);if(o==Pr)if(i!=Pr||Object.keys(t).length<Object.keys(e).length)Nr(r,n,t);else{var a=function(o){var i=t[o],a=e[o],s=Rr(i),u=Rr(a);if(s!=Dr&&s!=Pr)i!=e[o]&&Nr(r,(""==n?"":n+".")+o,i);else if(s==Dr)u!=Dr?Nr(r,(""==n?"":n+".")+o,i):i.length<a.length?Nr(r,(""==n?"":n+".")+o,i):i.forEach(function(t,e){Ir(t,a[e],(""==n?"":n+".")+o+"["+e+"]",r)});else if(s==Pr)if(u!=Pr||Object.keys(i).length<Object.keys(a).length)Nr(r,(""==n?"":n+".")+o,i);else for(var c in i)Ir(i[c],a[c],(""==n?"":n+".")+o+"."+c,r)};for(var s in t)a(s)}else o==Dr?i!=Dr?Nr(r,n,t):t.length<e.length?Nr(r,n,t):t.forEach(function(t,o){Ir(t,e[o],n+"["+o+"]",r)}):Nr(r,n,t)}}function Nr(t,e,n){t[e]=n}function Rr(t){return Object.prototype.toString.call(t)}function Br(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var r=0;r<n.length;r++)n[r]()}}function Fr(t){return Tn.find(function(e){return t._watcher===e})}function Mr(t,e){if(!t.__next_tick_pending&&!Fr(t)){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return ue(e,t)}if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var r=t.$scope;console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+t._uid+"]:nextMPTick")}var o;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(no){Xt(no,t,"nextTick")}else o&&o(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){o=t})}function Lr(t){var e=Object.create(null),n=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return n.reduce(function(e,n){return e[n]=t[n],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var Vr=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var r=this.$scope,o=Object.create(null);try{o=Lr(this)}catch(s){console.error(s)}o.__webviewId__=r.data.__webviewId__;var i=Object.create(null);Object.keys(o).forEach(function(t){i[t]=r.data[t]});var a=!1===this.$shouldDiffData?o:Cr(o,i);Object.keys(a).length?(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+this._uid+"]差量更新",JSON.stringify(a)),this.__next_tick_pending=!0,r.setData(a,function(){n.__next_tick_pending=!1,Br(n)})):Br(this)}};function Ur(){}function qr(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=Ur),t.$options.render||(t.$options.render=Ur),"mp-toutiao"!==t.mpHost&&Cn(t,"beforeMount");var r=function(){t._update(t._render(),n)};return new Gn(t,r,T,{before:function(){t._isMounted&&!t._isDestroyed&&Cn(t,"beforeUpdate")}},!0),n=!1,t}function Hr(t,e){return o(t)||o(e)?zr(t,Jr(e)):""}function zr(t,e){return t?e?t+" "+e:t:e||""}function Jr(t){return Array.isArray(t)?Wr(t):u(t)?Gr(t):"string"===typeof t?t:""}function Wr(t){for(var e,n="",r=0,i=t.length;r<i;r++)o(e=Jr(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Gr(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Kr=w(function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function Xr(t){return Array.isArray(t)?C(t):"string"===typeof t?Kr(t):t}var Yr=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Qr(t,e){var n=e.split("."),r=n[0];return 0===r.indexOf("__$n")&&(r=parseInt(r.replace("__$n",""))),1===n.length?t[r]:Qr(t[r],n.slice(1).join("."))}function Zr(t){t.config.errorHandler=function(t){console.error(t);var e=getApp();e&&e.onError&&e.onError(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:D(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return Mr(this,t)},Yr.forEach(function(e){t.prototype[e]=function(t){return this.$scope&&this.$scope[e]?this.$scope[e](t):"undefined"!==typeof my?"createSelectorQuery"===e?my.createSelectorQuery(t):"createIntersectionObserver"===e?my.createIntersectionObserver(t):void 0:void 0}}),t.prototype.__init_provide=$e,t.prototype.__init_injections=Oe,t.prototype.__call_hook=function(t,e){var n=this;pt();var r,o=n.$options[t],i=t+" hook";if(o)for(var a=0,s=o.length;a<s;a++)r=Yt(o[a],n,e?[e]:null,n,i);return n._hasHookEvent&&n.$emit("hook:"+t,e),ht(),r},t.prototype.__set_model=function(t,e,n,r){Array.isArray(r)&&(-1!==r.indexOf("trim")&&(n=n.trim()),-1!==r.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return f(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Qr(e||this,t)},t.prototype.__get_class=function(t,e){return Hr(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=Xr(t),r=e?P(e,n):n;return Object.keys(r).map(function(t){return x(t)+":"+r[t]}).join(";")},t.prototype.__map=function(t,e){var n,r,o,i,a;if(Array.isArray(t)){for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);return n}if(u(t)){for(i=Object.keys(t),n=Object.create(null),r=0,o=i.length;r<o;r++)a=i[r],n[a]=e(t[a],a,r);return n}return[]}}var to=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function eo(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==to.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,r=n.created;to.forEach(function(t){n[t]=r}),t.prototype.__lifecycle_hooks__=to}vr.prototype.__patch__=Vr,vr.prototype.$mount=function(t,e){return qr(this,t,e)},eo(vr),Zr(vr),e["default"]=vr}.call(this,n("c8ba"))},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=ve,e.createComponent=Ae,e.createPage=Se,e.default=void 0;var r=o(n("66fd"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){f(t,e,n[e])})}return t}function a(t,e){return c(t)||u(t,e)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0)if(n.push(a.value),e&&n.length===e)break}catch(u){o=!0,i=u}finally{try{r||null==s["return"]||s["return"]()}finally{if(o)throw i}}return n}function c(t){if(Array.isArray(t))return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t){return d(t)||h(t)||p()}function p(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function h(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function d(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var v=Object.prototype.toString,y=Object.prototype.hasOwnProperty;function _(t){return"function"===typeof t}function g(t){return"string"===typeof t}function m(t){return"[object Object]"===v.call(t)}function b(t,e){return y.call(t,e)}function w(){}function $(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var O=/-(\w)/g,S=$(function(t){return t.replace(O,function(t,e){return e?e.toUpperCase():""})}),A=["invoke","success","fail","complete","returnValue"],x={},k={};function j(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?E(n):n}function E(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function D(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function P(t,e){Object.keys(e).forEach(function(n){-1!==A.indexOf(n)&&_(e[n])&&(t[n]=j(t[n],e[n]))})}function C(t,e){t&&e&&Object.keys(e).forEach(function(n){-1!==A.indexOf(n)&&_(e[n])&&D(t[n],e[n])})}function T(t,e){"string"===typeof t&&m(e)?P(k[t]||(k[t]={}),e):m(t)&&P(x,t)}function I(t,e){"string"===typeof t?m(e)?C(k[t],e):delete k[t]:m(t)&&C(x,t)}function N(t){return function(e){return t(e)||e}}function R(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function B(t,e){for(var n=!1,r=0;r<t.length;r++){var o=t[r];if(n)n=Promise.then(N(o));else{var i=o(e);if(R(i)&&(n=Promise.resolve(i)),!1===i)return{then:function(){}}}}return n||{then:function(t){return t(e)}}}function F(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(t[n])){var r=e[n];e[n]=function(e){B(t[n],e).then(function(t){return _(r)&&r(t)||t})}}}),e}function M(t,e){var n=[];Array.isArray(x.returnValue)&&n.push.apply(n,l(x.returnValue));var r=k[t];return r&&Array.isArray(r.returnValue)&&n.push.apply(n,l(r.returnValue)),n.forEach(function(t){e=t(e)||e}),e}function L(t){var e=Object.create(null);Object.keys(x).forEach(function(t){"returnValue"!==t&&(e[t]=x[t].slice())});var n=k[t];return n&&Object.keys(n).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(n[t]))}),e}function V(t,e,n){for(var r=arguments.length,o=new Array(r>3?r-3:0),i=3;i<r;i++)o[i-3]=arguments[i];var a=L(t);if(a&&Object.keys(a).length){if(Array.isArray(a.invoke)){var s=B(a.invoke,n);return s.then(function(t){return e.apply(void 0,[F(a,t)].concat(o))})}return e.apply(void 0,[F(a,n)].concat(o))}return e.apply(void 0,[n].concat(o))}var U={returnValue:function(t){return R(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},q=/^\$|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,H=/^create|Manager$/,z=/^on/;function J(t){return H.test(t)}function W(t){return q.test(t)}function G(t){return z.test(t)&&"onPush"!==t}function K(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function X(t){return!(J(t)||W(t)||G(t))}function Y(t,e){return X(t)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return _(n.success)||_(n.fail)||_(n.complete)?M(t,V.apply(void 0,[t,e,n].concat(o))):M(t,K(new Promise(function(r,i){V.apply(void 0,[t,e,Object.assign({},n,{success:r,fail:i})].concat(o)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})})))}:e}var Q=1e-4,Z=750,tt=!1,et=0,nt=0;function rt(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,r=t.windowWidth;et=r,nt=n,tt="ios"===e}function ot(t,e){if(0===et&&rt(),t=Number(t),0===t)return 0;var n=t/Z*(e||et);return n<0&&(n=-n),n=Math.floor(n+Q),0===n?1!==nt&&tt?.5:1:t<0?-n:n}var it={promiseInterceptor:U},at=Object.freeze({__proto__:null,upx2px:ot,interceptors:it,addInterceptor:T,removeInterceptor:I}),st={},ut=[],ct=[],ft=["success","fail","cancel","complete"];function lt(t,e,n){return function(r){return e(ht(t,r,n))}}function pt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(m(e)){var i=!0===o?e:{};for(var a in _(n)&&(n=n(e,i)||{}),e)if(b(n,a)){var s=n[a];_(s)&&(s=s(e[a],e,i)),s?g(s)?i[s]=e[a]:m(s)&&(i[s.name?s.name:a]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(a))}else-1!==ft.indexOf(a)?i[a]=lt(t,e[a],r):o||(i[a]=e[a]);return i}return _(e)&&(e=lt(t,e,r)),e}function ht(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return _(st.returnValue)&&(e=st.returnValue(t,e)),pt(t,e,n,{},r)}function dt(t,e){if(b(st,t)){var n=st[t];return n?function(e,r){var o=n;_(n)&&(o=n(e)),e=pt(t,e,o.args,o.returnValue);var i=[e];"undefined"!==typeof r&&i.push(r);var a=wx[o.name||t].apply(wx,i);return W(t)?ht(t,a,o.returnValue,J(t)):a}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var vt=Object.create(null),yt=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function _t(t){return function(e){var n=e.fail,r=e.complete,o={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};_(n)&&n(o),_(r)&&r(o)}}yt.forEach(function(t){vt[t]=_t(t)});var gt=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new r.default),t};var t}();function mt(t,e,n){return t[e].apply(t,n)}function bt(){return mt(gt(),"$on",Array.prototype.slice.call(arguments))}function wt(){return mt(gt(),"$off",Array.prototype.slice.call(arguments))}function $t(){return mt(gt(),"$once",Array.prototype.slice.call(arguments))}function Ot(){return mt(gt(),"$emit",Array.prototype.slice.call(arguments))}var St=Object.freeze({__proto__:null,$on:bt,$off:wt,$once:$t,$emit:Ot});function At(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}function xt(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,r="0"===t.__uniapp_mask_id?{setStyle:function(t){var e=t.mask;At("uni-tabview").setMask({color:e})}}:plus.webview.getWebviewById(t.__uniapp_mask_id),o=t.show,i=t.hide,a=t.close,s=function(){r.setStyle({mask:n})},u=function(){r.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return o.apply(t,n)},t.hide=function(){u();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return i.apply(t,n)},t.close=function(){u(),e=[];for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return a.apply(t,r)}}}function kt(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&xt(e),e}var jt=Object.freeze({__proto__:null,getSubNVueById:kt,requireNativePlugin:At}),Et=Page,Dt=Component,Pt=/:/g,Ct=$(function(t){return S(t.replace(Pt,"-"))});function Tt(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return e.apply(t,[Ct(n)].concat(o))}}}function It(t,e){var n=e[t];e[t]=n?function(){Tt(this);for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.apply(this,e)}:function(){Tt(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return It("onLoad",t),Et(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return It("created",t),Dt(t)};var Nt=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Rt(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){b(n,e)&&(t[e]=n[e])})}function Bt(t,e){if(!e)return!0;if(r.default.options&&Array.isArray(r.default.options[t]))return!0;if(e=e.default||e,_(e))return!!_(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(_(e[t]))return!0;var n=e.mixins;return Array.isArray(n)?!!n.find(function(e){return Bt(t,e)}):void 0}function Ft(t,e,n){e.forEach(function(e){Bt(e,n)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function Mt(t,e){var n;return e=e.default||e,_(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function Lt(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function Vt(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function Ut(t,e){var n=t.data||{},r=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(o){Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(o){}return m(n)||(n={}),Object.keys(r).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||b(n,t)||(n[t]=r[t])}),n}var qt=[String,Number,Boolean,Object,Array,null];function Ht(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function zt(t,e){var n=t["behaviors"],r=t["extends"],o=t["mixins"],i=t["props"];i||(t["props"]=i=[]);var a=[];return Array.isArray(n)&&n.forEach(function(t){a.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(i)?(i.push("name"),i.push("value")):(i["name"]={type:String,default:""},i["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),m(r)&&r.props&&a.push(e({properties:Wt(r.props,!0)})),Array.isArray(o)&&o.forEach(function(t){m(t)&&t.props&&a.push(e({properties:Wt(t.props,!0)}))}),a}function Jt(t,e,n,r){return Array.isArray(e)&&1===e.length?e[0]:e}function Wt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){n[t]={type:null,observer:Ht(t)}}):m(t)&&Object.keys(t).forEach(function(e){var r=t[e];if(m(r)){var o=r["default"];_(o)&&(o=o()),r.type=Jt(e,r.type),n[e]={type:-1!==qt.indexOf(r.type)?r.type:null,value:o,observer:Ht(e)}}else{var i=Jt(e,r);n[e]={type:-1!==qt.indexOf(i)?i:null,observer:Ht(e)}}}),n}function Gt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=w,t.preventDefault=w,t.target=t.target||{},b(t,"detail")||(t.detail={}),m(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Kt(t,e){var n=t;return e.forEach(function(e){var r=e[0],o=e[2];if(r||"undefined"!==typeof o){var i=e[1],a=e[3],s=r?t.__get_value(r,n):n;Number.isInteger(s)?n=o:i?Array.isArray(s)?n=s.find(function(e){return t.__get_value(i,e)===o}):m(s)?n=Object.keys(s).find(function(e){return t.__get_value(i,s[e])===o}):console.error("v-for 暂不支持循环数据：",s):n=s[o],a&&(n=t.__get_value(a,n))}}),n}function Xt(t,e,n){var r={};return Array.isArray(e)&&e.length&&e.forEach(function(e,o){"string"===typeof e?e?"$event"===e?r["$"+o]=n:0===e.indexOf("$event.")?r["$"+o]=t.__get_value(e.replace("$event.",""),n):r["$"+o]=t.__get_value(e):r["$"+o]=t:r["$"+o]=Kt(t,e)}),r}function Yt(t){for(var e={},n=1;n<t.length;n++){var r=t[n];e[r[0]]=r[1]}return e}function Qt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,a=!1;if(o&&(a=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return a?[e]:e.detail.__args__||e.detail;var s=Xt(t,r,e),u=[];return n.forEach(function(t){"$event"===t?"__set_model"!==i||o?o&&!a?u.push(e.detail.__args__[0]):u.push(e):u.push(e.target.value):Array.isArray(t)&&"o"===t[0]?u.push(Yt(t)):"string"===typeof t&&b(s,t)?u.push(s[t]):u.push(t)}),u}var Zt="~",te="^";function ee(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ne(t){var e=this;t=Gt(t);var n=(t.currentTarget||t.target).dataset;if(!n)return console.warn("事件信息不存在");var r=n.eventOpts||n["event-opts"];if(!r)return console.warn("事件信息不存在");var o=t.type,i=[];return r.forEach(function(n){var r=n[0],a=n[1],s=r.charAt(0)===te;r=s?r.slice(1):r;var u=r.charAt(0)===Zt;r=u?r.slice(1):r,a&&ee(o,r)&&a.forEach(function(n){var r=n[0];if(r){var o=e.$vm;if(o.$options.generic&&o.$parent&&o.$parent.$parent&&(o=o.$parent.$parent),"$emit"===r)return void o.$emit.apply(o,Qt(e.$vm,t,n[1],n[2],s,r));var a=o[r];if(!_(a))throw new Error(" _vm.".concat(r," is not a function"));if(u){if(a.once)return;a.once=!0}i.push(a.apply(o,Qt(e.$vm,t,n[1],n[2],s,r)))}})}),"input"===o&&1===i.length&&"undefined"!==typeof i[0]?i[0]:void 0}var re=["onShow","onHide","onError","onPageNotFound"];function oe(t,e){var n=e.mocks,o=e.initRefs;t.$options.store&&(r.default.prototype.$store=t.$options.store),r.default.prototype.mpHost="app-plus",r.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=f({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(o(this),Rt(this,n)))}});var i={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};i.globalData=t.$options.globalData||{};var a=t.$options.methods;return a&&Object.keys(a).forEach(function(t){i[t]=a[t]}),Ft(i,re),i}var ie=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function ae(t,e){for(var n,r=t.$children,o=r.length-1;o>=0;o--){var i=r[o];if(i.$scope._$vueId===e)return i}for(var a=r.length-1;a>=0;a--)if(n=ae(r[a],e),n)return n}function se(t){return Behavior(t)}function ue(){return!!this.route}function ce(t){this.triggerEvent("__l",t)}function fe(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var r=e.selectAllComponents(".vue-ref-in-for");return r.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function le(t){var e,n=t.detail||t.value,r=n.vuePid,o=n.vueOptions;r&&(e=ae(this.$vm,r)),e||(e=this.$vm),o.parent=e}function pe(t){return oe(t,{mocks:ie,initRefs:fe})}var he=["onUniNViewMessage"];function de(t){var e=pe(t);return Ft(e,he),e}function ve(t){return App(de(t)),t}function ye(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,o=e.initRelation,s=Mt(r.default,t),u=a(s,2),c=u[0],f=u[1],l=i({multipleSlots:!0,addGlobalClass:!0},f.options||{}),p={options:l,data:Ut(f,r.default.prototype),behaviors:zt(f,se),properties:Wt(f.props,!1,f.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};Vt(t.vueId,this),o.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new c(e),Lt(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm&&this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:le,__e:ne}};return Array.isArray(f.wxsCallMethods)&&f.wxsCallMethods.forEach(function(t){p.methods[t]=function(e){return this.$vm[t](e)}}),n?p:[p,c]}function _e(t){return ye(t,{isPage:ue,initRelation:ce})}function ge(t){var e=_e(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var me=["onShow","onHide","onUnload"];function be(t,e){e.isPage,e.initRelation;var n=ge(t);return Ft(n.methods,me,t),n.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},n}function we(t){return be(t,{isPage:ue,initRelation:ce})}me.push.apply(me,Nt);var $e=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function Oe(t){var e=we(t);return Ft(e.methods,$e),e}function Se(t){return Component(Oe(t))}function Ae(t){return Component(ge(t))}ut.forEach(function(t){st[t]=!1}),ct.forEach(function(t){var e=st[t]&&st[t].name?st[t].name:t;wx.canIUse(e)||(st[t]=!1)});var xe={};Object.keys(at).forEach(function(t){xe[t]=at[t]}),Object.keys(St).forEach(function(t){xe[t]=St[t]}),Object.keys(jt).forEach(function(t){xe[t]=Y(t,jt[t])}),Object.keys(wx).forEach(function(t){(b(wx,t)||b(st,t))&&(xe[t]=Y(t,dt(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=xe,t.UniEmitter=St),wx.createApp=ve,wx.createPage=Se,wx.createComponent=Ae;var ke=xe,je=ke;e.default=je}).call(this,n("c8ba"))},8189:function(t){t.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-26420200313001",_inBundle:!1,_integrity:"sha512-7dPuazTiDmUyRcw+WW+UlWGKH0eeCUB+p0P4pJVKEHjpdXnXgvDQCSdJk764NH99TfsUycnuxecP5oHckVa88g==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-26420200313001.tgz",_shasum:"a006e329e033cd412accfa635f8933dbb822a9c3",_spec:"@dcloudio/uni-stat@next",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"b1fdbafab5dd4673cff64188a5203d0c947e4f50",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-26420200313001"}},"921b":function(t,e,n){"use strict";(function(t){var e=n("8189");function r(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?o(t):e}function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}var l=e.version,p="https://tongji.dcloud.io/uni/stat",h="https://tongji.dcloud.io/uni/stat.gif",d=1800,v=300,y=10,_="__DC_STAT_UUID",g="__DC_UUID_VALUE";function m(){var e="";if("n"===O()){try{e=plus.runtime.getDCloudId()}catch(n){e=""}return e}try{e=t.getStorageSync(_)}catch(n){e=g}if(!e){e=Date.now()+""+Math.floor(1e7*Math.random());try{t.setStorageSync(_,e)}catch(n){t.setStorageSync(_,g)}}return e}var b=function(t){var e=Object.keys(t),n=e.sort(),r={},o="";for(var i in n)r[n[i]]=t[n[i]],o+=n[i]+"="+t[n[i]]+"&";return{sign:"",options:o.substr(0,o.length-1)}},w=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)},$=function(){return parseInt((new Date).getTime()/1e3)},O=function(){var t={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return t["app-plus"]},S=function(){var e="";return"wx"!==O()&&"qq"!==O()||t.canIUse("getAccountInfoSync")&&(e=t.getAccountInfoSync().miniProgram.appId||""),e},A=function(){return"n"===O()?plus.runtime.version:""},x=function(){var t=O(),e="";return"n"===t&&(e=plus.runtime.channel),e},k=function(e){var n=O(),r="";return e||("wx"===n&&(r=t.getLaunchOptionsSync().scene),r)},j="First__Visit__Time",E="Last__Visit__Time",D=function(){var e=t.getStorageSync(j),n=0;return e?n=e:(n=$(),t.setStorageSync(j,n),t.removeStorageSync(E)),n},P=function(){var e=t.getStorageSync(E),n=0;return n=e||"",t.setStorageSync(E,$()),n},C="__page__residence__time",T=0,I=0,N=function(){return T=$(),"n"===O()&&t.setStorageSync(C,$()),T},R=function(){return I=$(),"n"===O()&&(T=t.getStorageSync(C)),I-T},B="Total__Visit__Count",F=function(){var e=t.getStorageSync(B),n=1;return e&&(n=e,n++),t.setStorageSync(B,n),n},M=function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e},L=0,V=0,U=function(){var t=(new Date).getTime();return L=t,V=0,t},q=function(){var t=(new Date).getTime();return V=t,t},H=function(t){var e=0;if(0!==L&&(e=V-L),e=parseInt(e/1e3),e=e<1?1:e,"app"===t){var n=e>v;return{residenceTime:e,overtime:n}}if("page"===t){var r=e>d;return{residenceTime:e,overtime:r}}return{residenceTime:e}},z=function(){var t=getCurrentPages(),e=t[t.length-1],n=e.$vm;return"bd"===O()?n.$mp&&n.$mp.page.is:n.$scope&&n.$scope.route||n.$mp&&n.$mp.page.route},J=function(t){var e=getCurrentPages(),n=e[e.length-1],r=n.$vm,o=t._query,i=o&&"{}"!==JSON.stringify(o)?"?"+JSON.stringify(o):"";return t._query="","bd"===O()?r.$mp&&r.$mp.page.is+i:r.$scope&&r.$scope.route+i||r.$mp&&r.$mp.page.route+i},W=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},G=function(t,e){return t?"string"!==typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},K=n("031c").default,X=n("b803").default||n("b803"),Y=t.getSystemInfoSync(),Q=function(){function e(){u(this,e),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:m(),ut:O(),mpn:S(),ak:X.appid,usv:l,v:A(),ch:x(),cn:"",pn:"",ct:"",t:$(),tt:"",p:"android"===Y.platform?"a":"i",brand:Y.brand||"",md:Y.model,sv:Y.system.replace(/(Android|iOS)\s/,""),mpsdk:Y.SDKVersion||"",mpv:Y.version||"",lang:Y.language,pr:Y.pixelRatio,ww:Y.windowWidth,wh:Y.windowHeight,sw:Y.screenWidth,sh:Y.screenHeight}}return f(e,[{key:"_applicationShow",value:function(){if(this.__licationHide){q();var t=H("app");if(t.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,q();var n=H();U();var r=J(this);this._sendHideRequest({urlref:r,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t=J(this),e=z();if(this._navigationBarTitle.config=K&&K.pages[e]&&K.pages[e].titleNView&&K.pages[e].titleNView.titleText||K&&K.pages[e]&&K.pages[e].navigationBarTitleText||"",this.__licationShow)return U(),this.__licationShow=!1,void(this._lastPageRoute=t);q(),this._lastPageRoute=t;var n=H("page");if(n.overtime){var r={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(r)}U()}},{key:"_pageHide",value:function(){if(!this.__licationHide){q();var t=H("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+e||"",this.statData.t=$(),this.statData.sc=k(t.scene),this.statData.fvts=D(),this.statData.lvts=P(),this.statData.tvc=F(),"n"===O()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,r=t.urlref_ts;this._navigationBarTitle.lt="11";var o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:$(),p:this.statData.p};this.request(o)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,r=t.urlref_ts,o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:$(),p:this.statData.p};this.request(o,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,r=t.value,o=void 0===r?"":r,i=this._lastPageRoute,a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:i,ch:this.statData.ch,e_n:n,e_v:"object"===typeof o?JSON.stringify(o):o.toString(),usv:this.statData.usv,t:$(),p:this.statData.p};this.request(a)}},{key:"getNetworkInfo",value:function(){var e=this;t.getNetworkType({success:function(t){e.statData.net=t.networkType,e.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var e=this;X.getLocation?t.getLocation({type:"wgs84",geocode:!0,success:function(t){t.address&&(e.statData.cn=t.address.country,e.statData.pn=t.address.province,e.statData.ct=t.address.city),e.statData.lat=t.latitude,e.statData.lng=t.longitude,e.request(e.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(e,n){var r=this,o=$(),i=this._navigationBarTitle;e.ttn=i.page,e.ttpj=i.config,e.ttc=i.report;var a=this._reportingRequestData;if("n"===O()&&(a=t.getStorageSync("__UNI__STAT__DATA")||{}),a[e.lt]||(a[e.lt]=[]),a[e.lt].push(e),"n"===O()&&t.setStorageSync("__UNI__STAT__DATA",a),!(R()<y)||n){var s=this._reportingRequestData;"n"===O()&&(s=t.getStorageSync("__UNI__STAT__DATA")),N();var u=[],c=[],f=[],p=function(t){var e=s[t];e.forEach(function(e){var n=w(e);0===t?u.push(n):3===t?f.push(n):c.push(n)})};for(var h in s)p(h);u.push.apply(u,c.concat(f));var d={usv:l,t:o,requests:JSON.stringify(u)};this._reportingRequestData={},"n"===O()&&t.removeStorageSync("__UNI__STAT__DATA"),"h5"!==e.ut?"n"!==O()||"a"!==this.statData.p?this._sendRequest(d):setTimeout(function(){r._sendRequest(d)},200):this.imageRequest(d)}}},{key:"_sendRequest",value:function(e){var n=this;t.request({url:p,method:"POST",data:e,success:function(){},fail:function(t){++n._retry<3&&setTimeout(function(){n._sendRequest(e)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=b(M(t)).options;e.src=h+"?"+n}},{key:"sendEvent",value:function(t,e){G(t,e)||("title"!==t?this._sendEventRequest({key:t,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),e}(),Z=function(e){function n(){var e;return u(this,n),e=r(this,i(n).call(this)),e.instance=null,"function"===typeof t.addInterceptor&&(e.addInterceptorInit(),e.interceptLogin(),e.interceptShare(!0),e.interceptRequestPayment()),e}return a(n,e),f(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),f(n,[{key:"addInterceptorInit",value:function(){var e=this;t.addInterceptor("setNavigationBarTitle",{invoke:function(t){e._navigationBarTitle.page=t.title}})}},{key:"interceptLogin",value:function(){var e=this;t.addInterceptor("login",{complete:function(){e._login()}})}},{key:"interceptShare",value:function(e){var n=this;e?t.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var e=this;t.addInterceptor("requestPayment",{success:function(){e._payment("pay_success")},fail:function(){e._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,N(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,W(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,W(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:$(),p:this.statData.p};this.request(n)}}]),n}(Q),tt=Z.getInstance(),et=!1,nt={onLaunch:function(t){tt.report(t,this)},onReady:function(){tt.ready(this)},onLoad:function(t){if(tt.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return tt.interceptShare(!1),e.call(this,t)}}},onShow:function(){et=!1,tt.show(this)},onHide:function(){et=!0,tt.hide(this)},onUnload:function(){et?et=!1:tt.hide(this)},onError:function(t){tt.error(t)}};function rt(){var e=n("66fd");(e.default||e).mixin(nt),t.report=function(t,e){tt.sendEvent(t,e)}}rt()}).call(this,n("6e42")["default"])},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",c="object"===typeof t,f=e.regeneratorRuntime;if(f)c&&(t.exports=f);else{f=e.regeneratorRuntime=c?t.exports:{},f.wrap=b;var l="suspendedStart",p="suspendedYield",h="executing",d="completed",v={},y={};y[a]=function(){return this};var _=Object.getPrototypeOf,g=_&&_(_(C([])));g&&g!==r&&o.call(g,a)&&(y=g);var m=S.prototype=$.prototype=Object.create(y);O.prototype=m.constructor=S,S.constructor=O,S[u]=O.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===O||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(m),t},f.awrap=function(t){return{__await:t}},A(x.prototype),x.prototype[s]=function(){return this},f.AsyncIterator=x,f.async=function(t,e,n,r){var o=new x(b(t,e,n,r));return f.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},A(m),m[u]="Generator",m[a]=function(){return this},m.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},f.values=C,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(D),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return s.type="throw",s.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),D(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;D(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:C(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function b(t,e,n,r){var o=e&&e.prototype instanceof $?e:$,i=Object.create(o.prototype),a=new P(r||[]);return i._invoke=k(t,n,a),i}function w(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function $(){}function O(){}function S(){}function A(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function x(t){function e(n,r,i,a){var s=w(t[n],t,r);if("throw"!==s.type){var u=s.arg,c=u.value;return c&&"object"===typeof c&&o.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(c).then(function(t){u.value=t,i(u)},function(t){return e("throw",t,i,a)})}a(s.arg)}var n;function r(t,r){function o(){return new Promise(function(n,o){e(t,r,n,o)})}return n=n?n.then(o,o):o()}this._invoke=r}function k(t,e,n){var r=l;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return T()}n.method=o,n.arg=i;while(1){var a=n.delegate;if(a){var s=j(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var u=w(t,e,n);if("normal"===u.type){if(r=n.done?d:p,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=d,n.method="throw",n.arg=u.arg)}}}function j(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=w(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function D(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function C(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){while(++r<t.length)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:T}}function T(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a34a:function(t,e,n){t.exports=n("bbdd")},b803:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={appid:"__UNI__3C87AA0"};e.default=r},bbdd:function(t,e,n){var r=function(){return this||"object"===typeof self&&self}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("96cf"),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(a){r.regeneratorRuntime=void 0}},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},f0c5:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,s,u,c){var f,l="function"===typeof t?t.options:t;if(u&&(l.components=Object.assign(u,l.components||{})),c&&((c.beforeCreate||(c.beforeCreate=[])).unshift(function(){this[c.__module]=this}),(l.mixins||(l.mixins=[])).push(c)),e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),a?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=f):o&&(f=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),f)if(l.functional){l._injectStyles=f;var p=l.render;l.render=function(t,e){return f.call(e),p(t,e)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,f):[f]}return{exports:t,options:l}}n.d(e,"a",function(){return r})}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'compoents/common/comon-news';__wxRouteBegin = true;__wxAppCurrentFile__ = 'compoents/common/comon-news.js';

define('compoents/common/comon-news.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["compoents/common/comon-news"], {
  "67b9": function b9(n, t, e) {
    "use strict";

    var u,
        c = function c() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        o = [];

    e.d(t, "b", function () {
      return c;
    }), e.d(t, "c", function () {
      return o;
    }), e.d(t, "a", function () {
      return u;
    });
  },
  7355: function _(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("67b9"),
        c = e("d2f8");

    for (var o in c) {
      "default" !== o && function (n) {
        e.d(t, n, function () {
          return c[n];
        });
      }(o);
    }

    e("d51c");
    var r,
        i = e("f0c5"),
        a = Object(i["a"])(c["default"], u["b"], u["c"], !1, null, "1499a112", null, !1, u["a"], r);
    t["default"] = a.exports;
  },
  "7e66": function e66(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;

    var u = function u() {
      return e.e("compoents/common/tag-sex").then(e.bind(null, "bd9a"));
    },
        c = {
      components: {
        tagSex: u
      },
      props: {
        item: Object,
        index: Number
      },
      methods: {
        isguan: function isguan(n) {
          this.$emit("isgz", n);
        }
      }
    };

    t.default = c;
  },
  d2f8: function d2f8(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("7e66"),
        c = e.n(u);

    for (var o in u) {
      "default" !== o && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(o);
    }

    t["default"] = c.a;
  },
  d51c: function d51c(n, t, e) {
    "use strict";

    var u = e("f6c8"),
        c = e.n(u);
    c.a;
  },
  f6c8: function f6c8(n, t, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['compoents/common/comon-news-create-component', {
  'compoents/common/comon-news-create-component': function compoentsCommonComonNewsCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("7355"));
  }
}, [['compoents/common/comon-news-create-component']]]);
});
require('compoents/common/comon-news.js');
__wxRoute = 'compoents/common/load-more';__wxRouteBegin = true;__wxAppCurrentFile__ = 'compoents/common/load-more.js';

define('compoents/common/load-more.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["compoents/common/load-more"], {
  "2ef8": function ef8(t, n, e) {
    "use strict";

    e.r(n);
    var f = e("fb32"),
        u = e("2fcb");

    for (var r in u) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(r);
    }

    e("4df9");
    var c,
        o = e("f0c5"),
        a = Object(o["a"])(u["default"], f["b"], f["c"], !1, null, "1d57f13b", null, !1, f["a"], c);
    n["default"] = a.exports;
  },
  "2fcb": function fcb(t, n, e) {
    "use strict";

    e.r(n);
    var f = e("7709"),
        u = e.n(f);

    for (var r in f) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return f[t];
        });
      }(r);
    }

    n["default"] = u.a;
  },
  "4df9": function df9(t, n, e) {
    "use strict";

    var f = e("fd12"),
        u = e.n(f);
    u.a;
  },
  7709: function _(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var f = {
      props: {
        loadtext: String
      }
    };
    n.default = f;
  },
  fb32: function fb32(t, n, e) {
    "use strict";

    var f,
        u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        r = [];

    e.d(n, "b", function () {
      return u;
    }), e.d(n, "c", function () {
      return r;
    }), e.d(n, "a", function () {
      return f;
    });
  },
  fd12: function fd12(t, n, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['compoents/common/load-more-create-component', {
  'compoents/common/load-more-create-component': function compoentsCommonLoadMoreCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("2ef8"));
  }
}, [['compoents/common/load-more-create-component']]]);
});
require('compoents/common/load-more.js');
__wxRoute = 'compoents/common/no-thing';__wxRouteBegin = true;__wxAppCurrentFile__ = 'compoents/common/no-thing.js';

define('compoents/common/no-thing.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["compoents/common/no-thing"], {
  1128: function _(n, t, c) {},
  "8c79": function c79(n, t, c) {
    "use strict";

    var u = c("a8dc"),
        r = c.n(u);
    r.a;
  },
  a8dc: function a8dc(n, t, c) {},
  b002: function b002(n, t, c) {
    "use strict";

    var u,
        r = function r() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        a = [];

    c.d(t, "b", function () {
      return r;
    }), c.d(t, "c", function () {
      return a;
    }), c.d(t, "a", function () {
      return u;
    });
  },
  ea30: function ea30(n, t, c) {
    "use strict";

    c.r(t);
    var u = c("b002"),
        r = c("eb72");

    for (var a in r) {
      "default" !== a && function (n) {
        c.d(t, n, function () {
          return r[n];
        });
      }(a);
    }

    c("8c79");
    var e,
        o = c("f0c5"),
        f = Object(o["a"])(r["default"], u["b"], u["c"], !1, null, "53c0864a", null, !1, u["a"], e);
    t["default"] = f.exports;
  },
  eb72: function eb72(n, t, c) {
    "use strict";

    c.r(t);
    var u = c("1128"),
        r = c.n(u);

    for (var a in u) {
      "default" !== a && function (n) {
        c.d(t, n, function () {
          return u[n];
        });
      }(a);
    }

    t["default"] = r.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['compoents/common/no-thing-create-component', {
  'compoents/common/no-thing-create-component': function compoentsCommonNoThingCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("ea30"));
  }
}, [['compoents/common/no-thing-create-component']]]);
});
require('compoents/common/no-thing.js');
__wxRoute = 'compoents/common/share-more';__wxRouteBegin = true;__wxAppCurrentFile__ = 'compoents/common/share-more.js';

define('compoents/common/share-more.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["compoents/common/share-more"], {
  1888: function _(e, t, n) {
    "use strict";

    var o = n("41e5"),
        r = n.n(o);
    r.a;
  },
  "41e5": function e5(e, t, n) {},
  "55be": function be(e, t, n) {
    "use strict";

    (function (e, o) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var r = a(n("a34a"));

      function a(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      function s(e, t, n, o, r, a, s) {
        try {
          var i = e[a](s),
              c = i.value;
        } catch (u) {
          return void n(u);
        }

        i.done ? t(c) : Promise.resolve(c).then(o, r);
      }

      function i(e) {
        return function () {
          var t = this,
              n = arguments;
          return new Promise(function (o, r) {
            var a = e.apply(t, n);

            function i(e) {
              s(a, o, r, i, c, "next", e);
            }

            function c(e) {
              s(a, o, r, i, c, "throw", e);
            }

            i(void 0);
          });
        };
      }

      var c = {
        data: function data() {
          return {
            title: "share",
            shareText: "好爱我家宝贝敏敏啊，她就是我的全部",
            href: "http://love.zxgnz.com/html/20200329/15854910328064.html",
            image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585500120786&di=ebe14781736878451391d8f618b1ea81&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F00%2F78%2F05%2F88%2F59035fb64206d.png",
            shareType: 0
          };
        },
        props: {
          maskshow: Boolean,
          providerList: Array
        },
        onLoad: function onLoad() {
          e("log", "1", " at compoents\\common\\share-more.vue:43");
        },
        methods: {
          alertmask: function alertmask() {
            this.$emit("ismask");
          },
          compress: function compress() {
            e("log", "开始压缩", " at compoents\\common\\share-more.vue:51");
            var t = this.image;
            return new Promise(function (n) {
              var r = plus.io.convertAbsoluteFileSystem(t.replace("file://", ""));
              e("log", "after" + r, " at compoents\\common\\share-more.vue:55"), plus.io.resolveLocalFileSystemURL(r, function (r) {
                r.file(function (r) {
                  e("log", "getFile:" + JSON.stringify(r), " at compoents\\common\\share-more.vue:59"), r.size > 20480 && plus.zip.compressImage({
                    src: t,
                    dst: t.replace(".jpg", "2222.jpg").replace(".JPG", "2222.JPG"),
                    width: "10%",
                    height: "10%",
                    quality: 1,
                    overwrite: !0
                  }, function (o) {
                    e("log", "success zip****" + o.size, " at compoents\\common\\share-more.vue:69");
                    var r = t.replace(".jpg", "2222.jpg").replace(".JPG", "2222.JPG");
                    n(r);
                  }, function (e) {
                    o.showModal({
                      content: "分享图片太大,需要请重新选择图片!",
                      showCancel: !1
                    });
                  });
                });
              }, function (t) {
                e("log", "Resolve file URL failed: " + t.message, " at compoents\\common\\share-more.vue:81"), o.showModal({
                  content: "分享图片太大,需要请重新选择图片!",
                  showCancel: !1
                });
              });
            });
          },
          share: function () {
            var t = i(r.default.mark(function t(n) {
              var a;
              return r.default.wrap(function (t) {
                while (1) {
                  switch (t.prev = t.next) {
                    case 0:
                      if (e("log", "分享通道:" + n.id + "； 分享类型:" + this.shareType, " at compoents\\common\\share-more.vue:90"), this.shareText || 1 !== this.shareType && 0 !== this.shareType) {
                        t.next = 4;
                        break;
                      }

                      return o.showModal({
                        content: "分享内容不能为空",
                        showCancel: !1
                      }), t.abrupt("return");

                    case 4:
                      if (this.image || 2 !== this.shareType && 0 !== this.shareType) {
                        t.next = 7;
                        break;
                      }

                      return o.showModal({
                        content: "分享图片不能为空",
                        showCancel: !1
                      }), t.abrupt("return");

                    case 7:
                      a = {
                        provider: n.id,
                        scene: n.type && "WXSenceTimeline" === n.type ? "WXSenceTimeline" : "WXSceneSession",
                        type: this.shareType,
                        success: function success(t) {
                          e("log", "success", t, " at compoents\\common\\share-more.vue:113"), o.showModal({
                            content: "已分享",
                            showCancel: !1
                          });
                        },
                        fail: function fail(t) {
                          e("log", "fail", t, " at compoents\\common\\share-more.vue:120"), o.showModal({
                            content: t.errMsg,
                            showCancel: !1
                          });
                        },
                        complete: function complete() {
                          e("log", "分享操作结束!", " at compoents\\common\\share-more.vue:127");
                        }
                      }, t.t0 = this.shareType, t.next = 0 === t.t0 ? 11 : 1 === t.t0 ? 16 : 2 === t.t0 ? 18 : 5 === t.t0 ? 20 : 24;
                      break;

                    case 11:
                      return a.summary = this.shareText, a.imageUrl = this.image, a.title = "致李敏敏", a.href = "http://love.zxgnz.com/html/20200329/15854910328064.html", t.abrupt("break", 25);

                    case 16:
                      return a.summary = this.shareText, t.abrupt("break", 25);

                    case 18:
                      return a.imageUrl = this.image, t.abrupt("break", 25);

                    case 20:
                      return a.imageUrl = this.image ? this.image : "https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png", a.title = "致李敏敏", a.miniProgram = {
                        id: "gh_33446d7f7a26",
                        path: "/pages/tabBar/component/component",
                        webUrl: "http://love.zxgnz.com/html/20200329/15854910328064.html",
                        type: 0
                      }, t.abrupt("break", 25);

                    case 24:
                      return t.abrupt("break", 25);

                    case 25:
                      if (0 !== a.type || "iOS" !== plus.os.name) {
                        t.next = 29;
                        break;
                      }

                      return t.next = 28, this.compress();

                    case 28:
                      a.imageUrl = t.sent;

                    case 29:
                      1 === a.type && "qq" === a.provider && (a.href = "http://love.zxgnz.com/html/20200329/15854910328064.html", a.title = "致李敏敏"), o.share(a);

                    case 31:
                    case "end":
                      return t.stop();
                  }
                }
              }, t, this);
            }));

            function n(e) {
              return t.apply(this, arguments);
            }

            return n;
          }()
        }
      };
      t.default = c;
    }).call(this, n("0de9")["default"], n("6e42")["default"]);
  },
  "6f0a": function f0a(e, t, n) {
    "use strict";

    n.r(t);
    var o = n("9158"),
        r = n("ebcc");

    for (var a in r) {
      "default" !== a && function (e) {
        n.d(t, e, function () {
          return r[e];
        });
      }(a);
    }

    n("1888");
    var s,
        i = n("f0c5"),
        c = Object(i["a"])(r["default"], o["b"], o["c"], !1, null, "10796c7d", null, !1, o["a"], s);
    t["default"] = c.exports;
  },
  9158: function _(e, t, n) {
    "use strict";

    var o,
        r = function r() {
      var e = this,
          t = e.$createElement;
      e._self._c;
    },
        a = [];

    n.d(t, "b", function () {
      return r;
    }), n.d(t, "c", function () {
      return a;
    }), n.d(t, "a", function () {
      return o;
    });
  },
  ebcc: function ebcc(e, t, n) {
    "use strict";

    n.r(t);
    var o = n("55be"),
        r = n.n(o);

    for (var a in o) {
      "default" !== a && function (e) {
        n.d(t, e, function () {
          return o[e];
        });
      }(a);
    }

    t["default"] = r.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['compoents/common/share-more-create-component', {
  'compoents/common/share-more-create-component': function compoentsCommonShareMoreCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("6f0a"));
  }
}, [['compoents/common/share-more-create-component']]]);
});
require('compoents/common/share-more.js');
__wxRoute = 'compoents/common/tag-sex';__wxRouteBegin = true;__wxAppCurrentFile__ = 'compoents/common/tag-sex.js';

define('compoents/common/tag-sex.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["compoents/common/tag-sex"], {
  4947: function _(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("6eff"),
        f = e.n(u);

    for (var r in u) {
      "default" !== r && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(r);
    }

    t["default"] = f.a;
  },
  "6eff": function eff(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var u = {
      props: {
        sex: Number,
        userage: Number
      }
    };
    t.default = u;
  },
  "7fa7": function fa7(n, t, e) {
    "use strict";

    var u,
        f = function f() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        r = [];

    e.d(t, "b", function () {
      return f;
    }), e.d(t, "c", function () {
      return r;
    }), e.d(t, "a", function () {
      return u;
    });
  },
  bd9a: function bd9a(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("7fa7"),
        f = e("4947");

    for (var r in f) {
      "default" !== r && function (n) {
        e.d(t, n, function () {
          return f[n];
        });
      }(r);
    }

    e("c7fa");
    var a,
        c = e("f0c5"),
        o = Object(c["a"])(f["default"], u["b"], u["c"], !1, null, "fd66da36", null, !1, u["a"], a);
    t["default"] = o.exports;
  },
  c7fa: function c7fa(n, t, e) {
    "use strict";

    var u = e("f155"),
        f = e.n(u);
    f.a;
  },
  f155: function f155(n, t, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['compoents/common/tag-sex-create-component', {
  'compoents/common/tag-sex-create-component': function compoentsCommonTagSexCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("bd9a"));
  }
}, [['compoents/common/tag-sex-create-component']]]);
});
require('compoents/common/tag-sex.js');
__wxRoute = 'compoents/common/upload-image';__wxRouteBegin = true;__wxAppCurrentFile__ = 'compoents/common/upload-image.js';

define('compoents/common/upload-image.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["compoents/common/upload-image"], {
  1304: function _(t, e, n) {
    "use strict";

    (function (t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var n = {
        props: {
          imageList: Array
        },
        methods: {
          deleted: function deleted(t) {
            this.$emit("deleted", t);
          },
          previewImage: function previewImage(e) {
            t("log", e, " at compoents\\common\\upload-image.vue:40"), this.$emit("previewImage", e);
          },
          chooseImage: function chooseImage() {
            this.$emit("chooseImage");
          }
        }
      };
      e.default = n;
    }).call(this, n("0de9")["default"]);
  },
  "4ff7": function ff7(t, e, n) {},
  6130: function _(t, e, n) {
    "use strict";

    n.r(e);
    var o = n("1304"),
        a = n.n(o);

    for (var u in o) {
      "default" !== u && function (t) {
        n.d(e, t, function () {
          return o[t];
        });
      }(u);
    }

    e["default"] = a.a;
  },
  "77ad": function ad(t, e, n) {
    "use strict";

    var o = n("4ff7"),
        a = n.n(o);
    a.a;
  },
  "9a74": function a74(t, e, n) {
    "use strict";

    n.r(e);
    var o = n("d0c1"),
        a = n("6130");

    for (var u in a) {
      "default" !== u && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(u);
    }

    n("77ad");
    var c,
        i = n("f0c5"),
        r = Object(i["a"])(a["default"], o["b"], o["c"], !1, null, "5263da02", null, !1, o["a"], c);
    e["default"] = r.exports;
  },
  d0c1: function d0c1(t, e, n) {
    "use strict";

    var o,
        a = function a() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        u = [];

    n.d(e, "b", function () {
      return a;
    }), n.d(e, "c", function () {
      return u;
    }), n.d(e, "a", function () {
      return o;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['compoents/common/upload-image-create-component', {
  'compoents/common/upload-image-create-component': function compoentsCommonUploadImageCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("9a74"));
  }
}, [['compoents/common/upload-image-create-component']]]);
});
require('compoents/common/upload-image.js');
__wxRoute = 'compoents/detail/common-list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'compoents/detail/common-list.js';

define('compoents/detail/common-list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["compoents/detail/common-list"], {
  "3dee": function dee(t, e, n) {},
  "7f71": function f71(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var u = {
      props: {
        item: Object,
        index: Number
      }
    };
    e.default = u;
  },
  "85b8": function b8(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("996f"),
        r = n("b301");

    for (var a in r) {
      "default" !== a && function (t) {
        n.d(e, t, function () {
          return r[t];
        });
      }(a);
    }

    n("abe3");
    var c,
        f = n("f0c5"),
        o = Object(f["a"])(r["default"], u["b"], u["c"], !1, null, "8a4e1f2e", null, !1, u["a"], c);
    e["default"] = o.exports;
  },
  "996f": function f(t, e, n) {
    "use strict";

    var u,
        r = function r() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        a = [];

    n.d(e, "b", function () {
      return r;
    }), n.d(e, "c", function () {
      return a;
    }), n.d(e, "a", function () {
      return u;
    });
  },
  abe3: function abe3(t, e, n) {
    "use strict";

    var u = n("3dee"),
        r = n.n(u);
    r.a;
  },
  b301: function b301(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("7f71"),
        r = n.n(u);

    for (var a in u) {
      "default" !== a && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(a);
    }

    e["default"] = r.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['compoents/detail/common-list-create-component', {
  'compoents/detail/common-list-create-component': function compoentsDetailCommonListCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("85b8"));
  }
}, [['compoents/detail/common-list-create-component']]]);
});
require('compoents/detail/common-list.js');
__wxRoute = 'compoents/detail/detailinfo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'compoents/detail/detailinfo.js';

define('compoents/detail/detailinfo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["compoents/detail/detailinfo"], {
  2367: function _(t, n, e) {
    "use strict";

    var i = e("c5d3"),
        u = e.n(i);
    u.a;
  },
  "94f7": function f7(t, n, e) {
    "use strict";

    var i,
        u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        c = [];

    e.d(n, "b", function () {
      return u;
    }), e.d(n, "c", function () {
      return c;
    }), e.d(n, "a", function () {
      return i;
    });
  },
  9987: function _(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("b760"),
        u = e.n(i);

    for (var c in i) {
      "default" !== c && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(c);
    }

    n["default"] = u.a;
  },
  b760: function b760(t, n, e) {
    "use strict";

    (function (t, i) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;

      var u = function u() {
        return e.e("compoents/common/tag-sex").then(e.bind(null, "bd9a"));
      },
          c = {
        components: {
          tagSex: u
        },
        props: {
          item: Object,
          index: Number
        },
        methods: {
          isguan: function isguan(t) {
            this.$emit("isgz", t);
          },
          clickimg: function clickimg(n) {
            t.previewImage({
              current: n,
              urls: this.item.imgarry,
              indicator: "default",
              longPressActions: {
                itemList: ["发送给朋友", "保存图片", "收藏"],
                success: function success(t) {
                  i("log", "选中了第" + (t.tapIndex + 1) + "个按钮,第" + (t.index + 1) + "张图片", " at compoents\\detail\\detailinfo.vue:79");
                },
                fail: function fail(t) {
                  i("log", t.errMsg, " at compoents\\detail\\detailinfo.vue:82");
                }
              }
            });
          }
        }
      };

      n.default = c;
    }).call(this, e("6e42")["default"], e("0de9")["default"]);
  },
  c5cf: function c5cf(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("94f7"),
        u = e("9987");

    for (var c in u) {
      "default" !== c && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(c);
    }

    e("2367");
    var o,
        a = e("f0c5"),
        r = Object(a["a"])(u["default"], i["b"], i["c"], !1, null, "2a069383", null, !1, i["a"], o);
    n["default"] = r.exports;
  },
  c5d3: function c5d3(t, n, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['compoents/detail/detailinfo-create-component', {
  'compoents/detail/detailinfo-create-component': function compoentsDetailDetailinfoCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("c5cf"));
  }
}, [['compoents/detail/detailinfo-create-component']]]);
});
require('compoents/detail/detailinfo.js');
__wxRoute = 'compoents/index/swiper-head';__wxRouteBegin = true;__wxAppCurrentFile__ = 'compoents/index/swiper-head.js';

define('compoents/index/swiper-head.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["compoents/index/swiper-head"], {
  "657b": function b(t, n, e) {
    "use strict";

    var a = e("abe0"),
        r = e.n(a);
    r.a;
  },
  "86a0": function a0(t, n, e) {
    "use strict";

    var a,
        r = function r() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    e.d(n, "b", function () {
      return r;
    }), e.d(n, "c", function () {
      return u;
    }), e.d(n, "a", function () {
      return a;
    });
  },
  abe0: function abe0(t, n, e) {},
  b27b: function b27b(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var a = {
      props: {
        tablist: Array,
        tabindex: Number,
        linewidth: Number,
        scroll: Number,
        itemwidth: {
          type: String,
          default: ""
        }
      },
      methods: {
        tabtap: function tabtap(t) {
          this.$emit("tabtap", t);
        },
        watchscroll: function watchscroll(t) {
          this.$emit("watchscroll", t);
        }
      }
    };
    n.default = a;
  },
  f659: function f659(t, n, e) {
    "use strict";

    e.r(n);
    var a = e("86a0"),
        r = e("fa8f");

    for (var u in r) {
      "default" !== u && function (t) {
        e.d(n, t, function () {
          return r[t];
        });
      }(u);
    }

    e("657b");
    var i,
        c = e("f0c5"),
        f = Object(c["a"])(r["default"], a["b"], a["c"], !1, null, "0a043ac6", null, !1, a["a"], i);
    n["default"] = f.exports;
  },
  fa8f: function fa8f(t, n, e) {
    "use strict";

    e.r(n);
    var a = e("b27b"),
        r = e.n(a);

    for (var u in a) {
      "default" !== u && function (t) {
        e.d(n, t, function () {
          return a[t];
        });
      }(u);
    }

    n["default"] = r.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['compoents/index/swiper-head-create-component', {
  'compoents/index/swiper-head-create-component': function compoentsIndexSwiperHeadCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("f659"));
  }
}, [['compoents/index/swiper-head-create-component']]]);
});
require('compoents/index/swiper-head.js');
__wxRoute = 'compoents/news/news-nab-bar';__wxRouteBegin = true;__wxAppCurrentFile__ = 'compoents/news/news-nab-bar.js';

define('compoents/news/news-nab-bar.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["compoents/news/news-nab-bar"], {
  1366: function _(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;

    var a = function a() {
      return e.e("compoents/uni-nav-bar/uni-nav-bar").then(e.bind(null, "77d8"));
    },
        u = {
      components: {
        uniNavBar: a
      },
      props: {
        tabs: Array,
        tabindex: Number
      },
      data: function data() {
        return {};
      },
      methods: {
        changeindex: function changeindex(n) {
          this.$emit("change", n);
        },
        openadd: function openadd() {
          this.$emit("openadd");
        }
      }
    };

    t.default = u;
  },
  "3f11": function f11(n, t, e) {
    "use strict";

    var a,
        u = function u() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        r = [];

    e.d(t, "b", function () {
      return u;
    }), e.d(t, "c", function () {
      return r;
    }), e.d(t, "a", function () {
      return a;
    });
  },
  "8ffd": function ffd(n, t, e) {
    "use strict";

    e.r(t);
    var a = e("3f11"),
        u = e("e9d7");

    for (var r in u) {
      "default" !== r && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(r);
    }

    e("aaf4");
    var f,
        i = e("f0c5"),
        o = Object(i["a"])(u["default"], a["b"], a["c"], !1, null, "27363847", null, !1, a["a"], f);
    t["default"] = o.exports;
  },
  aaf4: function aaf4(n, t, e) {
    "use strict";

    var a = e("f3af"),
        u = e.n(a);
    u.a;
  },
  e9d7: function e9d7(n, t, e) {
    "use strict";

    e.r(t);
    var a = e("1366"),
        u = e.n(a);

    for (var r in a) {
      "default" !== r && function (n) {
        e.d(t, n, function () {
          return a[n];
        });
      }(r);
    }

    t["default"] = u.a;
  },
  f3af: function f3af(n, t, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['compoents/news/news-nab-bar-create-component', {
  'compoents/news/news-nab-bar-create-component': function compoentsNewsNewsNabBarCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("8ffd"));
  }
}, [['compoents/news/news-nab-bar-create-component']]]);
});
require('compoents/news/news-nab-bar.js');
__wxRoute = 'compoents/news/topic-list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'compoents/news/topic-list.js';

define('compoents/news/topic-list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["compoents/news/topic-list"], {
  5273: function _(t, e, n) {
    "use strict";

    var c = n("ce70"),
        u = n.n(c);
    u.a;
  },
  "68fb": function fb(t, e, n) {
    "use strict";

    var c,
        u = function u() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        a = [];

    n.d(e, "b", function () {
      return u;
    }), n.d(e, "c", function () {
      return a;
    }), n.d(e, "a", function () {
      return c;
    });
  },
  "6c0c": function c0c(t, e, n) {
    "use strict";

    (function (t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var n = {
        props: {
          item: Object,
          index: Number
        },
        methods: {
          opendatel: function opendatel() {
            t.navigateTo({
              url: "../../pages/topicdetail/topicdetail"
            });
          }
        }
      };
      e.default = n;
    }).call(this, n("6e42")["default"]);
  },
  "8ebe": function ebe(t, e, n) {
    "use strict";

    n.r(e);
    var c = n("68fb"),
        u = n("dade");

    for (var a in u) {
      "default" !== a && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(a);
    }

    n("5273");
    var i,
        o = n("f0c5"),
        r = Object(o["a"])(u["default"], c["b"], c["c"], !1, null, "4a45e190", null, !1, c["a"], i);
    e["default"] = r.exports;
  },
  ce70: function ce70(t, e, n) {},
  dade: function dade(t, e, n) {
    "use strict";

    n.r(e);
    var c = n("6c0c"),
        u = n.n(c);

    for (var a in c) {
      "default" !== a && function (t) {
        n.d(e, t, function () {
          return c[t];
        });
      }(a);
    }

    e["default"] = u.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['compoents/news/topic-list-create-component', {
  'compoents/news/topic-list-create-component': function compoentsNewsTopicListCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("8ebe"));
  }
}, [['compoents/news/topic-list-create-component']]]);
});
require('compoents/news/topic-list.js');
__wxRoute = 'compoents/news/topic-news';__wxRouteBegin = true;__wxAppCurrentFile__ = 'compoents/news/topic-news.js';

define('compoents/news/topic-news.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["compoents/news/topic-news"], {
  "260d": function d(n, t, e) {
    "use strict";

    var a,
        u = function u() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        c = [];

    e.d(t, "b", function () {
      return u;
    }), e.d(t, "c", function () {
      return c;
    }), e.d(t, "a", function () {
      return a;
    });
  },
  "71e5": function e5(n, t, e) {
    "use strict";

    var a = e("80e4"),
        u = e.n(a);
    u.a;
  },
  "80e4": function e4(n, t, e) {},
  bdb6: function bdb6(n, t, e) {
    "use strict";

    e.r(t);
    var a = e("260d"),
        u = e("fbda");

    for (var c in u) {
      "default" !== c && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(c);
    }

    e("71e5");
    var r,
        o = e("f0c5"),
        i = Object(o["a"])(u["default"], a["b"], a["c"], !1, null, "cb028c5a", null, !1, a["a"], r);
    t["default"] = i.exports;
  },
  e25e: function e25e(n, t, e) {
    "use strict";

    (function (n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var e = {
        props: {
          arryfenlei: Array
        },
        methods: {
          opentopicnav: function opentopicnav() {
            n.navigateTo({
              url: "../../pages/topicnav/topicnav"
            });
          }
        }
      };
      t.default = e;
    }).call(this, e("6e42")["default"]);
  },
  fbda: function fbda(n, t, e) {
    "use strict";

    e.r(t);
    var a = e("e25e"),
        u = e.n(a);

    for (var c in a) {
      "default" !== c && function (n) {
        e.d(t, n, function () {
          return a[n];
        });
      }(c);
    }

    t["default"] = u.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['compoents/news/topic-news-create-component', {
  'compoents/news/topic-news-create-component': function compoentsNewsTopicNewsCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("bdb6"));
  }
}, [['compoents/news/topic-news-create-component']]]);
});
require('compoents/news/topic-news.js');
__wxRoute = 'compoents/paper/paper-list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'compoents/paper/paper-list.js';

define('compoents/paper/paper-list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["compoents/paper/paper-list"], {
  "0fc9": function fc9(n, t, e) {
    "use strict";

    var u,
        a = function a() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        c = [];

    e.d(t, "b", function () {
      return a;
    }), e.d(t, "c", function () {
      return c;
    }), e.d(t, "a", function () {
      return u;
    });
  },
  "4a5c": function a5c(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("d7a5"),
        a = e.n(u);

    for (var c in u) {
      "default" !== c && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(c);
    }

    t["default"] = a.a;
  },
  "877d": function d(n, t, e) {
    "use strict";

    var u = e("de66"),
        a = e.n(u);
    a.a;
  },
  cb9d: function cb9d(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("0fc9"),
        a = e("4a5c");

    for (var c in a) {
      "default" !== c && function (n) {
        e.d(t, n, function () {
          return a[n];
        });
      }(c);
    }

    e("877d");
    var r,
        o = e("f0c5"),
        i = Object(o["a"])(a["default"], u["b"], u["c"], !1, null, "83b699b4", null, !1, u["a"], r);
    t["default"] = i.exports;
  },
  d7a5: function d7a5(n, t, e) {
    "use strict";

    (function (n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;

      var u = function u() {
        return e.e("compoents/uni-badge/uni-badge").then(e.bind(null, "3370"));
      },
          a = {
        components: {
          uniBadge: u
        },
        props: {
          item: Object
        },
        methods: {
          opendetail: function opendetail() {
            n.navigateTo({
              url: "../../pages/userchat/userchat"
            });
          }
        }
      };

      t.default = a;
    }).call(this, e("6e42")["default"]);
  },
  de66: function de66(n, t, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['compoents/paper/paper-list-create-component', {
  'compoents/paper/paper-list-create-component': function compoentsPaperPaperListCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("cb9d"));
  }
}, [['compoents/paper/paper-list-create-component']]]);
});
require('compoents/paper/paper-list.js');
__wxRoute = 'compoents/paper/paper-pop';__wxRouteBegin = true;__wxAppCurrentFile__ = 'compoents/paper/paper-pop.js';

define('compoents/paper/paper-pop.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["compoents/paper/paper-pop"], {
  "0bda": function bda(t, n, e) {
    "use strict";

    e.r(n);
    var c = e("1e2c"),
        r = e.n(c);

    for (var u in c) {
      "default" !== u && function (t) {
        e.d(n, t, function () {
          return c[t];
        });
      }(u);
    }

    n["default"] = r.a;
  },
  "1e2c": function e2c(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var c = {
      props: {
        showpop: Boolean
      },
      methods: {
        hidepop: function hidepop() {
          this.$emit("hidepop");
        },
        friends: function friends() {
          this.$emit("friends");
        },
        clear: function clear() {
          this.$emit("clear");
        }
      }
    };
    n.default = c;
  },
  "7af6": function af6(t, n, e) {
    "use strict";

    var c = e("d0c5"),
        r = e.n(c);
    r.a;
  },
  b335: function b335(t, n, e) {
    "use strict";

    var c,
        r = function r() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    e.d(n, "b", function () {
      return r;
    }), e.d(n, "c", function () {
      return u;
    }), e.d(n, "a", function () {
      return c;
    });
  },
  b4c7: function b4c7(t, n, e) {
    "use strict";

    e.r(n);
    var c = e("b335"),
        r = e("0bda");

    for (var u in r) {
      "default" !== u && function (t) {
        e.d(n, t, function () {
          return r[t];
        });
      }(u);
    }

    e("7af6");
    var o,
        i = e("f0c5"),
        a = Object(i["a"])(r["default"], c["b"], c["c"], !1, null, "829719b6", null, !1, c["a"], o);
    n["default"] = a.exports;
  },
  d0c5: function d0c5(t, n, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['compoents/paper/paper-pop-create-component', {
  'compoents/paper/paper-pop-create-component': function compoentsPaperPaperPopCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("b4c7"));
  }
}, [['compoents/paper/paper-pop-create-component']]]);
});
require('compoents/paper/paper-pop.js');
__wxRoute = 'compoents/uni-badge/uni-badge';__wxRouteBegin = true;__wxAppCurrentFile__ = 'compoents/uni-badge/uni-badge.js';

define('compoents/uni-badge/uni-badge.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["compoents/uni-badge/uni-badge"], {
  3370: function _(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("8944"),
        a = n("69c0");

    for (var r in a) {
      "default" !== r && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(r);
    }

    n("a7fd");
    var i,
        c = n("f0c5"),
        f = Object(c["a"])(a["default"], u["b"], u["c"], !1, null, null, null, !1, u["a"], i);
    e["default"] = f.exports;
  },
  "50e2": function e2(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var u = {
      name: "UniBadge",
      props: {
        type: {
          type: String,
          default: "default"
        },
        inverted: {
          type: Boolean,
          default: !1
        },
        text: {
          type: String,
          default: ""
        },
        size: {
          type: String,
          default: "normal"
        }
      },
      methods: {
        onClick: function onClick() {
          this.$emit("click");
        }
      }
    };
    e.default = u;
  },
  "592e": function e(t, _e, n) {},
  "69c0": function c0(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("50e2"),
        a = n.n(u);

    for (var r in u) {
      "default" !== r && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(r);
    }

    e["default"] = a.a;
  },
  8944: function _(t, e, n) {
    "use strict";

    var u,
        a = function a() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        r = [];

    n.d(e, "b", function () {
      return a;
    }), n.d(e, "c", function () {
      return r;
    }), n.d(e, "a", function () {
      return u;
    });
  },
  a7fd: function a7fd(t, e, n) {
    "use strict";

    var u = n("592e"),
        a = n.n(u);
    a.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['compoents/uni-badge/uni-badge-create-component', {
  'compoents/uni-badge/uni-badge-create-component': function compoentsUniBadgeUniBadgeCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("3370"));
  }
}, [['compoents/uni-badge/uni-badge-create-component']]]);
});
require('compoents/uni-badge/uni-badge.js');
__wxRoute = 'compoents/uni-icon/uni-icon';__wxRouteBegin = true;__wxAppCurrentFile__ = 'compoents/uni-icon/uni-icon.js';

define('compoents/uni-icon/uni-icon.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["compoents/uni-icon/uni-icon"], {
  "27f9": function f9(n, t, e) {
    "use strict";

    var u,
        c = function c() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        i = [];

    e.d(t, "b", function () {
      return c;
    }), e.d(t, "c", function () {
      return i;
    }), e.d(t, "a", function () {
      return u;
    });
  },
  4698: function _(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var u = {
      name: "UniIcon",
      props: {
        type: {
          type: String,
          default: ""
        },
        color: {
          type: String,
          default: "#333333"
        },
        size: {
          type: [Number, String],
          default: 16
        }
      },
      methods: {
        _onClick: function _onClick() {
          this.$emit("click");
        }
      }
    };
    t.default = u;
  },
  b097: function b097(n, t, e) {},
  ded3: function ded3(n, t, e) {
    "use strict";

    var u = e("b097"),
        c = e.n(u);
    c.a;
  },
  e84f: function e84f(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("4698"),
        c = e.n(u);

    for (var i in u) {
      "default" !== i && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(i);
    }

    t["default"] = c.a;
  },
  e88c: function e88c(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("27f9"),
        c = e("e84f");

    for (var i in c) {
      "default" !== i && function (n) {
        e.d(t, n, function () {
          return c[n];
        });
      }(i);
    }

    e("ded3");
    var r,
        o = e("f0c5"),
        f = Object(o["a"])(c["default"], u["b"], u["c"], !1, null, null, null, !1, u["a"], r);
    t["default"] = f.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['compoents/uni-icon/uni-icon-create-component', {
  'compoents/uni-icon/uni-icon-create-component': function compoentsUniIconUniIconCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("e88c"));
  }
}, [['compoents/uni-icon/uni-icon-create-component']]]);
});
require('compoents/uni-icon/uni-icon.js');
__wxRoute = 'compoents/uni-nav-bar/uni-nav-bar';__wxRouteBegin = true;__wxAppCurrentFile__ = 'compoents/uni-nav-bar/uni-nav-bar.js';

define('compoents/uni-nav-bar/uni-nav-bar.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["compoents/uni-nav-bar/uni-nav-bar"], {
  "133a": function a(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;

    var u = function u() {
      return e.e("compoents/uni-status-bar/uni-status-bar").then(e.bind(null, "2fc8"));
    },
        i = function i() {
      return e.e("compoents/uni-icon/uni-icon").then(e.bind(null, "e88c"));
    },
        r = {
      name: "UniNavBar",
      components: {
        uniStatusBar: u,
        uniIcon: i
      },
      props: {
        title: {
          type: String,
          default: ""
        },
        leftText: {
          type: String,
          default: ""
        },
        rightText: {
          type: String,
          default: ""
        },
        leftIcon: {
          type: String,
          default: ""
        },
        rightIcon: {
          type: String,
          default: ""
        },
        fixed: {
          type: [Boolean, String],
          default: !1
        },
        color: {
          type: String,
          default: "#000000"
        },
        backgroundColor: {
          type: String,
          default: "#FFFFFF"
        },
        statusBar: {
          type: [Boolean, String],
          default: !1
        },
        shadow: {
          type: [String, Boolean],
          default: !0
        },
        border: {
          type: [String, Boolean],
          default: !0
        }
      },
      methods: {
        onClickLeft: function onClickLeft() {
          this.$emit("click-left");
        },
        onClickRight: function onClickRight() {
          this.$emit("click-right");
        }
      }
    };

    n.default = r;
  },
  "33ec": function ec(t, n, e) {
    "use strict";

    var u,
        i = function i() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        r = [];

    e.d(n, "b", function () {
      return i;
    }), e.d(n, "c", function () {
      return r;
    }), e.d(n, "a", function () {
      return u;
    });
  },
  6718: function _(t, n, e) {
    "use strict";

    var u = e("9464"),
        i = e.n(u);
    i.a;
  },
  "77d8": function d8(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("33ec"),
        i = e("7821");

    for (var r in i) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(r);
    }

    e("6718");
    var a,
        o = e("f0c5"),
        c = Object(o["a"])(i["default"], u["b"], u["c"], !1, null, null, null, !1, u["a"], a);
    n["default"] = c.exports;
  },
  7821: function _(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("133a"),
        i = e.n(u);

    for (var r in u) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(r);
    }

    n["default"] = i.a;
  },
  9464: function _(t, n, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['compoents/uni-nav-bar/uni-nav-bar-create-component', {
  'compoents/uni-nav-bar/uni-nav-bar-create-component': function compoentsUniNavBarUniNavBarCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("77d8"));
  }
}, [['compoents/uni-nav-bar/uni-nav-bar-create-component']]]);
});
require('compoents/uni-nav-bar/uni-nav-bar.js');
__wxRoute = 'compoents/uni-popup/uni-popup';__wxRouteBegin = true;__wxAppCurrentFile__ = 'compoents/uni-popup/uni-popup.js';

define('compoents/uni-popup/uni-popup.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["compoents/uni-popup/uni-popup"], {
  "00df": function df(t, n, e) {
    "use strict";

    var o,
        u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        a = [];

    e.d(n, "b", function () {
      return u;
    }), e.d(n, "c", function () {
      return a;
    }), e.d(n, "a", function () {
      return o;
    });
  },
  "2ad6": function ad6(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("5864"),
        u = e.n(o);

    for (var a in o) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(a);
    }

    n["default"] = u.a;
  },
  5864: function _(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var o = {
      name: "UniPopup",
      props: {
        animation: {
          type: Boolean,
          default: !0
        },
        type: {
          type: String,
          default: "center"
        },
        custom: {
          type: Boolean,
          default: !0
        },
        maskClick: {
          type: Boolean,
          default: !1
        },
        show: {
          type: Boolean,
          default: !0
        }
      },
      data: function data() {
        return {
          ani: "uni-" + this.type,
          showPopup: this.show
        };
      },
      watch: {
        show: function show(t) {
          t ? this.open() : this.close();
        }
      },
      created: function created() {},
      methods: {
        clear: function clear() {},
        close: function close(t) {
          var n = this;
          !this.maskClick && t || (this.$emit("change", {
            show: !1
          }), this.ani = "", this.$nextTick(function () {
            setTimeout(function () {
              n.showPopup = !1;
            }, 300);
          }));
        }
      }
    };
    n.default = o;
  },
  "8acc": function acc(t, n, e) {
    "use strict";

    var o = e("a29b"),
        u = e.n(o);
    u.a;
  },
  a29b: function a29b(t, n, e) {},
  c424: function c424(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("00df"),
        u = e("2ad6");

    for (var a in u) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(a);
    }

    e("8acc");
    var i,
        c = e("f0c5"),
        s = Object(c["a"])(u["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], i);
    n["default"] = s.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['compoents/uni-popup/uni-popup-create-component', {
  'compoents/uni-popup/uni-popup-create-component': function compoentsUniPopupUniPopupCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("c424"));
  }
}, [['compoents/uni-popup/uni-popup-create-component']]]);
});
require('compoents/uni-popup/uni-popup.js');
__wxRoute = 'compoents/uni-status-bar/uni-status-bar';__wxRouteBegin = true;__wxAppCurrentFile__ = 'compoents/uni-status-bar/uni-status-bar.js';

define('compoents/uni-status-bar/uni-status-bar.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["compoents/uni-status-bar/uni-status-bar"], {
  "1ba6": function ba6(t, n, u) {
    "use strict";

    var a,
        e = function e() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        r = [];

    u.d(n, "b", function () {
      return e;
    }), u.d(n, "c", function () {
      return r;
    }), u.d(n, "a", function () {
      return a;
    });
  },
  "2fc8": function fc8(t, n, u) {
    "use strict";

    u.r(n);
    var a = u("1ba6"),
        e = u("bbb7");

    for (var r in e) {
      "default" !== r && function (t) {
        u.d(n, t, function () {
          return e[t];
        });
      }(r);
    }

    u("c040");
    var c,
        i = u("f0c5"),
        f = Object(i["a"])(e["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], c);
    n["default"] = f.exports;
  },
  "9bd9": function bd9(t, n, u) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var u = t.getSystemInfoSync().statusBarHeight + "px",
          a = {
        name: "UniStatusBar",
        data: function data() {
          return {
            statusBarHeight: u
          };
        }
      };
      n.default = a;
    }).call(this, u("6e42")["default"]);
  },
  bbb7: function bbb7(t, n, u) {
    "use strict";

    u.r(n);
    var a = u("9bd9"),
        e = u.n(a);

    for (var r in a) {
      "default" !== r && function (t) {
        u.d(n, t, function () {
          return a[t];
        });
      }(r);
    }

    n["default"] = e.a;
  },
  c040: function c040(t, n, u) {
    "use strict";

    var a = u("c473"),
        e = u.n(a);
    e.a;
  },
  c473: function c473(t, n, u) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['compoents/uni-status-bar/uni-status-bar-create-component', {
  'compoents/uni-status-bar/uni-status-bar-create-component': function compoentsUniStatusBarUniStatusBarCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("2fc8"));
  }
}, [['compoents/uni-status-bar/uni-status-bar-create-component']]]);
});
require('compoents/uni-status-bar/uni-status-bar.js');
__wxRoute = 'compoents/user-list/user-list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'compoents/user-list/user-list.js';

define('compoents/user-list/user-list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["compoents/user-list/user-list"], {
  "0eb5": function eb5(e, n, t) {
    "use strict";

    var u = t("4d3f"),
        r = t.n(u);
    r.a;
  },
  "35dd": function dd(e, n, t) {
    "use strict";

    t.r(n);
    var u = t("8ae2"),
        r = t.n(u);

    for (var c in u) {
      "default" !== c && function (e) {
        t.d(n, e, function () {
          return u[e];
        });
      }(c);
    }

    n["default"] = r.a;
  },
  "3cea": function cea(e, n, t) {
    "use strict";

    var u,
        r = function r() {
      var e = this,
          n = e.$createElement;
      e._self._c;
    },
        c = [];

    t.d(n, "b", function () {
      return r;
    }), t.d(n, "c", function () {
      return c;
    }), t.d(n, "a", function () {
      return u;
    });
  },
  "4d3f": function d3f(e, n, t) {},
  "8ae2": function ae2(e, n, t) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;

    var u = function u() {
      return t.e("compoents/common/tag-sex").then(t.bind(null, "bd9a"));
    },
        r = {
      components: {
        tagSex: u
      },
      props: {
        item: Object,
        index: Number
      }
    };

    n.default = r;
  },
  e907: function e907(e, n, t) {
    "use strict";

    t.r(n);
    var u = t("3cea"),
        r = t("35dd");

    for (var c in r) {
      "default" !== c && function (e) {
        t.d(n, e, function () {
          return r[e];
        });
      }(c);
    }

    t("0eb5");
    var a,
        o = t("f0c5"),
        i = Object(o["a"])(r["default"], u["b"], u["c"], !1, null, "b092eea4", null, !1, u["a"], a);
    n["default"] = i.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['compoents/user-list/user-list-create-component', {
  'compoents/user-list/user-list-create-component': function compoentsUserListUserListCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("e907"));
  }
}, [['compoents/user-list/user-list-create-component']]]);
});
require('compoents/user-list/user-list.js');
__wxRoute = 'compoents/userchat/user-chat-list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'compoents/userchat/user-chat-list.js';

define('compoents/userchat/user-chat-list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["compoents/userchat/user-chat-list"], {
  "403c": function c(t, n, e) {
    "use strict";

    var u = e("6726"),
        c = e.n(u);
    c.a;
  },
  "4b96": function b96(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var u = {
      props: {
        item: Object,
        index: Number
      }
    };
    n.default = u;
  },
  6726: function _(t, n, e) {},
  "7dd1": function dd1(t, n, e) {
    "use strict";

    var u,
        c = function c() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        r = [];

    e.d(n, "b", function () {
      return c;
    }), e.d(n, "c", function () {
      return r;
    }), e.d(n, "a", function () {
      return u;
    });
  },
  c41e: function c41e(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("4b96"),
        c = e.n(u);

    for (var r in u) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(r);
    }

    n["default"] = c.a;
  },
  f044: function f044(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("7dd1"),
        c = e("c41e");

    for (var r in c) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return c[t];
        });
      }(r);
    }

    e("403c");
    var a,
        f = e("f0c5"),
        i = Object(f["a"])(c["default"], u["b"], u["c"], !1, null, null, null, !1, u["a"], a);
    n["default"] = i.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['compoents/userchat/user-chat-list-create-component', {
  'compoents/userchat/user-chat-list-create-component': function compoentsUserchatUserChatListCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("f044"));
  }
}, [['compoents/userchat/user-chat-list-create-component']]]);
});
require('compoents/userchat/user-chat-list.js');
__wxRoute = 'compoents/userchat/user-chat';__wxRouteBegin = true;__wxAppCurrentFile__ = 'compoents/userchat/user-chat.js';

define('compoents/userchat/user-chat.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["compoents/userchat/user-chat"], {
  "2d78": function d78(t, n, e) {},
  "35a2": function a2(t, n, e) {
    "use strict";

    var u = e("2d78"),
        c = e.n(u);
    c.a;
  },
  "528a": function a(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("ce0f"),
        c = e("74c7");

    for (var i in c) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return c[t];
        });
      }(i);
    }

    e("35a2");
    var a,
        r = e("f0c5"),
        o = Object(r["a"])(c["default"], u["b"], u["c"], !1, null, "07d4a0c2", null, !1, u["a"], a);
    n["default"] = o.exports;
  },
  "72f2": function f2(t, n, e) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var e = {
        data: function data() {
          return {
            text: "",
            scrollH: 0
          };
        },
        methods: {
          submit: function submit() {
            this.$emit("submit", this.text), this.text = "";
          },
          inputH: function inputH(n) {
            var e = this;
            this.scrollH = n.detail.height, t.onKeyboardHeightChange(function (t) {
              0 == t.height && (e.scrollH = 0);
            });
          },
          navtiveH: function navtiveH(t) {
            this.scrollH = 0;
          }
        }
      };
      n.default = e;
    }).call(this, e("6e42")["default"]);
  },
  "74c7": function c7(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("72f2"),
        c = e.n(u);

    for (var i in u) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(i);
    }

    n["default"] = c.a;
  },
  ce0f: function ce0f(t, n, e) {
    "use strict";

    var u,
        c = function c() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        i = [];

    e.d(n, "b", function () {
      return c;
    }), e.d(n, "c", function () {
      return i;
    }), e.d(n, "a", function () {
      return u;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['compoents/userchat/user-chat-create-component', {
  'compoents/userchat/user-chat-create-component': function compoentsUserchatUserChatCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("528a"));
  }
}, [['compoents/userchat/user-chat-create-component']]]);
});
require('compoents/userchat/user-chat.js');

__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0ed9":function(n,t,i){},"1d9c":function(n,t,i){"use strict";i.r(t);var e=i("ba28"),a=i.n(e);for(var u in e)"default"!==u&&function(n){i.d(t,n,function(){return e[n]})}(u);t["default"]=a.a},"487d":function(n,t,i){"use strict";i.r(t);var e=i("b426"),a=i("1d9c");for(var u in a)"default"!==u&&function(n){i.d(t,n,function(){return a[n]})}(u);i("8f6a");var o,c=i("f0c5"),s=Object(c["a"])(a["default"],e["b"],e["c"],!1,null,"5aa762eb",null,!1,e["a"],o);t["default"]=s.exports},"6aa2":function(n,t,i){"use strict";i.r(t);var e=i("e48b"),a=i.n(e);for(var u in e)"default"!==u&&function(n){i.d(t,n,function(){return e[n]})}(u);t["default"]=a.a},"8f6a":function(n,t,i){"use strict";var e=i("0ed9"),a=i.n(e);a.a},b3eb:function(n,t,i){"use strict";i.r(t);var e=i("e447"),a=i("6aa2");for(var u in a)"default"!==u&&function(n){i.d(t,n,function(){return a[n]})}(u);var o,c=i("f0c5"),s=Object(c["a"])(a["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],o);t["default"]=s.exports},b426:function(n,t,i){"use strict";var e,a=function(){var n=this,t=n.$createElement;n._self._c},u=[];i.d(t,"b",function(){return a}),i.d(t,"c",function(){return u}),i.d(t,"a",function(){return e})},ba28:function(n,t,i){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={props:{item:Object,index:Number},methods:{oo:function(){this.$emit("guanzhu")},caozuo:function(n){this.$emit("caozuo",n)},opendetail:function(){n.navigateTo({url:"../../pages/detail/detail?detailinfo="+JSON.stringify(this.item)})}}};t.default=i}).call(this,i("6e42")["default"])},e447:function(n,t,i){"use strict";var e,a=function(){var n=this,t=n.$createElement;n._self._c},u=[];i.d(t,"b",function(){return a}),i.d(t,"c",function(){return u}),i.d(t,"a",function(){return e})},e48b:function(n,t,i){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=a(i("487d"));function a(n){return n&&n.__esModule?n:{default:n}}var u=function(){return i.e("compoents/index/swiper-head").then(i.bind(null,"f659"))},o=function(){return i.e("compoents/common/load-more").then(i.bind(null,"2ef8"))},c=function(){return i.e("compoents/common/no-thing").then(i.bind(null,"ea30"))},s={components:{indexList:e.default,swiperHead:u,loadMore:o,noThing:c},data:function(){return{swheigth:0,tabindex:0,linewidth:38,scroll:0,scrollwidth:432,tablist:[{name:"推荐",id:"tuijian"},{name:"娱乐",id:"yule"},{name:"嘻哈",id:"xiha"},{name:"美女",id:"meinv"},{name:"科技",id:"keji"},{name:"财富",id:"caifu"}],newlist:[{loadtext:"上拉加载更多👆",list:[{userimg:"../../static/userpic/10.jpg",username:"昵称",guanzhupd:!0,contents:"我是标题",type:"img",contentsimg:"../../static/datapic/14.jpg",biaoqing:{index:1,dingnum:10,cainum:10},pinglunnum:10,sharenum:100},{userimg:"../../static/userpic/10.jpg",username:"昵称",guanzhupd:!0,contents:"我是标题",type:"video",playnum:"20w",playtime:"2:40",contentsimg:"../../static/datapic/14.jpg",biaoqing:{index:1,dingnum:10,cainum:10},pinglunnum:10,sharenum:100}]},{loadtext:"上拉加载更多👆",list:[{userimg:"../../static/userpic/10.jpg",username:"昵称",guanzhupd:!1,contents:"我是标题",type:"img",contentsimg:"../../static/datapic/14.jpg",biaoqing:{index:0,dingnum:10,cainum:10},pinglunnum:10,sharenum:100},{userimg:"../../static/userpic/10.jpg",username:"昵称",guanzhupd:!0,contents:"我是标题",type:"video",playnum:"20w",playtime:"2:40",contentsimg:"../../static/datapic/14.jpg",biaoqing:{index:1,dingnum:10,cainum:10},pinglunnum:10,sharenum:100}]},{loadtext:"上拉加载更多👆",list:[]},{loadtext:"上拉加载更多👆",list:[]},{loadtext:"上拉加载更多👆",list:[]},{loadtext:"上拉加载更多👆",list:[]}]}},onNavigationBarSearchInputClicked:function(){n.navigateTo({url:"../search/search"})},onNavigationBarButtonTap:function(t){1==t.index&&n.navigateTo({url:"../fabu/fabu"})},methods:{watchscroll:function(n){},tabtap:function(n){this.tabindex=n},guanzhu:function(t){var i=this.newlist[this.tabindex].list[t];i.guanzhupd=!0,n.showToast({title:"关注成功",mask:!0,icon:"none"})},caozuo:function(n,t){var i=this.newlist[this.tabindex].list[t];switch(n){case"ding":if(1==i.biaoqing.index)return;i.biaoqing.dingnum++,2==i.biaoqing.index&&i.biaoqing.cainum--,i.biaoqing.index=1;break;case"cai":if(2==i.biaoqing.index)return;i.biaoqing.cainum++,1==i.biaoqing.index&&i.biaoqing.dingnum--,i.biaoqing.index=2;break}},watchchange:function(n){this.tabindex=n.detail.current},loadtop:function(n){var t=this;"上拉加载更多👆"==this.newlist[n].loadtext&&(this.newlist[n].loadtext="加载中o(*￣▽￣*)ブ",setTimeout(function(){var i={userimg:"../../static/userpic/10.jpg",username:"昵称",guanzhupd:!1,contents:"我是标题",type:"img",contentsimg:"../../static/datapic/14.jpg",biaoqing:{index:0,dingnum:10,cainum:10},pinglunnum:10,sharenum:100};t.newlist[n].list.push(i),t.newlist[n].loadtext="上拉加载更多👆"},1e3))}},watch:{tabindex:function(n){this.scroll=0==n?0*this.scrollwidth:1==n?.03*this.scrollwidth:2==n?.05*this.scrollwidth:3==n?.1*this.scrollwidth:4==n?.11*this.scrollwidth:1*this.scrollwidth}},onLoad:function(){var t=this;n.getSystemInfo({success:function(i){var e=i.windowHeight-n.upx2px(100);t.swheigth=e}})}};t.default=s}).call(this,i("6e42")["default"])},f3d7:function(n,t,i){"use strict";(function(n){i("1641"),i("921b");e(i("66fd"));var t=e(i("b3eb"));function e(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,i("6e42")["createPage"])}},[["f3d7","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/news/news';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/news/news.js';

define('pages/news/news.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news/news"],{"1ff5":function(n,t,e){"use strict";var i,a=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"b",function(){return a}),e.d(t,"c",function(){return u}),e.d(t,"a",function(){return i})},"25c7":function(n,t,e){"use strict";e.r(t);var i=e("e3c4"),a=e.n(i);for(var u in i)"default"!==u&&function(n){e.d(t,n,function(){return i[n]})}(u);t["default"]=a.a},"663c":function(n,t,e){"use strict";e.r(t);var i=e("1ff5"),a=e("25c7");for(var u in a)"default"!==u&&function(n){e.d(t,n,function(){return a[n]})}(u);e("b2d9");var s,o=e("f0c5"),c=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);t["default"]=c.exports},"6a3d":function(n,t,e){"use strict";(function(n){e("1641"),e("921b");i(e("66fd"));var t=i(e("663c"));function i(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},"7b79":function(n,t,e){},b2d9:function(n,t,e){"use strict";var i=e("7b79"),a=e.n(i);a.a},e3c4:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){return e.e("compoents/common/comon-news").then(e.bind(null,"7355"))},a=function(){return e.e("compoents/news/news-nab-bar").then(e.bind(null,"8ffd"))},u=function(){return e.e("compoents/common/load-more").then(e.bind(null,"2ef8"))},s=function(){return e.e("compoents/news/topic-news").then(e.bind(null,"bdb6"))},o=function(){return e.e("compoents/news/topic-list").then(e.bind(null,"8ebe"))},c={components:{comonNews:i,newsNabBar:a,loadMore:u,topicNews:s,topicList:o},data:function(){return{swheigth:0,tabindex:0,topic:{sweiper:[{src:"../../static/datapic/37.jpg"},{src:"../../static/datapic/37.jpg"},{src:"../../static/datapic/37.jpg"}],fenlei:[{name:"最新"},{name:"游戏"},{name:"情感"},{name:"打卡"},{name:"故事"},{name:"喜爱"}],lists:[{imgsrc:"../../static/topicpic/11.jpeg",titlea:"#淘宝记录薄#",neirong:"120斤到80斤 我的反转人生",dongtainum:545,jinrinum:720},{imgsrc:"../../static/topicpic/11.jpeg",titlea:"#淘宝记录薄#",neirong:"120斤到80斤 我的反转人生",dongtainum:545,jinrinum:720},{imgsrc:"../../static/topicpic/11.jpeg",titlea:"#淘宝记录薄#",neirong:"120斤到80斤 我的反转人生",dongtainum:545,jinrinum:720},{imgsrc:"../../static/topicpic/11.jpeg",titlea:"#淘宝记录薄#",neirong:"120斤到80斤 我的反转人生",dongtainum:545,jinrinum:720}]},tabs:[{name:"关注",id:"guanzhu"},{name:"话题",id:"huati"}],guanzhu:{loadtext:"上拉加载更多👆",list:[{userimg:"../../static/userpic/19.jpg",username:"张三",userage:"30",sex:0,isguanzhu:!1,title:"庆祝祖国成立70周年！",titleimg:"",video:!1,sharea:!1,positiona:"深圳 龙岗",sharenum:30,pinglunnum:100,zannum:50},{userimg:"../../static/userpic/19.jpg",username:"张三",userage:"30",sex:0,isguanzhu:!1,title:"庆祝祖国成立70周年！",titleimg:"../../static/datapic/44.jpg",video:!1,sharea:!1,positiona:"深圳 龙岗",sharenum:30,pinglunnum:100,zannum:50},{userimg:"../../static/userpic/19.jpg",username:"李四",userage:"37",sex:1,isguanzhu:!1,title:"庆祝祖国成立70周年！",titleimg:"../../static/datapic/44.jpg",video:{bofangnum:"20w",shijian:"2:47"},sharea:!1,positiona:"深圳 龙岗",sharenum:30,pinglunnum:100,zannum:50},{userimg:"../../static/userpic/19.jpg",username:"张三",userage:"30",sex:0,isguanzhu:!1,title:"庆祝祖国成立70周年！",titleimg:"",video:!1,sharea:{shareimg:"../../static/datapic/44.jpg",sharetitle:"庆祝祖国成立70周年！"},positiona:"深圳 龙岗",sharenum:30,pinglunnum:100,zannum:50},{userimg:"../../static/userpic/19.jpg",username:"张三",userage:"30",sex:0,isguanzhu:!1,title:"庆祝祖国成立70周年！",titleimg:"",video:!1,sharea:{shareimg:"../../static/datapic/44.jpg",sharetitle:"庆祝祖国成立70周年！"},positiona:"深圳 龙岗",sharenum:30,pinglunnum:100,zannum:50},{userimg:"../../static/userpic/19.jpg",username:"张三",userage:"30",sex:0,isguanzhu:!1,title:"庆祝祖国成立70周年！",titleimg:"",video:!1,sharea:{shareimg:"../../static/datapic/44.jpg",sharetitle:"庆祝祖国成立70周年！"},positiona:"深圳 龙岗",sharenum:30,pinglunnum:100,zannum:50}]}}},methods:{watchchange:function(n){this.tabindex=n.detail.current},change:function(n){this.tabindex=n},openadd:function(t){n.navigateTo({url:"../fabu/fabu"})},isgz:function(t){this.guanzhu.list[t].isguanzhu=!0,n.showToast({title:"关注成功",icon:"none",mask:!0})},loadtop:function(){var n=this;"上拉加载更多👆"==this.guanzhu.loadtext&&(this.guanzhu.loadtext="加载中o(*￣▽￣*)ブ",setTimeout(function(){var t={userimg:"../../static/userpic/19.jpg",username:"张三",userage:"30",sex:0,isguanzhu:!1,title:"庆祝祖国成立70周年！",titleimg:"",video:!1,sharea:!1,positiona:"深圳 龙岗",sharenum:30,pinglunnum:100,zannum:50};n.guanzhu.list.push(t),n.guanzhu.loadtext="上拉加载更多👆"},1e3))}},onLoad:function(){var t=this;n.getSystemInfo({success:function(e){var i=e.windowHeight-n.upx2px(145);t.swheigth=i}})}};t.default=c}).call(this,e("6e42")["default"])}},[["6a3d","common/runtime","common/vendor"]]]);
});
require('pages/news/news.js');
__wxRoute = 'pages/home/home';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/home/home.js';

define('pages/home/home.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/home"],{"53ab":function(n,t,e){"use strict";var u,a=function(){var n=this,t=n.$createElement;n._self._c},c=[];e.d(t,"b",function(){return a}),e.d(t,"c",function(){return c}),e.d(t,"a",function(){return u})},"69d7":function(n,t,e){},afc9:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{}},methods:{},onNavigationBarButtonTap:function(t){0==t.index&&n("log","跳转设置页"," at pages\\home\\home.vue:48")}};t.default=e}).call(this,e("0de9")["default"])},bdfd:function(n,t,e){"use strict";(function(n){e("1641"),e("921b");u(e("66fd"));var t=u(e("f0b5"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},c577:function(n,t,e){"use strict";e.r(t);var u=e("afc9"),a=e.n(u);for(var c in u)"default"!==c&&function(n){e.d(t,n,function(){return u[n]})}(c);t["default"]=a.a},e2cf:function(n,t,e){"use strict";var u=e("69d7"),a=e.n(u);a.a},f0b5:function(n,t,e){"use strict";e.r(t);var u=e("53ab"),a=e("c577");for(var c in a)"default"!==c&&function(n){e.d(t,n,function(){return a[n]})}(c);e("e2cf");var o,f=e("f0c5"),r=Object(f["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],o);t["default"]=r.exports}},[["bdfd","common/runtime","common/vendor"]]]);
});
require('pages/home/home.js');
__wxRoute = 'pages/paper/paper';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/paper/paper.js';

define('pages/paper/paper.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/paper/paper"],{"016e":function(e,p,t){"use strict";t.r(p);var i=t("5ba5"),a=t.n(i);for(var r in i)"default"!==r&&function(e){t.d(p,e,function(){return i[e]})}(r);p["default"]=a.a},"0d8b":function(e,p,t){},"1e03":function(e,p,t){"use strict";(function(e){t("1641"),t("921b");i(t("66fd"));var p=i(t("887d"));function i(e){return e&&e.__esModule?e:{default:e}}e(p.default)}).call(this,t("6e42")["createPage"])},"244a":function(e,p,t){"use strict";var i=t("0d8b"),a=t.n(i);a.a},"5ba5":function(e,p,t){"use strict";(function(e){Object.defineProperty(p,"__esModule",{value:!0}),p.default=void 0;var i=function(){return t.e("compoents/paper/paper-list").then(t.bind(null,"cb9d"))},a=function(){return t.e("compoents/common/load-more").then(t.bind(null,"2ef8"))},r=function(){return t.e("compoents/paper/paper-pop").then(t.bind(null,"b4c7"))},n={components:{paperList:i,loadMore:a,paperPop:r},data:function(){return{showpop:!1,loadtext:"上拉加载更多👆",list:[{paperimg:"../../static/userpic/10.jpg",papertitle:"标题",paperinfo:"我是信息0",papertime:"13:58",papertext:10},{paperimg:"../../static/userpic/10.jpg",papertitle:"标题",paperinfo:"我是信息",papertime:"13:58",papertext:0},{paperimg:"../../static/userpic/10.jpg",papertitle:"标题",paperinfo:"我是信息",papertime:"13:58",papertext:2},{paperimg:"../../static/userpic/10.jpg",papertitle:"标题",paperinfo:"我是信息",papertime:"13:58",papertext:22},{paperimg:"../../static/userpic/10.jpg",papertitle:"标题",paperinfo:"我是信息0",papertime:"13:58",papertext:10},{paperimg:"../../static/userpic/10.jpg",papertitle:"标题",paperinfo:"我是信息",papertime:"13:58",papertext:0}],winHeight:"",pageHeight:""}},onReachBottom:function(){this.loadtop()},onNavigationBarButtonTap:function(p){switch(p.index){case 0:this.showpop=!1,e.navigateTo({url:"../userlist/userlist"});break;case 1:this.showpop=!0;break}},methods:{hidepop:function(){this.showpop=!1},friends:function(){this.showpop=!1},clear:function(){this.showpop=!1},loadtop:function(){var e=this;"上拉加载更多👆"==this.loadtext&&(this.loadtext="加载中o(*￣▽￣*)ブ",setTimeout(function(){var p={paperimg:"../../static/userpic/10.jpg",papertitle:"标题",paperinfo:"我是信息",papertime:"13:58",papertext:22};e.list.push(p),e.loadtext="上拉加载更多👆"},1e3))},jsu:function(){for(var e=0;e<this.list.length;e++)this.list[e].paperinfo.length>4&&(this.list[e].paperinfo=this.list[e].paperinfo.substring(0,4)+"...")},getdata:function(){var p=this;setTimeout(function(){var t=[{paperimg:"../../static/userpic/10.jpg",papertitle:"马云",paperinfo:"借我点钱花吧！",papertime:"13:58",papertext:10},{paperimg:"../../static/userpic/10.jpg",papertitle:"王健林",paperinfo:"我破产了！",papertime:"13:58",papertext:0},{paperimg:"../../static/userpic/10.jpg",papertitle:"巴菲特",paperinfo:"我教你炒股啊！",papertime:"13:58",papertext:2},{paperimg:"../../static/userpic/10.jpg",papertitle:"马云",paperinfo:"借我点钱花吧！",papertime:"13:58",papertext:10},{paperimg:"../../static/userpic/10.jpg",papertitle:"王健林",paperinfo:"我破产了！",papertime:"13:58",papertext:0},{paperimg:"../../static/userpic/10.jpg",papertitle:"巴菲特",paperinfo:"我教你炒股啊！",papertime:"13:58",papertext:2},{paperimg:"../../static/userpic/10.jpg",papertitle:"马云",paperinfo:"借我点钱花吧！",papertime:"13:58",papertext:10},{paperimg:"../../static/userpic/10.jpg",papertitle:"王健林",paperinfo:"我破产了！",papertime:"13:58",papertext:0},{paperimg:"../../static/userpic/10.jpg",papertitle:"巴菲特",paperinfo:"我教你炒股啊！",papertime:"13:58",papertext:2},{paperimg:"../../static/userpic/10.jpg",papertitle:"马云",paperinfo:"借我点钱花吧！",papertime:"13:58",papertext:10},{paperimg:"../../static/userpic/10.jpg",papertitle:"王健林",paperinfo:"我破产了！",papertime:"13:58",papertext:0},{paperimg:"../../static/userpic/10.jpg",papertitle:"巴菲特",paperinfo:"我教你炒股啊！",papertime:"13:58",papertext:2}];p.list=t,p.jsu(),e.stopPullDownRefresh()},1e3)}},onPullDownRefresh:function(){this.getdata()},onLoad:function(){this.jsu()},mounted:function(){},onPageScroll:function(){},onShow:function(){}};p.default=n}).call(this,t("6e42")["default"])},"887d":function(e,p,t){"use strict";t.r(p);var i=t("f7ef"),a=t("016e");for(var r in a)"default"!==r&&function(e){t.d(p,e,function(){return a[e]})}(r);t("244a");var n,o=t("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],n);p["default"]=s.exports},f7ef:function(e,p,t){"use strict";var i,a=function(){var e=this,p=e.$createElement;e._self._c},r=[];t.d(p,"b",function(){return a}),t.d(p,"c",function(){return r}),t.d(p,"a",function(){return i})}},[["1e03","common/runtime","common/vendor"]]]);
});
require('pages/paper/paper.js');
__wxRoute = 'compoents/index/index-list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'compoents/index/index-list.js';

define('compoents/index/index-list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["compoents/index/index-list"],{"0ed9":function(t,n,e){},"1d9c":function(t,n,e){"use strict";e.r(n);var u=e("ba28"),i=e.n(u);for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);n["default"]=i.a},"487d":function(t,n,e){"use strict";e.r(n);var u=e("b426"),i=e("1d9c");for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);e("8f6a");var o,c=e("f0c5"),r=Object(c["a"])(i["default"],u["b"],u["c"],!1,null,"5aa762eb",null,!1,u["a"],o);n["default"]=r.exports},"8f6a":function(t,n,e){"use strict";var u=e("0ed9"),i=e.n(u);i.a},a1d9:function(t,n,e){"use strict";(function(t){e("1641"),e("921b");u(e("66fd"));var n=u(e("487d"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},b426:function(t,n,e){"use strict";var u,i=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",function(){return i}),e.d(n,"c",function(){return a}),e.d(n,"a",function(){return u})},ba28:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={props:{item:Object,index:Number},methods:{oo:function(){this.$emit("guanzhu")},caozuo:function(t){this.$emit("caozuo",t)},opendetail:function(){t.navigateTo({url:"../../pages/detail/detail?detailinfo="+JSON.stringify(this.item)})}}};n.default=e}).call(this,e("6e42")["default"])}},[["a1d9","common/runtime","common/vendor"]]]);
});
require('compoents/index/index-list.js');
__wxRoute = 'pages/search/search';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/search/search.js';

define('pages/search/search.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/search/search"],{"0ed9":function(t,n,e){},"1a33":function(t,n,e){"use strict";(function(t){e("1641"),e("921b");i(e("66fd"));var n=i(e("435e"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"1d9c":function(t,n,e){"use strict";e.r(n);var i=e("ba28"),a=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(n,t,function(){return i[t]})}(u);n["default"]=a.a},"435e":function(t,n,e){"use strict";e.r(n);var i=e("f3c4"),a=e("554b");for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);var o,c=e("f0c5"),r=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);n["default"]=r.exports},"487d":function(t,n,e){"use strict";e.r(n);var i=e("b426"),a=e("1d9c");for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);e("8f6a");var o,c=e("f0c5"),r=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"5aa762eb",null,!1,i["a"],o);n["default"]=r.exports},"554b":function(t,n,e){"use strict";e.r(n);var i=e("7e1b"),a=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(n,t,function(){return i[t]})}(u);n["default"]=a.a},"7e1b":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("487d"));function a(t){return t&&t.__esModule?t:{default:t}}var u=function(){return e.e("compoents/common/load-more").then(e.bind(null,"2ef8"))},o=function(){return e.e("compoents/common/no-thing").then(e.bind(null,"ea30"))},c={components:{indexList:i.default,loadMore:u,noThing:o},data:function(){return{isseach:!1,loadtext:"上拉加载更多👆",list:[],seaechtext:""}},onNavigationBarButtonTap:function(n){0==n.index&&t.navigateBack({delta:1})},onNavigationBarSearchInputChanged:function(t){this.seaechtext=t.text},onNavigationBarSearchInputConfirmed:function(n){t.hideKeyboard(),n.text?this.searchdata():t.showToast({title:"请输入搜索内容",icon:"none",mask:!0})},onPullDownRefresh:function(){this.searchdata()},onReachBottom:function(){this.loadtop()},methods:{searchdata:function(){var n=this;t.showLoading({title:"全力搜索中",mask:!0}),setTimeout(function(){var e=[{userimg:"../../static/userpic/10.jpg",username:"昵称",guanzhupd:!0,contents:"我是标题",type:"img",contentsimg:"../../static/datapic/14.jpg",biaoqing:{index:1,dingnum:10,cainum:10},pinglunnum:10,sharenum:100},{userimg:"../../static/userpic/10.jpg",username:"昵称",guanzhupd:!0,contents:"我是标题",type:"video",playnum:"20w",playtime:"2:40",contentsimg:"../../static/datapic/14.jpg",biaoqing:{index:1,dingnum:10,cainum:10},pinglunnum:10,sharenum:100}];n.list=e,n.isseach=!0,t.hideLoading(),t.stopPullDownRefresh()},1e3)},loadtop:function(){var t=this;"上拉加载更多👆"==this.loadtext&&(this.loadtext="加载中o(*￣▽￣*)ブ",setTimeout(function(){var n={userimg:"../../static/userpic/10.jpg",username:"昵称",guanzhupd:!1,contents:"我是标题",type:"img",contentsimg:"../../static/datapic/14.jpg",biaoqing:{index:0,dingnum:10,cainum:10},pinglunnum:10,sharenum:100};t.list.push(n),t.loadtext="上拉加载更多👆"},1e3))}}};n.default=c}).call(this,e("6e42")["default"])},"8f6a":function(t,n,e){"use strict";var i=e("0ed9"),a=e.n(i);a.a},b426:function(t,n,e){"use strict";var i,a=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return u}),e.d(n,"a",function(){return i})},ba28:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={props:{item:Object,index:Number},methods:{oo:function(){this.$emit("guanzhu")},caozuo:function(t){this.$emit("caozuo",t)},opendetail:function(){t.navigateTo({url:"../../pages/detail/detail?detailinfo="+JSON.stringify(this.item)})}}};n.default=e}).call(this,e("6e42")["default"])},f3c4:function(t,n,e){"use strict";var i,a=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return u}),e.d(n,"a",function(){return i})}},[["1a33","common/runtime","common/vendor"]]]);
});
require('pages/search/search.js');
__wxRoute = 'pages/fabu/fabu';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/fabu/fabu.js';

define('pages/fabu/fabu.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/fabu/fabu"],{"00a7":function(e,n,t){"use strict";t.r(n);var i=t("8e70"),a=t.n(i);for(var u in i)"default"!==u&&function(e){t.d(n,e,function(){return i[e]})}(u);n["default"]=a.a},"203b":function(e,n,t){"use strict";var i,a=function(){var e=this,n=e.$createElement;e._self._c},u=[];t.d(n,"b",function(){return a}),t.d(n,"c",function(){return u}),t.d(n,"a",function(){return i})},"502a":function(e,n,t){},5579:function(e,n,t){"use strict";(function(e){t("1641"),t("921b");i(t("66fd"));var n=i(t("b6d1"));function i(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},"8e70":function(e,n,t){"use strict";(function(e,i){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=u(t("a34a"));function u(e){return e&&e.__esModule?e:{default:e}}function o(e,n,t,i,a,u,o){try{var c=e[u](o),s=c.value}catch(r){return void t(r)}c.done?n(s):Promise.resolve(s).then(i,a)}function c(e){return function(){var n=this,t=arguments;return new Promise(function(i,a){var u=e.apply(n,t);function c(e){o(u,i,a,c,s,"next",e)}function s(e){o(u,i,a,c,s,"throw",e)}c(void 0)})}}var s=function(){return t.e("compoents/uni-nav-bar/uni-nav-bar").then(t.bind(null,"77d8"))},r=function(){return t.e("compoents/common/upload-image").then(t.bind(null,"9a74"))},f=function(){return t.e("compoents/uni-popup/uni-popup").then(t.bind(null,"c424"))},l=["所有人可见","仅自己可见"],d=[["camera"],["album"],["camera","album"]],h=[["compressed"],["original"],["compressed","original"]],p={components:{uniNavBar:s,uploadImage:r,uniPopup:f},onBackPress:function(n){var t=this;if(""!=this.text||0!=this.imageList.length)return this.fanhui?(e.showModal({content:"是否保存",success:function(n){n.confirm?i("log","保存"," at pages\\fabu\\fabu.vue:70"):n.cancel&&i("log","不保存"," at pages\\fabu\\fabu.vue:72"),t.fanhui=!1,e.navigateBack({delta:1})}}),!0):void 0},data:function(){return{fanhui:!0,donghua:"animated zoomInDown",show:!0,yinsi:"所有人可见",text:"",imageList:[],sourceTypeIndex:2,sourceType:["拍照","相册","拍照或相册"],sizeTypeIndex:2,sizeType:["压缩","原图","压缩或原图"],countIndex:8,count:[1,2,3,4,5,6,7,8,9]}},methods:{ttt:function(){this.donghua="animated zoomInDown",this.show=!1},deleted:function(n){var t=this;e.showModal({title:"提示",content:"是否删除",success:function(e){e.confirm&&t.imageList.splice(n,1)}})},chooseImage:function(){var n=c(a.default.mark(function n(){var t,u,o=this;return a.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:if(2===this.sourceTypeIndex){n.next=6;break}return n.next=3,this.checkPermission();case 3:if(t=n.sent,1===t){n.next=6;break}return n.abrupt("return");case 6:if(9!==this.imageList.length){n.next=13;break}return n.next=9,this.isFullImg();case 9:if(u=n.sent,i("log","是否继续?",u," at pages\\fabu\\fabu.vue:129"),u){n.next=13;break}return n.abrupt("return");case 13:e.chooseImage({sourceType:d[this.sourceTypeIndex],sizeType:h[this.sizeTypeIndex],count:this.imageList.length+this.count[this.countIndex]>9?9-this.imageList.length:this.count[this.countIndex],success:function(e){o.imageList=o.imageList.concat(e.tempFilePaths)},fail:function(e){e["code"]&&0!==e.code&&2===o.sourceTypeIndex&&o.checkPermission(e.code)}});case 14:case"end":return n.stop()}},n,this)}));function t(){return n.apply(this,arguments)}return t}(),previewImage:function(n){i("log",n," at pages\\fabu\\fabu.vue:152");var t=n.target.dataset.src;e.previewImage({current:t,urls:this.imageList,indicator:"default"})},back:function(){e.navigateBack({delta:1})},submit:function(){},changeyinsi:function(){var n=this;e.showActionSheet({itemList:l,success:function(e){n.yinsi=l[e.tapIndex]}})}}};n.default=p}).call(this,t("6e42")["default"],t("0de9")["default"])},b6d1:function(e,n,t){"use strict";t.r(n);var i=t("203b"),a=t("00a7");for(var u in a)"default"!==u&&function(e){t.d(n,e,function(){return a[e]})}(u);t("ef40");var o,c=t("f0c5"),s=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);n["default"]=s.exports},ef40:function(e,n,t){"use strict";var i=t("502a"),a=t.n(i);a.a}},[["5579","common/runtime","common/vendor"]]]);
});
require('pages/fabu/fabu.js');
__wxRoute = 'pages/topicnav/topicnav';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/topicnav/topicnav.js';

define('pages/topicnav/topicnav.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/topicnav/topicnav"],{2117:function(i,t,n){"use strict";var e=n("d85c"),c=n.n(e);c.a},"2ccf":function(i,t,n){"use strict";var e,c=function(){var i=this,t=i.$createElement;i._self._c},o=[];n.d(t,"b",function(){return c}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return e})},3749:function(i,t,n){"use strict";n.r(t);var e=n("2ccf"),c=n("e39f");for(var o in c)"default"!==o&&function(i){n.d(t,i,function(){return c[i]})}(o);n("2117");var a,r=n("f0c5"),u=Object(r["a"])(c["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],a);t["default"]=u.exports},b12f:function(i,t,n){"use strict";(function(i){n("1641"),n("921b");e(n("66fd"));var t=e(n("3749"));function e(i){return i&&i.__esModule?i:{default:i}}i(t.default)}).call(this,n("6e42")["createPage"])},d85c:function(i,t,n){},dfe8:function(i,t,n){"use strict";(function(i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=function(){return n.e("compoents/index/swiper-head").then(n.bind(null,"f659"))},c=function(){return n.e("compoents/common/load-more").then(n.bind(null,"2ef8"))},o=function(){return n.e("compoents/common/no-thing").then(n.bind(null,"ea30"))},a=function(){return n.e("compoents/news/topic-list").then(n.bind(null,"8ebe"))},r={components:{swiperHead:e,loadMore:c,noThing:o,topicList:a},data:function(){return{swheigth:0,tabindex:0,linewidth:38,scroll:0,scrollwidth:432,tablist:[{name:"推荐",id:"tuijian"},{name:"娱乐",id:"yule"},{name:"嘻哈",id:"xiha"},{name:"美女",id:"meinv"},{name:"科技",id:"keji"},{name:"财富",id:"caifu"}],newlist:[{loadtext:"上拉加载更多👆",list:[{imgsrc:"../../static/topicpic/11.jpeg",titlea:"#淘宝记录薄#",neirong:"120斤到80斤 我的反转人生",dongtainum:545,jinrinum:720},{imgsrc:"../../static/topicpic/11.jpeg",titlea:"#淘宝记录薄#",neirong:"120斤到80斤 我的反转人生",dongtainum:545,jinrinum:720},{imgsrc:"../../static/topicpic/11.jpeg",titlea:"#淘宝记录薄#",neirong:"120斤到80斤 我的反转人生",dongtainum:545,jinrinum:720},{imgsrc:"../../static/topicpic/11.jpeg",titlea:"#淘宝记录薄#",neirong:"120斤到80斤 我的反转人生",dongtainum:545,jinrinum:720},{imgsrc:"../../static/topicpic/11.jpeg",titlea:"#淘宝记录薄#",neirong:"120斤到80斤 我的反转人生",dongtainum:545,jinrinum:720},{imgsrc:"../../static/topicpic/11.jpeg",titlea:"#淘宝记录薄#",neirong:"120斤到80斤 我的反转人生",dongtainum:545,jinrinum:720},{imgsrc:"../../static/topicpic/11.jpeg",titlea:"#淘宝记录薄#",neirong:"120斤到80斤 我的反转人生",dongtainum:545,jinrinum:720},{imgsrc:"../../static/topicpic/11.jpeg",titlea:"#淘宝记录薄#",neirong:"120斤到80斤 我的反转人生",dongtainum:545,jinrinum:720}]},{loadtext:"上拉加载更多👆",list:[{imgsrc:"../../static/topicpic/11.jpeg",titlea:"#淘宝记录薄#",neirong:"120斤到80斤 我的反转人生",dongtainum:545,jinrinum:720},{imgsrc:"../../static/topicpic/11.jpeg",titlea:"#淘宝记录薄#",neirong:"120斤到80斤 我的反转人生",dongtainum:545,jinrinum:720},{imgsrc:"../../static/topicpic/11.jpeg",titlea:"#淘宝记录薄#",neirong:"120斤到80斤 我的反转人生",dongtainum:545,jinrinum:720},{imgsrc:"../../static/topicpic/11.jpeg",titlea:"#淘宝记录薄#",neirong:"120斤到80斤 我的反转人生",dongtainum:545,jinrinum:720},{imgsrc:"../../static/topicpic/11.jpeg",titlea:"#淘宝记录薄#",neirong:"120斤到80斤 我的反转人生",dongtainum:545,jinrinum:720},{imgsrc:"../../static/topicpic/11.jpeg",titlea:"#淘宝记录薄#",neirong:"120斤到80斤 我的反转人生",dongtainum:545,jinrinum:720},{imgsrc:"../../static/topicpic/11.jpeg",titlea:"#淘宝记录薄#",neirong:"120斤到80斤 我的反转人生",dongtainum:545,jinrinum:720},{imgsrc:"../../static/topicpic/11.jpeg",titlea:"#淘宝记录薄#",neirong:"120斤到80斤 我的反转人生",dongtainum:545,jinrinum:720}]},{loadtext:"上拉加载更多👆",list:[]},{loadtext:"上拉加载更多👆",list:[]},{loadtext:"上拉加载更多👆",list:[]},{loadtext:"上拉加载更多👆",list:[]}]}},methods:{watchscroll:function(i){},tabtap:function(i){this.tabindex=i},watchchange:function(i){this.tabindex=i.detail.current},loadtop:function(i){var t=this;"上拉加载更多👆"==this.newlist[i].loadtext&&(this.newlist[i].loadtext="加载中o(*￣▽￣*)ブ",setTimeout(function(){var n={imgsrc:"../../static/topicpic/11.jpeg",titlea:"#淘宝记录薄#",neirong:"120斤到80斤 我的反转人生",dongtainum:545,jinrinum:720};t.newlist[i].list.push(n),t.newlist[i].loadtext="上拉加载更多👆"},1e3))}},watch:{tabindex:function(i){this.scroll=0==i?0*this.scrollwidth:1==i?.03*this.scrollwidth:2==i?.05*this.scrollwidth:3==i?.1*this.scrollwidth:4==i?.11*this.scrollwidth:1*this.scrollwidth}},onLoad:function(){var t=this;i.getSystemInfo({success:function(n){var e=n.windowHeight-i.upx2px(100);t.swheigth=e}})},onNavigationBarButtonTap:function(t){0==t.index&&i.navigateBack({delta:1})}};t.default=r}).call(this,n("6e42")["default"])},e39f:function(i,t,n){"use strict";n.r(t);var e=n("dfe8"),c=n.n(e);for(var o in e)"default"!==o&&function(i){n.d(t,i,function(){return e[i]})}(o);t["default"]=c.a}},[["b12f","common/runtime","common/vendor"]]]);
});
require('pages/topicnav/topicnav.js');
__wxRoute = 'pages/topicdetail/topicdetail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/topicdetail/topicdetail.js';

define('pages/topicdetail/topicdetail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/topicdetail/topicdetail"],{"0e5a":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{item:Object}};e.default=n},"39a0":function(t,e,i){"use strict";i.r(e);var n=i("7bf2"),a=i("ba4b");for(var u in a)"default"!==u&&function(t){i.d(e,t,function(){return a[t]})}(u);i("a8de");var s,r=i("f0c5"),o=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"49bb7fa0",null,!1,n["a"],s);e["default"]=o.exports},6569:function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement;t._self._c},u=[];i.d(e,"b",function(){return a}),i.d(e,"c",function(){return u}),i.d(e,"a",function(){return n})},6744:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("39a0"));function a(t){return t&&t.__esModule?t:{default:t}}var u=function(){return i.e("compoents/index/swiper-head").then(i.bind(null,"f659"))},s=function(){return i.e("compoents/common/comon-news").then(i.bind(null,"7355"))},r=function(){return i.e("compoents/common/load-more").then(i.bind(null,"2ef8"))},o={components:{toPic:n.default,swiperHead:u,comonNews:s,loadMore:r},data:function(){return{tabindex:0,linewidth:38,scroll:0,topicobj:{titleimg:"../../static/topicpic/13.jpeg",titlename:"忆往事，敬余生",dongtainum:"793",jinrinum:"641",desc:"面试官：在电梯里偶遇马云你会做什么？90后女孩的回答当场被录用"},tablist:[{name:"默认",id:"moren"},{name:"最新",id:"zuixin"}],topiclista:[{loadtext:"上拉加载更多👆",list:[{userimg:"../../static/userpic/19.jpg",username:"张三",userage:"30",sex:0,isguanzhu:!1,title:"庆祝祖国成立70周年！",titleimg:"",video:!1,sharea:!1,positiona:"深圳 龙岗",sharenum:30,pinglunnum:100,zannum:50},{userimg:"../../static/userpic/19.jpg",username:"张三",userage:"30",sex:0,isguanzhu:!1,title:"庆祝祖国成立70周年！",titleimg:"../../static/datapic/44.jpg",video:!1,sharea:!1,positiona:"深圳 龙岗",sharenum:30,pinglunnum:100,zannum:50},{userimg:"../../static/userpic/19.jpg",username:"李四",userage:"37",sex:1,isguanzhu:!1,title:"庆祝祖国成立70周年！",titleimg:"../../static/datapic/44.jpg",video:{bofangnum:"20w",shijian:"2:47"},sharea:!1,positiona:"深圳 龙岗",sharenum:30,pinglunnum:100,zannum:50},{userimg:"../../static/userpic/19.jpg",username:"张三",userage:"30",sex:0,isguanzhu:!1,title:"庆祝祖国成立70周年！",titleimg:"",video:!1,sharea:{shareimg:"../../static/datapic/44.jpg",sharetitle:"庆祝祖国成立70周年！"},positiona:"深圳 龙岗",sharenum:30,pinglunnum:100,zannum:50},{userimg:"../../static/userpic/19.jpg",username:"张三",userage:"30",sex:0,isguanzhu:!1,title:"庆祝祖国成立70周年！",titleimg:"",video:!1,sharea:{shareimg:"../../static/datapic/44.jpg",sharetitle:"庆祝祖国成立70周年！"},positiona:"深圳 龙岗",sharenum:30,pinglunnum:100,zannum:50},{userimg:"../../static/userpic/19.jpg",username:"张三",userage:"30",sex:0,isguanzhu:!1,title:"庆祝祖国成立70周年！",titleimg:"",video:!1,sharea:{shareimg:"../../static/datapic/44.jpg",sharetitle:"庆祝祖国成立70周年！"},positiona:"深圳 龙岗",sharenum:30,pinglunnum:100,zannum:50}]},{loadtext:"上拉加载更多👆",list:[{userimg:"../../static/userpic/19.jpg",username:"张三",userage:"30",sex:0,isguanzhu:!1,title:"庆祝祖国成立70周年！",titleimg:"",video:!1,sharea:!1,positiona:"深圳 龙岗",sharenum:30,pinglunnum:100,zannum:50},{userimg:"../../static/userpic/19.jpg",username:"张三",userage:"30",sex:0,isguanzhu:!1,title:"庆祝祖国成立70周年！",titleimg:"../../static/datapic/44.jpg",video:!1,sharea:!1,positiona:"深圳 龙岗",sharenum:30,pinglunnum:100,zannum:50},{userimg:"../../static/userpic/19.jpg",username:"李四",userage:"37",sex:1,isguanzhu:!1,title:"庆祝祖国成立70周年！",titleimg:"../../static/datapic/44.jpg",video:{bofangnum:"20w",shijian:"2:47"},sharea:!1,positiona:"深圳 龙岗",sharenum:30,pinglunnum:100,zannum:50},{userimg:"../../static/userpic/19.jpg",username:"张三",userage:"30",sex:0,isguanzhu:!1,title:"庆祝祖国成立70周年！",titleimg:"",video:!1,sharea:{shareimg:"../../static/datapic/44.jpg",sharetitle:"庆祝祖国成立70周年！"},positiona:"深圳 龙岗",sharenum:30,pinglunnum:100,zannum:50},{userimg:"../../static/userpic/19.jpg",username:"张三",userage:"30",sex:0,isguanzhu:!1,title:"庆祝祖国成立70周年！",titleimg:"",video:!1,sharea:{shareimg:"../../static/datapic/44.jpg",sharetitle:"庆祝祖国成立70周年！"},positiona:"深圳 龙岗",sharenum:30,pinglunnum:100,zannum:50},{userimg:"../../static/userpic/19.jpg",username:"张三",userage:"30",sex:0,isguanzhu:!1,title:"庆祝祖国成立70周年！",titleimg:"",video:!1,sharea:{shareimg:"../../static/datapic/44.jpg",sharetitle:"庆祝祖国成立70周年！"},positiona:"深圳 龙岗",sharenum:30,pinglunnum:100,zannum:50}]}]}},onReachBottom:function(){this.loadtop()},methods:{tabtap:function(t){this.tabindex=t},watchchange:function(t){this.tabindex=t.detail.current},isgz:function(e){this.topiclista[this.tabindex].list[e].isguanzhu=!0,t.showToast({title:"关注成功",icon:"none",mask:!0})},loadtop:function(){var t=this;"上拉加载更多👆"==this.topiclista[this.tabindex].loadtext&&(this.topiclista[this.tabindex].loadtext="加载中o(*￣▽￣*)ブ",setTimeout(function(){var e={userimg:"../../static/userpic/19.jpg",username:"李四",userage:"37",sex:1,isguanzhu:!1,title:"庆祝祖国成立70周年！",titleimg:"../../static/datapic/44.jpg",video:{bofangnum:"20w",shijian:"2:47"},sharea:!1,positiona:"深圳 龙岗",sharenum:30,pinglunnum:100,zannum:50};t.topiclista[t.tabindex].list.push(e),t.topiclista[t.tabindex].loadtext="上拉加载更多👆"},1e3))}}};e.default=o}).call(this,i("6e42")["default"])},"7bf2":function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement;t._self._c},u=[];i.d(e,"b",function(){return a}),i.d(e,"c",function(){return u}),i.d(e,"a",function(){return n})},"8b3f":function(t,e,i){"use strict";(function(t){i("1641"),i("921b");n(i("66fd"));var e=n(i("c493"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])},a8de:function(t,e,i){"use strict";var n=i("b41f"),a=i.n(n);a.a},b41f:function(t,e,i){},ba4b:function(t,e,i){"use strict";i.r(e);var n=i("0e5a"),a=i.n(n);for(var u in n)"default"!==u&&function(t){i.d(e,t,function(){return n[t]})}(u);e["default"]=a.a},c493:function(t,e,i){"use strict";i.r(e);var n=i("6569"),a=i("f66b");for(var u in a)"default"!==u&&function(t){i.d(e,t,function(){return a[t]})}(u);var s,r=i("f0c5"),o=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);e["default"]=o.exports},f66b:function(t,e,i){"use strict";i.r(e);var n=i("6744"),a=i.n(n);for(var u in n)"default"!==u&&function(t){i.d(e,t,function(){return n[t]})}(u);e["default"]=a.a}},[["8b3f","common/runtime","common/vendor"]]]);
});
require('pages/topicdetail/topicdetail.js');
__wxRoute = 'compoents/topic/topic';__wxRouteBegin = true;__wxAppCurrentFile__ = 'compoents/topic/topic.js';

define('compoents/topic/topic.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["compoents/topic/topic"],{"0e5a":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={props:{item:Object}};n.default=u},"39a0":function(t,n,e){"use strict";e.r(n);var u=e("7bf2"),a=e("ba4b");for(var c in a)"default"!==c&&function(t){e.d(n,t,function(){return a[t]})}(c);e("a8de");var r,o=e("f0c5"),f=Object(o["a"])(a["default"],u["b"],u["c"],!1,null,"49bb7fa0",null,!1,u["a"],r);n["default"]=f.exports},"610c":function(t,n,e){"use strict";(function(t){e("1641"),e("921b");u(e("66fd"));var n=u(e("39a0"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"7bf2":function(t,n,e){"use strict";var u,a=function(){var t=this,n=t.$createElement;t._self._c},c=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return c}),e.d(n,"a",function(){return u})},a8de:function(t,n,e){"use strict";var u=e("b41f"),a=e.n(u);a.a},b41f:function(t,n,e){},ba4b:function(t,n,e){"use strict";e.r(n);var u=e("0e5a"),a=e.n(u);for(var c in u)"default"!==c&&function(t){e.d(n,t,function(){return u[t]})}(c);n["default"]=a.a}},[["610c","common/runtime","common/vendor"]]]);
});
require('compoents/topic/topic.js');
__wxRoute = 'pages/userlist/userlist';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/userlist/userlist.js';

define('pages/userlist/userlist.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/userlist/userlist"],{2257:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){return n.e("compoents/index/swiper-head").then(n.bind(null,"f659"))},s=function(){return n.e("compoents/user-list/user-list").then(n.bind(null,"e907"))},i=function(){return n.e("compoents/common/load-more").then(n.bind(null,"2ef8"))},a=function(){return n.e("compoents/common/no-thing").then(n.bind(null,"ea30"))},r={components:{swiperHead:u,userList:s,loadMore:i,noThing:a},data:function(){return{swheigth:0,tabindex:0,linewidth:38,scroll:0,tablist:[{name:"互关",id:"huguan",num:10},{name:"关注",id:"guanzhu",num:10},{name:"粉丝",id:"fensi",num:10}],newlist:[{loadtext:"上拉加载更多👆",list:[{userpic:"../../static/userpic/10.jpg",username:"老马",age:25,sex:0,isguanzhu:!1},{userpic:"../../static/userpic/10.jpg",username:"奇葩",age:18,sex:1,isguanzhu:!0},{userpic:"../../static/userpic/10.jpg",username:"老马",age:25,sex:0,isguanzhu:!1},{userpic:"../../static/userpic/10.jpg",username:"奇葩",age:18,sex:1,isguanzhu:!0},{userpic:"../../static/userpic/10.jpg",username:"老马",age:25,sex:0,isguanzhu:!1},{userpic:"../../static/userpic/10.jpg",username:"奇葩",age:18,sex:1,isguanzhu:!0},{userpic:"../../static/userpic/10.jpg",username:"老马",age:25,sex:0,isguanzhu:!1},{userpic:"../../static/userpic/10.jpg",username:"奇葩",age:18,sex:1,isguanzhu:!0},{userpic:"../../static/userpic/10.jpg",username:"奇葩",age:18,sex:1,isguanzhu:!0},{userpic:"../../static/userpic/10.jpg",username:"奇葩",age:18,sex:1,isguanzhu:!0},{userpic:"../../static/userpic/10.jpg",username:"奇葩",age:18,sex:1,isguanzhu:!0},{userpic:"../../static/userpic/10.jpg",username:"奇葩",age:18,sex:1,isguanzhu:!0}]},{loadtext:"上拉加载更多👆",list:[{userpic:"../../static/userpic/10.jpg",username:"老马",age:25,sex:0,isguanzhu:!1},{userpic:"../../static/userpic/10.jpg",username:"奇葩",age:18,sex:1,isguanzhu:!0}]},{loadtext:"上拉加载更多👆",list:[]}]}},methods:{watchchange:function(e){this.tabindex=e.detail.current},tabtap:function(e){this.tabindex=e},loadtop:function(e){var t=this;"上拉加载更多👆"==this.newlist[e].loadtext&&(this.newlist[e].loadtext="加载中o(*￣▽￣*)ブ",setTimeout(function(){var n={userpic:"../../static/userpic/11.jpg",username:"马化腾",age:25,sex:0,isguanzhu:!1};t.newlist[e].list.push(n),t.newlist[e].loadtext="上拉加载更多👆"},1e3))}},onLoad:function(){var t=this;e.getSystemInfo({success:function(n){var u=n.windowHeight-e.upx2px(100);t.swheigth=u}})},onNavigationBarButtonTap:function(t){0==t.index&&e.navigateBack({delta:"1"})}};t.default=r}).call(this,n("6e42")["default"])},6670:function(e,t,n){"use strict";var u,s=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"b",function(){return s}),n.d(t,"c",function(){return i}),n.d(t,"a",function(){return u})},"73cd":function(e,t,n){"use strict";n.r(t);var u=n("6670"),s=n("86f4");for(var i in s)"default"!==i&&function(e){n.d(t,e,function(){return s[e]})}(i);var a,r=n("f0c5"),c=Object(r["a"])(s["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],a);t["default"]=c.exports},"86f4":function(e,t,n){"use strict";n.r(t);var u=n("2257"),s=n.n(u);for(var i in u)"default"!==i&&function(e){n.d(t,e,function(){return u[e]})}(i);t["default"]=s.a},d637:function(e,t,n){"use strict";(function(e){n("1641"),n("921b");u(n("66fd"));var t=u(n("73cd"));function u(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])}},[["d637","common/runtime","common/vendor"]]]);
});
require('pages/userlist/userlist.js');
__wxRoute = 'pages/userchat/userchat';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/userchat/userchat.js';

define('pages/userchat/userchat.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/userchat/userchat"],{"1a0f":function(t,e,n){"use strict";(function(t){n("1641"),n("921b");i(n("66fd"));var e=i(n("53a2"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"353a":function(t,e,n){"use strict";var i=n("5df8"),a=n.n(i);a.a},"38e2":function(t,e,n){"use strict";n.r(e);var i=n("cf91"),a=n.n(i);for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);e["default"]=a.a},"3efb":function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement;t._self._c},c=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return c}),n.d(e,"a",function(){return i})},"53a2":function(t,e,n){"use strict";n.r(e);var i=n("3efb"),a=n("38e2");for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);n("353a");var u,r=n("f0c5"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);e["default"]=s.exports},"5df8":function(t,e,n){},cf91:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("147b"));function a(t){return t&&t.__esModule?t:{default:t}}var c=function(){return n.e("compoents/userchat/user-chat").then(n.bind(null,"528a"))},u=function(){return n.e("compoents/userchat/user-chat-list").then(n.bind(null,"f044"))},r={components:{userChat:c,userChatList:u},data:function(){return{text:"",arr:[],scrolltop:0,style:{contentH:0,saveH:0}}},onLoad:function(){this.getmessage(),this.initgetHeight()},onReady:function(){this.getdomH()},methods:{initgetHeight:function(){try{var e=t.getSystemInfoSync();this.style.contentH=e.windowHeight-t.upx2px(120)}catch(n){}},getdomH:function(){var e=this,n=t.createSelectorQuery();n.selectAll("#scrollView >>> .chat-big").boundingClientRect(function(t){t.forEach(function(t){e.style.saveH+=t.height,e.style.contentH<e.style.saveH&&(e.scrolltop=e.style.saveH)})}).exec()},getmessage:function(){for(var t=[{isme:!1,userpic:"../../static/userpic/11.jpg",type:"text",data:"哈哈",time:"1584343652"},{isme:!0,userpic:"../../static/userpic/10.jpg",type:"img",data:"../../static/datapic/12.jpg",time:"1584343992"},{isme:!0,userpic:"../../static/userpic/10.jpg",type:"img",data:"../../static/datapic/12.jpg",time:"1584343992"}],e=0;e<t.length;e++)t[e].persontime=i.default.gettime.getChatTime(t[e].time,e>0?t[e-1].time:0);this.arr=t},submit:function(t){var e=(new Date).getTime(),n={isme:!0,userpic:"../../static/userpic/10.jpg",type:"text",data:t,time:e,persontime:i.default.gettime.getChatTime(e,this.arr[this.arr.length-1].time)};this.arr.push(n),this.getdomH()}}};e.default=r}).call(this,n("6e42")["default"])}},[["1a0f","common/runtime","common/vendor"]]]);
});
require('pages/userchat/userchat.js');
__wxRoute = 'pages/detail/detail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/detail/detail.js';

define('pages/detail/detail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/detail/detail"],{"5a1c":function(t,e,i){"use strict";(function(t){i("1641"),i("921b");n(i("66fd"));var e=n(i("a3f4"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])},"5d62":function(t,e,i){},"8b2a":function(t,e,i){"use strict";var n=i("5d62"),a=i.n(n);a.a},a3f4:function(t,e,i){"use strict";i.r(e);var n=i("e7f7"),a=i("d22e");for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);i("8b2a");var o,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],o);e["default"]=c.exports},bc66:function(t,e,i){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=s(i("147b"));function s(t){return t&&t.__esModule?t:{default:t}}var o=function(){return i.e("compoents/detail/detailinfo").then(i.bind(null,"c5cf"))},r=function(){return i.e("compoents/detail/common-list").then(i.bind(null,"85b8"))},c=function(){return i.e("compoents/userchat/user-chat").then(i.bind(null,"528a"))},u=function(){return Promise.all([i.e("common/vendor"),i.e("compoents/common/share-more")]).then(i.bind(null,"6f0a"))},d={components:{detaiLinfo:o,commonList:r,userChat:c,shareMore:u},data:function(){return{maskshow:!1,providerList:[],list:{userimg:"../../static/userpic/19.jpg",username:"张三",userage:"30",sex:0,isguanzhu:!1,title:"庆祝祖国成立70周年！",titleimg:"../../static/datapic/42.jpg",imgarry:["../../static/datapic/42.jpg","../../static/datapic/43.jpg"],video:!1,sharea:!1,positiona:"深圳 龙岗",sharenum:30,pinglunnum:100,zannum:50},commonlist:{count:20,commonarry:[]}}},onLoad:function(e){var i=this;this.initTitle(JSON.parse(e.detailinfo)),this.commonlistdata(),t.getProvider({service:"share",success:function(t){for(var e=[],n=0;n<t.provider.length;n++)switch(t.provider[n]){case"weixin":e.push({name:"微信好友",id:"weixin",zicon:"weixin",zclass:"weixin",sort:0}),e.push({name:"朋友圈",id:"weixin",type:"WXSenceTimeline",zicon:"huiyuanvip",zclass:"quan",sort:1});break;case"sinaweibo":e.push({name:"新浪微博",id:"sinaweibo",zicon:"xinlangweibo",zclass:"weibo",sort:2});break;case"qq":e.push({name:"QQ好友",id:"qq",zicon:"QQ",zclass:"qq",sort:3});break;default:break}i.providerList=e.sort(function(t,e){return t.sort-e.sort})},fail:function(e){n("log","获取分享通道失败",e," at pages\\detail\\detail.vue:114"),t.showModal({content:"获取分享通道失败",showCancel:!1})}})},onNavigationBarButtonTap:function(t){0==t.index&&this.alertmask()},methods:{alertmask:function(){this.maskshow=!this.maskshow},submit:function(t){var e={id:1,fid:0,username:"马云",userpic:"../../static/userpic/10.jpg",data:t,time:a.default.gettime.gettime((new Date).getTime())};this.commonlist.commonarry.push(e)},commonlistdata:function(){for(var t=[{id:1,fid:0,username:"马云",userpic:"../../static/userpic/10.jpg",data:"钱是万能的！",time:"1585387841"},{id:2,fid:1,username:"王健林",userpic:"../../static/userpic/11.jpg",data:"钱是万能的！",time:"1585387841"},{id:3,fid:0,username:"周星驰",userpic:"../../static/userpic/12.jpg",data:"钱是万能的！",time:"1585387841"},{id:4,fid:0,username:"李彦宏",userpic:"../../static/userpic/13.jpg",data:"钱是万能的！",time:"1585387841"},{id:5,fid:3,username:"测试",userpic:"../../static/userpic/15.jpg",data:"钱是万能的！",time:"1585387841"}],e=0;e<t.length;e++)t[e].time=a.default.gettime.gettime(t[e].time);this.commonlist.commonarry=t},initTitle:function(e){t.setNavigationBarTitle({title:e.contents})}}};e.default=d}).call(this,i("6e42")["default"],i("0de9")["default"])},d22e:function(t,e,i){"use strict";i.r(e);var n=i("bc66"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=a.a},e7f7:function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement;t._self._c},s=[];i.d(e,"b",function(){return a}),i.d(e,"c",function(){return s}),i.d(e,"a",function(){return n})}},[["5a1c","common/runtime","common/vendor"]]]);
});
require('pages/detail/detail.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

