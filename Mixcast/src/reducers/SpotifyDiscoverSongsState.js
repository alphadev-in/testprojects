import { get } from '../utils/api';

import { msToHMS, MMDDYYYToMonthDayYear } from '../utils/helpers';

const DISCOVER_SONGS = 'DISCOVER_SONGS';

const BASE_URL = 'https://api.spotify.com/v1';

export const addDiscoverSongs = (tracks) => ({
  type: DISCOVER_SONGS,
  payload: tracks
});

export const getDiscoverSongs = async () => {
  try {
    const result = await get(
      `${BASE_URL}/me/top/tracks?time_range=medium_term&limit=50`
    );
    return result.items;
  } catch (error) {
    console.error('error', error);
  }
};

const discoverSongsReducer = (
  state = {
    items: []
  },
  action
) => {
  switch (action.type) {
    case DISCOVER_SONGS: {
      if (Array.isArray(action.payload)) {
        const tracksMapped = action.payload.map((trackData) => {
          const album = trackData?.album;
          const artists = trackData?.artists;

          const duration = msToHMS(trackData.duration_ms);
          const releaseDate = MMDDYYYToMonthDayYear(album.release_date);

          const cover = album.images.find(
            (image) => image.height === 64 && image.width === 64
          );
          const popularity = trackData.popularity;
          const artistList = artists.map((artist) => artist.name).join(', ');
          const artistIds = artists.map((artist) => artist.id);

          const spotifyUrl = trackData.external_urls.spotify;

          return {
            id: trackData.id,
            cover: cover.url,
            song: trackData.name,
            artist: artistList,
            album: album.name,
            time: `${duration.minutes}:${duration.seconds}`,
            released: `${releaseDate.month}, ${releaseDate.year}`,
            audioUrl: trackData.preview_url || null,
            spotifyUrl,
            popularity: popularity,
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

export default discoverSongsReducer;
