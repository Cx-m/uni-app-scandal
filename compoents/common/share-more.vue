<template>
	<view v-if="maskshow" class="animated fadeIn faster">
		<view class="share-mask ani" @tap="alertmask"></view>
		<view class="share-more ani">
			<view class="share-more-title u-f-ajc">分享到</view>
			<scroll-view scroll-x class="share-more-body">
				<block v-for="(val,index) in providerList" :key="index">
					<view class="share-more-item u-f-l" hover-class="share-hover" hover-stay-time="50"
					hover-start-time="5" @tap="share(val)">
							<view class="icon iconfont u-f-ajc"
							:class="['icon-'+val.zicon,'backg'+val.zclass]"
							></view>
							<view>{{val.name}}</view>
						</view>
				</block>
			</scroll-view>
			<view class="share-more-bottom u-f-ajc" hover-class="share-hover" 
			hover-stay-time="50"
			hover-start-time="5"
			@tap="alertmask"
			>取消</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				title: 'share',
				shareText: '好爱我家宝贝敏敏啊，她就是我的全部',
				href:"http://love.zxgnz.com/html/20200329/15854910328064.html",
				image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585500120786&di=ebe14781736878451391d8f618b1ea81&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F00%2F78%2F05%2F88%2F59035fb64206d.png',
				shareType:0,
				/* providerList: [] */
			}
		},
		props:{
			maskshow:Boolean,
			providerList:Array
		},
		onLoad() {
			console.log('1')
			
		},
		methods:{
			alertmask(){
				this.$emit('ismask')
			},
			compress(){//压缩图片 图文分享要求分享图片大小不能超过20Kb
				console.log('开始压缩');
				let img = this.image;
				return new Promise((res) => {
					var localPath = plus.io.convertAbsoluteFileSystem(img.replace('file://', ''));
					console.log('after' + localPath);
					// 压缩size
					plus.io.resolveLocalFileSystemURL(localPath, (entry) => {
						entry.file((file) => {// 可通过entry对象操作图片 
							console.log('getFile:' + JSON.stringify(file));
							if(file.size > 20480) {// 压缩后size 大于20Kb
								plus.zip.compressImage({
									src: img,
									dst: img.replace('.jpg', '2222.jpg').replace('.JPG', '2222.JPG'),
									width: '10%',
									height: '10%',
									quality: 1,
									overwrite: true
								}, (event) => {
									console.log('success zip****' + event.size);
									let newImg = img.replace('.jpg', '2222.jpg').replace('.JPG', '2222.JPG');
									res(newImg);
								}, function(error) {
									uni.showModal({
										content:'分享图片太大,需要请重新选择图片!',
										showCancel:false
									})
								});
							}
						});
					}, (e) => {
						console.log('Resolve file URL failed: ' + e.message);
						uni.showModal({
							content:'分享图片太大,需要请重新选择图片!',
							showCancel:false
						})
					});
				})
			},
			async share(e) {
				console.log('分享通道:'+ e.id +'； 分享类型:' + this.shareType);
				
				if(!this.shareText && (this.shareType === 1 || this.shareType === 0)){
					uni.showModal({
						content:'分享内容不能为空',
						showCancel:false
					})
					return;
				}
				
				if(!this.image && (this.shareType === 2 || this.shareType === 0)){
					uni.showModal({
						content:'分享图片不能为空',
						showCancel:false
					})
					return;
				}
				
				let shareOPtions = {
					provider: e.id,
					scene: e.type && e.type === 'WXSenceTimeline' ? 'WXSenceTimeline' : 'WXSceneSession', //WXSceneSession”分享到聊天界面，“WXSenceTimeline”分享到朋友圈，“WXSceneFavorite”分享到微信收藏     
					type: this.shareType,
					success: (e) => {
						console.log('success', e);
						uni.showModal({
							content: '已分享',
							showCancel:false
						})
					},
					fail: (e) => {
						console.log('fail', e)
						uni.showModal({
							content: e.errMsg,
							showCancel:false
						})
					},
					complete:function(){
						console.log('分享操作结束!')
					}
				}
				
				switch (this.shareType){
					case 0:
						shareOPtions.summary = this.shareText;
						shareOPtions.imageUrl = this.image;
						shareOPtions.title = '致李敏敏';
						shareOPtions.href = 'http://love.zxgnz.com/html/20200329/15854910328064.html';
						break;
					case 1:
						shareOPtions.summary = this.shareText;
						break;
					case 2:
						shareOPtions.imageUrl = this.image;
						break;
					case 5:
						shareOPtions.imageUrl = this.image ? this.image : 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png'
						shareOPtions.title = '致李敏敏';
						shareOPtions.miniProgram = {
							id:'gh_33446d7f7a26',
							path:'/pages/tabBar/component/component',
							webUrl:'http://love.zxgnz.com/html/20200329/15854910328064.html',
							type:0
						};
						break;
					default:
						break;
				}
				
				if(shareOPtions.type === 0 && plus.os.name === 'iOS'){//如果是图文分享，且是ios平台，则压缩图片 
					shareOPtions.imageUrl = await this.compress();
				}
				if(shareOPtions.type === 1 && shareOPtions.provider === 'qq'){//如果是分享文字到qq，则必须加上href和title
					shareOPtions.href = 'http://love.zxgnz.com/html/20200329/15854910328064.html';
					shareOPtions.title = '致李敏敏';
				}
				uni.share(shareOPtions);
			},
		}
	}
</script>

<style scoped>
/* 分享 */
.share-more{
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	background: #FFFFFF;
	z-index: 999;
}
.share-hover{
	background: #EEEEEE;
}
.share-mask{
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 998;
	background: rgba(0, 0, 0, 0.4);
}
.share-more-title,.share-more-bottom{
	font-size: 35rpx;
	padding: 25rpx;
	font-weight: bold;
}
.share-more-body{
	border-bottom: 1rpx solid #EEEEEE;
	white-space: nowrap;
	width: 100%;
	height: 200rpx;
}
.share-more-item{
	display: inline-flex;
    width: 25%;
	align-items: center;
	justify-content: center;
	height: 100%;
}
.share-more-item>view:first-child{
	width: 100rpx;
	height: 100rpx;
	border-radius: 100%;
	font-size: 55rpx;
	color: #FFFFFF;
}
.share-more-item>view:last-child{
	color: #7B7B7B;
}
.backgweixin{background: #2AD19B;}
.backgquan{background: #514D4C;}
.backgweibo{background: #EE5E5E;}
.backgqq{background: #5280CE;}	
</style>
