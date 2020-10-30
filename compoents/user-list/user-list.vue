<template>
	<view class="user-list u-f-ajc animated fadeInLeft fast">
		<!-- 左 -->
		<view class="u-f-ajc">
			<image :src="item.userpic" mode="widthFix" lazy-load></image>
		</view>
		<!-- 中 -->
		<view>
			<view>{{item.username}}</view>
			<view style="display: inline-block;width: 45px;">
				<tagSex :sex="item.sex" :userage="item.age"></tagSex>
			</view>
		</view>
		<!-- 右 -->
		<view>
			<view class="icon iconfont u-f-ajc"
			:class="[item.isguanzhu?'icon-xuanze-yixuan':'icon-zengjia1']"
			></view>
		</view>
	</view>
</template>

<script>
	import tagSex from "../common/tag-sex.vue";
	export default {
		components:{
			tagSex
		},
		props:{
			item:Object,
			index:Number
		}
	}
</script>

<style scoped>
	.user-list{
		margin: 0 20upx;
		padding: 20upx 0;
		border-bottom: 1upx solid #EEEEEE;
	}
	.user-list>view:nth-child(1)>image{
		width: 100upx;
		height: 100upx;
		border-radius: 100%;
		margin-right: 10upx;
		flex-shrink: 0;
	}
	.user-list>view:nth-child(2){
		flex: 1;
	}
	.user-list>view:nth-child(3){
		width: 80upx;
		color: #CCCCCC;
	}
	.user-list>view:nth-child(2)>view:nth-child(1){
		padding-left: 10upx;
		font-size: 35upx;
	}
	.icon-zengjia1{
		color: #F87B1E;
	}
</style>
