<template>
	<view class="content">
		<test v-if='flag' :title='title' @myEvent='getNum'/>
		<button @click='isFlag'>切换组件</button>
		
		<view>
			<test-a/>
			<test-b/>
		</view>
	</view>
</template>

<script>
	import Test from '@/components/test.vue'
	import TestA from '@/components/a.vue'
	import TestB from '@/components/b.vue'
	export default {
		components: {
			Test,
			TestA,
			TestB
		},
		data() {
			return {
				title: 'Hello',
				flag: true,
				num: 0
			}
		},
		onLoad(options) {
			console.log(options)
		},
		onShow() {
			console.log('onShow')
		},
		onReady() { //初次渲染
			console.log('onReady')
		},
		onHide() {
			console.log('onHide')
		},
		onUnload() {
			console.log('onUnload')
		},
		methods: {
			isFlag() {
				this.flag = !this.flag
			},
			getNum(num) {
				console.log(num)
				this.num = num
				console.log(this.num)
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
