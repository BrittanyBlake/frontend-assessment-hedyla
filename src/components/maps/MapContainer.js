import React from 'react';
import PropTypes from 'prop-types';
import {
  Map, Marker, Polyline, GoogleApiWrapper,
} from 'google-maps-react';

const triangleCoords = [
  { lat: 17.294005687070193, lng: -62.686008717148326 },
  { lat: 17.285236780568827, lng: -62.69656589128129 },
];

const MapContainer = ({ google }) => (
  <div>
    <Map
      style={{
        height: '75vh',
      }}
      google={google}
      initialCenter={{
        lat: 17.294005687070193,
        lng: -62.686008717148326,
      }}
    >
      <Marker
        position={{ lat: 17.294005687070193, lng: -62.686008717148326 }}
      />
      <Marker position={{ lat: 17.285236780568827, lng: -62.69656589128129 }} />
      <Polyline
        path={triangleCoords}
        strokeColor="#0000FF"
        strokeOpacity={0.8}
        strokeWeight={2}
      />
    </Map>
  </div>
);
// export default MapContainer

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCEV3kAUq5hZyP-LfU9hhy4eNaiuQXRvcc',
})(MapContainer);

MapContainer.propTypes = {
  // defaultValue: PropTypes.string.isRequired,
  google: PropTypes.string.isRequired,
};
