<template>
	<view class="body">
		<input type="text" class="uni-input common-input" placeholder="输入旧密码" 
		v-model="oldpassword" password/>
		<input type="text" class="uni-input common-input" placeholder="输入新密码" 
		v-model="newpassword" password/>
		<input type="text" class="uni-input common-input" placeholder="输入确认密码" 
		v-model="yespassword" password/>
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
				oldpassword:'',
				newpassword:'',
				yespassword:'',
				disable:true,
				loading:false
			}
		},
		watch:{
			oldpassword(val){
				this.change();
			},
			newpassword(val){
				this.change();
			},
			yespassword(val){
				this.change();
			}
		},
		methods: {
			//监听
			change(){
				if(this.oldpassword && this.newpassword && this.yespassword){
					this.disable=false;
					return; 
				}
				this.disable=true;
			},
			//验证
			check(){
				if(this.oldpassword=='' && !this.oldpassword){
					uni.showToast({
						title:'旧密码不能为空',
						icon:'none'
					})
					return false;
				}
				if(this.newpassword=='' && !this.newpassword){
					uni.showToast({
						title:'新密码不能为空',
						icon:'none'
					})
					return false;
				}
				if(this.yespassword=='' && !this.yespassword){
					uni.showToast({
						title:'确认密码不能为空',
						icon:'none'
					})
					return false;
				}
				if(this.newpassword!==this.yespassword){
					uni.showToast({ 
						title:'确认密码和新密码不一致',
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
