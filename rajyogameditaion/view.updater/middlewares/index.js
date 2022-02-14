import { all } from 'redux-saga/effects';
import allBeforeMiddleWare from './all.before.middleware';
import getDataFromServer from './server.middleware';

export function* middlewares() {
    yield all([
        allBeforeMiddleWare(),
        getDataFromServer()
    ])
}