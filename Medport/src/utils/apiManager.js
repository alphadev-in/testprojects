import axios from 'axios';
import * as Constants from '../utils/globalData';

const ApiManager = {
  getApiCAll: function (url, callback) {
    var customHeader = {
      Accept: 'application/json, */*',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    };
    if (Constants.Token.length > 0) {
      customHeader.Authorization = `Bearer ${Constants.Token}`;
      // console.log('Token=' + Constants.Token);
    }
    axios
      .get(url, {headers: customHeader})
      .then((response) => {
        // console.log(response.data);
        if (response.status === 200) {
          if (response.data.status == true) {
            let msg = '';
            if (response.data.message != null) {
              msg = response.data.message;
            }
            let res = {isSuccess: true, data: response.data.data, message: msg};
            callback(res);
          } else {
            let msg = 'Something went wrong!!';
            if (response.data.message != null) {
              msg = response.data.message;
            }
            let res = {
              isSuccess: false,
              message: msg,
              status: response.data.status,
            };
            callback(res);
          }
        } else {
          let msg = 'Something went wrong!!';
          if (response.data.message != null) {
            msg = response.data.message;
          }
          let res = {isSuccess: false, message: msg};
          callback(res);
        }
      })
      .catch((error) => {
        console.log('api error');
        let msg = 'Something went wrong!!';
        // if (response.data.message != null) {
        //   msg = response.data.message;
        // }
        let res = {isSuccess: false, message: msg};
        callback(res);
      });
  },

  postApiCall: function (url, params, callback) {
    var customHeader = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    if (Constants.Token.length > 0) {
      customHeader.Authorization = `Bearer ${Constants.Token}`;
    }
    console.log(customHeader);
    axios
      .post(url, params, {headers: customHeader})
      .then((response) => {
        console.log('res=' + response);
        console.log(response.data);
        console.log('status=' + response.status);
        if (response.status === 200) {
          if (response.data.status == 1) {
            let res = {isSuccess: true, data: response.data.data};
            callback(res);
          } else {
            let msg = 'Something went wrong!!';
            if (response.data.message != null) {
              msg = response.data.message;
            }
            let res = {
              isSuccess: false,
              message: msg,
              status: response.data.status,
            };
            callback(res);
          }
        } else {
          let msg = 'Something went wrong!!';
          if (response.data.message != null) {
            msg = response.data.message;
          }
          let res = {isSuccess: false, message: msg};
          callback(res);
        }
      })
      .catch((error) => {
        console.log('api error');
        console.log(error);
        let msg = 'Something went wrong!!';
        // if (response.data.message != null) {
        //   msg = response.data.message;
        // }
        let res = {isSuccess: false, message: msg};
        callback(res);
      });
  },
};
export default ApiManager;
