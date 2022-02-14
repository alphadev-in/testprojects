import React, { useEffect, useState, Fragment, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';

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
import FilterListTwoToneIcon from '@material-ui/icons/FilterListTwoTone';
import Pagination from '@material-ui/lab/Pagination';
import { darkStyles } from '../../../../theme/dark';
import '../../../../theme/dark.css';

import {
  addFavSongs,
  getFavSongs,
  isArtistsFollowed,
  isTracksFollowed
} from '../../../../reducers/SpotifyFavSongsState';

import {
  MixcastLoginState,
  followArtist,
  deleteFollowArtist,
  followTrack,
  deleteFollowTrack
} from '../../../../reducers/MixcastState';
import { history } from '../../../../config/configureStore';

import { paginate } from '../../../../utils/helpers';

const NUMBER_OF_TRACKS = 10;

const tableHead = [
  {
    title: 'Cover',
    show: false,
    customWidth: false
  },
  {
    title: 'Songs',
    show: true,
    customWidth: false
  },
  {
    title: 'Artists',
    show: true,
    customWidth: false
  },
  { title: 'Popularity', show: true, customWidth: false },
  { title: 'Actions', show: true, customWidth: false }
];

const TablesContainer = (props) => {
  const { addFavSongs, spotifyFavSongs, status } = props;

  const [anchorElFilter2, setAnchorElFilter2] = useState(null);

  const handleClickFilter2 = (event) => {
    setAnchorElFilter2(event.currentTarget);
  };

  const handleCloseFilter2 = () => {
    setAnchorElFilter2(null);
  };

  const [type2, setType2] = useState(1);
  let terms = 'short_term';

  const handleType2 = (event) => {
    setType2(event.target.value);
    if (event.target.value === 0) {
      terms = 'long_term';
      getFavSongs(terms).then((result) => {
        addFavSongs(result);
        updateFavSongs();
      });
    } else if (event.target.value === 1) {
      terms = 'short_term';
      getFavSongs(terms).then((result) => {
        addFavSongs(result);
        updateFavSongs();
      });
    } else {
      terms = 'medium_term';
      getFavSongs(terms).then((result) => {
        addFavSongs(result);
        updateFavSongs();
      });
    }
  };
  const [searchOpen, setSearchOpen] = useState(false);

  const openSearch = () => setSearchOpen(true);
  const closeSearch = () => setSearchOpen(false);

  const [tracks, setTracks] = useState([]);
  const [tracks2, setTracks2] = useState([]);
  const [artistList, setArtistList] = useState([]);
  const [trackList, setTrackList] = useState([]);
  const [page, setPage] = useState(1);
  const [page2, setPage2] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [numberOfPages2, setNumberOfPages2] = useState(0);
  const [playerStatus, setPlayerStatus] = useState({
    status: 'PAUSED',
    trackId: null
  });
  const playerRef = useRef();

  useEffect(() => {
    if (status === MixcastLoginState.LOGGED) {
      getFavSongs(terms).then((result) => {
        addFavSongs(result);
        // console.log(result);
      });
    }
  }, []);

  const updateFavSongs = async () => {
    if (spotifyFavSongs.length) {
      isArtistsFollowed(spotifyFavSongs).then((result) => {
        setArtistList(result);
      });
      isTracksFollowed(spotifyFavSongs).then((result2) => {
        setTrackList(result2);
      });
    }
  };
  useEffect(() => {
    if (spotifyFavSongs.length) {
      const paginatedTracks2 = paginate(
        spotifyFavSongs,
        NUMBER_OF_TRACKS,
        page2
      );
      isArtistsFollowed(spotifyFavSongs).then((result) => {
        setArtistList(result);
      });
      isTracksFollowed(spotifyFavSongs).then((result) => {
        setTrackList(result);
      });
      setTracks2(paginatedTracks2);
      setNumberOfPages2(Math.round(spotifyFavSongs.length / NUMBER_OF_TRACKS));
    }
  }, [spotifyFavSongs, page2]);

  function onPlaySongHandler(trackId, type) {
    if (type === 'play') {
      const trackToPlay = spotifyFavSongs.find((track) => track.id === trackId);
      if (trackToPlay?.audioUrl) {
        setPlayerStatus((currentStatus) => {
          playerRef.current.src = trackToPlay.audioUrl;
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
          const trackToPlay = spotifyFavSongs.find(
            (track) => track.id === trackId
          );
          if (trackToPlay?.audioUrl) {
            playerRef.current.currentTime = 0;
            playerRef.current.pause();

            playerRef.current.src = trackToPlay.audioUrl;
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
  function createMixcast(id, name) {
    history.push({
      pathname: '/mixcast',
      name: name,
      id: id
    });
  }

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

  function onChangePaginationHandler2(event, value) {
    setPage2(value);
  }
  return (
    <>
      <div className="mb-spacing-6">
        <Grid container spacing={6}>
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
                    Most Played Songs
                  </b>
                </div>
                <div className="d-flex align-items-center">
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
                                    value={1}
                                    style={{
                                      color: 'white',
                                      backgroundColor: '#18212f'
                                    }}>
                                    Last 4 Weeks
                                  </MenuItem>
                                  <MenuItem
                                    value={2}
                                    style={{
                                      color: 'white',
                                      backgroundColor: '#18212f'
                                    }}>
                                    Last 6 Months
                                  </MenuItem>
                                  <MenuItem
                                    value={0}
                                    style={{
                                      color: 'white',
                                      backgroundColor: '#18212f'
                                    }}>
                                    All Time
                                  </MenuItem>
                                </Select>
                              </FormControl>
                            </Grid>
                          </Grid>
                        </div>
                      </div>
                    </Menu>
                  </div>
                </div>
              </div>
              <div className="table-responsive-md" style={{ overflow: 'auto' }}>
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
                            <div className="avatar-icon-wrapper">
                              <div className="avatar-icon rounded">
                                <img alt="..." src={item.cover} />
                              </div>
                            </div>
                          </td>
                          <td>
                            <div
                              className="d-flex align-items-center"
                              style={{
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                width: '8rem'
                              }}>
                              <Typography
                                noWrap
                                className=" text-black"
                                style={darkStyles.tdColor}>
                                {item.song}
                              </Typography>
                            </div>
                          </td>
                          <td>
                            <div
                              style={{
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                width: '8rem'
                              }}>
                              <Typography
                                noWrap
                                className=" text-black"
                                style={darkStyles.tdColor}>
                                {item.artist}
                              </Typography>
                            </div>
                          </td>
                          <td>
                            <div
                              style={{
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                width: '2rem'
                              }}>
                              <Typography
                                noWrap
                                className=" text-black"
                                style={darkStyles.tdColor}>
                                {item.popularity}
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
                                  if (item.audioUrl) {
                                    onPlaySongHandler(
                                      item.id,
                                      playerStatus.status === 'PLAYING'
                                        ? 'pause'
                                        : 'play'
                                    );
                                  }
                                }}
                                className="buttonTheme mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                                disabled={item.audioUrl ? false : true}>
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
                                title="Open In Spotify"
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
                              title="Create New Mixcast"
                              arrow
                              placement="bottom">
                              <Button
                                onClick={() =>
                                  createMixcast(item.id, item.song)
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
              {numberOfPages2 > 1 ? (
                <div
                  className="p-3 d-flex justify-content-center"
                  style={{
                    ...darkStyles.trBackground,
                    borderBottomRightRadius: 0,
                    borderBottomLeftRadius: 0
                  }}>
                  <Pagination
                    className="pagination-primary"
                    count={numberOfPages2}
                    onChange={onChangePaginationHandler2}
                  />
                </div>
              ) : (
                <div></div>
              )}
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
  spotifyFavSongs: state.SpotifyFavSongsState.items
});

const mapDispatchToProps = (dispatch) => ({
  addFavSongs: (tracks2) => dispatch(addFavSongs(tracks2))
});

export default connect(mapStateToProps, mapDispatchToProps)(TablesContainer);
