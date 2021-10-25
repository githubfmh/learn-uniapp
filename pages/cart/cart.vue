<template>
	<view>
		<!-- view -->
		<view class='box' hover-class='box-active'>
			<view class='box2' hover-stop-propagation>购物车</view>
		</view>
		<!-- text -->
		<view>
			<text selectable>购物车</text>
			<text>&amp;</text>
		</view>
		<!-- button -->
		<view>
			<button size='mini' type='primary'>按钮</button>
		</view>
		<!-- image -->
		<view>
			<image src="../../static/123.jpg" mode=""></image>
			<image src="../../static/123.jpg" mode="aspectFill"></image>
			<image src="../../static/123.jpg" mode="aspectFit"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.box {
	width: 100px;
	height: 100px;
	background-color: red;
}

.box2 {
	width: 50px;
	height: 50px;
	background-color: pink;
}

.box-active {
	background-color: green;
}
</style>
