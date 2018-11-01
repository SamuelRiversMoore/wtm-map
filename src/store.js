import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		center: { lat: 51.505, lng: -0.09 },
		zoom: 12,
		markers: [
			{
				id: "m1",
				position: { lat: 51.505, lng: -0.09 },
				tooltip: "tooltip for marker1",
				draggable: true,
				visible: true,
				icon: L.icon.glyph({
					prefix: "",
					glyph: "A"
				})
			},
			{ id: "m2", position: { lat: 51.8905, lng: -0.09 }, tooltip: "tooltip for marker2", draggable: true, visible: false },
			{ id: "m3", position: { lat: 51.005, lng: -0.09 }, tooltip: "tooltip for marker3", draggable: true, visible: true },
			{ id: "m4", position: { lat: 50.7605, lng: -0.09 }, tooltip: "tooltip for marker4", draggable: true, visible: false }
		]
	},
	getters: {
		getCenterAsArray: state => {
			return [state.center.lat, state.center.lng];
		}
	},
	actions: {
		setMarkers({ commit, state }, payload) {
			commit("set_markers", payload);
		},
		addMarker({ commit, state }, marker) {
			let markers = state.markers;
			markers.push(marker);
			commit("set_markers", markers);
		},
		removeMarker({ commit, state }, index) {
			let markers = state.markers;
			markers.splice(index, 1);
			commit("set_markers", markers);
		},
		updateMarker({ commit, state }, { marker, index }) {
			state.markers[index] = marker;
			//commit("set_markers", markers);
		},
		setCenter({ commit, state }, payload) {
			commit("set_center", payload);
		},
		setZoom({ commit, state }, payload) {
			commit("set_zoom", payload);
		}
	},
	mutations: {
		set_markers(state, payload) {
			state.markers = payload;
		},
		set_center(state, payload) {
			state.center = payload;
		},
		set_zoom(state, payload) {
			state.zoom = payload;
		}
	}
});
