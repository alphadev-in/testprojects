import React, { useState, useEffect, useMemo, useContext } from 'react';

import {
  Typography,
  Badge,
  Menu,
  Button,
  List,
  ListItem,
  Tooltip,
  Divider,
  Grid,
  InputAdornment,
  FormControlLabel,
  Dialog,
  Checkbox,
  LinearProgress,
  Card,
  CardContent,
  TextField
} from '@material-ui/core';
import querystring from 'query-string';
import { withStyles } from '@material-ui/core/styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';

import { MixcastLoginState } from '../../../../reducers/MixcastState';

import { darkStyles } from '../../../../theme/dark';
import { history } from '../../../../config/configureStore';

import '../../../../theme/login.css';
import logo from '../../../../assets/images/favcon.png';

import {
  spotifyProfileFetching,
  spotifyProfileSuccess,
  spotifyProfileError,
  getSpotifyProfile
} from '../../../../reducers/SpotifyProfileState';

import {
  CLIENT_ID,
  REDIRECT_URL,
  SCOPE_FOR_SPOTIFY,
  SPOTIFY_URL,
  SERVER_URL
} from '../../../../config/settings';

const HeaderUserbox = (props) => {
  const {
    status,
    profile,
    spotifyProfileFetching,
    spotifyProfileSuccess,
    spotifyProfileError
  } = props;

  const [anchorEl, setAnchorEl] = useState(null);
  const [profileData, setProfileData] = useState({
    picture: '',
    name: '',
    country: '',
    id: ''
  });
  const [showImage, setShowImage] = useState(false);
  const [msValue, setmsValue] = useState(null);
  const [modal, showModal] = useState(false);

  const toggle = () => showModal(!modal);

  useEffect(() => {
    setmsValue(Cookies.get('__ms'));
    if (status === MixcastLoginState.LOGGED) {
      spotifyProfileFetching();
      getSpotifyProfile()
        .then((data) => {
          const emailAddress = data.email;
          spotifyProfileSuccess(data);
        })
        .catch((error) => {
          spotifyProfileError(error);
        });
    }
  }, [status]);

  const LogOut = () => {
    localStorage.clear();
    window.location.replace(`${SERVER_URL}/login`);
  };

  useEffect(() => {
    if (profile.success) {
      setProfileData({
        picture: profile?.data?.images == [] ? logo : logo,
        name: profile.data?.display_name,
        country: profile.data?.country,
        id: profile.data?.id
      });
    }
  }, [profile]);

  const handleClick = (event) => {
    if (profile.success) {
      setAnchorEl(event.currentTarget);
    } else {
      window.location.reload();
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOnLoad = () => {
    setShowImage(true);
  };

  return (
    <>
      {/* {msValue === '' || msValue === undefined ? (
        <div className="mt-3 p-0 align-items-center">
          <a href="#/ms/login" className="login-btn w-inline-block">
            Login
          </a>
          <a
            href="#"
            data-ms-membership="604736f18dd0730004995965"
            className="signup-button w-inline-block">
            Sign up
          </a>
        </div>
      ) : ( */}
      <div className="mt-3 p-0 align-items-center">
        {/* <a href="#/ms/profile" className="signup-button w-inline-block">
            Mixcast Profile
          </a> */}

        <Button
          variant="text"
          onClick={handleClick}
          className="ml-2 btn-transition-none text-left ml-2 p-0 bg-transparent d-flex align-items-center"
          disableRipple>
          {profile.success ? (
            <div className="d-block p-0 avatar-icon-wrapper">
              {/* <StyledBadge
              overlap="circle"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              badgeContent=""
              classes={{ badge: 'bg-success badge-circle border-0' }}
              variant="dot"> */}
              <div className="avatar-icon">
                <img
                  src={profileData.picture}
                  alt={profileData.name}
                  onLoad={handleOnLoad}
                />
              </div>
              {/* </StyledBadge> */}
            </div>
          ) : null}

          {profile.success ? (
            <div className="d-none d-xl-block pl-2">
              <div
                className="font-weight-bold line-height-1"
                style={darkStyles.fontColorTheme}>
                {profileData.name}
              </div>
            </div>
          ) : (
            <div
              style={{
                backgroundColor: 'green',
                top: 10,
                width: 200,
                marginTop: 10,
                marginBottom: -10,
                padding: 10,
                borderRadius: 10
              }}>
              <div className="d-flex flex-wrap align-items-center">
                <FontAwesomeIcon
                  icon={['fab', 'spotify']}
                  style={{ fontSize: 30, color: '#ffffff' }}
                />
                <div className="text-white pl-3">Login with Spotify</div>
              </div>
            </div>
          )}
          <span className="pl-1 pl-xl-3">
            <FontAwesomeIcon
              icon={['fas', 'angle-down']}
              className="opacity-5"
              style={darkStyles.fontColorTheme}
            />
          </span>
        </Button>
      </div>
      {/* )} */}

      <Menu
        anchorEl={anchorEl}
        keepMounted
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        open={Boolean(anchorEl)}
        classes={{ list: 'p-0' }}
        onClose={handleClose}>
        <div
          className="dropdown-menu-lg overflow-hidden p-0 pl-3"
          style={darkStyles.backgroundColorTheme}>
          <div className=" line-height-sm mb-3 mt-3">
            <span className="text-black-50 d-block">
              <a
                href="#"
                className="d-block text-left"
                style={darkStyles.fontColorTheme}>
                <div style={{ fontSize: 20 }}>Account Options</div>
              </a>
            </span>
          </div>
          {/* <div className=" line-height-sm mb-3">
            <span className="text-black-50 d-block">
              <a
                href="#/ms/profile"
                className="d-block text-left"
                style={darkStyles.fontColorTheme}>
                <div style={{ fontWeight: 300 }}>Profile</div>
              </a>
            </span>
          </div> */}
          <div className="mb-3 line-height-sm">
            <span className="text-black-50 d-block">
              <a
                href="https://newsletter.themixcast.com/"
                target="_blank"
                className="d-block text-left"
                style={darkStyles.fontColorTheme}>
                <div style={{ fontWeight: 300 }}>Newsletter Subscription</div>
              </a>
            </span>
          </div>
          {/* <div className="mb-3 line-height-sm">
            <span className="text-black-50 d-block">
              <a
                href="https://themixcast.getrewardful.com/"
                target="_blank"
                className="d-block text-left"
                style={darkStyles.fontColorTheme}>
                <div style={{ fontWeight: 300 }}>
                  Refer Friends & Earn Money
                </div>
              </a>
            </span>
          </div> */}
          <div className="mb-3 line-height-sm">
            <span className="text-black-50 d-block">
              <Button
                onClick={LogOut}
                style={{ ...darkStyles.fontColorTheme, marginLeft: -22 }}
                className="d-block text-left">
                <div style={{ fontWeight: 300, fontSize: 16, marginTop: -7 }}>
                  Disconnect Spotify
                </div>
              </Button>
            </span>
          </div>
        </div>
      </Menu>
    </>
  );
};

const mapStateToProps = (state) => ({
  status: state.MixcastState.status,
  profile: state.SpotifyProfileState
});

const mapDispatchToProps = (dispatch) => ({
  spotifyProfileFetching: () => dispatch(spotifyProfileFetching()),
  spotifyProfileSuccess: (data) => dispatch(spotifyProfileSuccess(data)),
  spotifyProfileError: (data) => dispatch(spotifyProfileError(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderUserbox);
