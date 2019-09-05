<template>
	<div>
		<header class="block">
			<h1>{{layer.title}}</h1>
			<el-button class="button full-width" @click="addMarker" type="primary" plain>{{$t('markers.add')}}</el-button>
		</header>

		<main>
			<template v-for="(item, index) in layer.markers">
				<item v-model="layer.markers[index]" :index="index" :key="index" @edit="editMarker(layer.markers[index])" @remove="removeMarker"/>		
			</template>
		</main>
	</div>
</template>


<script>
import { create } from "vue-modal-dialogs";
import Marker from "../modals/marker-edit";
const markerModal = create(Marker, "marker");

import item from "./item";
export default {
	name: "Layer-content",
	components: { item },
	props: {
		layer: {
			type: Object,
			default() {
				return {};
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
						if (!this.layer.markers) this.$set(this.layer, "markers", []);
						console.log(this.layer.markers);
						this.layer.markers.push(result);
						// this.$store.dispatch("addMarker", result);
						this.$store.commit("set_center", result.position);
					}
				});
			});
			// let center = this.$store.state.center;
			// let marker = { position: center, draggable: true, visible: true };
			// this.$store.dispatch("addMarker", marker);
		},
		editMarker(marker) {
			markerModal(marker);
		},
		removeMarker(index) {
			this.layer.markers.splice(index, 1);
		}
	}
};
</script>
