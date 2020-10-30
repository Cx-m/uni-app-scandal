<template>
	<view>
		<template v-if="list.length>0">
			<!--图文列表-->
			<block v-for="(item,index) in list" :key="index">
			    <indexList :item="item" :index="index"></indexList>
			</block>
			 <!--上拉加载-->
			<loadMore :loadtext="loadtext"></loadMore>
		</template>
		<template v-else-if="isseach&&list.length<1">
			 <!--无数据-->
			<noThing></noThing>
		</template>
	</view>
</template>

<script>
	import indexList from '../../compoents/index/index-list.vue';
	import loadMore from '../../compoents/common/load-more.vue';
	import noThing from '../../compoents/common/no-thing.vue';
	export default {
		components:{
			indexList,
			loadMore,
			noThing
		},
		data() {
			return {
				isseach:false,
				loadtext:"上拉加载更多👆",
				list:[],
				seaechtext:''
			}
		},
		//点击取消
		onNavigationBarButtonTap(e){
			if(e.index==0){
				uni.navigateBack({
					 delta: 1
				})
			}
		},
		//监听输入框内容变化
		onNavigationBarSearchInputChanged(e){
			//console.log(e);
			this.seaechtext=e.text;
		},
		//监听软键盘点击搜索键
		onNavigationBarSearchInputConfirmed(e){
			//console.log(e);
			uni.hideKeyboard();//隐藏软键盘
			if(e.text){
				this.searchdata();
			}
			else{
				uni.showToast({
					title: '请输入搜索内容',
					icon: 'none',
					mask: true
				})
			}
			
		},
		//监听下拉刷新
		onPullDownRefresh() {
			this.searchdata();
		},
		//页面触底
		onReachBottom() {
			this.loadtop();
		},
		methods: {
			//搜索事件
			searchdata(){
				uni.showLoading({ title: '全力搜索中',mask:true});
				//模拟服务器获取数据  keyword:this.seaechtext
				setTimeout(()=> {
					let objarry=[
					{
						userimg:"../../static/userpic/10.jpg",
						username:"昵称",
						guanzhupd:true,
						contents:"我是标题",
						type:"img",//img图片，video视频
						contentsimg:"../../static/datapic/14.jpg",
						biaoqing:{
							index:1,//0表示无操作，1表示顶了，2表示踩了
							dingnum:10,
							cainum:10
						},
						pinglunnum:10,
						sharenum:100
					},
					{
						userimg:"../../static/userpic/10.jpg",
						username:"昵称",
						guanzhupd:true,
						contents:"我是标题",
						type:"video",//img图片，video视频
						playnum:"20w",
						playtime:"2:40",
						contentsimg:"../../static/datapic/14.jpg",
						biaoqing:{
							index:1,//0表示无操作，1表示顶了，2表示踩了
							dingnum:10,
							cainum:10
						},
						pinglunnum:10,
						sharenum:100
					}
				];
				this.list=objarry;
				this.isseach=true;
				uni.hideLoading();
				uni.stopPullDownRefresh();
				}, 1000);
			},
			//上拉事件
			loadtop(){
				if(this.loadtext!="上拉加载更多👆"){return;}					
				this.loadtext="加载中o(*￣▽￣*)ブ";
				setTimeout(()=> {
					let obj={
						userimg:"../../static/userpic/10.jpg",
						username:"昵称",
						guanzhupd:false,
						contents:"我是标题",
						type:"img",//img图片，video视频
						contentsimg:"../../static/datapic/14.jpg",
						biaoqing:{
							index:0,//0表示无操作，1表示顶了，2表示踩了
							dingnum:10,
							cainum:10
						}, 
						pinglunnum:10,
						sharenum:100
					};
					this.list.push(obj);
					this.loadtext="上拉加载更多👆";
					//this.loadtext="没有更多数据了/(ㄒoㄒ)/~~";
				}, 1000);
			}
		}
	}
</script>

<style>

</style>
