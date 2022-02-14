import React, { useEffect, useState, Fragment, useRef } from 'react';

import { connect } from 'react-redux';
import {
  Button,
  Table,
  Card,
  CardContent,
  Typography,
  Tooltip
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  mixcastTrendingSuccess,
  getMixcastPlaylist,
  isArtistsFollowed,
  isTracksFollowed
} from '../../../../reducers/MixcastLatestState';
import {
  checkFollowedArtists,
  followingArtistsSuccess,
  MixcastLoginState,
  followArtist,
  deleteFollowArtist,
  followTrack,
  deleteFollowTrack
} from '../../../../reducers/MixcastState';
import { history } from '../../../../config/configureStore';
import { paginate } from '../../../../utils/helpers';
import { darkStyles } from '../../../../theme/dark';
import '../../../../theme/dark.css';

const NUMBER_OF_TRACKS = 10;

const tableHead = [
  {
    title: 'Cover',
    show: false,
    customWidth: true,
    style: {
      width: '5%'
    }
  },
  {
    title: 'Song',
    show: true,
    customWidth: true,
    style: {
      width: '25%'
    }
  },
  {
    title: 'Artist',
    show: true,
    customWidth: true,
    style: {
      width: '15%'
    }
  },
  { title: 'Album', show: true, customWidth: false },
  { title: 'Time', show: true, customWidth: false },
  // { title: 'Released', show: true, customWidth: false },
  { title: 'Actions', show: true, customWidth: false }
];

const TablesContainer = (props) => {
  const { mixcastTrendingSuccess, mixcastTracks, status } = props;
  const [tracks, setTracks] = useState([]);
  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [artistList, setArtistList] = useState([]);
  const [trackList, setTrackList] = useState([]);
  const [playerStatus, setPlayerStatus] = useState({
    status: 'PAUSED',
    trackId: null
  });

  const playerRef = useRef();

  useEffect(() => {
    if (status === MixcastLoginState.LOGGED) {
      getMixcastPlaylist(page)
        .then((result) => {
          mixcastTrendingSuccess(result);
        })
        .catch((err) => {
          console.log(err);
        });
      setPage(page + 1);
    }
  }, []);

  useEffect(() => {
    if (mixcastTracks.data.length) {
      const paginatedTracks = paginate(
        mixcastTracks.data,
        NUMBER_OF_TRACKS,
        page
      );

      isArtistsFollowed(mixcastTracks.data).then((result) => {
        setArtistList(result);
      });
      isTracksFollowed(mixcastTracks.data).then((result) => {
        setTrackList(result);
      });

      setTracks(mixcastTracks.data);
      setNumberOfPages(
        Math.round(mixcastTracks.data.length / NUMBER_OF_TRACKS)
      );
    }
  }, [mixcastTracks, page]);

  const artistListFun = async (id, item) => {
    try {
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
    } catch (error) {
      console.error('error', error);
    }
  };

  const TrackListFun = async (id, item) => {
    try {
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
    } catch (error) {
      console.error('error', error);
    }
  };

  function onPlaySongHandler(trackId, type) {
    if (type === 'play') {
      const trackToPlay = mixcastTracks.data.find(
        (track) => track.id === trackId
      );
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
          const trackToPlay = mixcastTracks.data.find(
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

  function onChangePaginationHandler(event, value) {
    setPage(value);
  }

  return (
    <Fragment className="mb-spacing-6">
      <Card className="card-box mb-spacing-6-x2" style={{ overflow: 'auto' }}>
        <div className="card-header" style={darkStyles.trBackground}>
          <div className="card-header--title">
            <b style={{ ...darkStyles.tdColor, fontSize: 24 }}>
              Song Recommendations for You
            </b>
          </div>
        </div>
        <CardContent className="p-0">
          <div className="table-responsive-md">
            <Table className="table table-borderless text-nowrap mb-0">
              <thead className="thead-light">
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
                {tracks.map((item, idx) => {
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
                            width: '8rem'
                          }}>
                          <Typography
                            noWrap
                            className=" text-black"
                            style={darkStyles.tdColor}>
                            {item.album}
                          </Typography>
                        </div>
                      </td>
                      <td>
                        <Typography
                          noWrap
                          className=" text-black"
                          style={darkStyles.tdColor}>
                          {item.time}
                        </Typography>
                      </td>

                      <td>
                        <Tooltip title="Preview Song" arrow placement="bottom">
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
                            onClick={() => createMixcast(item.id, item.song)}
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
                                color: trackList[idx] ? '#6fb391' : '#ffffff'
                              }}
                            />
                          </Button>
                        </Tooltip>
                        <Tooltip
                          title="Follow / Unfollow Artist "
                          arrow
                          placement="bottom">
                          <Button
                            onClick={() => artistListFun(idx, item.artistId)}
                            className="buttonTheme mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                            <FontAwesomeIcon
                              icon={['fas', 'user-plus']}
                              className="DashboardButton"
                              style={{
                                color: artistList[idx] ? '#6fb391' : '#ffffff'
                              }}
                            />
                          </Button>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
          <div className="divider" />
          {numberOfPages > 1 ? (
            <div
              className="p-3 d-flex justify-content-center"
              style={{
                ...darkStyles.trBackground,
                borderBottomRightRadius: 0,
                borderBottomLeftRadius: 0
              }}>
              <Pagination
                className="pagination-primary"
                count={numberOfPages}
                onChange={onChangePaginationHandler}
              />
            </div>
          ) : (
            <div></div>
          )}
        </CardContent>
      </Card>
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
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  status: state.MixcastState.status,
  mixcastTracks: state.MixcastLatestState
});

const mapDispatchToProps = (dispatch) => ({
  mixcastTrendingSuccess: (tracks) => dispatch(mixcastTrendingSuccess(tracks))
});

export default connect(mapStateToProps, mapDispatchToProps)(TablesContainer);
