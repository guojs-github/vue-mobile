/*
	Vuex store
	20190222 GuoJS
*/

import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import moduleA from './modules/moduleA'
import moduleB from './modules/moduleB'

Vue.use(Vuex) // Vuex

export default new Vuex.Store({
	modules: {
		a: moduleA,
		b: moduleB
	},	
	state,
	getters,
	mutations,
	actions
})
