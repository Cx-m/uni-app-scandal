<template>
	<view>
		<detaiLinfo :item="list"></detaiLinfo>
		<view class="common-list-title">最新评论 {{commonlist.count}}</view>
		<view class="uni-comment u-comment">
			<!-- 一级评论 -->
			<block v-for="(item,index) in commonlist.commonarry" :key="index">
				<commonList :item="item" :index="index"></commonList>
			</block>
		</view>
		<view style="height: 130upx;"></view>
		<!-- 输入框 -->
		<userChat @submit="submit"></userChat>
		<!-- 分享 -->
		<shareMore :maskshow="maskshow" :providerList="providerList" @ismask="alertmask"></shareMore>
	</view>
</template>

<script>
	import detaiLinfo from "../../compoents/detail/detailinfo.vue";
	import time from "../../common/time.js";
	import commonList from "../../compoents/detail/common-list.vue";
	import userChat from "../../compoents/userchat/user-chat.vue";
	import shareMore from "../../compoents/common/share-more.vue";
	export default {
		components:{
			detaiLinfo,
			commonList,
			userChat,
			shareMore
		},
		data() {
			return {
				maskshow:false,
				providerList:[],
				list:{
					//图文
				  userimg:'../../static/userpic/19.jpg',
				  username:'张三',
				  userage:'30',
				  sex:0,//0代表男，1 代表女
				  isguanzhu:false,
				  title:'庆祝祖国成立70周年！',
				  titleimg:'../../static/datapic/42.jpg',
				  imgarry:['../../static/datapic/42.jpg','../../static/datapic/43.jpg'],
				  video:false,
				  sharea:false,
				  positiona:'深圳 龙岗',
				  sharenum:30,
				  pinglunnum:100,
				  zannum:50
			    },
			    commonlist:{
					count:20,
					commonarry:[]
				}
			}
		},
		onLoad(e) {
			//console.log(typeof(e.detailinfo))
			this.initTitle(JSON.parse(e.detailinfo));
			this.commonlistdata();
			uni.getProvider({
				service: 'share',
				success: (e) => {
					let data = []
					for (let i = 0; i < e.provider.length; i++) {
						switch (e.provider[i]) {
							case 'weixin':
								data.push({
									name: '微信好友',
									id: 'weixin',
									zicon:'weixin',
									zclass:'weixin',
									sort:0
								})
								data.push({
									name: '朋友圈',
									id: 'weixin',
									type:'WXSenceTimeline',
									zicon:'huiyuanvip',
									zclass:'quan',
									sort:1
								})
								break;
							case 'sinaweibo':
								data.push({
									name: '新浪微博',
									id: 'sinaweibo',
									zicon:'xinlangweibo',
									zclass:'weibo',
									sort:2
								})
								break;
							case 'qq':
								data.push({
									name: 'QQ好友',
									id: 'qq',
									zicon:'QQ',
									zclass:'qq',
									sort:3
								})
								break;
							default:
								break;
						}
					}
					this.providerList = data.sort((x,y) => {
						return x.sort - y.sort
					});
					//console.log(this.providerList)
				},
				fail: (e) => {
					console.log('获取分享通道失败', e);
					uni.showModal({
						content:'获取分享通道失败',
						showCancel:false
					})
				}
			});
		},
		//监听导航右边按钮
		onNavigationBarButtonTap(e) {
			if(e.index==0){
				this.alertmask();
			}
		},
		methods: {
			//弹出分享
			alertmask(){
				this.maskshow=!this.maskshow;
			},
			//发表评论
			submit(data){
				let obj={
						id:1,
						fid:0,
						username:'马云',
						userpic:'../../static/userpic/10.jpg',
						data:data,
						time:time.gettime.gettime(new Date().getTime())
				};
				this.commonlist.commonarry.push(obj);
			},
			//获取评论
			commonlistdata(){
				let arr=[
						{
							id:1,
							fid:0,
							username:'马云',
							userpic:'../../static/userpic/10.jpg',
							data:'钱是万能的！',
							time:'1585387841'
						},
						{
							id:2,
							fid:1,
							username:'王健林',
							userpic:'../../static/userpic/11.jpg',
							data:'钱是万能的！',
							time:'1585387841'
						},
						{
							id:3,
							fid:0,
							username:'周星驰',
							userpic:'../../static/userpic/12.jpg',
							data:'钱是万能的！',
							time:'1585387841'
						},
						{
							id:4,
							fid:0,
							username:'李彦宏',
							userpic:'../../static/userpic/13.jpg',
							data:'钱是万能的！',
							time:'1585387841'
						},
						{
							id:5,
							fid:3,
							username:'测试',
							userpic:'../../static/userpic/15.jpg',
							data:'钱是万能的！',
							time:'1585387841'
						}
					];
					for (let i=0;i<arr.length;i++) {
						arr[i].time=time.gettime.gettime(arr[i].time)
					}
					this.commonlist.commonarry=arr;
			},
			//初始化数据
			//修改标题
			initTitle(obj){
				 uni.setNavigationBarTitle({
				    title: obj.contents
				}); 
			}
		}
	}
</script>

<style lang="scss">
/* 评论 */
.u-comment{
	padding: 0 20rpx;
}
.common-list-title{
	font-size: 30rpx;
	font-weight: bold;
	padding: 20rpx;
}
</style>
