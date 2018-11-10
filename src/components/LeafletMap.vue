<template>
	<div class="leaflet-map">
		<l-map
			ref="map"
			:zoom.sync="zoom"
			:center="center"
			:options="mapOptions"
			:bounds="bounds"
			:min-zoom="minZoom"
			:max-zoom="maxZoom"
			@update:center="center = $event">

			<l-control-layers position="topright" :collapsed="false" :sortLayers="true" />

			<l-tile-layer v-for="tileProvider in tileProviders" :key="tileProvider.name" :name="tileProvider.name" :visible="tileProvider.visible" :url="tileProvider.url" :attribution="tileProvider.attribution" :token="token" layer-type="base"/>

			<l-control-zoom :position="zoomPosition" />

			<l-control-attribution :position="attributionPosition" :prefix="attributionPrefix" />

			<l-control-scale :imperial="imperial" position="bottomleft"/>

			<l-marker
				v-for="marker, index in markers"
				:key="marker.id"
				:visible="marker.visible"
				:draggable="marker.draggable"
				:lat-lng="marker.position"
				:icon="marker.icon"
				@move="update($event, marker, index)" >

				<l-popup v-if="marker.tooltip" :content="marker.tooltip" />
				<l-tooltip v-if="marker.tooltip" :content="marker.tooltip" />
			</l-marker>

		</l-map>
	</div>
</template>

<script>
import L from "leaflet";
//import "mapbox.js/theme/style.css";
import "leaflet/dist/leaflet.css";

import "leaflet.icon.glyph";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
	iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
	iconUrl: require("leaflet/dist/images/marker-icon.png"),
	shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

import {
	LMap,
	LTileLayer,
	LMarker,
	LPolyline,
	LLayerGroup,
	LTooltip,
	LPopup,
	LControlZoom,
	LControlAttribution,
	LControlScale,
	LControlLayers
} from "vue2-leaflet";

const tileProviders = [
	{
		name: "OpenStreetMap",
		visible: true,
		attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
		url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
	},
	{
		name: "OpenTopoMap",
		visible: false,
		url: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
		attribution:
			'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
	}
];

import omnivore from "@mapbox/leaflet-omnivore";

import datas from "!raw-loader!../assets/datasets/9.kml";

export default {
	name: "Map",
	components: {
		LMap,
		LTileLayer,
		LMarker,
		LPolyline,
		LLayerGroup,
		LTooltip,
		LPopup,
		LControlZoom,
		LControlAttribution,
		LControlScale,
		LControlLayers
	},
	data() {
		return {
			mapOptions: { zoomControl: false, attributionControl: false },
			minZoom: 1,
			maxZoom: 20,
			zoomPosition: "topleft",
			attributionPosition: "bottomright",
			attributionPrefix: "Vue2Leaflet",
			imperial: false,
			Positions: ["topleft", "topright", "bottomleft", "bottomright"],
			tileProviders: tileProviders
		};
	},
	props: {
		bounds: L.latLngBounds({ lat: 46, lng: -8 }, { lat: 28, lng: 37 }),
		markers: {
			type: Array,
			default() {
				return [];
			}
		},
		token: {
			type: String,
			default: ""
		}
	},
	computed: {
		center: {
			get() {
				return this.$store.state.center;
			},
			set(value) {
				if (value.toString() !== this.$store.state.center.toString()) this.$store.commit("set_center", value);
			}
		},
		zoom: {
			get() {
				return this.$store.state.zoom;
			},
			set(value) {
				if (value !== this.$store.state.zoom) this.$store.commit("set_zoom", value);
			}
		}
	},
	methods: {
		update(event, marker, index) {
			marker.position = event.latlng;
			this.$store.dispatch("updateMarker", { marker, index });
		}
	},
	mounted() {
		var params = {
			method: "GET",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			mode: "cors",
			cache: "default"
		};

		fetch("http://watchthemed.net/json/layer/9", params).then(response => {
			console.log(response);
		});
		console.log(datas);
		omnivore.kml.parse(datas).addTo(this.$refs.map.mapObject);
		console.log(this);
	}
};
</script>

<style lang="scss">
.leaflet-map {
	position: relative;
	width: 100%;
	height: 100%;
}
</style>
