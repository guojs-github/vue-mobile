<template>
	<div class="form">
		<FormTitle title='预警提醒' :showGoback='true' @goback='onGoback'/>
		<div class='form-body' @scroll="onScroll">
		<FormBodyList
			:list="data.list"
			:more="data.more"
			@loadData='onLoadData'
			@loadMoreData='onLoadMoreData'
		>
			<template slot-scope="{ item }">
				<div class='section projectDailyReport'>
					<div :id='item.id' class='flex-column content'>
						<div class='text-dark warning-title'>
							{{ item.title }}
						</div>
						<div class='text-light warning-time'>
							{{ item.time }}
						</div>
						<div class='text-normal warning-content'>
							{{ item.content }}
						</div>
					</div>
				</div>
			</template>
		</FormBodyList>
		</div>
	</div>
</template>

<script>
import { request } from '../../utils/request'
import FormTitle from '@/components/Common/FormTitle'
import FormBodyList from '@/components/Common/FormBodyList'
export default {
	name: 'WarningList',

	data () {
		return {
			scrollTop: 0,
			data: {
				pageIndex: -1,
				pageSize: 30,
				more: true,
				list: []
			}
		}
	},

	components: {
		FormTitle,
		FormBodyList
	},

	created: function () {
		console.log('Warning list created.')
	},

	beforeRouteEnter: function (to, from, next) {
		console.log('Warning list before router enter.')
		console.log('to:' + to.name)
		console.log('from:' + from.name)
		console.log('next:' + next.name)

		/*
		// 从明细来的为回退，其它都是刷新
		if (from.name === 'WarningDetail') {
			to.meta.isBack = true
		} else {
			to.meta.isBack = false
		}
		*/

		next() // 继续执行路由, 否则路由中断，页面不显示
	},

	activated: function () {
		console.log('Warning list activated.')

		this.init()
	},

	methods: {
		onGoback: function () {
			console.log('On click back')

			window.history.length > 1
			? this.$router.go(-1)
			: this.$router.push('/home')
		},

		onLoadData: function () {
			console.log('On load warning data')

			this.query(true)
		},

		onLoadMoreData: function () {
			console.log('On load more warning data')

			this.query()
		},

		onScroll: function (e) {
			console.log('On form-body scroll')
			console.log('Scroll top:' + e.currentTarget.scrollTop)

			this.scrollTop = e.currentTarget.scrollTop
		},

		/********************************/
		init: function () {
			console.log('Warning list initialize.')

			if (this.$route.meta.isBack) {
				this.restore()
			} else {
				this.query(true)
			}
		},

		query: function (reset) {
			console.log('Warning list query.')

			if ((reset !== true) && (this.data.pageIndex < 0)) { // 如果reset标志没有，而且pageIndex不是已经有加载过页面，则不查询
				return
			}

			let param = {
				pageIndex: reset ? 0 : this.data.pageIndex + 1,
				pageSize: this.data.pageSize
			}

			let _this = this
			request.warningList(param).then(
				function (data) {
					console.log('Call warning list success.')
					console.log('Data:' + JSON.stringify(data))

					if (data.return === 0) {
						if (reset) {
							_this.data.list.splice(0, _this.data.list.length)
							_this.data.pageIndex = -1
						}

						for (let i = 0; i < data.list.length; i++) {
							_this.data.list.splice(_this.data.list.length, 1, data.list[i])
						}

						_this.data.more = data.more
						_this.data.pageIndex++
					}
				},
				function (message) {
					console.log('Call warning list fail.')
					console.log('Message:' + message)
				}
			)
		}, // query

		restore: function (reset) {
			console.log('Restore display')
			console.log('reset:' + reset)

			// scroll top
			let el = document.getElementsByClassName('form-body')
			if (el.length === 1) {
				// el[0].scrollTo(0, this.scrollTop) // 微信似乎不支持
				el[0].scrollLeft = 0
				el[0].scrollTop = reset ? 0 : this.scrollTop
			}
		} // restore
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src='./List.css'/>
<style scoped>
</style>
