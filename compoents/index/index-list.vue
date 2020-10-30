<template>
	<view class="index-list animated zoomInUp fast">
				 <view class="index-listone u-f-aj">
					 <view class="u-f-a">
						 <image :src="item.userimg" 
						 mode="widthFix" lazy-load></image>
						 {{item.username}}
					 </view>
					 <view class="u-f-a" v-show="!item.guanzhupd" @tap="oo">
						 <view class="icon iconfont icon-zengjia"></view>关注
					 </view>
				 </view>
				 <view class="index-listtwo" @tap="opendetail">
					    {{item.contents}}
				 </view>
				 <view class="index-listthree u-f-ajc" @tap="opendetail">
					 <!--图片-->
					 <image :src="item.contentsimg"
					 mode="widthFix" lazy-load></image>
					 <!--视频-->
					 <template v-if="item.type=='video'">
						 <view class="icon iconfont icon-bofang index-listthree-play"></view>
						 <view class="index-listthree-playinfo">
						 	 {{item.playnum}}次播放&nbsp;&nbsp;&nbsp;{{item.playtime}}
						 </view>
					 </template>
				 </view>
				 <view class="index-listfour u-f-aj">
					 <view class="u-f-a">
						 <view class="u-f-a" hover-class="activegray" hover-stay-time="100" >
						 <view class="icon iconfont icon-zhuanfa"></view>
						 {{item.sharenum}}
						 </view>
						 <view class="u-f-a" hover-class="activegray" hover-stay-time="100" >
						 <view class="icon iconfont icon-pinglun1"></view>
						 {{item.pinglunnum}}
						 </view>
					 </view> 
					 <view class="u-f-a">
						 <view class="u-f-ajr" hover-class="animated rubberBand" 
						 hover-stay-time="1000" 
						 :class="{'activered':(item.biaoqing.index==1)}" 
						 @tap="caozuo('ding')">			    
						    <view class="icon iconfont icon-icon_xiaolian-mian"></view>
							<text>{{item.biaoqing.dingnum}}</text>	 							  				  
						 </view>
						 <view class="u-f-ajr" hover-class="animated rubberBand" 
						 hover-stay-time="1000" 
						 :class="{'activeblue':(item.biaoqing.index==2)}"
						  @tap="caozuo('cai')">
							 <view class="icon iconfont icon-kulian"></view>
							 <text>{{item.biaoqing.cainum}}</text>
						 </view>
					 </view>
				 </view>
	</view>
</template>

<script>
	export default{
		props:{
			item:Object,
			index:Number			
		},
		methods:{
			//关注
			oo(){						
			    this.$emit('guanzhu');
			},
			caozuo(type){
				 this.$emit('caozuo',type);								
			},
			opendetail(){
				uni.navigateTo({
					url:'../../pages/detail/detail?detailinfo='+JSON.stringify(this.item)
				})
			}
			
		}
	}
</script>

<style scoped>
	.index-list{
		padding: 20upx 40upx 0upx 40upx;
		border-bottom: 12upx solid #F2F2F2;
		}
	.index-listone>view:first-child{
		color: #989898;
	}
	.index-listone>view:first-child image{
		width: 85upx;
		height: 85upx;  
		border-radius: 100%;
		margin-right: 15upx;
	}
	.index-listone>view:last-child{
		background-color: #F4F4F4;
		color: #050505;
		padding: 0 15upx;
		font-weight: 600;
		border-radius: 5upx;
	}
	.index-listtwo{
		padding-top: 10upx;
		font-size: 35upx;
		font-weight: 600;
		letter-spacing: 1upx;
		color: #010101;
	}
	.index-listthree{
		position: relative;
		margin-top: 15upx;
	}
	.index-listthree image{
		width: 100%;
		border-radius: 15upx;
	}
	.index-listfour{
		padding: 10upx 0;
		margin-top: 20upx;
		color: #545454;	
	}
	.index-listfour>view:first-child>view{
		margin-right: 15upx;
		width: 100upx;
	}
	.index-listfour>view:last-child>view{
	    width: 120upx;
	}
	.index-listfour>view:first-child>view>view{
		margin-right: 15upx;
	}
	.index-listfour>view:last-child>view>text{
		width: 50upx;
		text-align: right;
	}
	.index-listthree-play{
		position: absolute;
		font-size: 140upx;
		color: #FFFFFF;
	}
	.index-listthree-playinfo{
		position: absolute;
		bottom: 10upx;
		right: 10upx;
		background: rgba(51,51,51,0.72);
		color: #FFFFFF;
		font-size: 24upx;
		padding: 1upx 15upx;
		border-radius: 40upx;
	}
	.activered{
		color: #FF392C;
	}
	.activeblue{
		color: #2B80FF;
	}
	.activegray{
		color: #808080;
	}
</style>
