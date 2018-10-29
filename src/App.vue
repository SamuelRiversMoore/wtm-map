<template>
  <div id="app">
    <leaflet-map :token="mapbox_token"/>
  </div>
</template>

<script>
import LeafletMap from "./components/LeafletMap.vue";

export default {
  name: "app",
  components: {
    LeafletMap
  },
  data() {
    return {
      mapbox_token: "pk.eyJ1Ijoic2FtdWVscm0iLCJhIjoicVJuNV9YMCJ9.7Bol-cHVhp6d_l-lVhPpew"
    };
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
  text-align: center;
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
