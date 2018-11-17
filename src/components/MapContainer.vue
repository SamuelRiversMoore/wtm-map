<template>
	<LeafletMap id="leaflet-map-main" :token="mapbox_token" :records="records" />
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
		records: {
			get() {
				return this.$store.state.records;
			},
			set(value) {
				this.$store.commit("set_markers", value);
			}
		}
	},
	mounted() {
		console.log(this.$route);
	}
};
</script>
 
<style>
</style>
