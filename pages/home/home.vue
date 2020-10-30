<template>
	<view class="animated fadeIn slow"> 
		<template v-if="!islogin">
			<!-- 未登录 -->
			<view class="home-nologin-title u-f-ajc">登陆仿糗百，体验更多功能</view>
			<!-- 更多登陆 -->
			<homeOtherLogin></homeOtherLogin>
			<!-- 账号密码登陆 -->
			<view class="home-password u-f-ajc" @tap="tologin">账号密码登陆<view class="icon iconfont icon-jinru"></view></view>
		</template>
		<!-- 已登陆 -->
		<homeInfo :homeinfo="homeinfo" v-else></homeInfo>
		<!-- 数据 -->
		<homeData :homedata="homedata"></homeData> 
		<!-- 广告位 -->
		<view class="home-adv u-f-ajc">
			<image src="../../static/demo/demo20.jpg" mode="widthFix" lazy-load></image>
		</view>
		<!-- 功能 -->
		<view class="home-list">
			<block v-for="(item,index) in homelist" :key="index">
				<homeList :item="item" :index="index"></homeList>
			</block>
		</view>
	</view>
</template>

<script>
	import homeList from '../../compoents/home/home-list.vue';
	import homeInfo from '../../compoents/home/home-info.vue';
	import homeOtherLogin from '../../compoents/home/home-other-login.vue';
	import homeData from '../../compoents/home/home-data.vue';
	export default {
		components:{
			homeList,
			homeInfo,
			homeOtherLogin,
			homeData
		},
		data() {
			return {
				islogin:true,
				homelist:[
					{icon:'liulan',name:'浏览历史',type:'',urls:''},
					{icon:'huiyuanvip',name:'糗百认证',type:'',urls:''},
					{icon:'keyboard',name:'审核糗事',type:'',urls:''}
				],
				homeinfo:{
					username:'梦想',
					userpic:'../../static/demo/demo6.jpg',
					totalnum:0,
					todaynum:0
				},
				homedata:[
					{name:'糗事',num:0},
					{name:'动态',num:0},
					{name:'评论',num:0},
					{name:'收藏',num:0}
				]
			}
		},
		onNavigationBarButtonTap(e) { 
			if(e.index==0){
				uni.navigateTo({
					url:'../userset/userset'
				})
			}
		},
		methods:{
			tologin(){
				uni.navigateTo({
				   url:'../login/login' 
				})
			}
		}
	}
</script>

<style>
.home-nologin-title{
	font-size: 32rpx;
}

.home-password{
	font-size: 29rpx;
}
.home-password>view{
	color: #D5D5D5;
}
.home-adv{
	padding: 20rpx;
}
.home-adv>image{
	border-radius: 20rpx;
	height: 150rpx;
}
.home-list{
	padding: 20rpx 40rpx;
}
</style>
