<template>
	<view>
		<view>{{msg}} Uni</view>
		<view v-for='item in arr' :key='item.id'>
			姓名: {{item.name}}
			年龄: {{item.age}}
			序号: {{item.id}}
		</view>
		<button size='mini' @click='clickHanle(20, $event)'>按钮</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				msg: "Hello",
				arr: [
					{
						name: '小明',
						age: 20,
						id: 1
					},
					{
						name: '小龙',
						age: 22,
						id: 2
					},
					{
						name: '小胖',
						age: 30,
						id: 3
					},
				]
			}
		},
		methods: {
			clickHanle(num, e) {
				console.log(1, num, e)
			}
		}
	}
</script>

<style>

</style>
