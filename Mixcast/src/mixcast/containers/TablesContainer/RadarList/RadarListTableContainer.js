import React, { useEffect, useState, Fragment, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { get } from '../../../../utils/api';

import {
  Table,
  Grid,
  InputLabel,
  InputAdornment,
  Card,
  Menu,
  MenuItem,
  Button,
  List,
  ListItem,
  TextField,
  FormControl,
  Select,
  CardContent,
  Typography,
  Tooltip
} from '@material-ui/core';
import { history } from '../../../../config/configureStore';
import FilterListTwoToneIcon from '@material-ui/icons/FilterListTwoTone';
import Pagination from '@material-ui/lab/Pagination';
import { darkStyles } from '../../../../theme/dark';
import '../../../../theme/dark.css';

import {
  addRadarTracks,
  getRadarTracks,
  isArtistsFollowed,
  isTracksFollowed,
  getFollowedTracks,
  addFollowedArtist
} from '../../../../reducers/SpotifyRadarTracksState';

import {
  MixcastLoginState,
  followArtist,
  deleteFollowArtist,
  followTrack,
  deleteFollowTrack
} from '../../../../reducers/MixcastState';

import { paginate } from '../../../../utils/helpers';

const NUMBER_OF_TRACKS = 25;

const tableHead = [
  // {
  //   title: 'Cover',
  //   show: false,
  //   customWidth: false
  // },
  {
    title: 'Artists',
    show: true,
    customWidth: false
  },
  {
    title: 'Song',
    show: true,
    customWidth: false
  },
  // {
  //   title: 'Albums',
  //   show: true,
  //   customWidth: false
  // },
  // { title: 'Released', show: true, customWidth: false },
  { title: 'Actions', show: true, customWidth: false }
];

const TablesContainer = (props) => {
  const { addRadarTracks, spotifyRadarTracks, status } = props;
  const [tracks2, setTracks2] = useState([]);
  const [artistList, setArtistList] = useState([]);
  const [trackList, setTrackList] = useState([]);
  const [type2, setType2] = useState(0);
  const [index, setIndex] = useState(0);
  const [page, setPage] = useState(1);
  const [anchorElFilter2, setAnchorElFilter2] = useState(null);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [playerStatus, setPlayerStatus] = useState({
    status: 'PAUSED',
    trackId: null
  });
  const [offset, setOffset] = useState(0);
  const playerRef = useRef();

  useEffect(() => {
    if (status === MixcastLoginState.LOGGED) {
      getFollowedTracks(offset).then((result) => {
        addRadarTracks(result);
        // console.log(result);
      });
      setOffset(offset + 1);
    }
  }, []);

  useEffect(() => {
    if (spotifyRadarTracks.length) {
      setTracks2(spotifyRadarTracks);
      isArtistsFollowed(spotifyRadarTracks).then((result) => {
        setArtistList(result);
      });
      // isTracksFollowed(spotifyRadarTracks).then((result) => {
      //   setTrackList(result);
      // });
    }
  }, [spotifyRadarTracks]);

  const handleType2 = (event) => {
    setType2(event.target.value);
    // if (event.target.value === 0) {
    //   getRadarTracks(0).then((result) => {
    //     addRadarTracks(result);
    //   });
    //   setTracks2(spotifyRadarTracks);
    // } else {
    getFollowedTracks(0).then((result) => {
      addRadarTracks(result);
    });
    setTracks2(spotifyRadarTracks);
    // }
  };

  const handleClickFilter2 = (event) => {
    setAnchorElFilter2(event.currentTarget);
  };
  const handleCloseFilter2 = () => {
    setAnchorElFilter2(null);
  };

  const loadMoreData = async () => {
    // if (type2 === 0) {
    //   getRadarTracks(offset).then((result) => {
    //     addRadarTracks(...result, ...spotifyRadarTracks);
    //     console.log(result);
    //   });

    //   // setTracks2([...tracks2, ...spotifyRadarTracks]);
    //   setOffset(offset + 1);
    // } else {
    getFollowedTracks(offset).then((result) => {
      addRadarTracks(...result, ...spotifyRadarTracks);
      // setTracks2(...result, ...tracks2);
    });
    // setTracks2(spotifyRadarTracks);
    // setTracks2([...tracks2, ...spotifyRadarTracks]);
    setOffset(offset + 1);
    // }
  };
  const artistListFun = async (id, item) => {
    let status = artistList[id];
    if (status) {
      let artistList2 = [...artistList];
      artistList2[id] = false;
      setArtistList(artistList2);
      await deleteFollowArtist(item);
    } else {
      let artistList2 = [...artistList];
      artistList2[id] = true;
      setArtistList(artistList2);
      await followArtist(item);
    }
  };

  const TrackListFun = async (id, item) => {
    let status = trackList[id];
    if (status) {
      let trackList2 = [...trackList];
      trackList2[id] = false;
      setTrackList(trackList2);
      await deleteFollowTrack(item);
    } else {
      let trackList2 = [...trackList];
      trackList2[id] = true;
      setTrackList(trackList2);
      await followTrack(item);
    }
  };

  function onPlaySongHandler(trackId, type) {
    if (type === 'play') {
      const trackToPlay = spotifyRadarTracks.find(
        (track) => track.id === trackId
      );
      if (trackToPlay?.preview_url) {
        setPlayerStatus((currentStatus) => {
          playerRef.current.src = trackToPlay.preview_url;
          playerRef.current.play();

          return {
            ...currentStatus,
            trackId
          };
        });
      }
    }

    if (type === 'pause') {
      setPlayerStatus((currentStatus) => {
        if (currentStatus.trackId !== trackId) {
          const trackToPlay = spotifyRadarTracks.find(
            (track) => track.id === trackId
          );
          if (trackToPlay?.preview_url) {
            playerRef.current.currentTime = 0;
            playerRef.current.pause();

            playerRef.current.src = trackToPlay.preview_url;
            playerRef.current.play();

            return {
              ...currentStatus,
              trackId
            };
          }
        } else {
          playerRef.current.currentTime = 0;
          playerRef.current.pause();
          return {
            status: 'PAUSED',
            trackId: null
          };
        }
      });
    }
  }
  function createMixcast(id, name) {
    history.push({
      pathname: '/mixcast',
      name: name,
      id: id
    });
  }
  function onPlayHandler() {
    setPlayerStatus((currentStatus) => {
      return {
        ...currentStatus,
        status: 'PLAYING'
      };
    });
  }

  function onPauseHandler() {
    setPlayerStatus((currentStatus) => {
      if (currentStatus.status === 'PLAYING') {
        return {
          status: 'PAUSED',
          trackId: null
        };
      } else {
        return currentStatus;
      }
    });
  }

  return (
    <>
      <div className="mb-spacing-6">
        <Grid container spacing={6} style={{ overflow: 'auto' }}>
          <Grid item xl={12}>
            <Card className="card-box">
              <div
                className="card-header d-flex align-items-center justify-content-between card-header-alt p-2"
                style={{
                  ...darkStyles.trBackground,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0
                }}>
                <div className="font-size-lg px-3 py-4 ">
                  <b style={{ ...darkStyles.tdColor, fontSize: 24 }}>
                    New Songs
                  </b>
                </div>
                {/* <div className="d-flex align-items-center">
                  <div>
                    <Button
                      onClick={handleClickFilter2}
                      variant="text"
                      className="btn-outline-primary d-flex align-items-center justify-content-center d-40 mr-2 p-0 rounded-pill">
                      <FilterListTwoToneIcon className="w-50" />
                    </Button>
                    <Menu
                      anchorEl={anchorElFilter2}
                      keepMounted
                      getContentAnchorEl={null}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                      }}
                      open={Boolean(anchorElFilter2)}
                      classes={{ list: 'p-0' }}
                      onClose={handleCloseFilter2}>
                      <div className="dropdown-menu-xl overflow-hidden p-0">
                        <div className="p-3">
                          <Grid container spacing={6}>
                            <Grid item md={12}>
                              <FormControl
                                variant="outlined"
                                size="small"
                                style={{
                                  color: 'white',
                                  backgroundColor: '#18212f'
                                }}
                                className="w-100">
                                <InputLabel
                                  id="type-select-label"
                                  style={{
                                    color: 'white',
                                    backgroundColor: '#18212f'
                                  }}>
                                  Time
                                </InputLabel>
                                <Select
                                  labelId="type-select-label"
                                  id="type-select-label-id"
                                  fullWidth
                                  label="Time"
                                  value={type2}
                                  style={{
                                    color: 'white',
                                    backgroundColor: '#18212f'
                                  }}
                                  onChange={handleType2}>
                                  <MenuItem
                                    value={0}
                                    style={{
                                      color: 'white',
                                      backgroundColor: '#18212f'
                                    }}>
                                    All Releases
                                  </MenuItem>
                                  <MenuItem
                                    value={1}
                                    style={{
                                      color: 'white',
                                      backgroundColor: '#18212f'
                                    }}>
                                    By Followed Artist
                                  </MenuItem>
                                </Select>
                              </FormControl>
                            </Grid>
                          </Grid>
                        </div>
                      </div>
                    </Menu>
                  </div>
                </div> */}
              </div>
              <div className="table-responsive-md">
                <Table className="table table-borderless text-nowrap mb-0">
                  <thead>
                    <tr>
                      {tableHead.map((headData, idx) => {
                        if (headData.customWidth) {
                          return (
                            <th
                              key={idx}
                              style={{ ...headData.style }}
                              style={darkStyles.thColor}>
                              {headData.show && headData.title}
                            </th>
                          );
                        }
                        return (
                          <th key={idx} style={darkStyles.thColor}>
                            {headData.show && headData.title}
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {tracks2.map((item, idx) => {
                      return (
                        <tr key={idx} style={darkStyles.trBackground}>
                          <td>
                            <div
                              className="d-flex align-items-center"
                              style={{
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                width: '10rem'
                              }}>
                              <Typography
                                noWrap
                                className="  text-black"
                                style={darkStyles.tdColor}>
                                {item.artist}
                              </Typography>
                            </div>
                          </td>
                          <td>
                            <div
                              className="d-flex align-items-center"
                              style={{
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                width: '15rem'
                              }}>
                              <Typography
                                noWrap
                                className="  text-black"
                                style={darkStyles.tdColor}>
                                {item.name}
                              </Typography>
                            </div>
                          </td>

                          <td>
                            <Tooltip
                              title="Preview Song"
                              arrow
                              placement="bottom">
                              <Button
                                onClick={() => {
                                  if (item.preview_url) {
                                    onPlaySongHandler(
                                      item.id,
                                      playerStatus.status === 'PLAYING'
                                        ? 'pause'
                                        : 'play'
                                    );
                                  }
                                }}
                                className="buttonTheme mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                                disabled={item.preview_url ? false : true}>
                                <FontAwesomeIcon
                                  icon={[
                                    'fas',
                                    playerStatus.trackId === item.id
                                      ? 'pause'
                                      : 'play'
                                  ]}
                                  className="DashboardButton"
                                />
                              </Button>
                            </Tooltip>
                            <a
                              href={item.spotifyUrl}
                              target="_blank"
                              rel="noopener noreferrer">
                              <Tooltip
                                title="Open In Spotify "
                                arrow
                                placement="bottom">
                                <Button className="buttonTheme mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                                  <FontAwesomeIcon
                                    icon={['fab', 'spotify']}
                                    className="DashboardButton"
                                  />
                                </Button>
                              </Tooltip>
                            </a>
                            <Tooltip
                              title="Create New Mixcast "
                              arrow
                              placement="bottom">
                              <Button
                                onClick={() =>
                                  createMixcast(item.id, item.name)
                                }
                                className="buttonTheme mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                                <FontAwesomeIcon
                                  icon={['fas', 'random']}
                                  className="DashboardButton"
                                />
                              </Button>
                            </Tooltip>
                            <Tooltip
                              title="Save / Unsave Track "
                              arrow
                              placement="bottom">
                              <Button
                                onClick={() => TrackListFun(idx, item.id)}
                                className="buttonTheme mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                                <FontAwesomeIcon
                                  icon={['fas', 'heart']}
                                  className="DashboardButton"
                                  style={{
                                    color: trackList[idx]
                                      ? '#6fb391'
                                      : '#ffffff'
                                  }}
                                />
                              </Button>
                            </Tooltip>
                            {/* <Tooltip
                              title="Follow / Unfollow Artist "
                              arrow
                              placement="bottom">
                              <Button
                                onClick={() =>
                                  artistListFun(idx, item.artistid)
                                }
                                className="buttonTheme mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                                <FontAwesomeIcon
                                  icon={['fas', 'user-plus']}
                                  className="DashboardButton"
                                  style={{
                                    color: artistList[idx]
                                      ? '#6fb391'
                                      : '#ffffff'
                                  }}
                                />
                              </Button>
                            </Tooltip> */}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
              <div className="divider" />
              <div
                className="p-3 d-flex justify-content-center"
                style={{
                  ...darkStyles.trBackground,
                  borderBottomRightRadius: 0,
                  borderBottomLeftRadius: 0
                }}>
                {/*
                <Pagination
                  className="pagination-primary"
                  count={numberOfPages2}
                  onChange={onChangePaginationHandler2}
                />
              </div> */}
                {/* <Button
                  className="signup-button w-inline-block"
                  onClick={loadMoreData}>
                  Load More
                </Button> */}
              </div>
            </Card>
          </Grid>
        </Grid>
      </div>
      <audio
        ref={playerRef}
        style={{ display: 'none' }}
        controls
        src=""
        onPlay={onPlayHandler}
        onPause={onPauseHandler}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </>
  );
};
const mapStateToProps = (state) => ({
  status: state.MixcastState.status,
  spotifyRadarTracks: state.SpotifyRadarTracksState.items
});

const mapDispatchToProps = (dispatch) => ({
  addRadarTracks: (tracks) => dispatch(addRadarTracks(tracks)),
  addFollowedArtist: (ids) => dispatch(addFollowedArtist(ids))
});

export default connect(mapStateToProps, mapDispatchToProps)(TablesContainer);
