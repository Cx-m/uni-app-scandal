(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/userchat/userchat"],{"1a0f":function(t,e,n){"use strict";(function(t){n("1641"),n("921b");i(n("66fd"));var e=i(n("53a2"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"353a":function(t,e,n){"use strict";var i=n("5df8"),a=n.n(i);a.a},"38e2":function(t,e,n){"use strict";n.r(e);var i=n("cf91"),a=n.n(i);for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);e["default"]=a.a},"3efb":function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement;t._self._c},c=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return c}),n.d(e,"a",function(){return i})},"53a2":function(t,e,n){"use strict";n.r(e);var i=n("3efb"),a=n("38e2");for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);n("353a");var u,r=n("f0c5"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);e["default"]=s.exports},"5df8":function(t,e,n){},cf91:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("147b"));function a(t){return t&&t.__esModule?t:{default:t}}var c=function(){return n.e("compoents/userchat/user-chat").then(n.bind(null,"528a"))},u=function(){return n.e("compoents/userchat/user-chat-list").then(n.bind(null,"f044"))},r={components:{userChat:c,userChatList:u},data:function(){return{text:"",arr:[],scrolltop:0,style:{contentH:0,saveH:0}}},onLoad:function(){this.getmessage(),this.initgetHeight()},onReady:function(){this.getdomH()},methods:{initgetHeight:function(){try{var e=t.getSystemInfoSync();this.style.contentH=e.windowHeight-t.upx2px(120)}catch(n){}},getdomH:function(){var e=this,n=t.createSelectorQuery();n.selectAll("#scrollView >>> .chat-big").boundingClientRect(function(t){t.forEach(function(t){e.style.saveH+=t.height,e.style.contentH<e.style.saveH&&(e.scrolltop=e.style.saveH)})}).exec()},getmessage:function(){for(var t=[{isme:!1,userpic:"../../static/userpic/11.jpg",type:"text",data:"哈哈",time:"1584343652"},{isme:!0,userpic:"../../static/userpic/10.jpg",type:"img",data:"../../static/datapic/12.jpg",time:"1584343992"},{isme:!0,userpic:"../../static/userpic/10.jpg",type:"img",data:"../../static/datapic/12.jpg",time:"1584343992"}],e=0;e<t.length;e++)t[e].persontime=i.default.gettime.getChatTime(t[e].time,e>0?t[e-1].time:0);this.arr=t},submit:function(t){var e=(new Date).getTime(),n={isme:!0,userpic:"../../static/userpic/10.jpg",type:"text",data:t,time:e,persontime:i.default.gettime.getChatTime(e,this.arr[this.arr.length-1].time)};this.arr.push(n),this.getdomH()}}};e.default=r}).call(this,n("6e42")["default"])}},[["1a0f","common/runtime","common/vendor"]]]);