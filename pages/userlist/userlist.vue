<template>
	<view class="body">
		<!-- 切换导航 -->
		<swiperHead
		:tablist="tablist"
		:tabindex="tabindex"
		:linewidth="linewidth"
		:scroll="scroll"
		@tabtap="tabtap"
		itemwidth="width:33.3%;"
		></swiperHead>
		
		<view class="uni-tab-bar">
		 <swiper class="swiper-box" :style="{height:swheigth+'px'}" :current="tabindex" @change="watchchange"> 
				<swiper-item v-for="(items,index1) in newlist" :key="index1">
					 <scroll-view scroll-y class="list" @scrolltolower="loadtop(index1)" 
					  scroll-with-animation="true">
						<template v-if="items.list.length>0">
						    <!-- 好友列表 -->
							<block v-for="(item,index) in items.list" :key="index">
							   	<userList :item="item" :index="index"></userList>
							</block>
							 <!--上拉加载-->
							<loadMore :loadtext="items.loadtext"></loadMore>
						</template>
						<template v-else>
							 <!--无数据-->
							<noThing></noThing>
						</template>
					 </scroll-view>
				</swiper-item>
		</swiper>
		</view>
	</view>
</template>

<script>
	import swiperHead from "../../compoents/index/swiper-head.vue";
	import userList from "../../compoents/user-list/user-list.vue";
	import loadMore from '../../compoents/common/load-more.vue';
	import noThing from '../../compoents/common/no-thing.vue';
	export default {
		components:{
			swiperHead,
			userList,
			loadMore,
			noThing
		},
		data(){
			return{
				swheigth:0,
				tabindex:0,
				linewidth:38,
				scroll:0,
				tablist:[
					{name:"互关",id:"huguan",num:10},
					{name:"关注",id:"guanzhu",num:10},
					{name:"粉丝",id:"fensi",num:10}
				],
				newlist:[
					{ 
					  loadtext:"上拉加载更多👆",
					  list:[{
					  	userpic:'../../static/userpic/10.jpg',
					  	username:'老马',
					  	age:'25',
					  	sex:0,
					  	isguanzhu:false
					  },{
					  	userpic:'../../static/userpic/10.jpg',
					  	username:'奇葩',
					  	age:'18',
					  	sex:1,
					  	isguanzhu:true
					  },{
					  	userpic:'../../static/userpic/10.jpg',
					  	username:'老马',
					  	age:'25',
					  	sex:0,
					  	isguanzhu:false
					  },{
					  	userpic:'../../static/userpic/10.jpg',
					  	username:'奇葩',
					  	age:'18',
					  	sex:1,
					  	isguanzhu:true
					  },{
					  	userpic:'../../static/userpic/10.jpg',
					  	username:'老马',
					  	age:'25',
					  	sex:0,
					  	isguanzhu:false
					  },{
					  	userpic:'../../static/userpic/10.jpg',
					  	username:'奇葩',
					  	age:'18',
					  	sex:1,
					  	isguanzhu:true
					  },{
					  	userpic:'../../static/userpic/10.jpg',
					  	username:'老马',
					  	age:'25',
					  	sex:0,
					  	isguanzhu:false
					  },{
					  	userpic:'../../static/userpic/10.jpg',
					  	username:'奇葩',
					  	age:'18',
					  	sex:1,
					  	isguanzhu:true
					  },{
					  	userpic:'../../static/userpic/10.jpg',
					  	username:'奇葩',
					  	age:'18',
					  	sex:1,
					  	isguanzhu:true
					  },{
					  	userpic:'../../static/userpic/10.jpg',
					  	username:'奇葩',
					  	age:'18',
					  	sex:1,
					  	isguanzhu:true
					  },{
					  	userpic:'../../static/userpic/10.jpg',
					  	username:'奇葩',
					  	age:'18',
					  	sex:1,
					  	isguanzhu:true
					  },{
					  	userpic:'../../static/userpic/10.jpg',
					  	username:'奇葩',
					  	age:'18',
					  	sex:1,
					  	isguanzhu:true
					  }],
					  	
					},{
						loadtext:"上拉加载更多👆",
						list:[{
							userpic:'../../static/userpic/10.jpg',
							username:'老马',
							age:'25',
							sex:0,
							isguanzhu:false
						},{
							userpic:'../../static/userpic/10.jpg',
							username:'奇葩',
							age:'18',
							sex:1,
							isguanzhu:true
						}],
					},{ 
						loadtext:"上拉加载更多👆",
						list:[],
					}
				]
			}
		},
		methods:{
			//监听导航的index
		watchchange(e){
				this.tabindex=e.detail.current;
			},
		tabtap(index){
				this.tabindex=index;
			},
		//上拉事件
		loadtop(index1){
			if(this.newlist[index1].loadtext!="上拉加载更多👆"){return;}					
			this.newlist[index1].loadtext="加载中o(*￣▽￣*)ブ";
			setTimeout(()=> {
				let obj={
					userpic:'../../static/userpic/11.jpg',
					username:'马化腾',
					age:'25',
					sex:0,
					isguanzhu:false
						};
				this.newlist[index1].list.push(obj);
				this.newlist[index1].loadtext="上拉加载更多👆";
				//this.newlist[index1].loadtext="没有更多数据了/(ㄒoㄒ)/~~";
			}, 1000);
		}	
		},
		onLoad() {	
		uni.getSystemInfo({
		    success:(res)=> {
		        let height=res.windowHeight-uni.upx2px(100);
				this.swheigth=height;	
		    }
		});				  
		},
		onNavigationBarButtonTap(e) {
			if(e.index==0){
				uni.navigateBack({
					delta:1
				})
			}	
		}
		
	}
</script>

<style>

</style>
