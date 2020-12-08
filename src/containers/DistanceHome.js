import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import _ from 'lodash';
import { GetDistance } from '../redux/actions/index';

const HomePage = () => {
  const dispatch = useDispatch();
  const distanceList = useSelector(state => state.distance);
  const [originCord, setOriginCord] = useState('13.428555,52.523219');

  const FetchData = (origin, dest) => {
    dispatch(GetDistance(origin, dest));
  };

  const handleOrigin = e => {
    e.preventDefault();
    console.log(e.target.value);
    setOriginCord(e.target.value);
    console.log('origin', originCord);
  };
  // Barcelona '41.3851, 2.1734'
  React.useEffect(() => {
    FetchData(originCord, '13.397634,52.529407');
  }, [originCord]);

  // 13.38886, 52.517037;

  //   const ShowData = () => {
  //     if (!_.isEmpty(distanceList.data)) {
  //       return (
  //         <div />
  //       );
  //     }
  //     return <p> unable to get Data</p>;
  //   };

  //  {distanceList.routes[0].distance.length ?
  //       <h1>
  //         {' '}
  //         Distance =
  //         {distanceList.routes[0].distance}
  //       </h1>

  return (
    <div>
      <div>
        {' '}
        {distanceList.routes ? (
          <h1>
            Distance =
            {' '}
            { distanceList.routes[0].distance}
          </h1>
        ) : null}

      </div>

      <form>
        <input type="text" onChange={handleOrigin} />
      </form>
    </div>
  );
};

export default HomePage;
