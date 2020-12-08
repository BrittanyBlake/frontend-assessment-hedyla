import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import _ from 'lodash';
import { GetDistance } from '../redux/actions/index';

const HomePage = () => {
  const dispatch = useDispatch();
  const distanceList = useSelector(state => state.distance);
  const [originCord, setOriginCord] = useState('13.428555,52.523219');
  const [destCord, setDestCord] = useState('13.397634,52.529407');

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
  // Barcelona '41.3851, 2.1734'
  // Granada 37.1773,3.5986

  React.useEffect(() => {
    FetchData(originCord, destCord);
  }, [originCord, destCord]);

  return (
    <div>
      <div>
        {' '}
        {distanceList.routes ? (
          <h1>
            Distance =
            {distanceList.routes[0].distance}
          </h1>
        ) : null}
      </div>

      <form>
        <input type="text" onChange={handleOrigin} />
        <input type="text" onChange={handleDestination} />
      </form>
    </div>
  );
};

export default HomePage;
