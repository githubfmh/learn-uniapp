<template>
	<view>
		<view>导航跳转的学习</view>
		<navigator url="/pages/login/login">
			跳转到登录页
		</navigator>
		<navigator url="/pages/message/message">
			跳转到信息页
		</navigator>
		<navigator url="/pages/cart/cart" open-type="switchTab">
			跳转到购物车
		</navigator>
		<button size='mini' @click="goLogin">跳转到详情页</button>
		<button size='mini' @click='goIndex'>跳转到index</button>
		<button size='mini' @click='goCart'>跳转到cart并关闭当前页面</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goLogin() {
				uni.navigateTo({
					url: '../login/login'
				})
			},
			goIndex() {
				uni.switchTab({
					url: '../index/index'
				})
			},
			goCart() {
				uni.redirectTo({
					url: '/pages/cart/cart'
				})
			}
		}
	}
</script>

<style>

</style>
