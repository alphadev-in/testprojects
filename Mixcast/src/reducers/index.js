import { connectRouter } from 'connected-react-router';

import ThemeOptions from './ThemeOptions';
import MixcastState from './MixcastState';
import MixcastLatestState from './MixcastLatestState';
import SpotifyGlobalTopState from './SpotifyGlobalTopState';
import SpotifyProfileState from './SpotifyProfileState';
import SpotifyCountryState from './SpotifyCountryState';
import SpotifyDiscoverSongsState from './SpotifyDiscoverSongsState';
import SpotifyDiscoverArtistsState from './SpotifyDiscoverArtistsState';
import SpotifyFavSongsState from './SpotifyFavSongsState';
import SpotifyArtistsFollowedState from './SpotifyArtistsFollowedState';
import SpotifyRadarTracksState from './SpotifyRadarTracksState';
import SpotifyPlaylistState from './SpotifyPlaylistState';
import SpotifyPlaylistListState from './SpotifyPlaylistListState';
import SpotifyPlaylistMetaDataState from './SpotifyPlaylistMetaDataState';
import MixcastGoogleSheetPlaylists from './MixcastGoogleSheetPlaylists';
import MixcastGoogleSheetCompilations from './MixcastGoogleSheetCompilations';
import MixcastGoogleSheetTrackcasts from './MixcastGoogleSheetTrackcasts';
export default (history) => ({
  ThemeOptions,
  MixcastState,
  MixcastLatestState,
  SpotifyGlobalTopState,
  SpotifyProfileState,
  SpotifyCountryState,
  SpotifyDiscoverSongsState,
  SpotifyDiscoverArtistsState,
  SpotifyFavSongsState,
  SpotifyRadarTracksState,
  SpotifyArtistsFollowedState,
  SpotifyPlaylistState,
  SpotifyPlaylistListState,
  SpotifyPlaylistMetaDataState,
  MixcastGoogleSheetPlaylists,
  MixcastGoogleSheetCompilations,
  MixcastGoogleSheetTrackcasts,
  router: connectRouter(history)
});
