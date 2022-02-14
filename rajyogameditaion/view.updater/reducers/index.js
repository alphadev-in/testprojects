import {combineReducers} from 'redux-immutable';
import appReducer from './app.reducer';
import RajyogaReducer from './raj.yoga.medications.reducers';

export default function createReducer() {
  return combineReducers({
    appReducer,
    RajyogaReducer,
  });
}
