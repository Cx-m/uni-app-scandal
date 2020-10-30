<template>
	<view class="remen">
		<view class="remen-one u-f-aj">
		    <view>热门分类</view>
			<view class="u-f-ajc" @tap="opentopicnav">
				更多<view class="icon iconfont icon-jinru"></view>
			</view>
		</view>
		 <view class="remen-two u-f-ajc">
			<block v-for="(item,index) in arryfenlei" :key="index">
				<view>{{item.name}}</view>
			</block>
		</view> 
	</view>
</template>

<script>
	export default {
		props:{
			arryfenlei:Array
		},
		methods:{
			opentopicnav(){
				uni.navigateTo({
					url:'../../pages/topicnav/topicnav'
				})
			}
		}
	}
</script>

<style scoped>
	/*热门样式*/
	.remen{padding: 0 25upx;border-bottom: 1px solid #EEEEEE;border-top: 1px solid #EEEEEE;}
	.remen-one>view:first-child{font-size: 30upx; font-family: "宋体","SimSun";}
	.remen-one>view:last-child{font-size: 30upx;color: #D6D6D6;}
	.remen-two{padding: 30upx 0;}
	.remen-two>view{padding: 3upx 16upx;background: #F7F7F7;
	color: #9F9F9F;border-radius: 8upx;margin-left: 15upx;margin-right: 15upx;}
</style>
