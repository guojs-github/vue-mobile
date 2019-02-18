// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 这里似乎是入口
import Vue from 'vue'
import Vuex from 'vuex'
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
const store = new Vuex.Store({
	state: {
		count: -99,
		todos: [
			{ id: 1, text: '1...', done: true },
			{ id: 2, text: '2...', done: false },
			{ id: 3, text: '3...', done: true }
		]		
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
