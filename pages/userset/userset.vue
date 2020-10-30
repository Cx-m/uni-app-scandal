<template>
	<view class="body">
		<block v-for="(item,index) in homelist" :key="index">
			<homeList :item="item"></homeList>
		</block>
		<button class="user-set-btn" type="primary">退出登录</button>
	</view>
</template>

<script>
	 import homeList from "../../compoents/home/home-list.vue"
	export default {
		components:{
			homeList
		},
		data() {
			return {
				homelist:[
					{icon:'',name:'账号与安全',type:'navigateTo',urls:'../../pages/userpassword/userpassword'},
					{icon:'',name:'绑定邮箱',type:'navigateTo',urls:'../../pages/useremail/useremail'},
					{icon:'',name:'资料编辑',type:'navigateTo',urls:'../../pages/usersetinfo/usersetinfo'},
					{icon:'',name:'小纸条',type:'',urls:''},
					{icon:'',name:'清除缓存',type:'clear',urls:''},
					{icon:'',name:'意见反馈',type:'navigateTo',urls:'../../pages/userhelp/userhelp'},
					{icon:'',name:'关于仿糗百',type:'navigateTo',urls:'../../pages/userabout/userabout'}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
@import "../../common/form.css";
</style>
