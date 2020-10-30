<template>
	<view class="home-big">
		<view class="home-list-item u-f-aj u-f-a"
		hover-stay-time="50"
		hover-start-time="5"
		@tap="clickevent"
		>
			<view class="u-f-a">
				<view v-if="item.icon" class="icon iconfont"
				:class="['icon-'+item.icon]"
				></view>{{item.name}}
			</view>
			<view class="icon iconfont icon-jinru"></view>
			<child :istab="istab" 
			style="position: absolute;left: 0;top: 0;"></child>
		</view>
		
	</view>
</template>

<script>
	import child from '../common/child.vue';
	export default{
		components:{
			child
		},
		props:{
			item:Object,
			index:Number
		},
		data(){
			return{
				istab:true
			}
		},
		methods:{
			clickevent(){
				switch(this.item.type){
					case 'navigateTo':
					if(this.item.urls){uni.navigateTo({url:this.item.urls})}
					break;
					case 'clear':
					uni.showModal({
					    title: '提示',
					    content: '是否清除缓存？',
					    success: function (res) {
					        if (res.confirm) {
					           uni.clearStorage();
							   uni.showToast({
							       title: '清除成功',
							       duration: 1000
							   });
					        } 
					    }
					});
					break;
				}
			}
		}
	}
</script>

<style scoped>
.home-big>view{ 
	padding: 20rpx;
	border-bottom: 1rpx solid #F4F4F4;
}
.home-list-item{
	position: relative;
}
.home-list-item>view{
	font-size: 32rpx;
}
.home-list-item>view:nth-child(1)>view{
	margin-right: 15rpx;
}
.home-list-item .icon-liulan{
	color: #44B3FF;
	font-size: 35rpx;
}
.home-list-item .icon-huiyuanvip{
	color: #FF7434;
	font-size: 35rpx;
}
.home-list-item .icon-keyboard{
	color: #48B5FF;
	font-size: 35rpx;
}
/* .home-list-item-hover{
	background: #EEEEEE;
	border-radius: 3rpx;
} */	
</style>
