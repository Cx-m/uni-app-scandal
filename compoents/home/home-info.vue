<template>
	<view class="home-islogin u-f-a" @tap="touserspace">
		<image :src="homeinfo.userpic" mode="widthFix" lazy-load></image>
		<view class="home-islogin-info u-f1">
			<view>{{homeinfo.username}}</view>
			<view>总访客 {{homeinfo.totalnum}} 今日 {{homeinfo.todaynum}}</view>
		</view>
		<view class="icon iconfont icon-jinru"></view>
	</view>
</template>

<script>
	export default{
		props:{
			homeinfo:Object
		},
		methods:{
			touserspace(){
				uni.navigateTo({
					url:'../../pages/userspace/userspace'
				})
			}
		}
	}
</script>

<style scoped>
.home-islogin{
	padding: 20rpx 40rpx;
}
.home-islogin>image{
	width: 100rpx;
	height: 100rpx;
	border-radius: 100%;
	flex-shrink: 0;
	margin-right: 15rpx;
}
.home-islogin>view:first-of-type>view:nth-child(1){
	font-size: 32rpx;
}
.home-islogin>view:first-of-type>view:nth-child(2){
	color: #929292;
}
.home-islogin>view:last-of-type{
	height: 100%;
}	
</style>
