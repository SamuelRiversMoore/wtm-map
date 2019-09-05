<template>
	<div class="message-box dialog-mask">
		<div class="dialog-content card">
			<header>
				<h2>{{ $t('marker.header') }}</h2>
			</header>

			<el-form label-position="top" :model="item" @submit="validate">
				<div class="block">
					<el-form-item :label="$t('marker.coords')">
						<el-input v-model="item.position" name="position" @input="clearErrors"></el-input>
					</el-form-item>
					<el-form-item :label="$t('marker.infos')">
						<el-input v-model="item.tooltip" name="infos" @input="clearErrors"></el-input>
					</el-form-item>
					<el-alert v-if="hasError" :title="error" type="error"> </el-alert>
				</div>
				<footer class="align-right">
					<el-button @click.prevent="$close(false)">{{ $t('ui.cancel') }}</el-button>
					<el-button @click.prevent="validate" type="primary" native-type="submit">{{ $t('ui.validate') }}</el-button>
				</footer>
			</el-form>
		</div>
	</div>
</template>

<script>
const Coordinates = require('coordinate-parser')

Number.prototype.countDecimals = function() {
	if (Math.floor(this.valueOf()) === this.valueOf()) return 0
	return this.toString().split('.')[1].length || 0
}
Number.prototype.toFixedDown = function(digits) {
	const calcDec = Math.pow(10, digits)
	return Math.trunc(this * calcDec) / calcDec
}
export default {
	data() {
		return {
			item: {
				position: '',
				tooltip: ''
			},
			hasError: false,
			error: ''
		}
	},
	methods: {
		parse(value, decimals) {
			return Number(value).countDecimals() >= decimals ? Number(value).toFixedDown(decimals) : value
		},
		validate() {
			try {
				if (!this.item.position) throw new Error('Position is required')
				let coords = new Coordinates(this.item.position)
				this.$set(this.marker, 'position', { lat: this.parse(coords.latitude, 6), lng: this.parse(coords.longitude, 6) })
				this.$set(this.marker, 'tooltip', this.item.tooltip)
				this.$close(this.marker)
			} catch (e) {
				this.hasError = true
				this.error = e.message
			}
		},
		clearErrors() {
			this.hasError = false
			this.error = ''
		}
	},
	mounted() {
		if (this.marker && this.marker.position.lat && this.marker.position.lng) {
			this.item.position = this.parse(this.marker.position.lat, 6) + ', ' + this.parse(this.marker.position.lng, 6)
			this.item.tooltip = this.marker.tooltip
		}
	}
}
</script>
<style lang="scss">
input.error {
	border-color: red;
}
</style>
