import React from 'react';
import './tailwind.output.css';

import Header from './Header';
import Map from './Map';
import BuildButton from './BuildButton';

function App() {
  return (
    <div className="flex flex-col w-full justify-center">
        <Header />
        <Map />
        <BuildButton />
    </div>
  );
}

export default App;