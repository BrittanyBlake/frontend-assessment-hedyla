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
// export const GetMap = () => async dispatch => {
//   try {
//     const result = await axios.get(
//       'https://cors-anywhere.herokuapp.com/https://www.google.com/maps/dir/?api=1&origin=38.90612938220495,-3.0522478904460035&destination=37.175843994494166,-3.5975054887041384',
//     );

//     dispatch({
//       type: 'GET_MAP',
//       payload: result.data,
//     });
//   } catch (e) {
//     console.log(e);
//   }
// };
