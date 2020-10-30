<template>
	<view class="uni-list list-pd">
	    <view class="uni-list-cell cell-pd">
	        <view class="uni-uploader">
	            <view class="uni-uploader-head">
	                <view class="uni-uploader-title">点击可预览选好的图片</view>
	                <view class="uni-uploader-info">{{imageList.length}}/9</view>
	            </view>
	            <view class="uni-uploader-body">
	                <view class="uni-uploader__files">
	                    <block v-for="(image,index) in imageList" :key="index">
	                        <view class="uni-uploader__file">
								<view class="icon iconfont icon-shanchu" @tap="deleted(index)"></view>
	                            <image class="uni-uploader__img" :src="image" :data-src="image" @tap="previewImage">
									
								</image>
	                        </view>
	                    </block>
	                    <view class="uni-uploader__input-box">
	                        <view class="uni-uploader__input" @tap="chooseImage"></view>
	                    </view>
	                </view>
	            </view>
	        </view>
	    </view>
	</view>
</template>

<script>
	export default {
		props:{
			imageList:Array
			
		},
		methods:{
			deleted(index){
				this.$emit('deleted',index);		
			},
			previewImage(index){
				console.log(index)
				this.$emit('previewImage',index);		
			},
			chooseImage(){
				this.$emit('chooseImage');		
			}
		}
	}
</script>

<style scoped>
	.cell-pd {
	    padding: 22upx 30upx;
	}
	
	.list-pd {
	    margin-top: 50upx;
	}
	.uni-uploader__file{
		position: relative;
	}
	.icon-shanchu{
		position: absolute;
		top: 0;
		right: 0;
		background-color: #010101;
		color: #FFFFFF;
		padding: 0 10upx;
		border-radius: 10upx;
		font-size: 30upx;
	}
</style>
