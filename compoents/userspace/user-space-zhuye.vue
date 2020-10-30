<template>
	<view class="userspace-zhuye animated zoomInUp fast">
		<view class="userspace-zhuye-item">
			<view>账号信息</view>
			<view>糗龄 : {{getAge}}</view>
			<view>糗百ID : {{userinfo.id}}</view>
		</view>
		<view class="userspace-zhuye-item">
			<view>个人信息</view>
			<view>星座 : {{getxingzuo}}</view>
			<view>职业 : {{userinfo.job}}</view>
			<view>故乡 : {{userinfo.path}}</view>
			<view>情感状态 : {{userinfo.qg}}</view>
		</view>
	</view>
</template>

<script>
	import t from '../../common/time.js';
	export default{
		props:{
			userinfo:Object
		},
		computed:{
			getAge(){
				return t.gettime.sumAge(this.userinfo.qiuage);
			},
			getxingzuo(){
				return t.gettime.getHoroscope(this.userinfo.birthday);
			}
		},
	}
</script>

<style>
</style>
