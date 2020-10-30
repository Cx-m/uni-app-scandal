<template>
	<view class="common-list u-f-d animated zoomInUp fast">
		 <view class="common-list-left">
			 <image :src="item.userimg" mode="widthFix"></image>
		 </view>
		 <view class="common-list-right">
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
			 <view>{{item.title}}</view>
			 <view class="u-f-ajc">
	         	 <!--图文-->
				 <image :src="item.titleimg" mode="widthFix" v-if="item.titleimg"></image>
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
	import tagSex from "./tag-sex.vue";
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
			}
		
		}
	}
</script>

<style scoped>
@import "../../common/list.css";
</style>
