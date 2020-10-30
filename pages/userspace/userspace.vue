<template>
	<view>
		<!-- 头部 -->
		<tauserSpaceHeadgSex :userinfo="userinfo"></tauserSpaceHeadgSex>
		<!-- 数据 -->
		<view class="userspace-data">
			<homeData :homedata="spacedata"></homeData>
		</view>
		<!-- 线 -->
		<view class="userspace-xian"></view>
		<!-- 切换导航 -->
		<swiperHead
		:tablist="tablist"
		:tabindex="tabindex"
		:linewidth="linewidth"
		:scroll="scroll"
		@tabtap="tabtap"
		itemwidth="width:33.33%;"
		></swiperHead>
		<!-- 列表 -->
		<block v-for="(item,index) in topiclista" :key="index">
			<template v-if="tabindex==index">
				<template v-if="tabindex==0">
					<!-- 主页 -->
					<userSpaceZhuye :userinfo="userinfo"></userSpaceZhuye>
				</template>
				<block v-for="(lista,listindex) in item.list" :key="listindex">
						<comonNews
						:item="lista"
						:index="listindex"
						@isgz="isgz(listindex)"
						></comonNews>
				</block>
				<!-- 加载更多 -->					
				<load-more :loadtext="item.loadtext"></load-more>
			</template>
		</block>
		<userSpacePop 
		:showpop="showpop"
		@hidepop="hidepop"
		@lahei="lahei"
		@beizhu="beizhu"
		></userSpacePop>
	</view>
</template>

<script>
	import tagSex from '../../compoents/common/tag-sex.vue';
	import tauserSpaceHeadgSex from '../../compoents/userspace/user-space-head.vue';
	import homeData from '../../compoents/home/home-data.vue';
	import swiperHead from '../../compoents/index/swiper-head.vue';	
	import userSpaceZhuye from '../../compoents/userspace/user-space-zhuye.vue';	
	import comonNews from '../../compoents/common/comon-news.vue';
	import loadMore from '../../compoents/common/load-more.vue';
	import userSpacePop from '../../compoents/userspace/user-space-pop.vue';
	export default {
		components:{
			tagSex,
			tauserSpaceHeadgSex,
			homeData,
			swiperHead,
			userSpaceZhuye,
			comonNews,
			loadMore,
			userSpacePop
		},
		data() {
			return {
				showpop:false,
				tabindex:0,
				linewidth:38,
				scroll:0,
				userinfo:{
					userbg:1,
					userpic:'../../static/userpic/14.jpg',
					username:'梦想',
					age:'20',
					sex: 0,
					isguanzhu:false,
					qiuage:'2020-01-01',
					id:1215,
					birthday:'1997-04-07',
					job:'IT',
					path:'山东枣庄',
					qg:'未婚'
				},
				spacedata:[
					{name:'获赞',num:"10k"},
					{name:'关注',num:11},
					{name:'粉丝',num:12}
				],
				tablist:[
					{name:"主页",id:"zhuye"},
					{name:"糗事",id:"qiushi"},
					{name:"动态",id:"dongtai"}
				],
				topiclista:[{},
					{
						loadtext:"上拉加载更多👆",
						list:[
							{
								//文字
							  userimg:'../../static/userpic/20.jpg',
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
					},
					{
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
				]
			}
		},
		onReachBottom(){
			this.loadtop();
		},
		onNavigationBarButtonTap(e) {
			if(e.index==0){
				this.hidepop();
			}
		},
		methods:{
			hidepop(){
				 this.showpop=!this.showpop;
			},
			lahei(){
				this.hidepop();
			},
			beizhu(){
				this.hidepop();
			},
			isgz(listindex){
				this.topiclista[this.tabindex].list[listindex].isguanzhu=true;
				uni.showToast({
					title:'关注成功',
					icon:'none',
					mask:true
				})
			},
			//切换tab选项卡
			tabtap(index){
				this.tabindex=index;
			},
			//上拉加载
			loadtop(){
				if(this.topiclista[this.tabindex].loadtext!="上拉加载更多👆"){return;}					
				this.topiclista[this.tabindex].loadtext="加载中o(*￣▽￣*)ブ";
				setTimeout(()=> {
					let obj={
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
							   
							};
					this.topiclista[this.tabindex].list.push(obj);
					this.topiclista[this.tabindex].loadtext="上拉加载更多👆";					  
					//this.newlist[index1].loadtext="没有更多数据了/(ㄒoㄒ)/~~";					 
				}, 1000);
			}	
		}
		
	}
</script>

<style>
.userspace-head-margin{
	margin: 15rpx 0;
}
.userspace-data{
	position: relative;
	background: #FFFFFF;
	border-top-left-radius: 30rpx;
	border-top-right-radius: 30rpx;
	margin-top: -20rpx;
}
.userspace-xian{
	height: 20rpx;
	background: #F4F4F4;
}

.userspace-zhuye{
	padding: 0 30rpx;
}
.userspace-zhuye-item{
	padding: 15rpx 0;
	border-bottom: 1rpx solid #EEEEEE;
}
.userspace-zhuye-item>view{
	color: #AAAAAA;
}
.userspace-zhuye-item>view:first-child{
	color: #333333;
	font-size: 35rpx;
	padding: 15rpx 0;
}
</style>
