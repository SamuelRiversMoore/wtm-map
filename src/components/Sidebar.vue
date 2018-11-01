<template>
	<div class="sidebar">
		<header class="block">
			<h3>List of Markers</h3>
			<button class="large button primary outline is-full-width" @click="addMarker">Ajouter un point</button>
		</header>

		<main>
			<template v-for="(item, index) in markers">
				<item v-model="markers[index]" :index="index" :key="index" @edit="editMarker(markers[index])"/>		
			</template>
		</main>

	</div>
</template>
<script>
import Item from "./Sidebar-item.vue";

// modals
import { create } from "vue-modal-dialogs";

import Confirm from "./modals/confirm";
const confirm = create(Confirm, "title", "content");

import Marker from "./modals/marker";
const markerModal = create(Marker, "marker");

export default {
	components: { Item },
	data() {
		return {};
	},
	props: {
		markers: {
			type: Array,
			default() {
				return [];
			}
		}
	},
	methods: {
		addMarker() {
			return new Promise((resolve, reject) => {
				let marker = {
					position: { lat: "", lng: "" },
					tooltip: "",
					draggable: true,
					visible: true
				};
				markerModal(marker).then(result => {
					if (result) {
						this.$store.dispatch("addMarker", result);
						this.$store.dispatch("setCenter", result.position);
					}
				});
			});
			// let center = this.$store.state.center;
			// let marker = { position: center, draggable: true, visible: true };
			// this.$store.dispatch("addMarker", marker);
		},
		editMarker(marker) {
			markerModal(marker);
		}
	}
};
</script>
 
<style lang="scss">
.sidebar {
	width: 800px;
	height: 100%;
	background: #fff;
	z-index: 1;
	overflow-y: auto;
	flex: 0 0 100%;
	max-width: 500px;
	padding: 1.2em;
}
</style>
