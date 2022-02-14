import { get } from '../utils/api';

import { msToHMS, MMDDYYYToMonthDayYear } from '../utils/helpers';

const ADD_USER_PLAYLIST = 'ADD_USER_PLAYLIST';

const BASE_URL = 'https://api.spotify.com/v1';
const USER_PLAYLIST_ID = '37i9dQZF1DWWF3yivn1m3D';

export const adduserPlaylist = (tracks) => ({
  type: ADD_USER_PLAYLIST,
  payload: tracks
});

export const getuserPlaylist = async () => {
  try {
    // This need to change based on user Location
    const result = await get(
      `${BASE_URL}/playlists/${USER_PLAYLIST_ID}/tracks?offset=0&limit=50&market=US`
    );
    return result.items;
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
          const track = trackData?.track;
          const album = track?.album;
          const artists = album?.artists;

          const duration = msToHMS(track?.duration_ms);
          const releaseDate = MMDDYYYToMonthDayYear(trackData?.added_at);

          const cover = album?.images.find(
            (image) => image.height === 64 && image.width === 64
          );

          const artistList = artists?.map((artist) => artist.name).join(', ');
          const artistIds = artists?.map((artist) => artist.id);

          const spotifyUrl = track?.external_urls.spotify;

          return {
            id: track?.id,
            cover: cover?.url,
            song: track?.name,
            artist: artistList,
            album: album?.name,
            time: `${duration?.minutes}:${duration?.seconds}`,
            released: `${releaseDate?.month}, ${releaseDate?.year}`,
            audioUrl: track?.preview_url || null,
            spotifyUrl
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
