<template>
	<view>
	 <view class="topload">{{loadtext}}</view>
	</view> 
</template>

<script>
	export default{
		props:{
			loadtext:String
		}
	}
</script>

<style scoped>
	.topload{
		padding: 15upx 0;
		text-align: center;
		font-size: 25upx;
		color: #010101;
	}
</style>
