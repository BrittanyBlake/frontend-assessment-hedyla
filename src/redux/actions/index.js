import axios from 'axios';

// export const getAutoDistance = distance => ({
//   type: 'GET_DISTANCE',
//   payload: distance,
// });

// export default getAutoDistance;

export const GetDistance = () => async dispatch => {
  try {
    const result = await axios.get(
      'http://router.project-osrm.org/route/v1/driving/13.388860,52.517037;13.397634,52.529407?overview=false',
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
