<template>
	<view>
		<!-- 遮罩 -->
			<view class="zhezhao"
			 :class="[showpop?'zhezhaoshow':'zhezhaohide']"
			 v-show="showpop" @tap="hidepop"></view>
			<!-- 弹出层 -->
			<view class="poptanchu"
			 v-show="showpop">
				<view class="poptanchu-friends u-f-a" 
				hover-class="activehover" 
				hover-stay-time="100"
				@tap="lahei"
				>
				<view class="icon iconfont icon-sousuo"></view>
				<view>拉黑</view>
			</view>
			<view class="poptanchu-clear u-f-a" 
			hover-class="activehover" 
			hover-stay-time="100"
			@tap="beizhu"
			>
				<view class="icon iconfont icon-qingchu"></view>
				<view>备注</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			showpop:Boolean
		},
		methods:{
			hidepop(){
				this.$emit('hidepop');
			},
			lahei(){
				this.$emit('lahei');
			},
			beizhu(){
				this.$emit('beizhu');
			}
		}
	}
</script>

<style scoped>
	@-webkit-keyframes show 
	{
	0% {opacity:0;}
	100% {opacity:0.3;}
	}
	@-webkit-keyframes show1
	{
	0% {opacity:0;}
	100% {opacity:1;}
	}
	@-webkit-keyframes hide 
	{
	0% {opacity:0.3;}
	100% {opacity:0;}
	}
.zhezhao{
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: 998;
	background-color: rgba(0, 0, 0, 0.8);
}
.zhezhaoshow{
	opacity: 0.3;
	animation:show 0.5s ease-in-out 0s;
}
.zhezhaohide{
	opacity: 0;
	animation:hide 0.5s ease-in-out 0s;
}
.poptanchu{
	position: fixed;
	right: 20rpx;
	top: 140rpx; 
	width: 40%;
	background: #FFFFFF;
	box-shadow: 0upx 0upx 20upx #CCCCCC;
	z-index: 999;
	opacity:1;
	animation:show1 0.5s ease-in-out 0s;
}
.poptanchu-friends{
	padding: 20upx 25upx; 
}
.poptanchu-friends>view{
	font-weight: bold;
	font-size: 30upx;
}
.poptanchu-friends>view:nth-child(2){margin-left: 20upx;}
.poptanchu-clear{
	padding: 20upx 25upx;
}
.poptanchu-clear>view{
	font-weight: bold;
	font-size: 30upx;
}
.poptanchu-clear>view:nth-child(2){margin-left: 20upx;}
.activehover{background: #F7F7F7;}
</style>
