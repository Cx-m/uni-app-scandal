<template>
	<view class="common-list u-f-d">
		 <view class="common-list-left">
			 <image :src="item.userimg" mode="widthFix"></image>
		 </view>
		 <view class="common-list-right">
			 <view>
				 <view class="u-f-aj">
					 <view class="u-f-aj">
						 <view>{{item.username}}</view>
						 <!-- 性别年龄图标 -->
						<tagSex :sex="item.sex" :userage="item.userage"></tagSex>
					 </view>
					 <view 
					 v-if="!item.isguanzhu" 
					 class="icon iconfont icon-zengjia"
					 @tap="isguan(index)">关注</view>
				 </view>
				 <view class="common-list-right-time">26天前</view> 
			 </view>
			 <view>{{item.title}}</view>
			 <view class="u-f-l">
	         	 <!--图文-->
				 <block v-for="(arrypic,index) in item.imgarry" :key="index">
					  <image :src="arrypic" mode="widthFix" style="margin-bottom: 20upx;"
					  @tap="clickimg(index)"
					  ></image>
				 </block>
				 <!--视频-->
				 <template v-if="item.video">
					 <view class="list-play icon iconfont icon-bofang"></view>
					 <view class="play-info">
					 	{{item.video.bofangnum}} 次播放{{item.video.shijian}}
					 </view>
				 </template>
				 <!-- 左图右文 -->
				 <view class="u-f-aj list-news" v-if="item.sharea">
					 <image :src="item.sharea.shareimg" mode="widthFix"></image>
					 <view>{{item.sharea.sharetitle}}</view>
				 </view>
			 </view>
			 <view class="u-f-aj">
				 <view>
					{{item.positiona}}
				 </view>
				 <view class="u-f-d">
					 <view class="icon iconfont icon-zhuanfa">{{item.sharenum}}</view>
					 <view class="icon iconfont icon-pinglun1">{{item.pinglunnum}}</view>
					 <view class="icon iconfont icon-ccdbaa">{{item.zannum}}</view>
				 </view>
			 </view>
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
		},
		methods:{
			isguan(index){
				this.$emit('isgz',index);
			},
			clickimg(index){
				 // 预览图片
				       uni.previewImage({
						current:index,
						urls: this.item.imgarry,
						indicator:'default', 
						longPressActions: {
							itemList: ['发送给朋友', '保存图片', '收藏'],
							success: function(data) {
								console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
							},
							fail: function(err) {
								console.log(err.errMsg);
							}
				            }
				       });
			}
		}
	}
</script>

<style scoped>
    @import "../../common/list.css";
	.common-list-right{
		border-bottom: none;
	}
	.common-list{
		border-bottom: 1upx solid #EEEEEE;
	}
	.common-list-right-time{
		color: #CDCDCD!important;
		font-size: 25upx!important;
		padding: 0!important;
		background: #FFFFFF!important;
	}
	.common-list-right>view:nth-child(1)>view:nth-child(1)>view:nth-child(1)>view:nth-child(1){
	    color: #9B9B9B;
		font-size: 32upx;
	}
	.common-list-right>view:nth-child(1)>view:nth-child(1)>view:nth-child(2){
		margin-right: 20upx;
		background-color: #F4F4F4;
		color: #050505;
		padding: 0 15upx;
		font-weight: 600;
		border-radius: 5upx;
		font-size: 28upx;
	}
	
</style>
