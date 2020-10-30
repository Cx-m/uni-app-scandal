<template>
	<view style="padding: 20rpx;">
		<view class="userabout-header u-f-ajc u-f-l">
			<image src="../../static/common/logo.png" lazy-load mode="widthFix"></image>
			<view>version 1.0.0</view>
		</view>
		<block v-for="(item,index) in homelist" :key="index">
			<homeList :item="item"></homeList> 
		</block>
	</view>
</template>

<script>
	import homeList from "../../compoents/home/home-list.vue"
	export default {
		components:{
			homeList
		},
		data() {
			return {
				homelist:[
					{icon:'',name:'新版本检测',type:'navigateTo',urls:''},
					{icon:'',name:'仿糗事百科用户协议',type:'navigateTo',urls:''}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.userabout-header{padding: 40rpx 0;}
.userabout-header>image{width: 65%;margin-top: 50rpx;margin-bottom: 30rpx;}
.userabout-header>view{color: #CCCCCC;}
</style>
