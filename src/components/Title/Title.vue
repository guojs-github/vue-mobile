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
				<div class='incBy button ef-click-red' @click='onClickIncBy'>
					incBy
				</div>
				<div class='incBy button ef-click-red' @click='onClickAddBy'>
					addBy
				</div>
				<div class='increment button ef-click-red' @click='onClickIncrement'>
					increment
				</div>
				<div class='incrementBy button ef-click-red' @click='onClickIncrementBy'>
					incrementBy
				</div>
				<div class='incrementBy button ef-click-red' @click='onClickAddBy2'>
					addBy2
				</div>
				<div class='newProp button ef-click-red' @click='onClickNewProp'>
					newProp
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'
import { ADD_BY } from '../../assets/constants/mutation-types'
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

		onClickIncBy: function (e) {
			this.incBy(-1)
		},

		onClickAddBy: function (e) {
			this.addBy(1)
		},

		onClickIncrement: function (e) {
			this.increment()
		},

		onClickIncrementBy: function (e) {
			this.incrementBy({
				amount: 3
			})
		},

		onClickAddBy2: function (e) {
			this.addBy2({
				amount: -1000
			})
		},

		onClickNewProp: function (e) {
			Vue.set(this.$store.state, 'newProp', '太好了！')
			this.$store.state.obj = { ...this.$store.state.obj, newProp2: 123 }
			
			console.log(this.$store.state)
		},

		/********************************/
		init: function () {
			console.log('Title initialize.')
		},
		
		incBy: function (amount) {
			this.$store.commit({
				type: 'incrementBy',
				amount: amount
			})
		},
		
		addBy: function (amount) {
			this.$store.commit({
				type: ADD_BY,
				amount: amount
			})
		},
		
		...mapMutations([
			'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

			// `mapMutations` 也支持载荷：
			'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
		]),
		
		...mapMutations({
			// `mapMutations` 也支持载荷：
			addBy2: 'incrementBy' // 将 `this.addBy2(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
		})
	} // methods
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src='./Title.less' lang='less'/>
<style scoped>
</style>
