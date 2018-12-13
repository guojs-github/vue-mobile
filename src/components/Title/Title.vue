<template>
	<div class="form">
		<FormTitle title='Vue实现样例' :showGoback='false'/>
		<div class='form-body'>
			<img class='title' src='../../assets/login_bg.png'/>
			<div class='hint text-light'>请授权您的用户信息</div>
			<div class='authorize button-red ef-click-red' @click='onClickAuthorize'>
				授权
			</div>
		</div>
	</div>
</template>

<script>
import FormTitle from '@/components/Common/FormTitle'
export default {
	name: 'Title',

	data () {
		return {
		}
	},

	components: {
		FormTitle
	},

	created: function () {
		console.log('Title created.')

		this.init()
	},

	methods: {
		onClickAuthorize: function (e) {
			console.log('On click authorize button.')
			
			this.$router.push({
				path: '/home',
				name: 'Home'
			})			
		},

		/********************************/
		init: function () {
			console.log('Title initialize.')
		}
	} // methods
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src='./Title.css'/>
<style scoped>
</style>
