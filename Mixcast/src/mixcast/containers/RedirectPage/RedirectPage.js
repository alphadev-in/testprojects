import React from 'react';

import queryString from 'query-string';
import { connect } from 'react-redux';

import { REDIRECT_URL, AUTHORIZATION_CODE } from '../../../config/settings';
// import { useMemberStack } from '../../../config/useMemberStack';

import {
  setLoginFlowStatus,
  MixcastLoginState
} from '../../../reducers/MixcastState';

class RedirectPage extends React.Component {
  componentDidMount() {
    const { setExpiryTime, history, setLoginFlowStatus } = this.props;
    try {
      //memberStack
      // const dataMember = useMemberStack();
      // console.log(dataMember);
      const parsed = queryString.parseUrl(window.location.search);
      if (parsed.query?.code) {
        const details = {
          code: parsed.query.code,
          redirect_uri: REDIRECT_URL,
          grant_type: 'authorization_code'
        };

        let formBody = [];
        for (const property in details) {
          const encodedKey = encodeURIComponent(property);
          const encodedValue = encodeURIComponent(details[property]);
          formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');

        fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            Authorization: AUTHORIZATION_CODE
          },
          body: formBody
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.access_token) {
              window.localStorage.setItem('auth_token', data.access_token);
              const expiryTime = new Date().getTime() + data.expires_in * 1000;
              localStorage.setItem('expiry_time', expiryTime);
              setExpiryTime(expiryTime);
              setLoginFlowStatus(MixcastLoginState.LOGGED);
              history.push('/create');
            }
          });
      }
    } catch (error) {
      history.push('/login');
    }
  }

  render() {
    return null;
  }
}

const mapStateToProps = (state) => ({
  status: state.MixcastState.status
});

const mapDispatchToProps = (dispatch) => ({
  setLoginFlowStatus: (status) => dispatch(setLoginFlowStatus(status))
});

export default connect(mapStateToProps, mapDispatchToProps)(RedirectPage);
