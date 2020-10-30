<template>
	<view class="other-login u-f-a">
		<block v-for="(item,index) in providerList" :key="index">
			<view class="u-f1 u-f-ajc">
				<view class="icon iconfont u-f-ajc" :class="['icon-'+item.icon]" @tap="tologin(item)"></view>
			</view>
		</block>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				providerList: []
			}
		},
		mounted() {
			this.getlogin(); 
		},
		methods:{
			//获取登录通道
			getlogin(){
				uni.getProvider({
				    service: 'oauth',
				    success: (result) => {
				        this.providerList = result.provider.map((value) => {
				            let providerName = '';
							let icon= '';
				            switch (value) {
				                case 'weixin':
				                    providerName = '微信登录';
									icon='weixin';
				                    break;
				                case 'qq':
				                    providerName = 'QQ登录';
									icon='QQ';
				                    break;
				                case 'sinaweibo':
				                    providerName = '新浪微博登录';
									icon='xinlangweibo';
				                    break;
				            }
				            return {
				                name: providerName,
								icon: icon,
				                id: value
				            }
				        });
				    },
				    fail: (error) => {
				      //  console.log('获取登录通道失败', error);
				    }
				});
			},
			//登录
			tologin(provider) {
			    uni.login({
			        provider: provider.id,
			        // #ifdef MP-ALIPAY
			        scopes: 'auth_user', //支付宝小程序需设置授权类型
			        // #endif
			        success: (res) => {
			            //console.log('login success:', res);
			        },
			        fail: (err) => {
			           // console.log('login fail:', err);
			        }
			    });
			}
		}
		
	}
</script>

<style scoped>
.other-login{
	padding: 40rpx 80rpx;
}
.other-login>view>view{
	width: 100rpx;
	height: 100rpx;
	border-radius: 100%;
	font-size: 55rpx;
	color: #FFFFFF;
}
.other-login .icon-weixin{background: #2BD19B;}
.other-login .icon-xinlangweibo{background: #2CAEFC;}
.other-login .icon-QQ{background: #FC7729;}
</style>
