<template>
	<view>
		<view class="zhitiao u-f-a animated fadeIn fast" @tap="opendetail">
			<image :src="item.paperimg" mode="widthFix" lazy-load></image>
			<view class="u-f-aj">
				<view class="zhitiao-one">
					<view>{{item.papertitle}}</view>
					<view>{{item.paperinfo}}</view>
				</view>	
				<view class="zhitiao-two">
					<view>{{item.papertime}}</view>
					<template v-if="item.papertext>0">
						<view>
							<uni-badge :text="item.papertext" type="error"></uni-badge>
						</view>
					</template>
				</view>	
			</view>
		</view>
	</view>
</template>

<script>
	import uniBadge from "../uni-badge/uni-badge.vue";
	export default {
		components:{
			uniBadge
		},
		props:{
			item:Object
		},
		methods:{
			opendetail(){
				uni.navigateTo({
					url:'../../pages/userchat/userchat'
				})
			}
		}
	}
</script>

<style scoped>
	.zhitiao{
		padding: 20upx 0upx;
		border-bottom: 1px solid #EEEEEE;
	}	
	.zhitiao>image{
		width: 100upx;
		height: 100upx;
		border-radius: 100%;
		flex-shrink: 0;/*不写时默认值为1,空间不够时,会等比例缩小.否则不会变*/	
	}
	.zhitiao>view{
		flex: 1;
	}
	.zhitiao-one{
		margin-left: 20upx;
	}
	.zhitiao-one>view:nth-child(1){
		font-size: 35upx;
	}
	.zhitiao-one>view:nth-child(2){
		color: #999999;
		font-size: 30upx;
	}
	.zhitiao-two{
		text-align: right;
	}
	.zhitiao-two>view:nth-child(1){
		color: #CBCBCB;
	}
</style>
