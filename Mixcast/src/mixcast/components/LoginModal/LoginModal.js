import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import querystring from 'query-string';
import {
  Grid,
  InputAdornment,
  FormControlLabel,
  Dialog,
  Checkbox,
  LinearProgress,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  Tooltip,
  TextField
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MixcastLoginState } from '../../../reducers/MixcastState';
import Cookies from 'js-cookie';

import hero1 from '../../../assets/images/favcon.png';

import {
  CLIENT_ID,
  REDIRECT_URL,
  SCOPE_FOR_SPOTIFY,
  SPOTIFY_URL,
  SERVER_URL
} from '../../../config/settings';

import { generateRandomString } from '../../../utils';

const LoginModal = (props) => {
  const { status } = props;

  const [modal, showModal] = useState(false);

  const toggle = () => showModal(!modal);

  const [modal2, showModal2] = useState(false);

  const toggle2 = () => showModal2(!modal2);

  const login = () => {
    const client_id = CLIENT_ID;
    const redirect_uri = REDIRECT_URL;
    const state = generateRandomString(16);
    const scope = SCOPE_FOR_SPOTIFY;

    window.location.replace(
      SPOTIFY_URL +
        querystring.stringify({
          response_type: 'code',
          client_id: client_id,
          scope: scope,
          redirect_uri: redirect_uri,
          state: state
        })
    );
  };

  useEffect(() => {
    // const msValue = Cookies.get('__ms');
    // console.log('msValue' + msValue);
    // if (msValue !== '' && msValue !== undefined) {
    if (status === MixcastLoginState.LOGGED) {
      showModal(false);
    } else {
      showModal(true);
    }
    // } else {
    // window.location.replace('#/ms/login');
    // showModal2(true);
    // }
  }, [status]);

  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Dialog
          scroll="body"
          maxWidth="lg"
          open={modal}
          onClose={toggle}
          classes={{
            paper: 'modal-content rounded border-0 bg-white p-3 p-xl-0'
          }}>
          <Grid container spacing={0}>
            <Grid item xl={12}>
              <div className="mt-4 mt-xl-0">
                <div className="d-flex justify-content-center align-items-center my-4">
                  <div
                    className="badge badge-pill badge-success px-4 h-auto py-1"
                    style={{ backgroundColor: '#18212F' }}>
                    Spotify Access Required
                  </div>
                </div>

                <div className="px-0 mx-3 justify-content-center align-items-center d-flex">
                  <span className="py-1 " style={{ textAlign: 'center' }}>
                    The Mixcast App needs permission to access some of your
                    Spotify account data to work properly. We do not store any
                    of your Spotify data on our servers. This means you will
                    need to reconnect to Spotify every time you use this app.
                    <br />
                    After you click the button below, you will be asked by
                    Spotify to review and approve our complete list of requested
                    access permissions.
                  </span>
                </div>
                <div>
                  <Card className="shadow-none bg-transparent p-4 border-0">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <Button
                        onClick={login}
                        style={{
                          backgroundColor: 'green',
                          top: 10,
                          width: 250,
                          marginTop: 10,
                          marginBottom: 10
                        }}>
                        <div className="d-flex flex-wrap align-items-center">
                          <FontAwesomeIcon
                            icon={['fab', 'spotify']}
                            style={{ fontSize: 30, color: '#ffffff' }}
                          />
                          <div className="text-white pl-3">
                            Connect to Spotify
                          </div>
                        </div>
                      </Button>
                    </div>
                    <h1 className="display-4 my-3 text-center"></h1>
                  </Card>
                </div>
              </div>
            </Grid>
          </Grid>
        </Dialog>
        <Dialog
          scroll="body"
          maxWidth="lg"
          open={modal2}
          onClose={toggle2}
          classes={{
            paper: 'modal-content rounded border-0 bg-white p-3 p-xl-0'
          }}>
          <Grid container spacing={0}>
            <Grid item xl={12}>
              <div className="mt-4 mt-xl-0">
                <div>
                  <Card className="shadow-none bg-transparent p-4 border-0">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <div className="mt-3 p-0 align-items-center">
                        <a
                          href="#/ms/login"
                          className="login-btn2 w-inline-block">
                          Login
                        </a>
                        <a
                          href="#"
                          data-ms-membership="604736f18dd0730004995965"
                          className="signup-button w-inline-block">
                          Sign up
                        </a>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </Grid>
          </Grid>
        </Dialog>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  status: state.MixcastState.status
});

export default connect(mapStateToProps)(LoginModal);
