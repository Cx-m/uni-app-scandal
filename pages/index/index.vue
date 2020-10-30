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
							<block v-for="(item,index) in items.list" :key="index">
							    <indexList 
								 :item="item" 
								 :index="index"
								 @guanzhu="guanzhu(index)"
								 @caozuo="caozuo($event,index)"></indexList>
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
	import indexList from '../../compoents/index/index-list.vue';
	import swiperHead from '../../compoents/index/swiper-head.vue';
	import loadMore from '../../compoents/common/load-more.vue';
	import noThing from '../../compoents/common/no-thing.vue';
	var _self;
	export default {
		components:{
			indexList,
			swiperHead,
			loadMore,
			noThing
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
								userimg:"../../static/userpic/10.jpg",
								username:"昵称",
								guanzhupd:true,
								contents:"我是标题",
								type:"img",//img图片，video视频
								contentsimg:"../../static/datapic/14.jpg",
								biaoqing:{
									index:1,//0表示无操作，1表示顶了，2表示踩了
									dingnum:10,
									cainum:10
								},
								pinglunnum:10,
								sharenum:100
							},
							{
								userimg:"../../static/userpic/10.jpg",
								username:"昵称",
								guanzhupd:true,
								contents:"我是标题",
								type:"video",//img图片，video视频
								playnum:"20w",
								playtime:"2:40",
								contentsimg:"../../static/datapic/14.jpg",
								biaoqing:{
									index:1,//0表示无操作，1表示顶了，2表示踩了
									dingnum:10,
									cainum:10
								},
								pinglunnum:10,
								sharenum:100
							}
						]
					},
					{   loadtext:"上拉加载更多👆",
						list:[
							{
								userimg:"../../static/userpic/10.jpg",
								username:"昵称",
								guanzhupd:false,
								contents:"我是标题",
								type:"img",//img图片，video视频
								contentsimg:"../../static/datapic/14.jpg",
								biaoqing:{
									index:0,//0表示无操作，1表示顶了，2表示踩了
									dingnum:10,
									cainum:10
								},
								pinglunnum:10,
								sharenum:100
							},
							{
								userimg:"../../static/userpic/10.jpg",
								username:"昵称",
								guanzhupd:true,
								contents:"我是标题",
								type:"video",//img图片，video视频
								playnum:"20w",
								playtime:"2:40",
								contentsimg:"../../static/datapic/14.jpg",
								biaoqing:{
									index:1,//0表示无操作，1表示顶了，2表示踩了
									dingnum:10,
									cainum:10
								},
								pinglunnum:10,
								sharenum:100
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
		onNavigationBarSearchInputClicked(){
			uni.navigateTo({
			    url: '../search/search'			   
			});
		},
		onNavigationBarButtonTap(e){
			if(e.index==1){
				uni.navigateTo({
				   url:'../fabu/fabu'	   
				});
			}
			},
		methods:{
			watchscroll(e){			
			},
			tabtap(index){
				this.tabindex=index;
				// console.log(this.tablist[index]);
			},
			//关注
			guanzhu(index1){			
				let o=this.newlist[this.tabindex].list[index1];
				o.guanzhupd=true;
				uni.showToast({
					title:'关注成功',
					mask:true,
					icon:'none'
				})
			},
			//顶踩操作
			caozuo(type,index2){
				let ok=this.newlist[this.tabindex].list[index2];
				switch (type){
					case "ding":
					if(ok.biaoqing.index==1){return;}
					ok.biaoqing.dingnum++;					
					if(ok.biaoqing.index==2){
						ok.biaoqing.cainum--;
					}
					ok.biaoqing.index=1;
						break;
					case "cai":
					if(ok.biaoqing.index==2){return;}
					ok.biaoqing.cainum++;
					if(ok.biaoqing.index==1){
						ok.biaoqing.dingnum--;
					}
					ok.biaoqing.index=2;
						break;
			}
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
						userimg:"../../static/userpic/10.jpg",
						username:"昵称",
						guanzhupd:false,
						contents:"我是标题",
						type:"img",//img图片，video视频
						contentsimg:"../../static/datapic/14.jpg",
						biaoqing:{
							index:0,//0表示无操作，1表示顶了，2表示踩了
							dingnum:10,
							cainum:10
						}, 
						pinglunnum:10,
						sharenum:100
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
		}
		
	}
</script>

<style>
	
</style>
