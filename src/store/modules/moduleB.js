/*
	module B
	20190222 GuoJS
*/

const state = {
	countB: 88888
} 

const getters = {
	countB: state => {
		return state.countB
	}		
}

export default {
	namespaced: true,
	state,	
	getters
}
