import { combineReducers } from 'redux';
import search from './search';
import settings from './settings';
import statistics from './statistics';

const rootReducer = () =>
  combineReducers({
    search,
    settings,
    statistics
  });

export default rootReducer;