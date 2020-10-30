<template>
	<view>
		<!-- 模糊背景 -->
		<view class="mohuimg">
			<image src="../../static/topicpic/13.jpeg" mode="aspectFill" lazy-load></image>
		</view>
		<!-- 信息 -->
		<view class="bigview">
			<view class="u-f-a one">
				<image :src="item.titleimg" mode="widthFix" lazy-load></image>
				<view>#{{item.titlename}}#</view>
			</view>
			<view class="u-f-a two">
				<view>动态 {{item.dongtainum}}</view>
				<view>今日 {{item.jinrinum}}</view>
			</view>
			<view class="three">
				{{item.desc}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			item:Object
		}
	}
</script>

<style scoped>
.mohuimg{
	width: 100%;
	height: 300upx;
	overflow: hidden;
}
.mohuimg>image{
	width: 100%;
	filter: blur(10px);
}
.bigview{
	padding: 0 30upx 20upx 30upx;
}
.one{
	padding: 10upx 0;
	position: relative;
}
.one>image{
	width: 150upx;
	height: 150upx;
	border-radius: 15upx;
	position: absolute;
	top: -75upx;
}
.one>view{
	font-size: 35upx;
	margin-left: 170upx;
	flex: 1;
}
.two>view{
	color: #CECECE;
	font-size: 25upx;
	padding: 10upx 0 0 0;
}
.two>view:nth-child(2){
	margin-left: 25upx;
}
.three{
	color: #A3A3A3;
	font-size: 28upx;
	padding-top: 5upx;
}
</style>
