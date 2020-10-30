<template>
	<view class="big animated fadeInLeft fast">
		<!-- 弹出 -->
		<paperPop 
		:showpop="showpop"
		@hidepop="hidepop"
		@friends="friends"
		@clear="clear"
		></paperPop>
		<block v-for="(item,index) in list" :key="index">
			<paperList :item="item"></paperList>
		</block>
		<!--上拉加载-->
		<loadMore :loadtext="loadtext"></loadMore>
		<!-- 没有滚动条，让它为空 -->
	</view>
</template>

<script>
	import paperList from "../../compoents/paper/paper-list.vue";
	import loadMore from "../../compoents/common/load-more.vue";
	import paperPop from "../../compoents/paper/paper-pop.vue"
	export default {
		components:{
			paperList,
			loadMore,
			paperPop
		},
		data() {
			return {
				showpop:false,
				loadtext:"上拉加载更多👆",
				list:[
					{   
						paperimg:'../../static/userpic/10.jpg',
						papertitle:'标题',
						paperinfo:'我是信息0',
						papertime:'13:58',
						papertext:'10'					
					},
					{
						paperimg:'../../static/userpic/10.jpg',
						papertitle:'标题',
						paperinfo:'我是信息',
						papertime:'13:58',
						papertext:'0'				
					},
					{
						paperimg:'../../static/userpic/10.jpg',
						papertitle:'标题',
						paperinfo:'我是信息',
						papertime:'13:58',
						papertext:'2'					
					},
					{
						paperimg:'../../static/userpic/10.jpg',
						papertitle:'标题',
						paperinfo:'我是信息',
						papertime:'13:58',
						papertext:'22'					
					},
					{
						paperimg:'../../static/userpic/10.jpg',
						papertitle:'标题',
						paperinfo:'我是信息0',
						papertime:'13:58',
						papertext:'10'					
					},
					{
						paperimg:'../../static/userpic/10.jpg',
						papertitle:'标题',
						paperinfo:'我是信息',
						papertime:'13:58',
						papertext:'0'				
					}
				],
				winHeight:'',
				pageHeight:''
			}
		},
		onReachBottom() {
			this.loadtop();
		},
		onNavigationBarButtonTap(e){
			switch (e.index){
				case 0:
				    this.showpop=false;
					uni.navigateTo({
						url:'../userlist/userlist'
					})
					break;
				case 1:
				    this.showpop=true;
					break;
			}
		},
		methods: {
			//隐藏遮罩
			hidepop(){
				this.showpop=false; 
			},	
			//加好友
			friends(){
			  // console.log('加好友');
			   this.showpop=false;
			},
			clear(){
				//console.log('清除');
				this.showpop=false;
			},	
			//上拉加载
			loadtop(){
				if(this.loadtext!="上拉加载更多👆"){return;}					
				this.loadtext="加载中o(*￣▽￣*)ブ";
				setTimeout(()=> {
					let obj={
						paperimg:'../../static/userpic/10.jpg',
						papertitle:'标题',
						paperinfo:'我是信息',
						papertime:'13:58',
						papertext:'22'					
					};
					this.list.push(obj);
					this.loadtext="上拉加载更多👆";				  
					//this.loadtext="没有更多数据了/(ㄒoㄒ)/~~";				 
				}, 1000);				
			},	
			//多出的字用点显示
			jsu(){
				for (let i=0; i<this.list.length;i++) {
					if(this.list[i].paperinfo.length>4){
						this.list[i].paperinfo=this.list[i].paperinfo.substring(0,4)+'...';
						//substring(start,end)表示从start到end之间的字符串，包括start位置的字符但是不包括end位置的字符。
					}
				}
			},
			getdata(){					
				setTimeout(()=> {
					//获取数据
					let arr=[
						{
							paperimg:'../../static/userpic/10.jpg',
							papertitle:'马云',
							paperinfo:'借我点钱花吧！',
							papertime:'13:58',
							papertext:'10'					
						},
						{
							paperimg:'../../static/userpic/10.jpg',
							papertitle:'王健林',
							paperinfo:'我破产了！',
							papertime:'13:58',
							papertext:'0'				
						},
						{
							paperimg:'../../static/userpic/10.jpg',
							papertitle:'巴菲特',
							paperinfo:'我教你炒股啊！',
							papertime:'13:58',
							papertext:'2'					
						},
						 {
						 	paperimg:'../../static/userpic/10.jpg',
						 	papertitle:'马云',
						 	paperinfo:'借我点钱花吧！',
						 	papertime:'13:58',
						 	papertext:'10'					
						 },
						 {
						 	paperimg:'../../static/userpic/10.jpg',
						 	papertitle:'王健林',
						 	paperinfo:'我破产了！',
						 	papertime:'13:58',
						 	papertext:'0'				
						 },
						 {
						 	paperimg:'../../static/userpic/10.jpg',
						 	papertitle:'巴菲特',
						 	paperinfo:'我教你炒股啊！',
						 	papertime:'13:58',
						 	papertext:'2'					
						 },
						  {
						  	paperimg:'../../static/userpic/10.jpg',
						  	papertitle:'马云',
						  	paperinfo:'借我点钱花吧！',
						  	papertime:'13:58',
						  	papertext:'10'					
						  },
						  {
						  	paperimg:'../../static/userpic/10.jpg',
						  	papertitle:'王健林',
						  	paperinfo:'我破产了！',
						  	papertime:'13:58',
						  	papertext:'0'				
						  },
						  {
						  	paperimg:'../../static/userpic/10.jpg',
						  	papertitle:'巴菲特',
						  	paperinfo:'我教你炒股啊！',
						  	papertime:'13:58',
						  	papertext:'2'					
						  },
						  {
						  	paperimg:'../../static/userpic/10.jpg',
						  	papertitle:'马云',
						  	paperinfo:'借我点钱花吧！',
						  	papertime:'13:58',
						  	papertext:'10'					
						  },
						  {
						  	paperimg:'../../static/userpic/10.jpg',
						  	papertitle:'王健林',
						  	paperinfo:'我破产了！',
						  	papertime:'13:58',
						  	papertext:'0'				
						  },
						  {
						  	paperimg:'../../static/userpic/10.jpg',
						  	papertitle:'巴菲特',
						  	paperinfo:'我教你炒股啊！',
						  	papertime:'13:58',
						  	papertext:'2'					
						  } 
					];
					//赋值
					this.list=arr;
					//多出的字用点显示
					this.jsu();
					//关闭下拉刷新
					uni.stopPullDownRefresh();
				}, 1000);
			},
			/* watchsoroll(){
				let that = this;
				const query = uni.createSelectorQuery().in(this);
				query.select('.big').boundingClientRect(data => {
					that.pageHeight = data.bottom;
				  // console.log("得到布局位置信息" + JSON.stringify(data));
				}).exec();
				if(that.winHeight<that.pageHeight){//出现滚动
					console.log('我是滚动条',that.winHeight,that.pageHeight);
					this.loadtext='上拉加载更多👆';
				}else{
					console.log('滚动条消失')
				    this.loadtext='';//可以啦，我自己再改一下就行了！嗯	
				}
			} */
		},
		onPullDownRefresh() {
			 this.getdata(); 
		 },
		onLoad() {
			this.jsu();
			/* let that = this;
			uni.getSystemInfo({
			    success: function (res){
					//that.winHeight = res.windowHeight;
			         console.log(res);
			    }
			}); */
		
		},
		mounted(){
			//this.watchsoroll();
		},
		onPageScroll(){
			//this.watchsoroll();
		},
		onShow() {
			//this.watchsoroll();
		}
		
	
		
	}
</script>

<style>
.big{
	padding: 0 20upx;
}
</style>
