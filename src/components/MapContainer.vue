<template>
	<div id="map-container">
		<LeafletMap id="leaflet-map-main" :token="mapbox_token" :markers="markers" />
		<Sidebar id="sidebar-main" :markers="markers"/>
	</div>
</template>

<script>
import LeafletMap from "./LeafletMap.vue";
import Sidebar from "./Sidebar.vue";

import L from "leaflet";

export default {
	name: "map-container",
	components: {
		LeafletMap,
		Sidebar
	},
	data() {
		return {
			mapbox_token: "pk.eyJ1Ijoic2FtdWVscm0iLCJhIjoicVJuNV9YMCJ9.7Bol-cHVhp6d_l-lVhPpew"
		};
	},
	computed: {
		markers: {
			get() {
				return this.$store.state.markers;
			},
			set(value) {
				this.$store.dispatch("setMarkers", value);
			}
		}
	}
};
</script>
 
<style>
body {
	margin: 0;
}
#map-container {
	height: 100%;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
}
#leaflet-map-main {
	z-index: 1;
}
#sidebar-main {
	z-index: 2;
}
</style>
