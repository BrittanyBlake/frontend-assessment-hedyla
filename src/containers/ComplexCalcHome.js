import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import {
  Map, Marker, Polyline, GoogleApiWrapper,
} from 'google-maps-react';
import { GetDistance } from '../redux/actions/index';

import ComplexCalc from '../components/ComplexCalc';

const HomePage = ({ google }) => {
  const dispatch = useDispatch();
  const distanceList = useSelector(state => state.distance);
  const [originCord, setOriginCord] = useState('0,0');
  const [destCord, setDestCord] = useState('0,0');
  const [cost, setCost] = useState();
  const [total, setTotal] = useState(0);
  const [center, setCenter] = useState({
    lat: originCord.split(',')[0],
    lng: originCord.split(',')[1],
  });
  const [zoom, setZoom] = useState(3);

  const FetchData = (origin, dest) => {
    dispatch(GetDistance(origin, dest));
  };

  const handleOrigin = e => {
    e.preventDefault();
    setOriginCord(e.target.value);
  };

  const handleDestination = e => {
    e.preventDefault();
    setDestCord(e.target.value);
  };
  React.useEffect(() => {
    FetchData(originCord, destCord);
  }, [originCord, destCord]);

  const handleFee = e => {
    const vehicle = e.target.value;
    if (vehicle === 'van') {
      setCost(0.25);
    } else if (vehicle === 'truck') {
      setCost(0.5);
    } else if (vehicle === 'car') {
      setCost(0.1);
    } else {
      setCost(e.target.value);
    }
  };

  const handleClick = () => {
    setTotal(distanceList.routes[0].distance * cost);
    setCenter({
      lat: originCord.split(',')[0],
      lng: originCord.split(',')[1],
    });
    setZoom(5);
  };

  return (
    <div>
      <ComplexCalc
        handleOrigin={handleOrigin}
        handleDestination={handleDestination}
        handleFee={handleFee}
        handleClick={handleClick}
        total={total}
      />
      <Map
        style={{
          height: '60vh',
        }}
        google={google}
        initialCenter={center}
        zoom={zoom}
      >
        <Marker
          position={{
            lat: originCord.split(',')[0],
            lng: originCord.split(',')[1],
          }}
        />
        <Marker
          position={{
            lat: destCord.split(',')[0],
            lng: destCord.split(',')[1],
          }}
        />
        <Polyline
          path={[
            {
              lat: originCord.split(',')[0],
              lng: originCord.split(',')[1],
            },
            {
              lat: destCord.split(',')[0],
              lng: destCord.split(',')[1],
            },
          ]}
          strokeColor="#0000FF"
          strokeOpacity={0.8}
          strokeWeight={2}
        />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCEV3kAUq5hZyP-LfU9hhy4eNaiuQXRvcc',
})(HomePage);

HomePage.propTypes = {
  google: PropTypes.string.isRequired,
};
