/*
	Test2 plugin
	20190222 GuoJS
*/

const plugin = store => {
	// 当 store 初始化后调用
	store.subscribe((mutation, state) => {
		// 每次 mutation 之后调用
		// mutation 的格式为 { type, payload }
		console.log('test2 plugin triggered')
		console.log('mutation type:' + mutation.type)
		console.log('mutation payload:' + JSON.stringify(mutation.payload))
	})
}

export default plugin
