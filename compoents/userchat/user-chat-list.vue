<template>
	<view class="chat-big">
		<view class="user-chat-time u-f-ajc" v-if="item.persontime">{{item.persontime}}</view>
		<view class="user-chat-list u-f-d" :class="{'user-char-me':item.isme}">
		   <image v-if="!item.isme" :src="item.userpic" mode="widthFix" lazy-load></image> 
			<view class="user-chat-title u-f-ajc">
				<!-- 文字 -->
				<text v-if="item.type=='text'">{{item.data}}</text>
				<!-- 图片 -->
				<image v-if="item.type=='img'" :src="item.data" mode="widthFix" lazy-load></image>
			</view>
			<image v-if="item.isme" :src="item.userpic" mode="widthFix" lazy-load></image>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			item:Object,
			index:Number
		}
	}
</script>

<style>
.chat-big{
	 margin: 0 30upx 30upx 30upx; 
}
.user-chat-list{
}
.user-chat-list>image{
	width: 100upx;
	height: 100upx;
	border-radius: 100%;
	flex-shrink: 0;
}
.user-chat-title{
	position: relative;
	background: #F4F4F4;
	padding: 25upx;
	margin-left: 20upx;
	border-radius: 20upx;
	margin-right: 100upx;
}
.user-chat-title:after{
	position: absolute;
	left: -30upx;
	right: 0;
	top: 30upx;
	content: '';
	width: 0;
	height: 0;
	border: 16upx solid #F4F4F4;
	border-color: transparent #F4F4F4 transparent transparent;
}
.user-char-me{
	justify-content: flex-end;
}
.user-char-me .user-chat-title{
	margin-left: 100upx;
	margin-right: 20upx;
}
.user-char-me .user-chat-title:after{
	left: auto;
	right: -30upx;
	border-color: transparent transparent transparent #F4F4F4;
}
.user-chat-title>image{
	max-width: 150upx;
	max-height: 200upx;
}
.user-chat-time{
	color: #aeaeae;
	font-size: 24upx;
	padding: 50upx 0;
}
</style>
