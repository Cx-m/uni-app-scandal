<template>
	<view>
		<!-- 头部 -->
        <toPic :item="topicobj"></toPic>
		<!-- 切换导航 -->
		<swiperHead
		:tablist="tablist"
		:tabindex="tabindex"
		:linewidth="linewidth"
		:scroll="scroll"
		@tabtap="tabtap"
		itemwidth="width:50%;"
		></swiperHead>
		<!-- 列表 -->
		<view class="topiclistdetal">
			<block v-for="(item,index) in topiclista" :key="index">
				<template v-if="tabindex==index">
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
		</view>
	</view>
</template>

<script>
	import toPic from "../../compoents/topic/topic.vue";
	import swiperHead from '../../compoents/index/swiper-head.vue';
	import comonNews from '../../compoents/common/comon-news.vue';
	import loadMore from '../../compoents/common/load-more.vue';
	export default {
		components:{
			toPic,
			swiperHead,
			comonNews,
			loadMore
		},
		data() {
			return {	
				tabindex:0,
				linewidth:38,
				scroll:0,
				topicobj:{
					titleimg:'../../static/topicpic/13.jpeg',
					titlename:'忆往事，敬余生',
					dongtainum:'793',
					jinrinum:'641',
					desc:'面试官：在电梯里偶遇马云你会做什么？90后女孩的回答当场被录用'			
				},
				tablist:[
					{name:"默认",id:"moren"},
					{name:"最新",id:"zuixin"}
				],
				topiclista:[
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
		methods: {
			tabtap(index){
				this.tabindex=index;
				// console.log(this.tablist[index]);
			},
			//监听导航的index
			watchchange(e){
				this.tabindex=e.detail.current;
			},
			isgz(listindex){
				this.topiclista[this.tabindex].list[listindex].isguanzhu=true;
				uni.showToast({
					title:'关注成功',
					icon:'none',
					mask:true
				})
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

</style>
