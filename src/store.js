import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		center: { lat: 46.62633484121507, lng: 3.137454986572266 },
		zoom: 5,
		markers: [
			{
				id: "m1",
				position: { lat: 33.906895, lng: 11.865234 },
				tooltip: "tooltip for marker1",
				draggable: true,
				visible: true
				// icon: L.icon.glyph({
				// 	prefix: "",
				// 	glyph: "A"
				// })
			}
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
