<template>
	<div class="leaflet--wrapper">
		<div class="leaflet--container">
			<div class="leaflet--map" ref="map"></div>
		</div>
	</div>
</template>

<script>
import L from "leaflet";
//import 'mapbox.js';
import "mapbox.js/theme/style.css";
import "leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";

import "leaflet-control-geocoder";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";

//const Coordinates = require("coordinate-parser");
//var position = new Coordinates("40:7:22.8N 74:7:22.8W");

export default {
	name: "leaflet-map",
	data() {
		return {
			zoom: 1,
			coordinates: [0, 0],
			mapUrl: "https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/256/{z}/{x}/{y}",
			drawnItems: null,
			icon: null,
			geocoder: null,
			marker: null,
			buffer: null,
			mapLayer: null
		};
	},
	model: {
		prop: "features"
	},
	props: {
		token: {
			type: String,
			default: "",
			required: true
		},
		drawable: {
			type: Boolean,
			default: true
		},
		multipleMarkers: {
			type: Boolean,
			default: true
		},
		scrollWheelZoom: {
			type: Boolean,
			default: true
		},
		controls: {
			type: Array,
			default() {
				return ["marker"];
			}
		},
		features: {
			type: Array,
			default() {
				return [];
			}
		}
	},
	methods: {
		init() {
			this.setupMap();
			if (this.drawable) this.setupDrawing();
		},
		setupMap() {
			this.map = L.map(this.$refs.map, {
				attributionControl: false,
				fadeAnimation: false,
				zoomDelta: 1,
				zoomSnap: 1
			});

			this.mapLayer = L.tileLayer(this.mapUrl + "?access_token=" + this.token).addTo(this.map);
			this.map.setView([46.62633484121507, 3.137454986572266], 5);

			if (this.scrollWheelZoom === false) this.map.scrollWheelZoom.disable();

			// markers layer
			this.drawnItems = new L.FeatureGroup();

			// marker icon
			this.icon = new L.Icon({
				iconUrl: require("leaflet-draw/dist/images/marker-icon.png"),
				iconRetinaUrl: require("leaflet-draw/dist/images/marker-icon-2x.png"),
				shadowUrl: require("leaflet-draw/dist/images/marker-shadow.png"),
				iconSize: [24, 42],
				iconAnchor: [12, 42]
			});

			// interaction
			this.map.on("zoomend", () => {
				var { lat, lng } = this.map.getCenter();
				this.coordinate = [lat, lng];
				this.zoom = this.map.getZoom();
			});
		},
		setupDrawing() {
			this.map.addLayer(this.drawnItems);
			this.map.addControl(
				new L.Control.Draw({
					draw: {
						marker: this.controls.includes("marker") ? { icon: this.icon } : false,
						polyline: this.controls.includes("polyline"),
						polygon: this.controls.includes("polygon"),
						rectangle: this.controls.includes("rectangle"),
						circle: this.controls.includes("circle"),
						circlemarker: this.controls.includes("circlemarker")
					},
					edit: {
						featureGroup: this.drawnItems, //REQUIRED!!
						remove: true
					},
					position: "bottomleft"
				})
			);

			// interaction
			this.map.on("draw:drawvertex draw:created", e => {
				// supression des anciens éléments
				if (e.type == "draw:drawvertex") e.layerType = "polygon";
				if (this.multiple === false) this.drawnItems.clearLayers();
			});

			this.map.on("draw:created", e => {
				this.drawnItems.addLayer(e.layer);
			});

			/* ---- ÉDITION D'UN ÉLÉMENT---- */

			this.map.on("draw:editstart draw:drawstart draw:deletestart", () => {
				this.buffer = this.marker;
			});

			// Enregistrement quand on a cliqué sur save ou qu'on a créé un nouvel élément
			var edited = false;
			this.map.on("draw:edited draw:created draw:deleted", () => {
				edited = true;
			});

			// Arret du mode édition / création mais on ne sait pas si c'est cancel ou save.
			this.map.on("draw:editstop draw:drawstop draw:deletestop", () => {
				if (edited == true) {
					edited = false;
					this.updateLayers();
				} else {
					this.marker = this.buffer;
					this.buffer = null;
				}
			});

			this.map.on("moveend", () => {
				this.$emit("updateCenter", this.map.getCenter());
			});
		},

		updateFeatures(features = null) {
			if (features && typeof features == "array") {
				this.drawnItems = L.featureGroup(features);
			}
		},
		updateLayers() {
			if (this.drawnItems) {
				this.$emit("input", this.drawnItems.getLayers());
			}
		}

		// addMarker(marker) {
		// 	console.log(marker);
		// 	if (marker) this.markers.push(marker);
		// 	if (marker.center) L.marker(marker.center, { icon: this.icon }).addTo(this.drawnItems);
		// }
	},
	watch: {
		features: {
			handler(value) {
				console.log("layers update");
				//this.updateFeatures(value);
			},
			deep: true
		}
	},
	mounted() {
		this.init();
	},
	beforeDestroy() {
		this.map.remove();
	}
};
</script>

<style lang="scss">
.leaflet--map {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
}

.leaflet-bar a,
.mapbox-icon,
.map-tooltip.closable .close,
.leaflet-control-layers-toggle,
.leaflet-popup-close-button,
.mapbox-button-icon:before {
	width: 29px;
	height: 29px;
}
.leaflet-draw-actions-top.leaflet-draw-actions-bottom a {
	height: 29px;
	line-height: 29px;
}
</style>
