import { combineReducers } from 'redux';

import { getData } from './getData.reducer'
import { homepage } from './homepage.reducer'

const rootReducer = combineReducers({
  getData,
  homepage
});

export default rootReducer;