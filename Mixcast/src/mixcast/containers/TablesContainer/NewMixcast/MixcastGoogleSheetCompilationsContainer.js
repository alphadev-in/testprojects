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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Pagination from '@material-ui/lab/Pagination';

import {
  addCompilationsData,
  getCompilationsData
} from '../../../../reducers/MixcastGoogleSheetCompilations';

import {
  spotifyProfileFetching,
  spotifyProfileSuccess,
  spotifyProfileError,
  getSpotifyProfile
} from '../../../../reducers/SpotifyProfileState';

import {
  checkFollowedArtists,
  followingArtistsSuccess,
  MixcastLoginState,
  followPlaylist
} from '../../../../reducers/MixcastState';
import { history } from '../../../../config/configureStore';

import { paginate } from '../../../../utils/helpers';
import { darkStyles } from '../../../../theme/dark';
import '../../../../theme/dark.css';

const NUMBER_OF_TRACKS = 25;

const tableHead = [
  {
    title: 'PLAYLIST NAME',
    show: true,
    customWidth: false,
    style: {
      width: '25%'
    }
  },
  { title: 'GENRE', show: true, customWidth: false },
  {
    title: 'TRACKS',
    show: true,
    customWidth: false
  },
  { title: 'TIME', show: true, customWidth: false },
  { title: 'ACTIONS', show: true, customWidth: false }
];

const TablesContainer = (props) => {
  const {
    addCompilationsData,
    MixcastGoogleSheetCompilations,
    followedArtists,
    status,
    spotifyProfileFetching,
    spotifyProfileSuccess,
    spotifyProfileError
  } = props;
  const [tracks, setTracks] = useState([]);
  const [trackList, setTrackList] = useState([]);
  const [page, setPage] = useState(1);
  const [sortToggle, setSortToggle] = useState(true);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [playerStatus, setPlayerStatus] = useState({
    status: 'PAUSED',
    trackId: null
  });

  const playerRef = useRef();

  useEffect(() => {
    if (status === MixcastLoginState.LOGGED) {
      getCompilationsData().then((result) => {
        addCompilationsData(result);
        // console.log(result);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const TrackListFun = async (id, item) => {
    console.log(item);
    let status = trackList[id];
    let trackList2 = [...trackList];
    trackList2[id] = true;
    setTrackList(trackList2);
    await followPlaylist(item);
  };

  const sortBy = (type) => {
    // console.log(type);
    // filterPlaylistData(tracks, 'tracks');
    if (sortToggle === true) {
      const paginatedTracks = paginate(
        type === 'tracks'
          ? MixcastGoogleSheetCompilations.sort((a, b) => a.tracks - b.tracks)
          : MixcastGoogleSheetCompilations.sort(
              (a, b) => a.compilationnumber - b.compilationnumber
            ),
        NUMBER_OF_TRACKS,
        page
      );
      setTracks(paginatedTracks);
    } else {
      const paginatedTracks1 = paginate(
        type === 'tracks'
          ? MixcastGoogleSheetCompilations.sort((a, b) => b.tracks - a.tracks)
          : MixcastGoogleSheetCompilations.sort(
              (a, b) => b.compilationnumber - a.compilationnumber
            ),
        NUMBER_OF_TRACKS,
        page
      );
      setTracks(paginatedTracks1);
    }
    setSortToggle(!sortToggle);

    // console.log(tracks);
  };
  useEffect(() => {
    if (MixcastGoogleSheetCompilations.length) {
      const paginatedTracks = paginate(
        MixcastGoogleSheetCompilations,
        NUMBER_OF_TRACKS,
        page
      );
      setTracks(paginatedTracks);

      setNumberOfPages(
        Math.round(MixcastGoogleSheetCompilations.length / NUMBER_OF_TRACKS)
      );
    }
  }, [MixcastGoogleSheetCompilations, page]);

  function onChangePaginationHandler(event, value) {
    setPage(value);
  }

  return (
    <Fragment className="mb-spacing-6">
      <Card className="card-box mb-spacing-6-x2" style={{ overflow: 'auto' }}>
        <div className="card-header" style={darkStyles.trBackground}>
          <div className="card-header--title">
            <b style={{ ...darkStyles.tdColor, fontSize: 24 }}>
              Genre Compilations
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
                          <Button
                            onClick={() => sortBy('tracks')}
                            style={{
                              color: 'white',
                              marginLeft: -20,
                              fontWeight: 'bold'
                            }}>
                            {' '}
                            {headData.show && headData.title}
                          </Button>
                        </th>
                      );
                    }
                    return (
                      <th key={idx} style={darkStyles.thColor}>
                        <Button
                          onClick={() => sortBy('compilationnumber')}
                          style={{
                            color: 'white',
                            marginLeft: -20,
                            fontWeight: 'bold'
                          }}>
                          {' '}
                          {headData.show && headData.title}
                        </Button>
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
                        <div
                          className="d-flex align-items-center"
                          style={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            width: '12rem'
                          }}>
                          <Typography
                            noWrap
                            className=" text-black"
                            style={darkStyles.tdColor}>
                            {item.playlistname}
                          </Typography>
                        </div>
                      </td>
                      <td>
                        <div
                          style={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            width: '8rem',
                            backgroundColor: item.genrelabelcolorcode,
                            borderRadius: 5,
                            textAlign: 'center'
                          }}>
                          <Typography
                            noWrap
                            className=" text-black"
                            style={darkStyles.tdColor}>
                            {item.genre}
                          </Typography>
                        </div>
                      </td>
                      <td>
                        <div
                          className="d-flex align-items-center"
                          style={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            width: '4rem'
                          }}>
                          <Typography
                            noWrap
                            className=" text-black"
                            style={darkStyles.tdColor}>
                            {item.tracks}
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
                        <a
                          href={item.spotifyuri}
                          target="_blank"
                          rel="noopener noreferrer">
                          <Tooltip
                            title="Play Playlist"
                            arrow
                            placement="bottom">
                            <Button className="buttonTheme mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                              <FontAwesomeIcon
                                icon={['fas', 'play']}
                                className="DashboardButton"
                              />
                            </Button>
                          </Tooltip>
                        </a>
                        {/* <a
                          href={item.spotifylink}
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
                        </a> */}
                        {/* <Tooltip
                          title="Save / Unsave Track "
                          arrow
                          placement="bottom">
                          <Button
                            onClick={() => TrackListFun(idx, item.spotifyid)}
                            className="buttonTheme mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                            <FontAwesomeIcon
                              icon={['fas', 'heart']}
                              className="DashboardButton"
                              style={{
                                color: trackList[idx] ? '#6fb391' : '#ffffff'
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
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  status: state.MixcastState.status,
  MixcastGoogleSheetCompilations: state.MixcastGoogleSheetCompilations.items,
  profile: state.SpotifyProfileState,
  followedArtists: state.MixcastState.followingArtists
});

const mapDispatchToProps = (dispatch) => ({
  addCompilationsData: (tracks) => dispatch(addCompilationsData(tracks)),
  followingArtistsSuccess: (ids) => dispatch(followingArtistsSuccess(ids)),
  spotifyProfileFetching: () => dispatch(spotifyProfileFetching()),
  spotifyProfileSuccess: (data) => dispatch(spotifyProfileSuccess(data)),
  spotifyProfileError: (data) => dispatch(spotifyProfileError(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(TablesContainer);
