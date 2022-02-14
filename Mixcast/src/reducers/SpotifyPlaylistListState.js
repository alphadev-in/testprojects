import { get } from '../utils/api';

import { msToHMS } from '../utils/helpers';

const PLAYLIST_LIST = 'PLAYLIST_LIST';

const BASE_URL = 'https://api.spotify.com/v1';

export const addPlaylistData = (tracks) => ({
  type: PLAYLIST_LIST,
  payload: tracks
});

export const getPlaylistData = async () => {
  try {
    // This need to change based on user Location
    const result = await get(`${BASE_URL}/me/playlists?offset=0&limit=50`);
    const result2 = await get(`${BASE_URL}/me/playlists?offset=1&limit=50`);
    const finalResult = [...result.items, ...result2.items];
    console.log(finalResult)
    return finalResult;
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
    case PLAYLIST_LIST: {
      if (Array.isArray(action.payload)) {
        const tracksMapped = action.payload.map((trackData) => {
          const name = trackData?.name;
          const owner = trackData?.owner.display_name;
          const public_status = trackData?.public;
          const tracks = trackData?.tracks.href;
          const count = trackData?.tracks.total;
          const cover = trackData?.images[0];
          const spotify_url = trackData?.external_urls.preview_url;

          return {
            name: name,
            owner: owner,
            public_status: public_status,
            tracks: tracks,
            cover: cover?.url,
            count: count,
            spotify_url: spotify_url
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
