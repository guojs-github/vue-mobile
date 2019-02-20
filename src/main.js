// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 这里似乎是入口
import Vue from 'vue'
import Vuex from 'vuex'
import { ADD_BY, SHOW_COUNT } from './assets/constants/mutation-types'
import App from './App' // 组件App
import router from './router' // 路由器？
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false
// 开启debug模式
Vue.config.debug = true

Vue.use(MintUI) // Mint UI
Vue.use(Vuex) // Vuex

/* Vuex store */
const moduleA = {
	state: {
		countA: 99999
	},	

	getters: {
		countA: state => {
			return state.countA
		}		
	}
}

const moduleB = {
	namespaced: true,

	state: {
		countB: 88888
	},	

	getters: {
		countB: state => {
			return state.countB
		}		
	}
}

const store = new Vuex.Store({
	modules: {
		a: moduleA,
		b: moduleB
	},
	
	state: {
		count: -99,
		todos: [
			{ id: 1, text: '1...', done: true },
			{ id: 2, text: '2...', done: false },
			{ id: 3, text: '3...', done: true }
		],
		data: -1
	},
	
	getters: {
		doneTodos: state => {
			return state.todos.filter(todo => todo.done)
		},
		
		doneTodosCount: (state, getters) => {
			return getters.doneTodos.length
		},
		
		getTodoById: (state) => (id) => {
			return state.todos.find(todo => todo.id === id)
		}
	},

	mutations: {
		increment (state) {
			state.count++
		},
		
		incrementBy (state, payload) {
			state.count += payload.amount
		},
		
		[ADD_BY] (state, payload) {
			this.commit({
				type: 'incrementBy',
				amount: payload.amount
			})
		},

		[SHOW_COUNT] (state, payload) {
			console.log('count:' + state.count)
		}
		
	},

	actions: {
		increment ({ commit }) {
			console.log('Action increment')

			return new Promise((resolve, reject) => {
				setTimeout(() => {
					commit('increment')
					resolve()
				}, 3000)
			})			
		},
				
		async actionA ({ commit, dispatch }, getData) {
			console.log('Action A')

			commit(SHOW_COUNT, await dispatch('increment'))
		}
	}	
})

/* eslint-disable no-new */
new Vue({
  el: '#app', // DOM匹配表达式，作为Vue实例挂载目标
  store, // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
  router, // 指定路由器，挂载在<router-view/>节点下
  components: { App }, // 引用组件表
  template: '<App/>' // 调用App组件替换el指定的DOM对象
})
