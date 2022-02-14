import { put } from 'redux-saga/effects';
import { addUpdateAppLoadersStatus } from './../actions/app.actions';

export default function* allAfterMiddleware(action) {
    yield put(addUpdateAppLoadersStatus(action.baseType, 'DONE', action.errorId));
    yield put(addUpdateAppLoadersStatus(action.baseType, 'FINNISH', action.errorId));
}