import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		center: { lat: 37.5, lng: 14.5 },
		zoom: 5,
		layers: []
	},
	getters: {
		getCenterAsArray: state => {
			return [state.center.lat, state.center.lng];
		}
	},
	actions: {
		addLayer({ commit, state }, new_layer) {
			state.layers.push(new_layer);
			commit("set_layers", state.layers);
		},
		removeLayer({ commit, state }, index) {
			state.layers.splice(index, 1);
			commit("set_layers", state.layers);
		},
		updateLayer({ commit, state }, { layer, index }) {
			state.layers[index] = layer;
			//commit("set_layers", state.layers);
		},
		showLayers({ commit, state }, ids = null) {
			state.layers.forEach(layer => {
				layer.visible = ids ? ids.includes(layer.id) : true;
			});
			//commit("set_layers", state.layers);
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
		set_layers(state, payload) {
			state.layers = payload;
		},
		set_center(state, payload) {
			state.center = payload;
		},
		set_zoom(state, payload) {
			state.zoom = payload;
		},
		reset_store(state) {
			state = {
				center: { lat: 37.5, lng: 14.5 },
				zoom: 5,
				layers: []
			};
		}
	}
});

export default store;

const initialStateCopy = JSON.parse(JSON.stringify(store.state));

export function resetState() {
	store.replaceState(JSON.parse(JSON.stringify(initialStateCopy)));
}
