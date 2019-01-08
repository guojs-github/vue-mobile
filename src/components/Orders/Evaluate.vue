<template>
	<div class="form">
		<FormTitle title='订单评价' :showGoback='true' @goback='onGoback'/>
		<div class='form-body'>
			<div class='section'>
				<div class='row score'>
					<div class='label text-normal'>订单评价</div>					

					<img id=1 class='first' src='../../assets/star.png' @click='onScore' v-if='data.score < 1'>
					<img id=1 class='first' src='../../assets/star_fill.png' @click='onScore' v-else>

					<img id=2 src='../../assets/star.png' @click='onScore' v-if='data.score < 2'>
					<img id=2 src='../../assets/star_fill.png' @click='onScore' v-else>

					<img id=3 src='../../assets/star.png' @click='onScore' v-if='data.score < 3'>
					<img id=3 src='../../assets/star_fill.png' @click='onScore' v-else>

					<img id=4 src='../../assets/star.png' @click='onScore' v-if='data.score < 4'>
					<img id=4 src='../../assets/star_fill.png' @click='onScore' v-else>

					<img id=5 src='../../assets/star.png' @click='onScore' v-if='data.score < 5'>
					<img id=5 src='../../assets/star_fill.png' @click='onScore' v-else>					
				</div>
				<div class='row comment'>
					<textarea class='text-light' placeholder='在此输入不超过100字的评价' maxlength='100' @input='onInputComment'>
					</textarea>
				</div>
				<div class='publish button-red ef-click-red' @click='onPublish'>发布</div>
			</div>
		</div>
	</div>
</template>

<script>
import { toast } from '../../utils/toast'
// import { request } from '../../utils/request'
import FormTitle from '@/components/Common/FormTitle'
export default {
	name: 'OrderEvaluate',

	data () {
		return {
			id: '',
			data: {
				score: 0,
				comment: ''
			}
		}
	},

	components: {
		FormTitle
	},

	created: function () {
		console.log('Order evaluate created.')

		this.init()
	},

	methods: {
		onGoback: function () {
			console.log('On click back')

			this.$router.go(-1)
		},
		
		onScore: function (e) {
			console.log('On score')
			console.log('id:' + e.currentTarget.id)
			
			this.data.score = e.currentTarget.id
		},

		onInputComment: function (e) {
			console.log('On input comment')
			console.log('value:' + e.currentTarget.value)
			
			this.data.comment = e.currentTarget.value
		},
		
		onPublish: function (e) {
			console.log('On publish')
			
			this.publish()
		},

		/********************************/
		init: function () {
			console.log('Order trace initialize.')

			this.getParams()
			this.check()
		}, // init

		getParams: function () {
			console.log('Get params')
			let params = this.$route.params

			// Bill id
			this.id = params.id
			console.log('bill id:' + this.id)
		}, // getParams

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
		}, // check
		
		publish: function () {
			console.log('Publish the evaluate')
			
			// check
			if (this.data.score < 1) {
				toast.show('请选择评价星数')
				return
			}

			if (this.data.comment.trim().length <= 0) {
				toast.show('请输入评价')
				return
			}
			
			// publish
			let _this = this
			toast.show(
				'感谢您的评价',
				2000,
				function () {
					console.log('publish success')
					_this.onGoback()
				}
			)			
		} // publish
		
	} // methods
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src='./Evaluate.less' lang='less'/>
<style scoped>
</style>
