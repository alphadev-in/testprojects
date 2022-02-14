import React, { useState, useEffect, useRef } from 'react';
import CardDrag from './Card';
import update from 'immutability-helper';
import { connect } from 'react-redux';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import {
  Table,
  Grid,
  Card,
  Button,
  TextField,
  Switch
} from '@material-ui/core';
import { ExampleWrapperSimple } from '../../../../layout-components';
import { msToHMS } from '../../../../utils/helpers';

import { MixcastLoginState } from '../../../../reducers/MixcastState';
import PageTitle from '../../../containers/PageTitle/PageTitle';
import {
  addPlaylistTracks,
  getPlaylistTracks
} from '../../../../reducers/SpotifyPlaylistState';
import { useLocation } from 'react-router-dom';
import { get, post } from '../../../../utils/api';
import { history } from '../../../../config/configureStore';
import { getSpotifyProfile } from '../../../../reducers/SpotifyProfileState';
import logo from '../../../../assets/images/favcon.png';
import { darkStyles } from '../../../../theme/dark';
import '../../../../theme/dark.css';

const tableHead = [
  {
    title: 'Song',
    show: true,
    customWidth: true,
    style: {
      width: '17rem'
    }
  },
  {
    title: 'Artist',
    show: true,
    customWidth: true,
    style: {
      width: '16rem'
    }
  },
  {
    title: 'Time',
    show: true,
    customWidth: true,
    style: {
      width: '5rem'
    }
  },
  { title: 'Actions', show: true, customWidth: false }
];

const tableHead2 = [
  {
    title: 'Mixcast Information',
    show: true,
    customWidth: true,
    style: {
      width: '100%'
    }
  }
];
const Container = (props) => {
  const { spotifyPlaylistSongs, addPlaylistTracks, status } = props;
  const { id, name } = useLocation();
  const anchorRef = useRef(null);
  const [inputValue, setInputValue] = useState('');
  // const id = '6L4QbsQrP9ZiZdz9SfOSGV';
  // const name = 'First MixCasts';
  const [tracks, setTracks] = useState([]);
  const stringData = 'Your new mixcast for ' + name;
  const [durationData, setDurationData] = useState(0);

  const [state, setState] = useState({
    checkedA: true,
    checkedB: true
  });

  const handleChangeSwitch = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    console.log(state.checkedA);
  };
  const deleteItem = (i) => {
    // console.log(i);
  };

  function onChangeHandler(event) {
    if (event?.target?.value) {
      setInputValue(event?.target?.value);
    } else {
      setInputValue('');
    }
  }
  useEffect(() => {
    if (id === undefined) {
      history.push('/create');
    } else if (status === MixcastLoginState.LOGGED) {
      getPlaylistTracks(id).then((result) => {
        addPlaylistTracks(result);
      });
    }
  }, []);

  useEffect(() => {
    if (spotifyPlaylistSongs.length) {
      setTracks(spotifyPlaylistSongs);
    }
    const totalData = tracks.reduce(function (prev, cur) {
      return prev + cur.duration;
    }, 0);
    setDurationData(msToHMS(totalData));
  }, [spotifyPlaylistSongs, tracks]);

  const moveCard = (dragIndex, hoverIndex) => {
    const dragCard = tracks[dragIndex];
    setTracks(
      update(tracks, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard]
        ]
      })
    );
  };
  const handleCreatePlaylist = async () => {
    if (status === MixcastLoginState.LOGGED) {
      const userData = await getSpotifyProfile();
      // console.log(userData.id);

      const result = await post(
        `https://api.spotify.com/v1/users/${userData.id}/playlists`,
        {
          name: inputValue === '' ? 'Mixcast Playlist' : inputValue,
          description: 'Mixcast Playlist',
          public: state.checkedA
        }
      );
      // console.log(result);
      //
      let totalData = tracks.reduce(function (prev, cur) {
        return prev + cur.uri + '%2C';
      }, '');

      let finalData = totalData.replaceAll(':', '%3A');
      const createPlaylist = await post(
        `https://api.spotify.com/v1/playlists/${result.id}/tracks?uris=${finalData}`
      );
      // console.log(createPlaylist);
      console.log('Playlist Created!');
      history.push('/playlists');
    }
  };
  return (
    <>
      <PageTitle
        titleHeading={stringData}
        titleDescription="We think you'll like this playlist of similar songs"
        {...props}
      />
      <DndProvider backend={Backend}>
        {/* <ExampleWrapperSimple sectionHeading={`<Song> - Mixcast Playlist`}> */}
        <div className="mb-spacing-12">
          <Grid container spacing={9}>
            <Grid item xl={8}>
              <Card
                className="card-box"
                style={{ backgroundColor: 'rgb(37, 55, 84)' }}>
                <Table className="table table-borderless text-nowrap mb-0">
                  <thead className="thead-light">
                    <tr>
                      {tableHead.map((headData, idx) => {
                        if (headData.customWidth) {
                          return (
                            <th
                              key={idx}
                              style={{
                                ...headData.style,
                                ...darkStyles.thColor
                              }}>
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
                </Table>
                <div className="col-md-6 mx-auto" style={{ overflow: 'auto' }}>
                  {tracks.map((card, i) => (
                    <CardDrag
                      key={card.id}
                      index={i}
                      id={card.id}
                      text={card}
                      name={name}
                      moveCard={moveCard}
                      deleteItem={deleteItem(i)}
                    />
                  ))}
                </div>
              </Card>
            </Grid>
            <Grid item xl={4}>
              <Card className="card-box" style={{ overflow: 'auto' }}>
                <Table className="table table-borderless text-nowrap mb-0">
                  <thead className="thead-light">
                    <tr>
                      {tableHead2.map((headData, idx) => {
                        if (headData.customWidth) {
                          return (
                            <th
                              key={idx}
                              style={darkStyles.thColor}
                              colSpan="2">
                              {headData.show && headData.title}
                            </th>
                          );
                        }
                        return (
                          <th key={idx} colSpan="2" style={darkStyles.thColor}>
                            {headData.show && headData.title}
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={darkStyles.trBackground}>
                      <td className="" style={darkStyles.tdColor}>
                        Name
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <TextField
                            ref={anchorRef}
                            variant="outlined"
                            size="small"
                            id="input-search"
                            className="w-100"
                            placeholder="Playlist Name"
                            onChange={onChangeHandler}
                            value={inputValue}
                            InputProps={{
                              style: {
                                color: 'white'
                              }
                            }}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr style={darkStyles.trBackground}>
                      <td className="" style={darkStyles.tdColor}>
                        Status
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div
                            style={{ ...darkStyles.tdColor, paddingRight: 5 }}>
                            Private
                          </div>
                          <Switch
                            onChange={handleChangeSwitch}
                            checked={state.checkedA}
                            name="checkedA"
                            color="secondary"
                            className="switch-medium"
                          />
                          <div
                            style={{ ...darkStyles.tdColor, paddingLeft: 5 }}>
                            Public
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr style={darkStyles.trBackground}>
                      <td className="" style={darkStyles.tdColor}>
                        Tracks
                      </td>
                      <td style={darkStyles.tdColor}>{tracks.length}</td>
                    </tr>
                    <tr style={darkStyles.trBackground}>
                      <td className="" style={darkStyles.tdColor}>
                        Time
                      </td>
                      <td style={darkStyles.tdColor}>
                        {durationData.minutes}:{durationData.seconds}
                      </td>
                    </tr>
                    <tr style={darkStyles.trBackground}>
                      <td colSpan="2">
                        <div className="d-flex align-items-center">
                          <Button
                            onClick={handleCreatePlaylist}
                            color="primary"
                            variant="contained"
                            data-card-id={id}
                            className="buttonTheme rounded-sm text-uppercase font-size-xs  mr-4 py-0 shadow-none hover-scale-sm w-auto d-40 align-items-center justify-content-center">
                            <img src={logo} width={25} />
                            Create Mixcast on Spotify
                          </Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </Grid>
          </Grid>
        </div>
        {/* </ExampleWrapperSimple> */}
      </DndProvider>
    </>
  );
};
const mapStateToProps = (state) => ({
  status: state.MixcastState.status,
  spotifyPlaylistSongs: state.SpotifyPlaylistState.items
});

const mapDispatchToProps = (dispatch) => ({
  addPlaylistTracks: (tracks) => dispatch(addPlaylistTracks(tracks))
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
