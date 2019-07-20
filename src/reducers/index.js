import { combineReducers } from 'redux';
import search from './search';
import settings from './settings';

const rootReducer = () =>
  combineReducers({
    search,
    settings
  });

export default rootReducer;