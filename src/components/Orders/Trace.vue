<template>
	<div class="form">
		<FormTitle title='物流跟踪' :showGoback='true' @goback='onGoback'/>
		<div class='form-body' >
			<div class='section border-bottom head'>
				<div class='row first last'>
					<div class='label text-light'>运单号:</div>
					<div class='value text-normal'>{{ data.head.code }}</div>
				</div>
			</div>

			<div class='detail'>
				<div :id="item.id" :class=' index === 0? "section detail-item first text-normal": "section detail-item text-light"' v-for="(item, index) in data.detail" :key="item.id">
					<div class='row time'>
						<div class='image'>
							<img src='../../assets/time-axis-only.png' v-if="data.detail.length === 1"/>
							<img src='../../assets/time-axis-start.png' v-else-if="index === 0"/>
							<img src='../../assets/time-axis-end.png' v-else-if="index === (data.detail.length - 1)"/>
							<img src='../../assets/time-axis-middle.png' v-else/>
						</div>
						<div class='value'>{{ item.time }}</div>
					</div>
					<div :class='((index < (data.detail.length - 1)) && (data.detail.length != 1))? "row description middle": "row description"'>
						<div class='image'>
						</div>
						<div class='value'>{{ item.description }}</div>
					</div>
					<div :class='((index < (data.detail.length - 1)) && (data.detail.length != 1))? "row space line": "row space"'/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { toast } from '../../utils/toast'
import { request } from '../../utils/request'
import FormTitle from '@/components/Common/FormTitle'
export default {
	name: 'OrderTrace',

	data () {
		return {
			id: '',
			data: {
				head: {
					code: '单据编号'
				},
				detail: []
			}
		}
	},

	components: {
		FormTitle
	},

	created: function () {
		console.log('Order trace created.')

		this.init()
	},

	methods: {
		onGoback: function () {
			console.log('On click back')

			this.$router.go(-1)
		},

		/********************************/
		init: function () {
			console.log('Order trace initialize.')

			this.getParams()
			if (this.check()) {
				this.query()
			}
		},

		getParams: function () {
			console.log('Get params')
			let params = this.$route.params

			// Bill id
			this.id = params.id
			console.log('bill id:' + this.id)
		},

		check: function () {
			console.log('Check')
			let _this = this

			if (typeof this.id === 'undefined') {
				toast.show(
					'单据识别号无效，无法展示信息',
					2000,
					function () {
						_this.onGoback()
					}
				)
				return false
			}

			return true
		},

		query: function () {
			console.log('Order trace query.')

			let param = {
				id: this.id
			}

			let _this = this
			request.orderTrace(param).then(
				function (data) {
					console.log('Call order trace success.')
					console.log('Data:' + JSON.stringify(data))

					if (data.return === 0) {
						// head////////////
						_this.data.head.code = data.head.code

						// detail////////////
						// clear
						_this.data.detail.splice(0, _this.data.detail.length)
						// add
						for (let i = 0; i < data.detail.length; i++) {
							_this.data.detail.splice(_this.data.detail.length, 1, data.detail[i])
						}
					}
				},
				function (message) {
					console.log('Call order trace fail.')
					console.log('Message:' + message)

					toast.show(
						'读取单据信息失败',
						2000,
						function () {
							_this.onGoback()
						}
					) // toast
				}
			) // then
		} // query

	} // methods
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src='./Trace.less' lang='less'/>
<style scoped>
</style>
