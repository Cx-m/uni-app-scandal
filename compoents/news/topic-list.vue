<template>
	<view class="top-lists u-f-a" @tap="opendatel">
		<image :src="item.imgsrc" mode="widthFix" lazy-load></image>
		<view> 
			<view>{{item.titlea}}</view>
			<view>{{item.neirong}}</view>
			<view>动态 {{item.dongtainum}} 今日 {{item.jinrinum}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			item:Object,
			index:Number
		},
		methods:{
			opendatel(){
				uni.navigateTo({
					url:'../../pages/topicdetail/topicdetail'
				})
			}
		}
	}
</script>

<style scoped>
.top-lists{
	padding: 20upx 0;
	border-bottom: 1px solid #EFEFEF;
}
.top-lists image{
	width: 180upx;
	height: 180upx;
	border-radius:10upx ;
	} 
.top-lists>view{
	margin-left: 20upx;
}
.top-lists>view>view:nth-child(1){
	font-size: 30upx;
}
.top-lists>view>view:nth-child(2){
	font-size: 25upx;
	color: #A4A4A4;
}
.top-lists>view>view:nth-child(3){
	font-size: 25upx;
	color: #A4A4A4;
}
</style>
