<template>
  <div class="leaflet--wrapper">
    <div class="leaflet--container">
      <div class="leaflet--map" ref="map"></div>
    </div>
  </div>
</template>

<script>
import L from "leaflet";
//import 'mapbox.js';
import "mapbox.js/theme/style.css";
import "leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";

import "leaflet-control-geocoder";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";

export default {
  name: "leaflet-map",
  data() {
    return {
      zoom: 1,
      coordinates: [0, 0],
      mapUrl: "https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/256/{z}/{x}/{y}",
      drawnItems: null,
      icon: null,
      geocoder: null,
      marker: null,
      buffer: null,
      mapLayer: null
    };
  },
  props: {
    token: {
      type: String,
      default: "",
      required: true
    },
    drawable: {
      type: Boolean,
      default: true
    },
    searchable: {
      type: Boolean,
      default: false
    },
    controls: {
      type: Array,
      default() {
        return ["marker"];
      }
    }
  },
  methods: {
    init() {
      this.setupMap();
      if (this.searchable) this.setupGeocoding();
      if (this.drawable) this.setupDrawing();
    },
    setupMap() {
      this.map = L.map(this.$refs.map, {
        attributionControl: false,
        fadeAnimation: false,
        zoomDelta: 1,
        zoomSnap: 1
      });

      this.mapLayer = L.tileLayer(this.mapUrl + "?access_token=" + this.token).addTo(this.map);
      this.map.setView([46.62633484121507, 3.137454986572266], 5);
      //this.map.scrollWheelZoom.disable();

      // markers layer
      this.drawnItems = new L.FeatureGroup();
      this.icon = new L.Icon({
        iconUrl: require("leaflet-draw/dist/images/marker-icon.png"),
        iconRetinaUrl: require("leaflet-draw/dist/images/marker-icon-2x.png"),
        shadowUrl: require("leaflet-draw/dist/images/marker-shadow.png"),
        iconSize: [24, 42],
        iconAnchor: [12, 42]
      });

      // interaction
      this.map.on("zoomend", e => {
        var { lat, lng } = this.map.getCenter();
        this.coordinate = [lat, lng];
        this.zoom = this.map.getZoom();
      });
    },
    setupGeocoding() {
      this.geocoder = L.Control.geocoder({
        defaultMarkGeocode: false,
        geocoder: new L.Control.Geocoder.Mapbox(this.token)
      }).addTo(this.map);

      this.geocoder.on("markgeocode", e => {
        if (e.geocode) this.updateMap(e.geocode);
      });

      //var geocoderControl = L.mapbox.geocoderControl('mapbox.places', { keepOpen: false, autocomplete: true });
      //geocoderControl.addTo(this.map);
    },
    setupDrawing() {
      this.map.addLayer(this.drawnItems);
      this.map.addControl(
        new L.Control.Draw({
          draw: {
            marker: this.controls.includes("marker") ? { icon: this.icon } : false,
            polyline: this.controls.includes("polyline"),
            polygon: this.controls.includes("polygon"),
            rectangle: this.controls.includes("rectangle"),
            circle: this.controls.includes("circle"),
            circlemarker: this.controls.includes("circlemarker")
          },
          edit: {
            featureGroup: this.drawnItems, //REQUIRED!!
            remove: true
          },
          position: "bottomleft"
        })
      );

      // interaction
      this.map.on("draw:drawvertex draw:created", e => {
        // supression des anciens éléments
        if (e.type == "draw:drawvertex") e.layerType = "polygon";
        this.drawnItems.clearLayers();
      });

      this.map.on("draw:created", e => {
        this.drawnItems.addLayer(e.layer);
      });

      /* ---- ÉDITION D'UN ÉLÉMENT---- */

      this.map.on("draw:editstart draw:drawstart draw:deletestart", e => {
        this.buffer = this.marker;
      });

      // Enregistrement quand on a cliqué sur save ou qu'on a créé un nouvel élément
      var edited = false;
      this.map.on("draw:edited draw:created draw:deleted", e => {
        edited = true;
      });

      // Arret du mode édition / création mais on ne sait pas si c'est cancel ou save.
      this.map.on("draw:editstop draw:drawstop draw:deletestop", e => {
        if (edited == true) {
          edited = false;
          this.recordLayer(true);
        } else {
          this.marker = this.buffer;
          this.buffer = null;
        }
      });

      this.map.on("moveend", event => {
        this.$emit("updateCenter", this.map.getCenter());
      });
    },
    updateMap(marker) {
      this.drawnItems.clearLayers();
      if (marker.place_type) {
        switch (marker.place_type[0]) {
          case "country": // 5
            this.map.setView(marker.center, 5);
            break;
          case "region": // 8
            this.map.fitBounds(marker.bbox);
            break;
          case "district": // 12
            this.map.fitBounds(marker.bbox);
            this.addMarker(marker);
            break;
          case "address":
            this.map.setView(marker.center, 13);
            this.addMarker(marker);
            break;
          case "position":
            break;
          default:
            this.map.setView(marker.center, 13);
            this.addMarker(marker);
            break;
        }
      } else {
        this.map.setView(marker.center, 13);
        this.addMarker(marker);
      }
    },
    addMarker(marker) {
      if (marker) this.marker = marker;
      if (marker.center) L.marker(marker.center, { icon: this.icon }).addTo(this.drawnItems);
    },
    recordLayer(reverse = false) {
      var json = {};
      if (this.drawnItems) {
        this.drawnItems.eachLayer(layer => {
          if (layer instanceof L.Marker) {
            if (typeof layer._latlng !== "undefined") {
              var coord = layer._latlng;
              json["marker"] = [coord.lat, coord.lng];
              this.search(String(coord.lng) + "," + String(coord.lat), true);
            }
          }
          /*
          if (layer instanceof L.Polygon) {
            if (typeof layer._latlngs !== 'undefined') {
              json['polygon'] = [[]];
              layer._latlngs.map((point, coord) => {
                coord.map((point, crd) => {
                  json['polygon'][0].push([crd.lat, crd.lng]);
                });
              });
            }
          }
          */
        });
      }
    },
    search(query = null, reverse = false) {
      if (query) this.$emit("search", query, reverse);
    },
    refresh() {
      this.$nextTick(() => {
        this.map.invalidateSize();
      });
    }
  },
  mounted() {
    this.init();
    //this.$bus.on("loaded", this.refresh);
  },
  beforeDestroy() {
    this.map.remove();
    //this.$bus.off("loaded", this.refresh);
  }
};
</script>

<style lang="scss">
.leaflet--map {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.leaflet-bar a,
.mapbox-icon,
.map-tooltip.closable .close,
.leaflet-control-layers-toggle,
.leaflet-popup-close-button,
.mapbox-button-icon:before {
  width: 29px;
  height: 29px;
}
.leaflet-draw-actions-top.leaflet-draw-actions-bottom a {
  height: 29px;
  line-height: 29px;
}
</style>
