<template>
	<view>
		<!-- 聊天气泡 -->
		<scroll-view id="scrollView" scroll-y="true" :scroll-top="scrolltop" :scroll-with-animation="true"
		:style="{height:style.contentH+'px'}" show-scrollbar="true">
			<block v-for="(item,index) in arr" :key="index">
				<userChatList :item="item" :index="index"></userChatList>
			</block>
		</scroll-view>
		<!-- 输入框 -->
		<userChat @submit="submit"></userChat>
	</view>
</template>

<script>
	import userChat from "../../compoents/userchat/user-chat.vue";
	import userChatList from "../../compoents/userchat/user-chat-list.vue";
	import time from "../../common/time.js";
	export default {
		components:{
			userChat,
			userChatList
		},
		data(){
			return{
				text:'',
				arr:[],
				scrolltop:0,
				style:{
					contentH:0,
					saveH:0
				}
			}
		},
		onLoad() {
			this.getmessage();
			this.initgetHeight();
		},
		onReady() {
			this.getdomH();
		},
		methods:{
		    //获取可用高度
			initgetHeight(){
				try {
				    const res = uni.getSystemInfoSync();
				  //  console.log(res.windowHeight);
					this.style.contentH=res.windowHeight-uni.upx2px(120);
					//console.log(this.style.contentH)
				} catch (e) {
				    // error
				}
			},
			//获取dom节点
			getdomH(){
				const query = uni.createSelectorQuery();
				query.select('#scrollView').boundingClientRect();
				query.selectAll('.chat-big').boundingClientRect();
				query.exec((res)=>{
					res[1].forEach((ret)=>{ 
					  this.style.saveH+=ret.height;
					  if(this.style.contentH < this.style.saveH){
						  this.scrolltop=this.style.saveH;
					  }
					})
				})
				/* query.selectAll("#scrollView .chat-big").boundingClientRect(data => {
				//  console.log("得到布局位置信息" + JSON.stringify(data));
				 // console.log("节点离页面顶部的距离为" + data.top);
				  data.forEach((ret)=>{
					  this.style.saveH+=ret.height;
					  if(this.style.contentH < this.style.saveH){
						  this.scrolltop=this.style.saveH;
					  }
				  })
				}).exec(); */
			},
			//从服务器获取聊天
			getmessage(){
				let list=[
					{   
						isme:false,
						userpic:'../../static/userpic/11.jpg',
						type:'text',
						data:'哈哈',
						time:'1584343652'
					},
					{
						isme:true,
						userpic:'../../static/userpic/10.jpg',
						type:'img',
						data:'../../static/datapic/12.jpg',
						time:'1584343992'
					},
					{
						isme:true,
						userpic:'../../static/userpic/10.jpg',
						type:'img',
						data:'../../static/datapic/12.jpg',
						time:'1584343992'
					}
				];
				for (var i=0; i<list.length; i++) {
					list[i].persontime=time.gettime.getChatTime(list[i].time,
					i>0? list[i-1].time:0)
				}
				this.arr=list;
			},
			submit(data){
				//console.log(data)
				let now=new Date().getTime();
				let obj={
						isme:true,
						userpic:'../../static/userpic/10.jpg',
						type:'text',
						data: data,
						time:now,
						persontime:time.gettime.getChatTime(now,this.arr[this.arr.length-1].time)
					};
					
				this.arr.push(obj);
				this.getdomH();
			}
		}
	}
</script>

<style>
/* ::-webkit-scrollbar {  
	    width: 3px !important; 
		height: 0 !important;  
		-webkit-appearance: none;  
	    background: blue;  
	} */
</style>
