<template>
	<view>
		<button @click='addNum'>修改b组件的数据</button>
	</view>
</template>

<script>
	export default {
		name:"a",
		data() {
			return {
				
			};
		},
		methods: {
			addNum() {
				uni.$emit('updateNum', 5)
			}
		}
	}
</script>

<style>

</style>
