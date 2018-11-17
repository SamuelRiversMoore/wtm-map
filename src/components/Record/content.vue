<template>
	<div>
		<header class="block">
			<h1>{{record.title}}</h1>
			<el-button class="button full-width" @click="addMarker" type="primary" plain>{{$t('markers.add')}}</el-button>
		</header>

		<main>
			<h3>{{$t('markers.title')}}</h3>
			<template v-for="(item, index) in record.markers">
				<item v-model="record.markers[index]" :index="index" :key="index" @edit="editMarker(record.markers[index])"/>		
			</template>
		</main>
	</div>
</template>


<script>
import { create } from "vue-modal-dialogs";
import Marker from "../modals/marker";
const markerModal = create(Marker, "marker");

import item from "./item";
export default {
	name: "Record-content",
	components: {},
	props: {
		record: {
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
						this.$store.dispatch("addMarker", result);
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
		}
	}
};
</script>
