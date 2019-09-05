<template>
	<el-card shadow="never" class="row">
		<div class="row">
			<div class="col position">
				<div class="row"><i class="fa fa-map-marker"></i> {{position}}</div>
				<div class="discret">{{position_alt}}</div>
			</div>	
		</div>

		<div class="row">
			<span class="col-1"></span>
			<div class="col" v-if="item.tooltip">
				<span class="discret"> {{item.tooltip}}</span>
			</div>
			<div class="col item-controls">
				<el-button class="button" @click="$emit('edit')"><i class="fa fa-pencil"></i></el-button>
				<el-button class="button" @click="removeMarker(index)"><i class="fa fa-trash"></i></el-button>
			</div>
		</div>
	</el-card>
</template>
<script>
const Coordinates = require("coordinate-parser");
var formatcoords = require("formatcoords");

Number.prototype.countDecimals = function() {
	if (Math.floor(this.valueOf()) === this.valueOf()) return 0;
	return this.toString().split(".")[1].length || 0;
};
Number.prototype.toFixedDown = function(digits) {
	const calcDec = Math.pow(10, digits);
	return Math.trunc(this * calcDec) / calcDec;
};

export default {
	model: {
		prop: "item"
	},
	props: {
		item: {
			type: Object,
			default() {
				return {};
			}
		},
		index: {
			type: Number
		}
	},
	computed: {
		position: {
			get() {
				return this.parse(this.item.position.lat, 6) + ", " + this.parse(this.item.position.lng, 6);
			},
			set(value) {
				let coords = new Coordinates(value);
				this.$set(this.item, "position", { lat: this.parse(coords.latitude, 6), lng: this.parse(coords.longitude, 6) });
			}
		},
		position_alt() {
			return formatcoords(this.position).format("DD MM ss X", { latLonSeparator: ", ", decimalPlaces: 0 });
		}
	},
	methods: {
		removeMarker(index) {
			this.$emit("remove", index);
		},
		parse(value, decimals) {
			return Number(value).countDecimals() >= decimals ? Number(value).toFixedDown(decimals) : value;
		}
	}
};
</script>
 
<style lang="scss">
.item {
	padding: 0.5em;
}
.position i.fa {
	margin-right: 0.5em;
}
</style>
