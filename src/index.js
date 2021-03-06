import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import mapboxgl from 'mapbox-gl';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//Set the correct size of the map
let mapContainer = document.getElementById("map");
let availableHeight =  (window.innerHeight - 64) + 'px';
let availableWidth = window.innerWidth + 'px';

mapContainer.style.width = availableWidth;
mapContainer.style.height = availableHeight;

// Import the map
mapboxgl.accessToken = 'pk.eyJ1IjoianVyaXNvbyIsImEiOiIzNmVlOTA1YTVlNjliNmE5ZmYyZTA0M2NhZjlkZmFhYyJ9.B_qrLs29LUIpcJaOLSEk2A';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10', // stylesheet location
    center: [18.1305344, 59.2805888], // starting position [lng, lat]
    zoom: 8 // starting zoom
});

let geoLocate = new mapboxgl.GeolocateControl({
  positionOptions: {
  enableHighAccuracy: true
  },
  trackUserLocation: true
})

geoLocate.on('geolocate', (event) => {
    console.log('located!', event)
    map.latestUserPosition = {
        lat: event.coords.latitude,
        lng: event.coords.longitude,
    }
});

map.addControl(geoLocate);

map.on('load', () => {
  geoLocate.trigger()
})

document.getElementById("turretButton").addEventListener("click", () => {
    console.log("PRESSED THE BUTTON", map.latestUserPosition)

    var el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker(el)
        .setLngLat([map.latestUserPosition.lng, map.latestUserPosition.lat])
        .addTo(map);
});