import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';

import {
  Table,
  Grid,
  Card,
  Button,
  Typography,
  Tooltip
} from '@material-ui/core';
import { darkStyles } from '../../../../theme/dark';

import {
  getDiscoverArtists,
  isArtistsFollowed
} from '../../../../reducers/SpotifyDiscoverArtistsState';

import {
  followingArtistsSuccess,
  MixcastLoginState,
  followArtist,
  deleteFollowArtist
} from '../../../../reducers/MixcastState';

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
    title: 'Artist',
    show: true,
    customWidth: true,
    style: {
      width: '25%'
    }
  },
  {
    title: 'Followers',
    show: true,
    customWidth: true,
    style: {
      width: '15%'
    }
  },
  { title: 'Popularity', show: true, customWidth: false },
  { title: 'Actions', show: true, customWidth: false }
];

const TablesContainer = (props) => {
  const { status } = props;

  const [tracks, setTracks] = useState([]);
  const [artistList, setArtistList] = useState([]);

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (status === MixcastLoginState.LOGGED) {
      getDiscoverArtists(offset).then((result) => {
        setTracks(result);
        isArtistsFollowed(result).then((result2) => {
          setArtistList(result2);
        });

        console.log(result);
      });

      setOffset(offset + 1);
    }
  }, []);

  const loadMoreData = async () => {
    getDiscoverArtists(offset).then((result) => {
      setTracks([...tracks, ...result]);
      isArtistsFollowed(result).then((result2) => {
        setArtistList([...artistList, ...result2]);
      });
    });

    setOffset(offset + 1);
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

  return (
    <>
      <div className="mb-spacing-6">
        <Grid container spacing={6}>
          <Grid item xl={12} style={{ overflow: 'auto' }}>
            <Card className="card-box">
              <div
                className="card-header d-flex align-items-center justify-content-between card-header-alt p-2"
                style={darkStyles.trBackground}>
                <div style={{ ...darkStyles.tdColor, fontSize: 24 }}>
                  Most Played Artists
                </div>
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
                    {tracks.map((item, idx) => {
                      return (
                        <tr key={idx} style={darkStyles.trBackground}>
                          <td>
                            <div className="avatar-icon-wrapper">
                              <div className="avatar-icon rounded">
                                <img alt="..." src={item.images[2].url} />
                              </div>
                            </div>
                          </td>
                          <td>
                            <div
                              className="d-flex align-items-center"
                              style={{
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                width: '6rem'
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
                              <Typography
                                noWrap
                                className=" text-black"
                                style={darkStyles.tdColor}>
                                {item.followers.total}
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
                            <a
                              href={item.external_urls.spotify}
                              target="_blank"
                              rel="noopener noreferrer">
                              <Tooltip
                                title="Preview Artist"
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
                              title="Follow Artist"
                              arrow
                              placement="bottom">
                              <Button
                                onClick={() => artistListFun(idx, item.id)}
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
                            </Tooltip>
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
                <Button
                  className="signup-button w-inline-block"
                  onClick={loadMoreData}>
                  Load More
                </Button>
              </div>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  status: state.MixcastState.status
});

const mapDispatchToProps = (dispatch) => ({
  followingArtistsSuccess: (ids) => dispatch(followingArtistsSuccess(ids))
});

export default connect(mapStateToProps, mapDispatchToProps)(TablesContainer);
