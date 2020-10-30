<template>
	<view>
		<!-- 状态栏 -->
		<uni-status-bar bgcolor="#FFE933"></uni-status-bar>
		<!-- 返回按钮 -->
		<view class="icon iconfont icon-guanbi" @tap="back"></view>
		<!-- 背景图 -->
		<image class="loginbgimg" src="../../static/common/loginhead.png" mode="widthFix" lazy-load></image>
		<!-- input框和按钮 -->
		<view class="body">
			<!-- 账号密码登录 -->
			<template v-if="!status">
				<input type="text" class="uni-input common-input" 
				placeholder="昵称/手机号/邮箱" 
				v-model="username"
				/>
				<view class="login-passwordinput">
					<input type="text" class="uni-input common-input forget-input" 
					placeholder="输入密码" 
					v-model="password"
					/>
					<view class="forgetpassword u-f-ajc">忘记密码？</view>
				</view>
			</template>
			<!-- 验证码登录 -->
			<template v-else>
				<view class="login-passwordinput">
					<view class="phone u-f-ajc">+86</view>
					<input type="text" class="uni-input common-input phone-input" 
					placeholder="输入手机号码" 
					v-model="phone"
					/>
				</view>
				<view class="login-passwordinput">
					<input type="text" class="uni-input common-input forget-input" 
					placeholder="输入验证码" 
					v-model="checknum"
					/>
					<view class="forgetpassword yanzhengnma u-f-ajc" @tap="getcode">
						<view class="u-f-ajc">
							{{!codetime?'获取验证码':codetime+'s'}}
						</view>
					</view>
				</view>
			</template>
			
			<button class="user-set-btn" type="primary" @tap="submit"
			:class="{'user-set-btn-disable':disable}"
			:disabled="disable"
			:loading="loading"
			>登录</button> 
		</view>
		<!-- 切换面板 -->
		<view class="login-status u-f-ajc login-padding" @tap="changestatus">
			{{status?'验证码登录':'账号密码登录'}}
			<view class="icon iconfont icon-jinru login-font-color"></view>
		</view>
		<!-- 第三方登录 -->
		<view class="other-login-title u-f-ajc login-padding login-font-color">第三方登录</view>
		<home-other-login></home-other-login>
		<!-- 协议 -->
		<view class="loginxieyi u-f-ajc login-padding login-font-color">
			注册即代表您同意<view>《仿糗事百科协议》</view> 
		</view>
	</view>
</template>

<script>
	import uniStatusBar from '../../compoents/uni-status-bar/uni-status-bar.vue';
	import homeOtherLogin from '../../compoents/home/home-other-login.vue';
	export default {
		components:{
			uniStatusBar,
			homeOtherLogin
		},
		data() {
			return {
				status:false,//false账号密码登录，true手机验证码登录
				disable:true,
				loading:false,
				username:'',
				password:'',
				phone:'',
				checknum:'',
				codetime:0
			}
		},
		watch:{
			username(val){
				this.onbtncheck();
			},
			password(val){
				this.onbtncheck();
			},
			phone(val){
				this.onbtncheck();
			},
			checknum(val){
				this.onbtncheck();
			}
		},
		methods: {
			//获取验证码
			getcode(){
				if(this.codetime>0){return;}
				//手机号正则,验证合法性
				if(!this.isphone()){
					uni.showToast({
						title:'请输入正确的手机号',
						icon:'none'
					})
					return;
				}
				this.codetime=10;
				let timer=setInterval(()=>{
					this.codetime--;
					if(this.codetime<1){
						clearInterval(timer);
						this.codetime=0;
					}
				},1000)
			},
			//手机号正则,验证合法性
			isphone(){
				let mPattern = /^1[34578]\d{9}$/;
				return mPattern.test(this.phone);
			},
			//初始化值
			initinput(){
				this.username='';
				this.password='';
				this.phone='';
				this.checknum='';
			},
			//判断是否有值才能点击
			onbtncheck(){
				if( (this.username && this.password)||(this.phone && this.checknum) ){
					this.disable=false;
					return;
				} 
				this.disable=true;
			},
			//改变状态
			changestatus(){
				this.status = !this.status;
				this.initinput();
			},
			//返回
			back(){
				console.log('返回')
			},
			//提交
			submit(){
				console.log('提交')
			}
			
		}
	}
</script>

<style>
@import "../../common/form.css";
.login-padding{
	padding: 20rpx 0;
}
.login-font-color{
	color: #BBBBBB;
}
.icon-guanbi{
	position: fixed;
	top: 60rpx;
	left: 30rpx;
	color: #332F0A;
	font-size: 40rpx;
	font-weight: bold;
	z-index: 100;
}
.loginbgimg{
	width: 100%;
}

.other-login-title{
	position: relative;
}
.other-login-title:before,.other-login-title:after{
	content: "";
	position: absolute;
	background: #BBBBBB;
	height: 1rpx;
	width: 100rpx;
	top: 50%;
}
.other-login-title:before{
	left: 25%;
}
.other-login-title:after{
	right: 25%;
}

.login-passwordinput{
	position: relative;
}
.login-passwordinput .forget-input{
	padding-right: 150rpx;
}
.login-passwordinput .phone-input{
	padding-left: 100rpx;
}
.login-passwordinput .forgetpassword,.login-passwordinput .phone{
	position: absolute;
	top: 0;
	height: 100%;
	font-weight: bold;
	z-index: 100;
}
.login-passwordinput .phone{
	left: 0;
	width: 100rpx;
}
.login-passwordinput .forgetpassword{
	right: 0;
	width: 150rpx;
}

.yanzhengnma view{
	background: #F4F4F4;
	color: #939393;
	border-radius: 10rpx;
	width: 150rpx;
	padding: 10rpx 0;
	font-size: 25rpx;
}

.loginxieyi view{color: #64C4FD;}
</style>
