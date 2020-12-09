import React from 'react';
import PropTypes from 'prop-types';
import { Map, GoogleApiWrapper } from 'google-maps-react';
// Marker,

const MapContainer = ({ google }) => (
  <div>
    <Map
      style={{ width: '600px', height: '600px' }}
      google={google}
      initialCenter={{
        lat: 17.294005687070193,
        lng: -62.686008717148326,
      }}
    />
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
