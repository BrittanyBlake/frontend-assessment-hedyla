import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Distance from '../api/Distance';

const HomePage = () => {
  const dispatch = useDispatch();
  const autoDistance = useSelector(state => state.distance);
  //   const allFootballHighlight = useSelector((state) => state.football);
  //   const filterFootballHighlights = useSelector((state) => state.filter);

  useEffect(() => {
    const distances = () => {
      dispatch(Distance.getDistance);
      console.log('dispatched', Distance.getDistance);
    };
    distances();
    console.log('distances', distances());
  }, [dispatch]);

  console.log('not api file', autoDistance);

  //   let filteredHighlights = [];
  //   if (!allFootballHighlight) {
  //     return null;
  //   }
  //   filteredHighlights = allFootballHighlight.filter((data) =>
  //     data.name.toLowerCase().includes(filterFootballHighlights.toLowerCase())
  //   );

  return (
    <div>
      {/* autoDistance.data */}
      <h1> API WIL GO HERE</h1>

    </div>
  );
};

export default HomePage;
