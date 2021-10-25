<template>
	<view>
		<button @click='chooseImg' size='mini'>上传图片</button>
		<image 
			v-for='item in imgArr' 
			:src='item' 
			mode=""
			@click='previewImg(item)'
		></image>
		<!-- #ifdef H5 -->
		<view>我希望只在H5页面中看见</view>
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
		<view>我希望只在微信小程序中看见</view>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgArr: []
			}
		},
		methods: {
			chooseImg() {
				uni.chooseImage({
					count: 5,
					success: (res) => {
						this.imgArr = res.tempFilePaths
					}
				})
			},
			previewImg(current) {
				console.log(current)
				uni.previewImage({
					current,
					urls: this.imgArr,
					loop: true,
					indicator: Number
				})
			}
		},
		onLoad() {
			// #ifdef H5
			console.log('我希望在h5中打印')
			// #endif
			// #ifdef MP-WEIXIN
			console.log('我希望在微信小程序中打印')
			// #endif
		}
	}
</script>

<style>
	/* #ifdef H5 */
	view {
		color: hotpink;
	}
	/* #endif */
	/* #ifdef MP-WEIXIN */
	view {
		color: red;
	}
	/* #endif */
</style>
