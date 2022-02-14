import { get } from '../utils/api';

import { msToHMS, MMDDYYYToMonthDayYear } from '../utils/helpers';

const ADD_GLOBAL_TOP_50_PLAYLIST = 'ADD_GLOBAL_TOP_50_PLAYLIST';

const BASE_URL = 'https://api.spotify.com/v1';
const GLOBAL_TOP_50_PLAYLIST_ID = '37i9dQZEVXbMDoHDwVN2tF';

export const addGlobalTop50Playlist = (tracks) => ({
  type: ADD_GLOBAL_TOP_50_PLAYLIST,
  payload: tracks
});

export const getGlobalTop50Playlist = async () => {
  try {
    const result = await get(
      `${BASE_URL}/playlists/${GLOBAL_TOP_50_PLAYLIST_ID}/tracks`
    );
    return result.items;
  } catch (error) {
    console.error('error', error);
  }
};

const globalTop50PlaylistReducer = (
  state = {
    items: []
  },
  action
) => {
  switch (action.type) {
    case ADD_GLOBAL_TOP_50_PLAYLIST: {
      if (Array.isArray(action.payload)) {
        const tracksMapped = action.payload.map((trackData) => {
          const track = trackData.track;
          const album = track?.album;
          const artists = track?.artists;

          const duration = msToHMS(track.duration_ms);
          const releaseDate = MMDDYYYToMonthDayYear(album.release_date);

          const cover = album.images.find(
            (image) => image.height === 64 && image.width === 64
          );

          const artistList = artists.map((artist) => artist.name).join(', ');
          const artistIds = artists.map((artist) => artist.id);

          const spotifyUrl = track.external_urls.spotify;

          return {
            id: track.id,
            cover: cover.url,
            song: track.name,
            artist: artistList,
            album: album.name,
            time: `${duration.minutes}:${duration.seconds}`,
            released: `${releaseDate.month}, ${releaseDate.year}`,
            audioUrl: track.preview_url || null,
            spotifyUrl,
            artistId: [...artistIds]
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

export default globalTop50PlaylistReducer;
