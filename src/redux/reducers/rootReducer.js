import { combineReducers } from 'redux';
import distanceReducer from './distanceReducer';

const rootReducer = combineReducers({
  distance: distanceReducer,
});

export default rootReducer;
