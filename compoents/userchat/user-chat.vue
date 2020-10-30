<template>
		<view class="user-chat-input u-f-ajc animated fadeInDown fast" :style="{bottom:scrollH+'px'}">
			<input type="text" placeholder="文明发言" v-model="text" 
			@focus="inputH" 
			:adjust-position="false"
			@blur="navtiveH"
			/>
			<view class="icon iconfont icon-fabu u-f-ajc" @tap="submit"></view>
		</view>
</template>

<script>
	export default {
		data(){
			return{
				text:'',
				scrollH:0
			}
		},
		methods:{
			submit(){
				this.$emit('submit',this.text);
				this.text="";
			},
			inputH(e){
				this.scrollH=e.detail.height;
				uni.onKeyboardHeightChange(res22 => {
				 /* console.log(res22.height) 
				  this.scrollH=e.detail.height;*/
				  if(res22.height==0){
				  	this.scrollH=0;
				  } 
				})
				
			},
			navtiveH(e1){
				this.scrollH=0;
			}
		}
	}
</script>

<style scoped>
	.user-chat-input{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 120upx;
		border-top: 1px solid #EEEEEE;
		padding: 0 20upx;
		background: #FFFFFF;
	}
	.user-chat-input>input{
		flex: 1;
		background: #F7F7F7;
		margin-right: 20upx;
		padding: 10upx 20upx;
		border-radius: 10upx;
	}
	.user-chat-input>view{
		width: 80upx;
		font-size: 45upx;
	}
</style>
