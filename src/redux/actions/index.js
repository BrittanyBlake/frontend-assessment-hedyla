import axios from 'axios';

export const GetDistance = (origin, dest) => async dispatch => {
  try {
    const result = await axios.get(
      `https://cors-anywhere.herokuapp.com/http://router.project-osrm.org/route/v1/driving/${origin};${dest}?overview=false`,
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
