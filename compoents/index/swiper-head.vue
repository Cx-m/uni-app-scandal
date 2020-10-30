<template>
	<view class="uni-tab-bar">
		<scroll-view scroll-x class="uni-swiper-tab" @scroll="watchscroll" :scroll-left="scroll" scroll-with-animation="true">
			<block v-for="(item,index) in tablist" :key="index">
				<view class="swiper-tab-list" :class="{'activea':(tabindex==index)}" @tap="tabtap(index)"
				:style="itemwidth">
					{{item.name}}{{item.num?item.num:''}}
					<view class="swiper-tab-line" :style="{width:linewidth+'px'}"></view>
				</view>
			</block>
		</scroll-view>
	</view>
</template>

<script>
	export default{
		props:{
			tablist:Array,
			tabindex:Number,
			linewidth:Number,
			scroll:Number,
			itemwidth:{
				type:String,
				default:""
			}	
		},
		methods:{
			tabtap(index){
				this.$emit('tabtap',index);
			},
			watchscroll(e){
				this.$emit('watchscroll',e);
			}
		}
	}
</script>

<style scoped>
	 .activea .swiper-tab-line{
		border-top: 14upx solid #FEDE33;
		margin: 0 auto;
		border-radius: 40upx;
		animation:mymove 0.7s;
	}
	.swiper-tab-list{
		color: #969696;
		font-weight: bold;
	}
	.activea{
		color: #343434;
		font-size: 42upx;
		animation:move 0.3s;
	}
	@keyframes mymove
	{
	from {width:1px;}
	to {width:38px;}
	}
	@keyframes move
	{
	from {font-size: 10upx;}
	to {font-size: 42upx;}
	}
	.uni-swiper-tab{
		border: none;
	}
</style>
