import React, { useState, useEffect, useRef } from 'react';

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
  MenuItem
} from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import logo from '../../../assets/images/mixcastsidebarW.svg';

import { connect } from 'react-redux';

import { get } from '../../../utils/api';

const PageTitle = (props) => {
  const {
    pageTitleStyle,
    pageTitleBackground,
    pageTitleShadow,
    pageTitleIconBox,
    pageTitleDescription,
    titleHeading,
    titleDescription,
    history
  } = props;

  const [inputValue, setInputValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('DEFAULT');
  const anchorRef = useRef(null);

  function onChangeHandler(event) {
    if (event?.target?.value) {
      setInputValue(event?.target?.value.trim());
    } else {
      setInputValue('');
    }
  }

  useEffect(() => {
    if (inputValue) {
      const query = inputValue.toLowerCase().trim();
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

  useEffect(() => {
    if (status === 'MIXCAST') {
      // history.push('/create');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  function handleClose() {
    setOpen(false);
    setStatus('MIXCAST');
  }

  return (
    <div></div>
    // <div
    //   className={clsx('app-page-title', pageTitleStyle, pageTitleBackground, {
    //     'app-page-title--shadow': pageTitleShadow
    //   })}
    //   style={{ backgroundColor: '#18212f' }}>
    //   <Grid container spacing={3}>
    //     <Grid item xs={9}>
    //       <div>
    //         <div className="app-page-title--first">
    //           {pageTitleIconBox && (
    //             <div className="app-page-title--iconbox d-70">
    //               <div
    //                 className="d-70 d-flex align-items-center justify-content-center display-1"
    //                 style={{ backgroundColor: '#253754' }}>
    //                 {titleHeading === 'Your Songs' ? (
    //                   <FontAwesomeIcon
    //                     icon={['fas', 'music']}
    //                     style={{ fontSize: 35, color: '#EEEEEE' }}
    //                   />
    //                 ) : titleHeading === 'Playlist' ? (
    //                   <FontAwesomeIcon
    //                     icon={['fas', 'list']}
    //                     style={{ fontSize: 35, color: '#EEEEEE' }}
    //                   />
    //                 ) : titleHeading === 'Your Artists' ? (
    //                   <FontAwesomeIcon
    //                     icon={['fas', 'user']}
    //                     style={{ fontSize: 35, color: '#EEEEEE' }}
    //                   />
    //                 ) : titleHeading === 'Release' ? (
    //                   <FontAwesomeIcon
    //                     icon={['fas', 'calendar-alt']}
    //                     style={{ fontSize: 35, color: '#EEEEEE' }}
    //                   />
    //                 ) : titleHeading === 'Releases' ? (
    //                   <FontAwesomeIcon
    //                     icon={['fas', 'calendar-alt']}
    //                     style={{ fontSize: 35, color: '#EEEEEE' }}
    //                   />
    //                 ) : titleHeading === 'Discover' ? (
    //                   <FontAwesomeIcon
    //                     icon={['fas', 'rocket']}
    //                     style={{ fontSize: 35, color: '#EEEEEE' }}
    //                   />
    //                 ) : titleHeading === 'Trending' ? (
    //                   <FontAwesomeIcon
    //                     icon={['fas', 'rocket']}
    //                     style={{ fontSize: 35, color: '#EEEEEE' }}
    //                   />
    //                 ) : titleHeading === 'Song Discovery' ? (
    //                   <FontAwesomeIcon
    //                     icon={['fas', 'random']}
    //                     style={{ fontSize: 35, color: '#EEEEEE' }}
    //                   />
    //                 ) : (
    //                   <img alt="Mixcast" src={logo} style={{ width: 40 }} />
    //                 )}
    //               </div>
    //             </div>
    //           )}
    //           <div className="app-page-title--heading">
    //             <h1 style={{ color: '#ffffff' }}>{titleHeading}</h1>
    //             {pageTitleDescription && (
    //               <div
    //                 className="app-page-title--description"
    //                 style={{ color: '#aaaaaa' }}>
    //                 {titleDescription}
    //               </div>
    //             )}
    //           </div>
    //         </div>
    //       </div>
    //     </Grid>
    //     {/* <Grid item xs={5}>
    //       <div className="d-flex align-items-center">
    //         <TextField
    //           ref={anchorRef}
    //           variant="outlined"
    //           size="small"
    //           id="input-search"
    //           className="w-100 mb-4"
    //           placeholder="Search spotify for playlists"
    //           InputProps={{
    //             startAdornment: (
    //               <InputAdornment position="start">
    //                 <SearchTwoToneIcon />
    //               </InputAdornment>
    //             ),
    //             style: {
    //               color: 'white'
    //             }
    //           }}
    //           onChange={onChangeHandler}
    //           value={inputValue}
    //         />
    //         <Popper
    //           open={open}
    //           className="w-100 mb-4"
    //           anchorEl={anchorRef.current}
    //           role={undefined}
    //           transition
    //           disablePortal
    //           style={{
    //             zIndex: 999
    //           }}>
    //           {({ TransitionProps, placement }) => (
    //             <Grow
    //               {...TransitionProps}
    //               style={{
    //                 transformOrigin:
    //                   placement === 'bottom' ? 'center top' : 'center bottom'
    //               }}>
    //               <Paper>
    //                 <ClickAwayListener onClickAway={handleClose}>
    //                   <MenuList
    //                     autoFocusItem={false}
    //                     id="menu-list-grow"
    //                     onKeyDown={() => null}>
    //                     {searchResult.length
    //                       ? searchResult.map((track, index) => (
    //                           <MenuItem key={index} onClick={handleClose}>
    //                             {`${track.name} -
    //                           ${track.artists[0].name}`}
    //                           </MenuItem>
    //                         ))
    //                       : null}
    //                   </MenuList>
    //                 </ClickAwayListener>
    //               </Paper>
    //             </Grow>
    //           )}
    //         </Popper>
    //       </div>
    //     </Grid> */}
    //   </Grid>
    // </div>
  );
};

const mapStateToProps = (state) => ({
  pageTitleStyle: state.ThemeOptions.pageTitleStyle,
  pageTitleBackground: state.ThemeOptions.pageTitleBackground,
  pageTitleShadow: state.ThemeOptions.pageTitleShadow,
  pageTitleIconBox: state.ThemeOptions.pageTitleIconBox,
  pageTitleDescription: state.ThemeOptions.pageTitleDescription
});

export default connect(mapStateToProps)(PageTitle);
