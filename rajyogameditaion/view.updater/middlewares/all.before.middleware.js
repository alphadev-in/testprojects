
import { addUpdateAppLoadersStatus } from './../actions/app.actions';
import { put, takeEvery } from 'redux-saga/effects';

export function* processBeforeMiddleware(action) {
    if (action.url) {
        yield put(addUpdateAppLoadersStatus(action.type, 'PENDING'));
    }
}
export default function* allbeforeMiddleware() {
    yield takeEvery('*', processBeforeMiddleware);
}
