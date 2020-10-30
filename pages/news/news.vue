<template>
	<view>
		<newsNabBar
		:tabs="tabs"
		:tabindex="tabindex"
		@change="change($event)"
		@openadd="openadd"
		>	
		</newsNabBar>
		<!-- 公共列表 -->
		<view class="uni-tab-bar">
		 <swiper class="swiper-box" :style="{height:swheigth+'px'}" :current="tabindex" @change="watchchange"> 
				<swiper-item>
					<scroll-view scroll-y class="list" scroll-with-animation="true" @scrolltolower="loadtop()">
					<block v-for="(item,index) in guanzhu.list" :key="index"> 
						<comonNews
					    :item="item"
						:index="index"
						@isgz="isgz(index)"
						></comonNews>
					</block>
					<view class="load">{{guanzhu.loadtext}}</view>
				    </scroll-view>	
				</swiper-item>
				<swiper-item>
					<scroll-view scroll-y class="list" scroll-with-animation="true">
					<!-- 搜索 -->
					<view class="search">
					     <input class="inpu" 
						 placeholder="搜索内容" 
						 placeholder-class="icon iconfont icon-sousuo input-search"/>
					</view>
					<!-- 轮播 -->
					<swiper class="big-swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="500">
						<block v-for="(item,index) in topic.sweiper" :key="index">
							 <swiper-item class="one">
							 	<view class="swiper-item">
							 		<image :src="item.src" mode="widthFix" lazy-load></image>
							 	</view>
							 </swiper-item>
						</block>
					</swiper>				
					<!-- 热门分类 -->
					<topicNews :arryfenlei="topic.fenlei"></topicNews>
					<!-- 最近更新 -->
					<view class="top-new">
						<view>最近更新</view>
						<block v-for="(item,index) in topic.lists" :key="index">
							<topicList :item="item" :index="index"></topicList>
						</block>
					</view>
					</scroll-view>	
				</swiper-item>	
		</swiper>
		</view>
	</view>
</template>

<script>	
	import comonNews from '../../compoents/common/comon-news.vue';
	import newsNabBar from '../../compoents/news/news-nab-bar.vue';
	import loadMore from "../../compoents/common/load-more.vue";
	import topicNews from "../../compoents/news/topic-news.vue";
	import topicList from "../../compoents/news/topic-list.vue";
	export default {
		components:{			
			comonNews,
			newsNabBar,
			loadMore,
			topicNews,
			topicList
		},
		data() {
			return {
				swheigth:0,
				tabindex:0,
				topic:{
					sweiper:[
						{src:'../../static/datapic/37.jpg'},
						{src:'../../static/datapic/37.jpg'},
						{src:'../../static/datapic/37.jpg'}
					],
					fenlei:[
						{name:"最新"},
						{name:"游戏"},
						{name:"情感"},
						{name:"打卡"},
						{name:"故事"},
						{name:"喜爱"}
					],
					lists:[
						{
							imgsrc:'../../static/topicpic/11.jpeg',
							titlea:'#淘宝记录薄#',
							neirong:'120斤到80斤 我的反转人生',
							dongtainum:545,
							jinrinum:720		
						},
						{
							imgsrc:'../../static/topicpic/11.jpeg',
							titlea:'#淘宝记录薄#',
							neirong:'120斤到80斤 我的反转人生',
							dongtainum:545,
							jinrinum:720		
						},
						{
							imgsrc:'../../static/topicpic/11.jpeg',
							titlea:'#淘宝记录薄#',
							neirong:'120斤到80斤 我的反转人生',
							dongtainum:545,
							jinrinum:720		
						},
						{
							imgsrc:'../../static/topicpic/11.jpeg',
							titlea:'#淘宝记录薄#',
							neirong:'120斤到80斤 我的反转人生',
							dongtainum:545,
							jinrinum:720		
						}
					]
				},
				tabs:[
					{
						name:'关注',
						id:'guanzhu'
					},
					{
						name:'话题',
						id:'huati'
					}
				],
				guanzhu:{
					loadtext:"上拉加载更多👆",
					list:[
						{
							//文字
						  userimg:'../../static/userpic/19.jpg',
						  username:'张三',
						  userage:'30',
						  sex:0,//0代表男，1 代表女
						  isguanzhu:false,
						  title:'庆祝祖国成立70周年！',
						  titleimg:'',
						  video:false,
						  sharea:false,
						  positiona:'深圳 龙岗',
						  sharenum:30,
						  pinglunnum:100,
						  zannum:50
						   
						},
						{
							//图文
						  userimg:'../../static/userpic/19.jpg',
						  username:'张三',
						  userage:'30',
						  sex:0,//0代表男，1 代表女
						  isguanzhu:false,
						  title:'庆祝祖国成立70周年！',
						  titleimg:'../../static/datapic/44.jpg',
						  video:false,
						  sharea:false,
						  positiona:'深圳 龙岗',
						  sharenum:30,
						  pinglunnum:100,
						  zannum:50
						   
						},
						{
							//视频
						  userimg:'../../static/userpic/19.jpg',
						  username:'李四',
						  userage:'37',
						  sex:1,//0代表男，1 代表女
						  isguanzhu:false,
						  title:'庆祝祖国成立70周年！',
						  titleimg:'../../static/datapic/44.jpg',
						  video:{
							  bofangnum:'20w',
							  shijian:'2:47'
						  },
						  sharea:false,
						  positiona:'深圳 龙岗',
						  sharenum:30,
						  pinglunnum:100,
						  zannum:50
						   
						},
						{
						  userimg:'../../static/userpic/19.jpg',
						  username:'张三',
						  userage:'30',
						  sex:0,//0代表男，1 代表女
						  isguanzhu:false,
						  title:'庆祝祖国成立70周年！',
						  titleimg:'',
						  video:false,
						  sharea:{
							  shareimg:'../../static/datapic/44.jpg',
							  sharetitle:'庆祝祖国成立70周年！'
						  },
						  positiona:'深圳 龙岗',
						  sharenum:30,
						  pinglunnum:100,
						  zannum:50
						   
						},
						{
						  userimg:'../../static/userpic/19.jpg',
						  username:'张三',
						  userage:'30',
						  sex:0,//0代表男，1 代表女
						  isguanzhu:false,
						  title:'庆祝祖国成立70周年！',
						  titleimg:'',
						  video:false,
						  sharea:{
							  shareimg:'../../static/datapic/44.jpg',
							  sharetitle:'庆祝祖国成立70周年！'
						  },
						  positiona:'深圳 龙岗',
						  sharenum:30,
						  pinglunnum:100,
						  zannum:50
						   
						},
						{
						  userimg:'../../static/userpic/19.jpg',
						  username:'张三',
						  userage:'30',
						  sex:0,//0代表男，1 代表女
						  isguanzhu:false,
						  title:'庆祝祖国成立70周年！',
						  titleimg:'',
						  video:false,
						  sharea:{
							  shareimg:'../../static/datapic/44.jpg',
							  sharetitle:'庆祝祖国成立70周年！'
						  },
						  positiona:'深圳 龙岗',
						  sharenum:30,
						  pinglunnum:100,
						  zannum:50
						   
						}
					]
				}
			}
		},
		methods: {
			watchchange(e){
				this.tabindex=e.detail.current;
			},
			change(index){
				//console.log(index)
				this.tabindex=index;
			//	uni.setStorageSync('storage_key', 'hello');
			},
			openadd(e){
				//console.log(e)
				uni.navigateTo({
				   url:'../fabu/fabu'	   
				});
			},
			isgz(index){
				//console.log(this.list[index].isguanzhu)
				this.guanzhu.list[index].isguanzhu=true;
				uni.showToast({
					title:'关注成功',
					icon:'none',
					mask:true
				})
			},
			//上拉加载
			loadtop(){
				if(this.guanzhu.loadtext!="上拉加载更多👆"){return;}					
				this.guanzhu.loadtext="加载中o(*￣▽￣*)ブ";
				setTimeout(()=> {
					let obj={
						//文字
					  userimg:'../../static/userpic/19.jpg',
					  username:'张三',
					  userage:'30',
					  sex:0,//0代表男，1 代表女
					  isguanzhu:false,
					  title:'庆祝祖国成立70周年！',
					  titleimg:'',
					  video:false,
					  sharea:false,
					  positiona:'深圳 龙岗',
					  sharenum:30,
					  pinglunnum:100,
					  zannum:50					   
					};
					this.guanzhu.list.push(obj);
					this.guanzhu.loadtext="上拉加载更多👆";				  
					//this.guanzhu.loadtext="没有更多数据了/(ㄒoㄒ)/~~";				 
				}, 1000);				
			}				
		},
		onLoad() {
		uni.getSystemInfo({
		    success:(res)=> {
		        let height=res.windowHeight-uni.upx2px(145);
				this.swheigth=height;			
		    }
		});				  
		}
		
	}
</script>

<style>
/*下拉加载样式*/
.load{padding: 15upx 0;text-align: center;font-size: 25upx;color: #010101;}
/*搜索样式*/
.search{padding: 20upx;}
.input-search{text-align: center;font-size: 25upx;color: #9F9F9F;}
.inpu{background: #F4F4F4;border-radius: 10upx;text-align: center;padding: 10upx;}
/*swiper组件样式*/
.big-swiper{padding: 0 20upx 20upx 20upx;}
swiper-item{border-radius: 20upx;}
.swiper-item image{width: 100%;height: 100%;border-radius: 20upx;}
/*最近更新*/
.top-new{
	padding: 20upx;
}
.top-new>view:first-child{
	font-size: 30upx;
	padding-bottom: 10upx;
}
/*.top-new>view:last-child{
	height: 200upx;
}*/

</style>
