/*
	Vuex store global getters
	20190222 GuoJS
*/

export default {
	doneTodos: state => {
		return state.todos.filter(todo => todo.done)
	},
	
	doneTodosCount: (state, getters) => {
		return getters.doneTodos.length
	},
	
	getTodoById: (state) => (id) => {
		return state.todos.find(todo => todo.id === id)
	}
}
