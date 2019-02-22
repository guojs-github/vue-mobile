/*
	Vuex store global mutations
	20190222 GuoJS
*/
import { ADD_BY, SHOW_COUNT } from '../assets/constants/mutation-types'

export default {
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
}
