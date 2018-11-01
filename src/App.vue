<template>
  <div id="app">
    <MapContainer/>
    <dialogs-wrapper></dialogs-wrapper>
  </div>
</template>

<script>
import MapContainer from "./components/MapContainer.vue";

export default {
  name: "app",
  components: {
    MapContainer
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
}
</style>
