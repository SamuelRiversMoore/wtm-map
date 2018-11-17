<template>
	<div id="app">
		<div id="main-map"><MapContainer/></div>
		<ContentContainer id="main-content"/>
		<dialogs-wrapper id="modals" />
	</div>
</template>

<script>
import MapContainer from "./components/MapContainer.vue";
import ContentContainer from "./components/ContentContainer.vue";

export default {
	name: "app",
	components: {
		MapContainer,
		ContentContainer
	}
};
</script>

<style>
body {
	margin: 0;
}
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	height: 100%;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
}
#main-map {
	width: 100%;
	z-index: 1;
	background: #eee;
}
#main-content {
	z-index: 2;
}
#modals {
	z-index: 9;
}
</style>
