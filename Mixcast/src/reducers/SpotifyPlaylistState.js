import { get } from '../utils/api';

import { msToHMS } from '../utils/helpers';

const ADD_USER_PLAYLIST = 'ADD_USER_PLAYLIST';

const BASE_URL = 'https://api.spotify.com/v1';

export const addPlaylistTracks = (tracks) => ({
  type: ADD_USER_PLAYLIST,
  payload: tracks
});

export const getPlaylistTracks = async (id) => {
  try {
    const result = await get(
      `${BASE_URL}/recommendations?limit=20&market=US&seed_tracks=${id}&min_energy=0.4&min_popularity=50`
    );
    // console.log(result.tracks);
    return result.tracks;
  } catch (error) {
    console.error('error', error);
  }
};

const userPlaylistReducer = (
  state = {
    items: []
  },
  action
) => {
  switch (action.type) {
    case ADD_USER_PLAYLIST: {
      if (Array.isArray(action.payload)) {
        const tracksMapped = action.payload.map((trackData) => {
          const name = trackData?.name;
          const album = trackData?.album;
          const artists = album?.artists[0]?.name;
          const duration = msToHMS(trackData?.duration_ms);
          const duration_data = trackData?.duration_ms;
          const cover = album?.images[0];
          const preview_url = trackData?.preview_url;
          const uri = trackData?.uri;

          return {
            id: trackData.id,
            cover: cover?.url,
            song: name,
            artistID: album?.artists[0]?.id,
            artist: artists,
            time: `${duration.minutes}:${duration.seconds}`,
            duration: duration_data,
            audioUrl: preview_url,
            uri: uri
          };
        });

        return {
          ...state,
          items: [...tracksMapped]
        };
      }

      return state;
    }
    default:
      return state;
  }
};

export default userPlaylistReducer;
