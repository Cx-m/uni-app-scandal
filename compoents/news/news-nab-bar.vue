<template>
	<view>
		<uni-nav-bar
		:statusBar="true" 
		:border="false"
		:fixed="true"
		>
		<block slot="left">
			<view class="nav-left u-f-ajc">
				<view class="icon iconfont icon-saoyisao"></view>
			</view>
		</block>
		<view class="nav-tab u-f-ajc">
			<block v-for="(item,index1) in tabs" :key="item.id">
				<view 
				class="u-f-ajc" 
				:class="{'active':tabindex==index1,'activeno':tabindex!==index1}"
				@tap="changeindex(index1)">
					{{item.name}}
				   <view v-if="tabindex==index1" 
				   class="nav-tab-line"
				   ></view>
				</view>
			</block>
		</view>
		<block slot="right"><!-- 插槽的使用，这里通过name属性，来分发多个插槽，中间是默认插槽 -->
			<view class="nav-right" @tap="openadd">
			    <view class="icon iconfont icon-bianji1"></view>
			</view>
		</block>
		</uni-nav-bar>
	</view>
</template>

<script> 
	import uniNavBar from '../uni-nav-bar/uni-nav-bar.vue';
	export default {
		components:{
			uniNavBar		
		},
		props:{
			tabs:Array,
			tabindex:Number
		},
		data(){
			return{
				
			}
		},
		methods:{
			changeindex(index1){
				this.$emit('change',index1);
			},
			openadd(){
				this.$emit('openadd');
			}
		},
		
	}
</script>

<style scoped>
	/*导航栏样式*/
	.nav-left>view,.nav-right>view{     /*大于号>是子代选择器,孙子以及以下无任何作用*/
		font-size: 43upx;
	}
	.nav-left>view{
		color: #333333;
	}
	.nav-right>view{
		color: #333333;
		font-weight: normal;
	}
	.nav-left{
		margin-left: 26upx;
	}
	.nav-right{
		margin-left: 16upx;
	}
	.nav-tab{
		width: 100%;
		margin-right: 37upx;
		
	}
	.nav-tab>view{
		font-weight: bold;
		padding: 0 25upx;
		font-size: 30upx;
		color: #969696;
		position: relative;
		
	}
	.active{
		color: #333333!important;
		font-size: 40upx!important;
		position: absolute;
		animation:move 0.3s;
	}
	.activeno{
		color: #969696!important;
		font-size: 30upx!important;
		position: absolute;
		animation:tomove 0.3s;
	}
	.nav-tab-line{
		border:10upx solid #FEDE33;	
		border-radius: 100%;
		position: absolute;
		bottom: -8upx;
		animation:mymove 0.3s;
	}
	
	@keyframes mymove
		{
		from {border:0upx solid #FEDE33;
		}
		to {border:10upx solid #FEDE33;
		}
		}
	@keyframes move
		{
		from {font-size: 0upx;}
		to {font-size: 40upx;}
		}
	@keyframes tomove
		{
		from {font-size: 40upx;}
		to {font-size: 30upx;}
		}
</style>
