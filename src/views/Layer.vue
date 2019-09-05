<template>
	<div>
		<div class="sidebar-header">
			<el-row type="flex" class="row-bg" justify="space-between">
			    <el-col>
					<router-link :to="{name: 'layers'}">
						<el-button class="neutral" plain icon="el-icon-arrow-left">{{$t('ui.back')}}</el-button>
					</router-link>
			    </el-col>
				<el-col :span="4" class="align-right">
					<el-dropdown class="layer-options" @command="handleCommand" trigger="click">
						<el-button class="neutral" plain icon="fa fa-ellipsis-v" />
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item command="edit"><i class="fa fa-pencil" /><span>Edit</span></el-dropdown-item>
							<el-dropdown-item command="export"><i class="fa fa-share" /><span>Export</span></el-dropdown-item>
							<el-dropdown-item command="delete"><i class="fa fa-trash" /><span>Delete</span></el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</el-col>
			</el-row>
		</div>
		<div class="sidebar-content">
			<layer-content :layer="layer"/>
		</div>
	</div>
</template>

<script>
import { create } from "vue-modal-dialogs";
import EditLayer from "@/components/modals/layer-edit";
import ExportLayer from "@/components/modals/layer-export";
import DeleteLayer from "@/components/modals/confirm";
const editLayerModal = create(EditLayer, "layer");
const exportLayerModal = create(ExportLayer, "layer");
const deleteLayerModal = create(DeleteLayer, "title", "content");

import LayerContent from "@/components/Layer/content";
export default {
	name: "Layer",
	components: { LayerContent },
	props: {
		id: {
			type: String,
			required: true
		}
	},
	computed: {
		layers: {
			get() {
				return this.$store.state.layers;
			},
			set(value) {
				this.$store.commit("set_layers", value);
			}
		},
		layer() {
			return this.layers.find(layer => layer.id == this.id);
		}
	},
	methods: {
		handleCommand(command) {
			if (command in this) {
				this[command]();
			} else {
				console.warn("command <" + command + "> not found");
			}
		},
		edit() {
			editLayerModal(this.layer);
		},
		export() {
			exportLayerModal(this.layer);
		},
		delete() {
			deleteLayerModal(this.$t("layer.remove"), "").then(answer => {
				if (answer === true) {
					this.$store.dispatch("removeLayer", this.id).then(() => {
						this.$router.push({ name: "layers" });
					});
				}
			});
		}
	},
	mounted() {
		// set layer visibility
		this.$store.dispatch("showLayers", [this.id]);
	}
};
</script>
<style lang="scss">
.slide-enter-active,
.slide-leave-active {
	transition: transform 0.2s;
}
.slide-enter, .slide-leave-to /* .slide-leave-active below version 2.1.8 */ {
	transform: translateX(100%);
}
.el-dropdown.layer-options {
	padding: 0 0.8em;
}
.el-dropdown-menu li i {
	margin-right: 0.75em;
}
.el-dropdown-menu__item {
	padding: 0 1em;
}
</style>
