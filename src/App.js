import React from 'react';
import './tailwind.output.css';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

function App() {
  return (
    <div className="flex flex-col w-full justify-center">
        <p className="p-4 font-mono text-xl font-black text-red-500">
          Zombie Turret
        </p>
        <Map
            style="mapbox://styles/mapbox/dark-v10"
            containerStyle={{
                height: '100vh',
                width: '100vw'
            }}
        >
            <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
            </Layer>
        </Map>        
    </div>
  );
}

export default App;





const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoianVyaXNvbyIsImEiOiIzNmVlOTA1YTVlNjliNmE5ZmYyZTA0M2NhZjlkZmFhYyJ9.B_qrLs29LUIpcJaOLSEk2A'
});