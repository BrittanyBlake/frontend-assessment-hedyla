import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
// import { makeStyles } from '@material-ui/core/styles';

import {
  Map, Marker, Polyline, GoogleApiWrapper,
} from 'google-maps-react';
import { GetDistance } from '../redux/actions/index';

import ComplexCalc from '../components/ComplexCalc';

// const useStyles = makeStyles(theme => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

const HomePage = ({ google }) => {
  // const classes = useStyles();
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

  console.log('center', center);

  const FetchData = (origin, dest) => {
    dispatch(GetDistance(origin, dest));
  };

  const handleOrigin = e => {
    e.preventDefault();
    console.log(e.target.value);
    setOriginCord(e.target.value);
    console.log('origin', originCord);
  };

  const handleDestination = e => {
    e.preventDefault();
    console.log(e.target.value);
    setDestCord(e.target.value);
    console.log('destination', destCord);
  };
  React.useEffect(() => {
    FetchData(originCord, destCord);
    console.log('split', originCord.split(','));
    console.log('one', originCord.split(',')[0]);
    console.log('one', originCord.split(',')[1]);
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
    console.log(vehicle, cost);
  };

  const handleClick = () => {
    setTotal(distanceList.routes[0].distance * cost);
    console.log(cost, 'cost');
    console.log('distance', distanceList.routes[0].distance);
    setCenter({
      lat: originCord.split(',')[0],
      lng: originCord.split(',')[1],
    });
    console.log('new center', center);
    setZoom(5);
  };

  // const triangleCoords = [
  //   { lat: originCord.split(',')[0], lng: originCord.split(',')[1] },
  //   { lat: destCord.split(',')[0], lng: destCord.split(',')[1] },
  // ];

  // console.log('tri', triangleCoords);

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
