<template>
  <NavBack v-if="showNav" title="Map" class="mapNav" />
    <div style="width: 100%; height: 100%">
      <div ref="map" style="width: 100%; height: 100%;"></div>
      
    </div>
  </template>
  
  <script>
  import NavBack from './NavBack.vue';
  import mapboxgl from 'mapbox-gl';
  import axios from 'axios';
  
  export default {
    data() {
      return {
        map: null,
        marker: null,
        userAddress: null,
        accessToken: 'pk.eyJ1IjoiY2hyaXM4MDciLCJhIjoiY204ZDNwdnhhMWJ4OTJrczV1c2xzc295byJ9.see-kg8WlZxIdSXQagPNig', // Remplacez par votre clé API Mapbox
      };
    },
    props: {
        adr: String,
        showNav: {
          type: Boolean,
          default: true,
        },
    },
    computed: {
      addresse() {
        return this.$route.params.adresse
      }
    },
    components: {
        NavBack
    },
    mounted() {  
      console.log(this.addresse)
        this.initializeMap();
        if (this.addresse) {
          this.updateMapWithAddress(this.addresse);
        }
        else if (this.adr){
          this.updateMapWithAddress(this.adr);
        }
      
    },
    methods: {
      initializeMap() {
        mapboxgl.accessToken = this.accessToken;
        this.map = new mapboxgl.Map({
          container: this.$refs.map,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [-74.5, 40], // Coordonnées par défaut
          zoom: 13,
        });
        this.marker = new mapboxgl.Marker().setLngLat([-74.5, 40]).addTo(this.map);
      }, 
      async updateMapWithAddress(address) {
        try {
          const coords = await this.geocodeAddress(address);
          this.marker.setLngLat(coords); // Met à jour la position du marqueur
          this.map.setCenter(coords); // Met à jour le centre de la carte
        } catch (error) {
          console.error('Geocoding failed:', error);
        }
      },
      async geocodeAddress(address) {
        const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${this.accessToken}`);
        if (response.data.features.length > 0) {
          return response.data.features[0].geometry.coordinates; // Retourne les coordonnées
        }
        throw new Error('Geocoding failed');
      }
    }
  };
  </script>
  
  <style>
  /* Styles pour le conteneur de la carte */
  .mapNav{
    background: linear-gradient(to top, #ffffffaa, #00000000);
  }
  </style>