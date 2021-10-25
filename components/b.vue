<template>
	<view>
		这个b数据：{{num}}
	</view>
</template>

<script>
	export default {
		name:"b",
		data() {
			return {
				num: 0
			};
		},
		created() {
			uni.$on('updateNum', num => {
				this.num += num
			})
		}
	}
</script>

<style>

</style>
