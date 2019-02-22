/*
	Vuex store global actions
	20190222 GuoJS
*/
import { SHOW_COUNT } from '../assets/constants/mutation-types'

export default {
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
