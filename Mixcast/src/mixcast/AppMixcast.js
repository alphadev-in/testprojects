import React, { useEffect, useState, useContext } from 'react';

import { connect } from 'react-redux';

import { Switch, Route } from 'react-router-dom';

import {
  ExampleWrapperSeamless,
  ExampleWrapperSimple
} from '../layout-components';

import { LoginModal } from './components';

import {
  SidebarContainer,
  MixcastTableContainer,
  MixcastTableCountryContainer,
  DiscoverArtists,
  DiscoverNewRelease,
  DiscoverSongs,
  GlobalTop50TableContainer,
  PageTitle,
  SongsList,
  RadarList,
  ArtistList,
  RedirectPage,
  PlaylistCreator,
  Playlist,
  PlayListMetaData,
  ProfilePage,
  MixcastGoogleSheetPlaylistsContainer,
  MixcastGoogleSheetCompilationsContainer,
  MixcastGoogleSheetTrackcastsContainer
} from './containers';

import {
  MixcastLoginState,
  setLoginFlowStatus
} from '../reducers/MixcastState';
import { history } from '../config/configureStore';
import { config } from '../config/settings';
import firebase from 'firebase/app';
import 'firebase/database';
import NewMixcastTableContainer from './containers/TablesContainer/NewMixcast/NewMixcastTableContainer';
import PricingTableContainer from './containers/TablesContainer/NewMixcast/PricingTableContainer';

const App = (props) => {
  const { setLoginFlowStatus } = props;
  const [expiryTime, setExpiryTime] = useState(0);

  useEffect(() => {
    let expiryTime;
    try {
      expiryTime = JSON.parse(localStorage.getItem('expiry_time'));
      firebase.initializeApp(config);
    } catch (error) {
      expiryTime = '0';
    }
    setExpiryTime(expiryTime);
  }, []);

  const isValidSession = () => {
    const currentTime = new Date().getTime();
    const isSessionValid = currentTime < expiryTime;

    return isSessionValid;
  };

  useEffect(() => {
    if (isValidSession()) {
      setLoginFlowStatus(MixcastLoginState.LOGGED);
      history.push('/create');
    } else {
      setLoginFlowStatus(MixcastLoginState.DEFAULT);
      history.push('/create');
    }
  }, [expiryTime]);

  return (
    <Switch>
      <SidebarContainer>
        <Route
          path="/redirect"
          render={(props) => (
            <RedirectPage setExpiryTime={setExpiryTime} {...props} />
          )}
        />

        <Route
          path="/create"
          render={(props) => (
            <>
              {/* <PageTitle
                titleHeading="The Mixcast"
                titleDescription="Create a new Spotify Playlist based on any song!"
                {...props}
              /> */}

              <ExampleWrapperSeamless>
                <NewMixcastTableContainer />
              </ExampleWrapperSeamless>
            </>
          )}
        />
        <Route
          path="/mixcasts"
          render={(props) => (
            <>
              <ExampleWrapperSeamless>
                <div style={{ marginTop: 20 }}>
                  <MixcastGoogleSheetPlaylistsContainer />
                </div>
              </ExampleWrapperSeamless>
            </>
          )}
        />
        <Route
          path="/compilations"
          render={(props) => (
            <>
              <ExampleWrapperSeamless>
                <div style={{ marginTop: 20 }}>
                  <MixcastGoogleSheetCompilationsContainer />
                </div>
              </ExampleWrapperSeamless>
            </>
          )}
        />
        <Route
          path="/trackcasts"
          render={(props) => (
            <>
              <ExampleWrapperSeamless>
                <div style={{ marginTop: 20 }}>
                  <MixcastGoogleSheetTrackcastsContainer />
                </div>
              </ExampleWrapperSeamless>
            </>
          )}
        />
        <Route
          path="/pricing"
          render={(props) => (
            <>
              {/* <PageTitle
                titleHeading="The Mixcast"
                titleDescription="Create a new Spotify Playlist based on any song!"
                {...props}
              /> */}

              <ExampleWrapperSeamless>
                <PricingTableContainer />
              </ExampleWrapperSeamless>
            </>
          )}
        />
        <Route
          path="/trending"
          render={(props) => (
            <>
              <PageTitle
                titleHeading="Trending"
                titleDescription="Create a new Spotify Playlist based on any song!"
                {...props}
              />

              <ExampleWrapperSeamless>
                <MixcastTableContainer />
                <GlobalTop50TableContainer />
                {/* <MixcastTableCountryContainer /> */}
              </ExampleWrapperSeamless>
            </>
          )}
        />
        <Route
          path="/mixcast"
          render={(props) => (
            <>
              <ExampleWrapperSeamless>
                <PlaylistCreator />
              </ExampleWrapperSeamless>
            </>
          )}
        />

        <Route
          path="/playlistdetails"
          render={(props) => (
            <>
              <PageTitle
                titleHeading="Playlist"
                titleDescription="Track Features & Audio Analysis"
                {...props}
              />
              <ExampleWrapperSeamless>
                <PlayListMetaData />
              </ExampleWrapperSeamless>
            </>
          )}
        />
        <Route
          path="/playlists"
          render={(props) => (
            <>
              <PageTitle
                titleHeading="Playlist"
                titleDescription="Use insights to create yout perfect playlist"
                {...props}
              />
              <ExampleWrapperSeamless>
                <div style={{ marginTop: 10 }}>
                  <Playlist />
                </div>
              </ExampleWrapperSeamless>
            </>
          )}
        />

        <Route
          path="/songs"
          render={(props) => (
            <>
              <PageTitle
                titleHeading="Your Songs"
                titleDescription="Your Likes and Listens."
                {...props}
              />
              <ExampleWrapperSeamless>
                <SongsList />
              </ExampleWrapperSeamless>
            </>
          )}
        />
        <Route
          path="/artists"
          render={(props) => (
            <>
              <PageTitle
                titleHeading="Your Artists"
                titleDescription="Track your favorite singers and bands"
                {...props}
              />
              <ExampleWrapperSeamless>
                <ArtistList />
              </ExampleWrapperSeamless>
            </>
          )}
        />
        <Route
          path="/releases"
          render={(props) => (
            <>
              <PageTitle
                titleHeading="Releases"
                titleDescription="New music from artists you like"
                {...props}
              />
              <ExampleWrapperSeamless>
                <div style={{ marginTop: 10 }}>
                  <RadarList />
                </div>
              </ExampleWrapperSeamless>
            </>
          )}
        />
        <Route
          path="/discover"
          render={(props) => (
            <>
              <PageTitle
                titleHeading="Song Discovery"
                titleDescription="Songs and Artists who may not be on your radar yet"
                {...props}
              />
              <ExampleWrapperSeamless>
                <div style={{ marginTop: 20 }}>
                  <DiscoverNewRelease />
                  {/* <DiscoverSongs /> */}
                  {/* <DiscoverArtists /> */}
                </div>
              </ExampleWrapperSeamless>
            </>
          )}
        />

        <LoginModal />
      </SidebarContainer>
    </Switch>
  );
};

const mapStateToProps = (state) => ({
  status: state.MixcastState.status
});

const mapDispatchToProps = (dispatch) => ({
  setLoginFlowStatus: (status) => dispatch(setLoginFlowStatus(status))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
