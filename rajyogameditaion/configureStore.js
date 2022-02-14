import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createReducer from './view.updater/reducers'
import { fromJS } from 'immutable';
 import {middlewares} from './view.updater/middlewares/index'


const sagaMiddleWare = createSagaMiddleware();

export default function configureStore(initialState = {}) {
    const Middlewares = [
        sagaMiddleWare
    ]
    const enhancers = [
        applyMiddleware(...Middlewares)
    ]
    const store = createStore(
        createReducer(),
        fromJS(initialState),
        compose(...enhancers)
    )

    sagaMiddleWare.run(middlewares)


    store.injectedReducers = {}; // Reducer registry
    store.injectedSagas = {};

    return store
}