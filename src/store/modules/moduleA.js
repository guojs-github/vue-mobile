/*
	module A
	20190222 GuoJS
*/

const state = {
	countA: 99999
} 

const getters = {
	countA: state => {
		return state.countA
	}		
}

export default {
	state,	
	getters
}
