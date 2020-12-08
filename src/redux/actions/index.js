import axios from 'axios';

// export const getAutoDistance = distance => ({
//   type: 'GET_DISTANCE',
//   payload: distance,
// });

// export default getAutoDistance;

export const GetDistance = (origin, dest) => async dispatch => {
  try {
    // const origin = '13.388860,52.517037';
    // const dest = '13.397634,52.529407';
    const result = await axios.get(
      `http://router.project-osrm.org/route/v1/driving/${origin};${dest}?overview=false`,
    );

    dispatch({
      type: 'GET_DISTANCE',
      payload: result.data,
    });
  } catch (e) {
    console.log(e);
  }
};

export default GetDistance;
