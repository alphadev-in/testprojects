import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';

import { Table, Grid, Card, Typography } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

import {
  addPlaylistData,
  getPlaylistData
} from '../../../../reducers/SpotifyPlaylistListState';

import { MixcastLoginState } from '../../../../reducers/MixcastState';

import { paginate } from '../../../../utils/helpers';
import logo from '../../../../assets/images/favcon.png';
import { history } from '../../../../config/configureStore';
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
  {
    title: 'PLAYLIST OWNER',
    show: true,
    customWidth: true,
    style: {
      width: '55%'
    }
  },
  {
    title: 'PRIVATE/PUBLIC',
    show: true,
    customWidth: true,
    style: {
      width: '15%'
    }
  },
  {
    title: 'TRACKS',
    show: true,
    customWidth: true,
    style: {
      width: '15%'
    }
  },
  { title: 'ACTIONS', show: false, customWidth: false }
];

const TablesContainer = (props) => {
  const { addPlaylistData, spotifyPersonalPlaylist, status } = props;

  const [tracks, setTracks] = useState([]);
  const [tracks2, setTracks2] = useState([]);
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
      // getDiscoverSongs().then((result) => {
      //   addDiscoverSongs(result);
      // });
      getPlaylistData().then((result) => {
        addPlaylistData(result);
        console.log(result);
      });
    }
  }, []);

  useEffect(() => {
    let privateData = [];
    let publicData = [];
    if (spotifyPersonalPlaylist.length) {
      spotifyPersonalPlaylist.map((item, idx) => {
        // if (item.public_status === false) {
        //   privateData.push(item);
        // } else {
        publicData.push(item);
        // }
      });
    }
    if (privateData.length) {
      const paginatedTracks = paginate(privateData, NUMBER_OF_TRACKS, page);
      setTracks2(paginatedTracks);
      setNumberOfPages(Math.round(privateData.length / NUMBER_OF_TRACKS));
      const artistIdsArr = paginatedTracks.map((track) => track.tracks);
      const flattedArtistsIds = artistIdsArr.flat();
      const joinedList = flattedArtistsIds.join(',');
    }
    if (publicData.length) {
      const paginatedTracks2 = paginate(publicData, NUMBER_OF_TRACKS, page2);
      setTracks(paginatedTracks2);
      setNumberOfPages2(Math.round(publicData.length / NUMBER_OF_TRACKS));
      const artistIdsArr = paginatedTracks2.map((track) => track.tracks);
      const flattedArtistsIds = artistIdsArr.flat();
      const joinedList = flattedArtistsIds.join(',');
    }
  }, [page, page2, spotifyPersonalPlaylist]);

  function openPlaylist(url, name) {
    history.push({
      pathname: '/playlistdetails',
      name: name,
      url: url
    });
  }
  function onChangePaginationHandler(event, value) {
    setPage(value);
  }
  function onChangePaginationHandler2(event, value) {
    setPage2(value);
  }
  return (
    <>
      <div className="mb-spacing-6">
        <Grid container spacing={6} style={{ overflow: 'auto' }}>
          <Grid item xl={12}>
            <Card className="card-box">
              <div
                className="font-size-lg px-3 py-4 font-weight-bold"
                style={{
                  ...darkStyles.trBackground,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0
                }}>
                <b style={{ ...darkStyles.tdColor, fontSize: 24 }}>
                  Your Playlists
                </b>
              </div>
              <div className="divider" />
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
                        <tr
                          style={{
                            ...darkStyles.trBackground,
                            cursor: 'pointer'
                          }}
                          key={idx}
                          onClick={() => openPlaylist(item.tracks, item.name)}>
                          {/* <td>
                            <div className="avatar-icon-wrapper">
                              <div className="avatar-icon rounded">
                                {item.cover === null ? (
                                  <img alt="..." src={logo} />
                                ) : (
                                  <img alt="..." src={item.cover} />
                                )}
                              </div>
                            </div>
                          </td> */}
                          <td>
                            <div
                              className="d-flex"
                              style={{
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                width: '14rem'
                              }}>
                              <Typography
                                noWrap
                                className=" text-black"
                                style={darkStyles.tdColor}>
                                {item.name}
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
                              <Typography noWrap style={darkStyles.tdColor}>
                                {item.owner}
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
                              <Typography noWrap style={darkStyles.tdColor}>
                                {item.public_status === true
                                  ? 'Public'
                                  : 'Private'}
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
                                {item.count}
                              </Typography>
                            </div>
                          </td>
                          <td>
                            <FontAwesomeIcon
                              icon={['fas', 'chevron-right']}
                              className="DashboardButton"
                              style={darkStyles.tdColor}
                            />
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
                    onChange={onChangePaginationHandler}
                  />
                </div>
              ) : (
                <div></div>
              )}
            </Card>
          </Grid>
          {/* <Grid item xl={12} style={{ marginTop: -40 }}>
            <Card className="card-box">
              <div
                className="font-size-lg px-3 py-4 "
                style={{
                  ...darkStyles.trBackground,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0
                }}>
                <b style={{ ...darkStyles.tdColor, fontSize: 24 }}>
                  Your Private Playlists
                </b>
              </div>
              <div className="divider" />
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
                    {tracks2.map((item, idx) => {
                      return (
                        <tr
                          style={{
                            ...darkStyles.trBackground,
                            cursor: 'pointer'
                          }}
                          key={idx}
                          onClick={() => openPlaylist(item.tracks, item.name)}>
                          {/* <td>
                            <div className="avatar-icon-wrapper">
                              <div className="avatar-icon rounded">
                                {item.cover === null ? (
                                  <img alt="..." src={logo} />
                                ) : (
                                  <img alt="..." src={item.cover} />
                                )}
                              </div>
                            </div>
                          </td> 
                          <td>
                            <div
                              className="d-flex"
                              style={{
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                width: '14rem'
                              }}>
                              <Typography
                                noWrap
                                className=" text-black"
                                style={darkStyles.tdColor}>
                                {item.name}
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
                              <Typography noWrap style={darkStyles.tdColor}>
                                {item.owner}
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
                                {item.count}
                              </Typography>
                            </div>
                          </td>
                          <td>
                            <FontAwesomeIcon
                              icon={['fas', 'chevron-right']}
                              className="DashboardButton"
                              style={darkStyles.tdColor}
                            />
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
                {numberOfPages > 1 ? (
                  <Pagination
                    className="pagination-primary"
                    count={numberOfPages}
                    onChange={onChangePaginationHandler}
                  />
                ) : (
                  <div></div>
                )}
              </div>
            </Card>
          </Grid>
         */}
        </Grid>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  status: state.MixcastState.status,
  spotifyPersonalPlaylist: state.SpotifyPlaylistListState.items
});

const mapDispatchToProps = (dispatch) => ({
  addPlaylistData: (tracks) => dispatch(addPlaylistData(tracks))
});

export default connect(mapStateToProps, mapDispatchToProps)(TablesContainer);
