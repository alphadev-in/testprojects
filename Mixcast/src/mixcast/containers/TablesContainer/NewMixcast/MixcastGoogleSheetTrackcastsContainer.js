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
  addTrackCastsData,
  getTrackCastsData
} from '../../../../reducers/MixcastGoogleSheetTrackcasts';

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
import SpotifyWebPlayer, {
  STATUS,
  CallbackState
} from 'react-spotify-web-playback';

import { paginate } from '../../../../utils/helpers';
import { darkStyles } from '../../../../theme/dark';
import '../../../../theme/dark.css';

const NUMBER_OF_TRACKS = 25;

const tableHead = [
  {
    title: 'PLAYLIST NAME',
    show: true,
    customWidth: false
  },
  {
    title: 'FEATURED ARTISTS',
    show: true,
    customWidth: false
  },
  { title: 'ACTIONS', show: true, customWidth: false }
];

const TablesContainer = (props) => {
  const {
    addTrackCastsData,
    MixcastGoogleSheetTrackcasts,
    followedArtists,
    status,
    spotifyProfileFetching,
    spotifyProfileSuccess,
    spotifyProfileError
  } = props;
  const accessToken = localStorage.getItem('auth_token');
  const [tracks, setTracks] = useState([]);
  const [trackList, setTrackList] = useState([]);
  const [sortToggle, setSortToggle] = useState(true);
  const [token, setToken] = useState(accessToken || '');
  const [isPlaying, setIsPlaying] = useState(false);
  const [URIs, setURIs] = useState(['spotify:playlist:6G2ZA6VF1GZByUtLTxgEtl']);
  const [validURI, setValidURI] = useState(false);

  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(0);

  useEffect(() => {
    if (status === MixcastLoginState.LOGGED) {
      getTrackCastsData().then((result) => {
        addTrackCastsData(result);
        // console.log(result);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  function onChangePaginationHandler(event, value) {
    setPage(value);
  }

  const setSpotifyPlayer = (playerData) => {
    setURIs([`${playerData}`]);
    setIsPlaying(true);
  };

  useEffect(() => {
    if (MixcastGoogleSheetTrackcasts.length) {
      const paginatedTracks = paginate(
        MixcastGoogleSheetTrackcasts,
        NUMBER_OF_TRACKS,
        page
      );
      setTracks(paginatedTracks);
      setNumberOfPages(
        Math.round(MixcastGoogleSheetTrackcasts.length / NUMBER_OF_TRACKS)
      );
    }
  }, [MixcastGoogleSheetTrackcasts, page]);

  const TrackListFun = async (id, item) => {
    console.log(item);
    let status = trackList[id];
    let trackList2 = [...trackList];
    trackList2[id] = true;
    setTrackList(trackList2);
    await followPlaylist(item);
  };

  return (
    <Fragment className="mt-spacing-6">
      <Card className="card-box mb-spacing-6-x2" style={{ overflow: 'auto' }}>
        <div className="card-header" style={darkStyles.trBackground}>
          <div className="card-header--title">
            <b style={{ ...darkStyles.tdColor, fontSize: 24 }}>
              Weekly Trackcasts
            </b>
          </div>
        </div>
        <CardContent className="p-0">
          <div className="table-responsive-md">
            <Table className="table table-borderless mb-0">
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
                        <div
                          className="d-flex align-items-center"
                          style={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            width: '10rem'
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
                          className="d-flex align-items-center"
                          style={{
                            // overflow: 'auto',
                            // textOverflow: 'ellipsis',
                            // wordWrap: 'break-word',
                            width: '15rem'
                          }}>
                          <Typography
                            // noWrap
                            className="wrapText text-black"
                            style={darkStyles.tdColor}>
                            {item.featuredartists}
                          </Typography>
                        </div>
                      </td>

                      <td>
                        <Tooltip title="Play Playlist" arrow placement="bottom">
                          <Button
                            onClick={() => setSpotifyPlayer(item.spotifyuri)}
                            className="buttonTheme mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                            <FontAwesomeIcon
                              icon={['fas', 'play']}
                              className="DashboardButton"
                            />
                          </Button>
                        </Tooltip>
                        <a
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
                        </a>

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
      <SpotifyWebPlayer
        autoPlay={false}
        token={token}
        // callback={handleCallback}
        persistDeviceSelection
        play={isPlaying}
        showSaveIcon
        syncExternalDevice
        styles={{
          sliderColor: '#ffffff',
          activeColor: '#3e557a',
          altColor: '#ffffff',
          bgColor: '#18212f',
          color: '#ffffff',
          errorColor: '#ffffff',
          height: 60,
          loaderColor: '#18212f',
          // loaderSize: 40,
          sliderHandleColor: '#3e557a',
          // sliderHandleBorderRadius: 10,
          // sliderHeight: 10,
          // sliderColor: '#ffffff',
          // sliderTrackBorderRadius: 10,
          sliderTrackColor: '#ffffff',
          trackArtistColor: '#ffffff',
          trackNameColor: '#ffffff'
        }}
        uris={URIs}
      />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  status: state.MixcastState.status,
  MixcastGoogleSheetTrackcasts: state.MixcastGoogleSheetTrackcasts.items,
  profile: state.SpotifyProfileState,
  followedArtists: state.MixcastState.followingArtists
});

const mapDispatchToProps = (dispatch) => ({
  addTrackCastsData: (tracks) => dispatch(addTrackCastsData(tracks)),
  followingArtistsSuccess: (ids) => dispatch(followingArtistsSuccess(ids)),
  spotifyProfileFetching: () => dispatch(spotifyProfileFetching()),
  spotifyProfileSuccess: (data) => dispatch(spotifyProfileSuccess(data)),
  spotifyProfileError: (data) => dispatch(spotifyProfileError(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(TablesContainer);
