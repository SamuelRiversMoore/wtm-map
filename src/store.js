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
		],
		records: []
	},
	getters: {
		getCenterAsArray: state => {
			return [state.center.lat, state.center.lng];
		}
	},
	actions: {
		addRecord({ commit, state }, new_record) {
			state.records.push(new_record);
			commit("set_records", state.records);
		},
		addMarker({ commit, state }, marker) {
			state.markers.push(marker);
			commit("set_markers", state.markers);
		},
		removeMarker({ commit, state }, index) {
			state.markers.splice(index, 1);
			commit("set_markers", state.markers);
		},
		updateMarker({ commit, state }, { marker, index }) {
			state.markers[index] = marker;
			//commit("set_markers", state.markers);
		}
	},
	mutations: {
		init_store(state, dbName) {
			if (localStorage.getItem(dbName)) {
				if (localStorage.getItem(dbName)) {
					this.replaceState(Object.assign(state, JSON.parse(localStorage.getItem(dbName))));
				}
			}
		},
		set_records(state, payload) {
			state.records = payload;
		},
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
