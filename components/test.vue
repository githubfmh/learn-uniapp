<template>
	<view id='myView'>
		这个test组件{{num}}{{title}}
		<button @click='sendNum'>给父元素传值</button>
	</view>
</template>

<script>
	export default {
		name:"test",
		props: ['title'],
		data() {
			return {
				num: 3
			};
		},
		methods: {
			sendNum() {
				this.$emit('myEvent', this.num)
			}
		},
		beforeCreate() {
			console.log('beforeCreate', this.num)
		},
		created() {
			console.log('create', this.num)
		},
		beforeMount() {
			console.log('beforeMount', document.getElementById('myView'))
		},
		mounted() {
			console.log('mounted', document.getElementById('myView'))
		},
		beforeDestroy() {
			console.log("beforeDestroy", '组件被销毁了')
		},
		destroyed() {
			console.log('destroyed', '组件全完全销毁了')
		}
	}
</script>

<style>

</style>
