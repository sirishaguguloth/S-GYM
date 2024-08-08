// src/components/MapComponent.jsx
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const khammamCoordinates = {
  lat: 17.2476,
  lng: 80.1510
};

const Map = () => {
  return (
    <LoadScript
      googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY" // Replace with your API Key
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={khammamCoordinates}
        zoom={12} // Adjust zoom level as needed
      >
        <Marker position={khammamCoordinates} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
