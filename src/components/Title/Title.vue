<template>
	<div class="form">
		<FormTitle title='Vue实现样例' :showGoback='false'/>
		<div class='form-body'>
			<img class='title' src='../../assets/login_bg.png'/>
			<div class='hint text-light'>请授权您的用户信息</div>
			<div class='authorize button-red ef-click-red' @click='onClickAuthorize'>
				授权
			</div>
			<div>
				<div>count = {{ count }}</div>
				<div>count alias = {{ countAlias }}</div>
				<div>count plus = {{ countPlus }}</div>
				<div>done todos = {{ doneTodos }}</div>
				<div>done todos count = {{ doneTodosCount }}</div>
				<div>done todo(id = 2) = {{ todo(2) }}</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import FormTitle from '@/components/Common/FormTitle'
export default {
	name: 'Title',

	data () {
		return {
			localCount: 20
		}
	},
	
	/*
	computed: {
		count () {
			return this.$store.state.count
		}
	},
	*/
	
	computed: mapState({
		count: state => state.count,

		countAlias: 'count', // 传字符串参数 'count' 等同于 `state => state.count`

		countPlus (state) {
			return state.count + this.localCount
		},

		doneTodos () {
			return this.$store.getters.doneTodos
		},

		doneTodosCount () {
			return this.$store.getters.doneTodosCount
		},
		
		todo () {
			return (id) => {
				return this.$store.getters.getTodoById(id)
			}
		}
	}),

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
<style scoped src='./Title.less' lang='less'/>
<style scoped>
</style>
