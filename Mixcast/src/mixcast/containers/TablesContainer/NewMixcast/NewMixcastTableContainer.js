import React, { useEffect, useState, Fragment, useRef } from 'react';

import { connect } from 'react-redux';
import clsx from 'clsx';
import {
  TextField,
  InputAdornment,
  Grid,
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
import { darkStyles } from '../../../../theme/dark';

const TablesContainer = (props) => {
  const { pageTitleStyle, pageTitleBackground, pageTitleShadow } = props;
  const matches = useMediaQuery('(min-width:600px)');

  const [inputValue, setInputValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('DEFAULT');
  const anchorRef = useRef(null);

  function onChangeHandler(event) {
    if (event?.target?.value) {
      setInputValue(event?.target?.value);
      // setInputValue(event?.target?.value.trim());
    } else {
      setInputValue('');
    }
  }

  useEffect(() => {
    if (inputValue) {
      const query = inputValue.toLowerCase();
      get(`https://api.spotify.com/v1/search?q=${query}&type=track&limit=5`)
        .then((response) => {
          setSearchResult(response?.tracks?.items);
          setOpen(true);
        })
        .catch((err) => {
          console.error('Something went wrong', err);
          setOpen(false);
        });
    } else {
      setSearchResult([]);
      setOpen(false);
    }
  }, [inputValue]);

  function handleClose() {
    setOpen(false);
    setStatus('MIXCAST');
  }
  function handleTrack(trackdata) {
    // console.log(trackdata);
    history.push({
      pathname: '/mixcast',
      name: trackdata.name,
      id: trackdata.id
    });
    setOpen(false);
    setStatus('MIXCAST');
  }
  return (
    <div className="app-wrapper" style={{ backgroundColor: '#18212f' }}>
      <div className="app-content--inner d-flex align-items-center">
        <div className="flex-grow-1 w-100 d-flex align-items-center">
          <Grid item md={10} lg={8} xl={8} className="mx-auto">
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                flexDirection: 'column',
                // backgroundColor: 'rgb(37, 55, 84)',
                borderRadius: 20
              }}>
              <div className="text-center mb-5 mt-5 p-3">
                <h1
                  style={{ color: '#eeeeee', fontWeight: 'bold' }}
                  className="mainTitle">
                  Create a Mixcast
                </h1>
                <h6
                  style={{ color: '#eeeeee', fontSize: 18 }}
                  className="subTitle">
                  1) Type the name of a song you like <br />
                  2) Click the song in the dropdown menu <br />
                  3) We'll create a smart new playlist for you
                </h6>
                <div style={{ marginTop: 50 }} className="searchBar">
                  <TextField
                    ref={anchorRef}
                    variant="outlined"
                    size="medium"
                    fullWidth
                    className={darkStyles.TextFieldView}
                    placeholder="Search by Song Name"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchTwoToneIcon />
                        </InputAdornment>
                      ),
                      style: {
                        color: 'white',
                        borderColor: '#ffffff',
                        borderWidth: 2
                      }
                    }}
                    onChange={onChangeHandler}
                    value={inputValue}
                  />
                </div>
                <Popper
                  open={open}
                  className="popperview"
                  anchorEl={anchorRef.current}
                  role={undefined}
                  transition
                  placement={'bottom'}
                  disablePortal
                  style={{
                    zIndex: 999,
                    backgroundColor: 'white'
                  }}>
                  {({ TransitionProps, placement }) => (
                    <Grow {...TransitionProps}>
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList
                            autoFocusItem={false}
                            id="menu-list-grow"
                            onKeyDown={() => null}>
                            {searchResult.length
                              ? searchResult.map((track, index) => (
                                  <MenuItem
                                    key={index}
                                    onClick={() => handleTrack(track)}>
                                    {`${track.name} -
                              ${track.artists[0].name}`}
                                  </MenuItem>
                                ))
                              : null}
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </div>
            </div>
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

export default TablesContainer;
