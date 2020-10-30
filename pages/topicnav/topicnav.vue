<template>
	<view>
		<swiperHead 
		:tablist="tablist"
		:tabindex="tabindex"
		:linewidth="linewidth"
		:scroll="scroll"
		@tabtap="tabtap"
		@watchscroll="watchscroll"
		></swiperHead>
		
		<view class="uni-tab-bar">
		 <swiper class="swiper-box" :style="{height:swheigth+'px'}" :current="tabindex" @change="watchchange"> 
				<swiper-item v-for="(items,index1) in newlist" :key="index1">
					 <scroll-view scroll-y class="list" @scrolltolower="loadtop(index1)" 
					  scroll-with-animation="true">
						<template v-if="items.list.length>0">
							<!--图文列表-->
							<view class="topic-view">
								<block v-for="(item,index) in items.list" :key="index">
								   <topicList :item="item" :index="index"></topicList>
								</block>
							</view>
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
	import swiperHead from '../../compoents/index/swiper-head.vue';
	import loadMore from '../../compoents/common/load-more.vue';
	import noThing from '../../compoents/common/no-thing.vue';
	import topicList from "../../compoents/news/topic-list.vue";
	var _self;
	export default {
		components:{
			swiperHead,
			loadMore,
			noThing,
			topicList
		},
		data() {
			return {
				swheigth:0,
				tabindex:0,
				linewidth:38,
				scroll:0,
				scrollwidth:432,
				tablist:[
					{name:"推荐",id:"tuijian"},
					{name:"娱乐",id:"yule"},
					{name:"嘻哈",id:"xiha"},
					{name:"美女",id:"meinv"},
					{name:"科技",id:"keji"},
					{name:"财富",id:"caifu"}
				],
				newlist:[
					{   
						loadtext:"上拉加载更多👆",
						list:[
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
					{   loadtext:"上拉加载更多👆",
						list:[
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
					{loadtext:"上拉加载更多👆",
						list:[
							
						]
					},
					{loadtext:"上拉加载更多👆",
						list:[
							
						]
					},
					{loadtext:"上拉加载更多👆",
						list:[
							
						]
					},
					{loadtext:"上拉加载更多👆",
						list:[
							
						]
					}
				]
				
			}
		},
		methods:{
			watchscroll(e){			
			},
			tabtap(index){
				this.tabindex=index;
				// console.log(this.tablist[index]);
			},
			//监听导航的index
			watchchange(e){
				this.tabindex=e.detail.current;
			},
			//上拉事件
			loadtop(index1){
				if(this.newlist[index1].loadtext!="上拉加载更多👆"){return;}					
				this.newlist[index1].loadtext="加载中o(*￣▽￣*)ブ";
				setTimeout(()=> {
					let obj={
							imgsrc:'../../static/topicpic/11.jpeg',
							titlea:'#淘宝记录薄#',
							neirong:'120斤到80斤 我的反转人生',
							dongtainum:545,
							jinrinum:720		
					};
					this.newlist[index1].list.push(obj);
					this.newlist[index1].loadtext="上拉加载更多👆";
					 
					  
					//this.newlist[index1].loadtext="没有更多数据了/(ㄒoㄒ)/~~";
					 
				}, 1000);
				
				
			}				
		},
		watch:{
			tabindex(e){
				//console.log(e);
				//监听index来滑动导航栏
				if(e==0){
				this.scroll=this.scrollwidth*(0/100);
				}
				else if(e==1){
				this.scroll=this.scrollwidth*(3/100);
				}
				else if(e==2){
				this.scroll=this.scrollwidth*(5/100);
				}
				else if(e==3){
				this.scroll=this.scrollwidth*(10/100);
				}
				else if(e==4){
				this.scroll=this.scrollwidth*(11/100);
				}
				else{
				this.scroll=this.scrollwidth*(100/100);
				}							
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
		onNavigationBarButtonTap(e){
			if(e.index==0){
				uni.navigateBack({
					delta:1
				})
			}
		}
		
	}
</script>

<style>
.topic-view{
	padding: 0 20upx;
}
</style>
