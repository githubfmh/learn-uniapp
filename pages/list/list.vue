<template>
	<view>
		<view class='box-item' v-for='(item, index) in list' :key='index'>
			{{item}}
		</view>
		<view @click='pullDown'>下拉刷新</view>
		<view @click='setStorage'>存储数据</view>
		<view @click='getStorage'>获取数据</view>
		<view @click='removeStorage'>移出数据</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: ['前端', 'Java', 'Python', 'PHP']
			}
		},
		onPullDownRefresh() {
			console.log('触发了下拉刷新')
			this.list = ['1', '2', '3', '4']
			setTimeout(() => {
				uni.stopPullDownRefresh()
			}, 2000)
		},
		onReachBottom() {
			console.log('滚动到底部了')
			// this.list = [...this.list, ...['前端', 'Java', 'Python', 'PHP']]
		},
		methods: {
			pullDown() {
				uni.startPullDownRefresh()
			},
			setStorage() {
				// uni.setStorage({
				// 	key: 'id',
				// 	data: 80,
				// 	success() {
				// 		console.log('存储成功')
				// 	}
				// })
				uni.setStorageSync('id', 100)
			},
			getStorage() {
				// uni.getStorage({
				// 	key: 'id',
				// 	success(res) {
				// 		console.log('获取成功', res.data)
				// 	}
				// })
				const res = uni.getStorageSync('id');
				console.log(res)
			},
			removeStorage() {
				// uni.removeStorage({
				// 	key: 'id',
				// 	success() {
				// 		console.log('删除成功')
				// 	}
				// })
				uni.removeStorageSync('id')
			}
		}
	}
</script>

<style>
.box-item {
	height: 500px;
	line-height: 500px;
}
</style>
