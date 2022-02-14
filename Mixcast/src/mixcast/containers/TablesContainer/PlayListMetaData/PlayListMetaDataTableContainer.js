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
  addPlaylistMetaTracks,
  getPlaylistMetaTracks
} from '../../../../reducers/SpotifyPlaylistMetaDataState';

import { MixcastLoginState } from '../../../../reducers/MixcastState';

import { paginate } from '../../../../utils/helpers';
import { useLocation } from 'react-router-dom';
import { darkStyles } from '../../../../theme/dark';
import '../../../../theme/dark.css';
import { history } from '../../../../config/configureStore';

const NUMBER_OF_TRACKS = 25;

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
  { title: 'Released', show: true, customWidth: false },
  { title: 'Actions', show: true, customWidth: false }
];

const TablesContainer = (props) => {
  const { addPlaylistMetaTracks, spotifyPlaylistMetaData, status } = props;
  const { url, name } = useLocation();
  // const url =
  //   'https://api.spotify.com/v1/playlists/3id31IZUDh0TGg2PRwbxF0/tracks';
  // const name = 'Playlist Metadata';
  const [tracks, setTracks] = useState([]);
  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [playerStatus, setPlayerStatus] = useState({
    status: 'PAUSED',
    trackId: null
  });
  const playerRef = useRef();

  useEffect(() => {
    if (url === undefined) {
      history.push('/playlists');
    } else if (status === MixcastLoginState.LOGGED) {
      getPlaylistMetaTracks(url).then((result) => {
        addPlaylistMetaTracks(result);
        // console.log(result);
      });
    }
  }, []);

  useEffect(() => {
    if (spotifyPlaylistMetaData.length) {
      const paginatedTracks = paginate(
        spotifyPlaylistMetaData,
        NUMBER_OF_TRACKS,
        page
      );
      console.warn('paginated tracks', paginatedTracks.length);
      setTracks(paginatedTracks);
      setNumberOfPages(
        Math.round(spotifyPlaylistMetaData.length / NUMBER_OF_TRACKS)
      );

      const artistIdsArr = paginatedTracks.map((track) => track.artistId);
      const flattedArtistsIds = artistIdsArr.flat();
      const joinedList = flattedArtistsIds.join(',');
    }
  }, [spotifyPlaylistMetaData, page]);

  function onPlaySongHandler(trackId, type) {
    if (type === 'play') {
      const trackToPlay = spotifyPlaylistMetaData.find(
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
          const trackToPlay = spotifyPlaylistMetaData.find(
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

  function onChangePaginationHandler(event, value) {
    setPage(value);
  }

  function createMixcast(id, name) {
    history.push({
      pathname: '/mixcast',
      name: name,
      id: id
    });
  }
  return (
    <Fragment>
      <Card className="card-box mb-spacing-6-x2" style={{ overflow: 'auto' }}>
        <div className="card-header" style={darkStyles.trBackground}>
          <div className="card-header--title">
            <b style={{ ...darkStyles.tdColor, fontSize: 24 }}>{name}</b>
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
                        <Typography
                          noWrap
                          className=" text-black"
                          style={darkStyles.tdColor}>
                          {item.released}
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
                        <Tooltip
                          title="Open In Spotify"
                          arrow
                          placement="bottom">
                          <a
                            href={item.spotifyUrl}
                            target="_blank"
                            rel="noopener noreferrer">
                            <Button className="buttonTheme mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                              <FontAwesomeIcon
                                icon={['fab', 'spotify']}
                                className="DashboardButton"
                              />
                            </Button>
                          </a>
                        </Tooltip>
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

                        {/* <Button className="buttonTheme mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                          <FontAwesomeIcon
                            icon={['fas', 'heart']}
                            className="DashboardButton"
                          />
                        </Button>
                        <Button className="buttonTheme mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                          <FontAwesomeIcon
                            icon={['fas', 'user-plus']}
                            className="DashboardButton"
                          />
                        </Button> */}
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
  spotifyPlaylistMetaData: state.SpotifyPlaylistMetaDataState.items
});

const mapDispatchToProps = (dispatch) => ({
  addPlaylistMetaTracks: (tracks) => dispatch(addPlaylistMetaTracks(tracks))
});

export default connect(mapStateToProps, mapDispatchToProps)(TablesContainer);
