import React from 'react';
import './tailwind.output.css';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import * as mapboxgl from 'mapbox-gl'
import { ZoomControl } from "react-mapbox-gl";
import ReactMapboxGL, { MapContext } from 'react-mapbox-gl';

const MapboxMap = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoianVyaXNvbyIsImEiOiIzNmVlOTA1YTVlNjliNmE5ZmYyZTA0M2NhZjlkZmFhYyJ9.B_qrLs29LUIpcJaOLSEk2A'
  });

let availableHeight =  (window.innerHeight - 64) + 'px'
let availableWidth = window.innerWidth + 'px'

console.log('height: ', availableHeight)
console.log('width: ', availableWidth)

function Map() {

  return (
        <MapboxMap
            style="mapbox://styles/mapbox/dark-v10"
            containerStyle={{
                height: availableHeight,
                width: availableWidth
            }}
        >
            <MapContext.Consumer>
                {(map) => {

                    let geolocate = new mapboxgl.GeolocateControl({
                        positionOptions: {
                            enableHighAccuracy: true
                        },
                        trackUserLocation: true
                    })

                    map.addControl(geolocate);

                    setTimeout(() => {
                        geolocate.trigger();
                    }, 1000);


                }}
            </MapContext.Consumer>

            <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
            </Layer>
        </MapboxMap>
  );
}

export default Map;