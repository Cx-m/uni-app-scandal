<template>
	<view>
		<!-- 遮罩 -->
			<view class="zhezhao" v-show="showpop" @tap="hidepop"></view>
			<!-- 弹出层 -->
			<view class="poptanchu" v-show="showpop">
				<view class="poptanchu-friends u-f-a" 
				hover-class="activehover" 
				hover-stay-time="100"
				@tap="friends"
				>
				<view class="icon iconfont icon-sousuo"></view>
				<view>加糗友</view>
			</view>
			<view class="poptanchu-clear u-f-a" 
			hover-class="activehover" 
			hover-stay-time="100"
			@tap="clear"
			>
				<view class="icon iconfont icon-qingchu"></view>
				<view>清除未读</view>
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
			friends(){
				this.$emit('friends');
			},
			clear(){
				this.$emit('clear');
			}
		}
	}
</script>

<style scoped>
.zhezhao{
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: 998;
}
.poptanchu{
	position: fixed;
	right: 0;
	top: 0;
	width: 40%;
	background: #FFFFFF;
	box-shadow: 0upx 0upx 20upx #CCCCCC;
	z-index: 999;
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
