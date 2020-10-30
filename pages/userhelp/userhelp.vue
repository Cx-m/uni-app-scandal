<template>
	<view>
		<uni-collapse :accordion="true">
			<uni-collapse-item v-for="item in accordion" :key="item.id" :title="item.title" :show-animation="item.animation">
				<text class="content">{{ item.content }}</text>
			</uni-collapse-item>
		</uni-collapse>
		<view class="body">
			<button class="user-set-btn" type="primary">意见反馈</button> 
		</view>
	</view>
</template>

<script>
	import uniCollapse from '../../compoents/uni-collapse/uni-collapse.vue' 
	import uniCollapseItem from '../../compoents/uni-collapse-item/uni-collapse-item.vue'
	export default {
		components:{
			uniCollapse,
			uniCollapseItem
		},
		data() {
			return {
				accordion: [{
						id: 0,
						title: '客服什么时候在线？',
						content: '周一至周六10：00-12：00',
						animation: true
					},
					{
						id: 1,
						title: '忘记账号/昵称/密码怎么办',
						content: '你猜',
						animation: true
					},
					{
						id: 2,
						title: '怎么搜索/查找、关注/取关用户？',
						content: '不告诉你',
						animation: true
					}
				],
			}
		},
		methods: {
			
		}
	}
</script>

<style>
@import "../../common/form.css";
.content {
		padding: 15px;
		font-size: 14px;
		line-height: 20px;
		background-color: #f9f9f9;
		color: #666;
	}
</style>
