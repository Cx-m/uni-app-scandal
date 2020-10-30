<template>
	<view class="body">
		<input type="text" class="uni-input common-input" placeholder="输入你要绑定的邮箱" 
		v-model="email"/>
		<input type="text" class="uni-input common-input" placeholder="请输入密码" 
		v-model="password" password/>
		<button class="user-set-btn" type="primary" @tap="submit"
		:class="{'user-set-btn-disable':disable}"
		:disabled="disable"
		:loading="loading"
		>完成</button> 
	</view>
</template>

<script>
	export default {
		data() {
			return {
				email:'',
				password:'',
				disable:true,
				loading:false
			}
		},
		watch:{
			email(val){
				this.change();
			},
			password(val){
				this.change();
			}
		},
		methods: {
			//监听
			change(){
				if(this.email && this.password){
					this.disable=false;
					return; 
				}
				this.disable=true;
			},
			//验证
			check(){
				if(this.email=='' && !this.email){
					uni.showToast({
						title:'邮箱不能为空',
						icon:'none'
					})
					return false;
				}
				//Email正则
				let ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
				//输出 true
				if(!ePattern.test(this.email)){ 
					uni.showToast({
						title:'邮箱格式不对',
						icon:'none'
					})
					return false;
				}
				if(this.password=='' && !this.password){
					uni.showToast({
						title:'密码不能为空',
						icon:'none'
					})
					return false;
				}
				return true;
			},
			//提交表单
			submit(){
				this.loading=true;
				this.disable=true;
				if(!this.check()){
					this.loading=false;
					this.disable=false;
					return;}
				uni.showToast({ 
					title:'提交成功',
					icon:'none'
				})
				this.loading=false;
				this.disable=false;
			}
		}
	}
</script>

<style>
@import "../../common/form.css";
</style>
