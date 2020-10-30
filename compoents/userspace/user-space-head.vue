<template>
	<view class="userspace-head u-f-ajc">
		<image :src="getuserbg" mode="widthFix" lazy-load @tap="changebg"></image>
		<view class="userspace-head-info u-f-ajc u-f-l">
			<image :src="userinfo.userpic" mode="widthFix" lazy-load></image>
			<view class="u-f-a userspace-head-margin">
				{{userinfo.username}}<tag-sex :sex="userinfo.sex" :userage="userinfo.age"></tag-sex>
			</view>
			<view class="icon iconfont userspace-btn userspace-head-margin"
			:class="[isguanzhu?'active':'icon-zengjia']" @tap.stop="changeguanzhu">
				{{isguanzhu?'已关注':'关注'}}
			</view>
		</view>
	</view>
</template>

<script>
	import tagSex from '../common/tag-sex.vue'
	export default {
		components:{
			tagSex
		},
		props:{
			userinfo:Object
		},
		data() {
			return{
				isguanzhu:this.userinfo.isguanzhu 
			}
		},
		computed:{
			getuserbg(){
				return '../../static/bgimg/'+this.userinfo.userbg+'.jpg'
			}
		},
		methods: {
			//改变背景图
			changebg(){
				let num=parseInt(this.userinfo.userbg);
				this.userinfo.userbg = num<4? ++num : 1;
			},
			//关注
			changeguanzhu(){
				this.isguanzhu = !this.isguanzhu;
			}
		}
	}	
</script>

<style scoped>
.userspace-head{
	position: relative;
    height: 500rpx;
	overflow: hidden;
}
.userspace-head>image{
	width: 100%;
}
.userspace-head-info{
	position: absolute;
	top: 150rpx;
}
.userspace-head-info>view:first-of-type{
	font-size: 35rpx;
	font-weight: bold;
	text-shadow: 2rpx 2rpx 10rpx #333333;
	color: #FFFFFF;
}
.userspace-head-info>image{
	height: 150rpx;
	width: 150rpx;
	border-radius: 100%;
}
.userspace-btn{
	background: #FFE933;
	border: 1rpx solid #FFE933;
	border-radius: 10rpx;
	color: #4A3F06;
	font-size: 28rpx;
	padding: 0 15rpx;
}
.active{
	background: none;
	border: 1rpx solid #FFFFFF;
	color: #FFFFFF;
}	
</style>
