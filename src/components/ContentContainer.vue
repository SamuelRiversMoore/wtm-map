<template>
	<div class="sidebar">
		<sidebar-header />
		<router-view/>
	</div>
</template>
<script>
import SidebarHeader from "./Sidebar-header";
export default {
	components: { SidebarHeader },
	data() {
		return {};
	},
	methods: {}
};
</script>
 
<style lang="scss">
.sidebar {
	width: 800px;
	height: 100%;
	background: #fff;
	z-index: 1;
	flex: 0 0 100%;
	max-width: 500px;
	border-left: 1px solid #03030333;

	.full-width.button {
		width: 100%;
	}
	.el-tabs--border-card {
		border: none;
		box-shadow: none;
	}
	.sidebar-content {
		overflow-y: auto;
		padding: 1.2em;
	}
}
</style>
