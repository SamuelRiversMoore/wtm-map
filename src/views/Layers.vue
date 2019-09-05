<template>
	<div class="sidebar-content">
		<el-button class="button full-width row" @click="createLayer" type="primary" plain>{{$t('layers.add')}}</el-button>
		<div class="layers">
			<template v-for="layer in layers">
				<div class="row" @mouseover="onMouseover(layer)" @mouseout="onMouseout(layer)">
					<router-link :to="{name: 'layer', params:{id: layer.id}}">
						<el-card shadow="never" >
					        <h2><i class="fa fa-share-alt" />{{layer.title}}</h2>
					        <div class="discret" v-if="layer.markers.length">{{layer.markers.length + " " + $tc('marker.label', layer.markers.length)}}</div>
					    </el-card>
					</router-link>
				</div>
			</template>
		</div>
	</div>
</template>


<script>
// modals
import { create } from "vue-modal-dialogs";
import Layer from "@/components/modals/layer-edit";
const CreateLayerModal = create(Layer, "layer");

export default {
	name: "Layers",
	components: {},
	data() {
		return {};
	},
	computed: {
		layers: {
			get() {
				return this.$store.state.layers;
			},
			set(value) {
				this.$store.commit("set_layers", value);
			}
		}
	},
	methods: {
		createLayer() {
			return new Promise((resolve, reject) => {
				let newLayer = {
					id: "",
					title: "",
					color: "",
					markers: []
				};

				CreateLayerModal(newLayer).then(result => {
					if (result) {
						this.$store.dispatch("addLayer", result).then(() => {
							this.$router.push({ name: "layer", params: { id: result.id } });
						});
					}
				});
			});
		},
		editMarker(marker) {
			CreateLayerModal(marker);
		},
		onMouseover(layer) {
			this.$store.dispatch("showLayers", [layer.id]);
		},
		onMouseout(layer) {
			this.$store.dispatch("showLayers");
		}
	},
	mounted() {
		this.$store.dispatch("showLayers");
	}
};
</script>

<style lang="scss">
.layers a {
	display: block;
	text-decoration: none;
}
.layers h2 {
	margin-bottom: 0.6em;
	.fa {
		font-size: 0.8em;
		margin-right: 0.5em;
		opacity: 0.4;
	}
}
</style>
