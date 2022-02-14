import {call, put, takeEvery} from 'redux-saga/effects';
import request from './request';
import allAfterMiddleware from './all.after.middleware';
import {addUpdateAppLoadersStatus} from './../../view.updater/actions/app.actions';

export function* getServerData(action) {
  if (action && action.type.indexOf('SUCCESS') > -1) {
    yield allAfterMiddleware(action);
  }
  if (action.url) {
    try {
      let response;
      // Call our request helper (see 'utils/request')
      if (action.method === 'POST' || action.method === 'PUT') {
        let data = {};
        if (action.encoded === 'URL_ENCODED') {
          // data = new URLSearchParams(action.data);
          let formBody = [];
          Object.keys(action.data).map((key) => {
            const encodedKey = encodeURIComponent(key);
            const encodedValue = encodeURIComponent(action.data[key]);
            formBody.push(encodedKey + '=' + encodedValue);
          });
          formBody = formBody.join('&');
          data = formBody;
        } else {
          data = new FormData();
          for (var item in action.data) {
            data.append(item, action.data[item]);
          }
        }
        response = yield call(request, action.url, {
          method: action.method || 'GET',
          body: action.data,
          encoded: action.encoded,
        });
      } else {
        response = yield call(request, action.url, {
          method: action.method || 'GET',
          encoded: action.encoded,
          token: action.token,
        });
      }
      if (
        response &&
        (response.code == 812 ||
          response.code == 900 ||
          response.code == 801 ||
          response.code == 802 ||
          response.code == 804 ||
          response.code == 800 ||
          response.code == 816 ||
          response.code == 803 ||
          response.code == 806 ||
          response.code == 807 ||
          response.code == 811)
      ) {
        yield put({
          type: `${action.type}_ERROR`,
          error: {errorId: `${action.type}_ERROR_ID`},
        });
      } else if (response) {
        yield put({
          type: `${action.type}_SUCCESS`,
          baseType: `${action.type}`,
          response,
          data: action.data,
        });
      }
    } catch (err) {
      yield put(
        addUpdateAppLoadersStatus(
          action.type,
          'ERROR',
          `${action.type}_ERROR_ID`,
        ),
      );
    }
  }
}

export default function* getDataFromServer() {
  yield takeEvery('*', getServerData);
}
