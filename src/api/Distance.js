import axios from 'axios';
import * as reducerAction from '../redux/actions/index';

const Distance = (() => {
  const getDistance = () => async dispatch => {
    try {
      const data = await axios.get(
        'http://router.project-osrm.org/route/v1/driving/13.388860,52.517037;13.397634,52.529407?overview=false',
      );
      dispatch(reducerAction.getDistance(data.data));
    } catch (error) {
      //   dispatch(reducerAction.formErrors(error.response.data.message));
      console.log(error);
    }
  };

  return {
    getDistance,
  };
})();

export default Distance;
