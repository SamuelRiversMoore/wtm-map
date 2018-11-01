<template>
	<div class="message-box dialog-mask">
		<div class="dialog-content card">
			<header><h4>Editer un marker</h4></header>
			<div class="block">
				<p>
					<label for="position">Coordonnées</label>
					<input type="text" name="position" v-model="position" @input="hasError = false" :class="{error:hasError}" />
					<span class="error text" v-show="hasError">Le format est incorrect</span>
				</p>
				<p>
					<label for="infos">Infos</label>
					<input type="text" name="infos" v-model="tooltip">
				</p>
			</div>
			<footer class="is-right">
				<button class="button" @click="$close(false)">Annuler</button>
				<button class="button primary" @click="validate">Valider</button>
			</footer>
		</div>
	</div>
</template>

<script>
const Coordinates = require("coordinate-parser");

Number.prototype.countDecimals = function() {
	if (Math.floor(this.valueOf()) === this.valueOf()) return 0;
	return this.toString().split(".")[1].length || 0;
};
Number.prototype.toFixedDown = function(digits) {
	const calcDec = Math.pow(10, digits);
	return Math.trunc(this * calcDec) / calcDec;
};
export default {
	data() {
		return {
			position: "",
			tooltip: "",
			hasError: false
		};
	},
	methods: {
		parse(value, decimals) {
			return Number(value).countDecimals() >= decimals ? Number(value).toFixedDown(decimals) : value;
		},
		validate() {
			try {
				if (!this.position) throw "Position required";
				let coords = new Coordinates(this.position);
				this.$set(this.marker, "position", { lat: this.parse(coords.latitude, 6), lng: this.parse(coords.longitude, 6) });
				this.$set(this.marker, "tooltip", this.tooltip);
				this.$close(this.marker);
			} catch (e) {
				this.hasError = true;
				console.error(e);
			}
		}
	},
	mounted() {
		if (this.marker && this.marker.position.lat && this.marker.position.lng) {
			this.position = this.parse(this.marker.position.lat, 6) + ", " + this.parse(this.marker.position.lng, 6);
			this.tooltip = this.marker.tooltip;
		}
	}
};
</script>
<style lang="scss">
input.error {
	border-color: red;
}
</style>
