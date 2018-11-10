import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		center: { lat: 37.5, lng: 14.5 },
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
