<template>
	<div class='bottom-bar section'>
		<div class='bar row'>
			<div class='left'>
				<div class='image ef-click' @click.stop='onClickTrack'>
					<img src='../../assets/track.png'/>
				</div>
			</div>
			<div class='right flex-row'>
				<div class='button ef-click' @click.stop='onClickPickupSign'>
					提货签到
				</div>
				<div class='button ef-click' @click.stop='onClickEvaluate'>
					评价
				</div>
			</div>
		</div>
	</div>	
</template>

<script>
export default {
	name: 'OrderEditBar',

	props: {
		id: {
			type: String,
			required: false
		}
	},

	data () {
		return {
		}
	},
	methods: {
		onClickTrack: function (e) {
			console.log('On click track button.')
			
			let data = {
				id: this.$props.id,
				code: 'trace'
			}
			this.$emit('clickButton', data)
		},

		onClickPickupSign: function (e) {
			console.log('On click pickup sign button.')

			let data = {
				id: this.$props.id,
				code: 'pickup-sign'
			}
			this.$emit('clickButton', data)
		},

		onClickEvaluate: function (e) {
			console.log('On click evaluate button.')

			let data = {
				id: this.$props.id,
				code: 'evaluate'
			}
			this.$emit('clickButton', data)
		}
		
		/******************************/
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src='./OrderEditBar.css' />
<style scoped>
</style>
