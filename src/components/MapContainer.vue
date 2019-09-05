<template>
	<LeafletMap id="leaflet-map-main" :token="mapbox_token" :layers="layers" />
</template>

<script>
export default {
	name: "map-container",
	components: {
		LeafletMap: () => import("./Map.vue")
	},
	data() {
		return {
			mapbox_token: "pk.eyJ1Ijoic2FtdWVscm0iLCJhIjoicVJuNV9YMCJ9.7Bol-cHVhp6d_l-lVhPpew"
		};
	},
	computed: {
		layers: {
			get() {
				return this.$store.state.layers;
			},
			set(value) {
				this.$store.commit("set_layers", value);
			}
		}
	},
	watch: {
		layers: {
			handler(value) {
				this.$store.commit("set_layers", value);
			},
			deep: true
		}
	},
	mounted() {
		console.log(this.$route);
	}
};
</script>
 
<style>
</style>
