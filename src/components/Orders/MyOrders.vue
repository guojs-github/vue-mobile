<template>
  <div class="form">
    <FormTitle title='我的订单' :showGoback='true' @goback='onGoback'/>

	<div class='tabs section border-bottom'>
		<div class='tab-bar row'>
			<div class='tab flex-row'>
				<div :class='[ this.category !== "all"? "title": "title text-red border-bottom-red"]' @click='onChangeTab("all")'>全部</div>
			</div>
			<div class='tab flex-row'>
				<div :class='[ this.category !== "shipping"? "title": "title text-red border-bottom-red"]' @click='onChangeTab("shipping")'>已发货</div>
			</div>
			<div class='tab flex-row'>
				<div :class='[ this.category !== "finished"? "title": "title text-red border-bottom-red"]' @click='onChangeTab("finished")'>已完结</div>
			</div>
			<div class='tab flex-row'>
				<div :class='[ this.category !== "toBeEvaluated"? "title": "title text-red border-bottom-red"]' @click='onChangeTab("toBeEvaluated")'>待评价</div>
			</div>
		</div>
	</div>

    <div class='form-body' @scroll="onScroll">
      <FormBodyList
        :list="data.list"
        :more="data.more"
        @loadData='onLoadData'
        @loadMoreData='onLoadMoreData'
      >
        <template slot-scope="{ item }">
			<div class='section my-orders'>
				<div :id='item.id' class='flex-column ef-click content ' @click='onClickDetail'>
					<div class='row orders-title'>
						<div class='flex-row text'>
							<div>运单号:</div>
							<div class='text-dark label-value-margin'>{{ item.code }}</div>
						</div>
						<div class='flex-row text-dark right'>
							<div class='text-red status'>
							  {{ item.status }}
							</div>
							<div class='image favour'>
							  <img src='../../assets/star_fill.png' v-if='item.favour == true'>
							  <img src='../../assets/star.png' v-else>
							</div>
						</div>
					</div>
					<div class='row orders-schedule'>
						<div class='text-blue startPoint'>{{ item.startPoint}} </div>
						<div class='background-blue hyphen'></div>
						<div class='text-blue terminal'>{{ item.terminal}} </div>
					</div>
					<div class='flex-column text-normal orders-info'>
						<div class='flex-row text-normal time'>
							<div>时间:</div>
							<div class='label-value-margin'>{{ item.time }}</div>
						</div>
						<div class='flex-row text-normal arrival'>
							<div>到达:</div>
							<div class='label-value-margin'>{{ item.arrival }}</div>
						</div>
					</div>
				</div>
				<OrderEditBar :id='item.id' @clickButton='onClickOrderBar'/>
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
import OrderEditBar from '@/components/Common/OrderEditBar'
export default {
	name: 'MyOrders',

	data () {
		return {
			scrollTop: 0,
			category: '',
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
		FormBodyList,
		OrderEditBar
	},

	created: function () {
		console.log('My orders list created.')
	},

	beforeRouteEnter: function (to, from, next) {
		console.log('My orders list before router enter.')
		console.log('to:' + to.name)
		console.log('from:' + from.name)
		console.log('next:' + next.name)

		// 从明细来的为回退，其它都是刷新
		if ((from.name === 'OrderDetail') ||
			(from.name === 'OrderTrace') || 
			(from.name === 'OrderEvaluate')) {
			to.meta.isBack = true
		} else {
			to.meta.isBack = false
		}

		next() // 继续执行路由, 否则路由中断，页面不显示
	},

	activated: function () {
		console.log('My orders list activated.')

		this.init()
	},

	methods: {
		onGoback: function () {
			console.log('On click back')

			window.history.length > 1
			? this.$router.go(-1)
			: this.$router.push('/home')
		}, // onGoBack

		onLoadData: function () {
			console.log('On load my orders list data')

			this.query(true)
		}, // onLoadData

		onLoadMoreData: function () {
			console.log('On load more my orders list data')

			this.query()
		}, // onLoadMoreData

		onClickDetail: function (e) {
			console.log('On click report detail')
			console.log('id:' + e.currentTarget.id)

			this.$router.push({
				path: '/Orders/detail',
				name: 'OrderDetail',
				params: {
					id: e.currentTarget.id
				}
			})
		},

		onScroll: function (e) {
			console.log('On form-body scroll')
			console.log('Scroll top:' + e.currentTarget.scrollTop)

			this.scrollTop = e.currentTarget.scrollTop
		},

		onChangeTab: function (tab) {
			console.log('On change tab')
			console.log('tab:' + tab)
			
			if (this.category !== tab) {
				this.category = tab
				this.query(true)
			}			
		}, // onChangeTab
	
		onClickOrderBar: function (data) {
			console.log('On click order bar')
			console.log('data:' + JSON.stringify(data))
			
			if (data.code === 'trace') {
				this.$router.push({
					path: '/Orders/trace',
					name: 'OrderTrace',
					params: {
						id: data.id
					}
				})
			} else if (data.code === 'evaluate') {
				this.$router.push({
					path: '/Orders/evaluate',
					name: 'OrderEvaluate',
					params: {
						id: data.id
					}
				})
			} // if
		},
		
		/********************************/
		init: function () {
			console.log('My orders list initialize.')

			if (this.$route.meta.isBack) {
				this.restore()
			} else {
				this.onChangeTab('all')				
			}
		},

		query: function (reset) {
			console.log('My orders list query.')

			if ((reset !== true) && (this.data.pageIndex < 0)) { // 如果reset标志没有，而且pageIndex不是已经有加载过页面，则不查询
				return
			}
			
			if (reset) {
				this.restore(true)
			}

			let param = {
				pageIndex: reset ? 0 : this.data.pageIndex + 1,
				pageSize: this.data.pageSize,
				category: this.category
			}

			let _this = this
			request.myOrders(param).then(
				function (data) {
					console.log('Call my orders list success.')
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
					console.log('Call my orders list fail.')
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
<style scoped src='./MyOrders.less' lang='less'/>
<style scoped>
</style>
