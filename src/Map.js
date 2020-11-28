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

function Map() {
  return (
        <MapboxMap
            style="mapbox://styles/mapbox/dark-v10"
            containerStyle={{
                height: '100vh',
                width: '100vw'
            }}
        >
            <MapContext.Consumer>
                {(map) => {
                    map.addControl(
                        new mapboxgl.GeolocateControl({
                            positionOptions: {
                                enableHighAccuracy: true
                            },
                            trackUserLocation: true
                        })
                    )
                }}
            </MapContext.Consumer>
        </MapboxMap>
  );
}

export default Map;