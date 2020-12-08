import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import _ from 'lodash';
import { GetDistance } from '../redux/actions/index';

const HomePage = () => {
  const dispatch = useDispatch();
  const distanceList = useSelector(state => state.distance);

  const FetchData = () => {
    dispatch(GetDistance());
  };

  // console.log('distance:', distanceList.routes[0].distance);

  React.useEffect(() => {
    FetchData();
  }, []);

  //   const ShowData = () => {
  //     if (!_.isEmpty(distanceList.data)) {
  //       return (
  //         <div />
  //       );
  //     }
  //     return <p> unable to get Data</p>;
  //   };
  return (
    <div>
      <h1>
        {' '}
        Distance =
        {distanceList.routes[0].distance}
      </h1>
    </div>
  );
};

export default HomePage;
