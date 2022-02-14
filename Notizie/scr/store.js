import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export default function configureStore(preloadedState) {
  const middlewares = [thunk];
  const middlewaresEnhancer = applyMiddleware(...middlewares);

  const storeEnhancer = [middlewaresEnhancer];
  const composedEnhancer = compose(...storeEnhancer);

  const store = createStore(rootReducer, preloadedState, composedEnhancer);
  return store;
}
