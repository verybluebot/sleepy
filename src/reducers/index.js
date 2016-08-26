import { combineReducers } from "redux";

import categories from './reducer_categories';
import locations from './reducer_locations';

export default combineReducers({
  categories,
  locations,
})
