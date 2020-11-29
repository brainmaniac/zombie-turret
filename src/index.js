import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import mapboxgl from 'mapbox-gl'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


mapboxgl.accessToken = 'pk.eyJ1IjoianVyaXNvbyIsImEiOiIzNmVlOTA1YTVlNjliNmE5ZmYyZTA0M2NhZjlkZmFhYyJ9.B_qrLs29LUIpcJaOLSEk2A';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [12, 56], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

let geolocateControl = new mapboxgl.GeolocateControl({
    positionOptions: {
    enableHighAccuracy: true
    },
    trackUserLocation: true
});

map.addControl(geolocateControl)

map.on('load', () => {
    geolocateControl.trigger()
})