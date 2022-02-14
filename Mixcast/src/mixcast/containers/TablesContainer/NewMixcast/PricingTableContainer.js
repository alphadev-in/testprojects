import React, { useEffect, useState, Fragment, useRef } from 'react';

import { connect } from 'react-redux';
import clsx from 'clsx';
import {
  TextField,
  InputAdornment,
  Grid,
  Card,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
  Divider
} from '@material-ui/core';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { get } from '../../../../utils/api';

import { MixcastLoginState } from '../../../../reducers/MixcastState';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import { history } from '../../../../config/configureStore';

import '../../../../theme/dark.css';

const TablesContainer = (props) => {
  const { pageTitleStyle, pageTitleBackground, pageTitleShadow } = props;
  const matches = useMediaQuery('(min-width:600px)');

  const [inputValue, setInputValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('DEFAULT');
  const anchorRef = useRef(null);

  useEffect(() => {
    if (status === MixcastLoginState.LOGGED) {
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="app-wrapper"
      style={{ backgroundColor: '#18212f', borderRadius: 20 }}>
      <div className="app-content--inner d-flex align-items-center">
        <div className="flex-grow-1 w-100 d-flex align-items-center">
          <Grid container spacing={0} style={{ backgroundColor: '#18212f' }}>
            <Grid item xl={12}>
              <div className="mt-4 mt-xl-0">
                <div className="d-flex justify-content-center align-items-center my-4">
                  <div
                    style={{
                      color: '#00a4df',
                      fontSize: 15,
                      fontWeight: 600,
                      letterSpacing: 3
                    }}>
                    THE MIXCAST SPOTIFY APP
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center my-4">
                  <h2
                    style={{
                      color: '#fff',
                      marginTop: 0,
                      marginBottom: 16,
                      fontSize: 48,
                      fontWeight: '700'
                    }}>
                    Your All-in-One Playlisting Tool
                  </h2>
                </div>

                {/* <Card className="shadow-none bg-transparent p-4 border-0">
                  <div
                    className="d-flex justify-content-center align-items-center my-4"
                    style={{
                      flexDirection: 'row',
                      display: 'flex',
                      marginTop: 10
                    }}>
                    <div
                      style={{
                        backgroundColor: '#263754',
                        width: 40,
                        height: 40,
                        borderRadius: 20
                      }}
                      className="justify-content-center align-items-center d-flex ">
                      <FontAwesomeIcon
                        icon={['fas', 'check']}
                        style={{ fontSize: 20, color: '#EEEEEE' }}
                      />{' '}
                    </div>
                    <h5
                      style={{ color: '#fff', fontWeight: 'bold' }}
                      className=" ml-4 justify-content-center align-items-center d-flex">
                      Start with 14-day trial. No credit card needed.
                    </h5>
                  </div>
                  <div
                    className="d-flex justify-content-center align-items-center my-4"
                    style={{
                      flexDirection: 'row',
                      display: 'flex',
                      marginTop: 10
                    }}>
                    <div
                      style={{
                        backgroundColor: '#263754',
                        width: 40,
                        height: 40,
                        borderRadius: 20
                      }}
                      className="justify-content-center align-items-center d-flex ">
                      <FontAwesomeIcon
                        icon={['fas', 'check']}
                        style={{ fontSize: 20, color: '#EEEEEE' }}
                      />{' '}
                    </div>
                    <h5
                      style={{ color: '#fff', fontWeight: 'bold' }}
                      className=" ml-4 justify-content-center align-items-center d-flex">
                      Unlock all app features & playlist archives.
                    </h5>
                  </div>
                  <div
                    className="d-flex justify-content-center align-items-center my-4"
                    style={{
                      flexDirection: 'row',
                      display: 'flex',
                      marginTop: 10
                    }}>
                    <div
                      style={{
                        backgroundColor: '#263754',
                        width: 40,
                        height: 40,
                        borderRadius: 20
                      }}
                      className="justify-content-center align-items-center d-flex">
                      <FontAwesomeIcon
                        icon={['fas', 'check']}
                        style={{ fontSize: 20, color: '#EEEEEE' }}
                      />{' '}
                    </div>
                    <h5
                      style={{ color: '#fff', fontWeight: 'bold' }}
                      className=" ml-4 justify-content-center align-items-center d-flex">
                      $2.50 per month after trial. Cancel anytime.
                    </h5>
                  </div>
                </Card> */}
                <div>
                  <div className="d-flex flex-column justify-content-center align-items-center pb-3">
                    <a
                      href="#/ms/signup/604736f18dd0730004995965"
                      data-ms-membership="604736f18dd0730004995965"
                      style={{
                        backgroundColor: '#00a4df',
                        top: 10,
                        display: 'flex',
                        padding: 20,
                        paddingLeft: 35,
                        paddingRight: 35,
                        borderRadius: 25,
                        color: 'white'
                      }}>
                      {' '}
                      START FOR FREE!
                    </a>
                  </div>
                </div>
              </div>
            </Grid>

            {/* <Grid item xl={6}>
              <div
                className=""
                style={{
                  backgroundColor: '#253655',

                  borderRadius: 20
                }}>
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: '#1e2b44',
                    borderBottomColor: '#00a4df',
                    borderBottomWidth: 1,
                    paddingTop: 10,
                    paddingBottom: 10,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20
                  }}>
                  <div style={{ color: 'white' }}>SUBSCRIPTION PRICING</div>
                </div>

                <div
                  className="px-0 justify-content-center align-items-center d-flex"
                  style={{ flexDirection: 'column' }}>
                  <div
                    style={{
                      marginTop: 20,
                      marginBottom: 8,
                      fontSize: 48,
                      fontWeight: 700,
                      color: 'white',
                      textAlign: 'center',
                      width: '100%'
                    }}>
                    Only $2.50 / Month
                  </div>
                  <div
                    style={{
                      marginBottom: 32,
                      color: '#858585',
                      fontSize: 13,
                      textAlign: 'center',
                      width: '100%'
                    }}>
                    Start with a Free Trial. Unsubscribe at any time.
                  </div>
                </div>
                <div>
                  <div className="d-flex flex-column justify-content-center align-items-center pb-3">
                    <a
                      href="#/ms/signup/604736f18dd0730004995965"
                      data-ms-membership="604736f18dd0730004995965"
                      style={{
                        backgroundColor: '#00a4df',
                        top: 10,
                        display: 'flex',
                        padding: 20,
                        paddingLeft: 35,
                        paddingRight: 35,
                        borderRadius: 25,
                        color: 'white'
                      }}>
                      {' '}
                      CREATE YOUR FIRST AMAZING PLAYLIST!
                    </a>
                  </div>
                </div>
              </div>
            </Grid>*/}
          </Grid>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  pageTitleStyle: state.ThemeOptions.pageTitleStyle,
  pageTitleBackground: state.ThemeOptions.pageTitleBackground,
  pageTitleShadow: state.ThemeOptions.pageTitleShadow,
  pageTitleIconBox: state.ThemeOptions.pageTitleIconBox,
  pageTitleDescription: state.ThemeOptions.pageTitleDescription
});

export default connect(mapStateToProps)(TablesContainer);
