import { get } from '../utils/api';

import { msToHMS, MMDDYYYToMonthDayYear } from '../utils/helpers';

const PLAYLIST_METADATA = 'PLAYLIST_METADATA';

export const addPlaylistMetaTracks = (tracks) => ({
  type: PLAYLIST_METADATA,
  payload: tracks
});

export const getPlaylistMetaTracks = async (url) => {
  try {
    const result = await get(url);
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
    case PLAYLIST_METADATA: {
      if (Array.isArray(action.payload)) {
        const tracksMapped = action.payload.map((trackData) => {
          const track = trackData.track;
          const album = track?.album;
          const artists = track?.artists;

          const duration = msToHMS(track?.duration_ms);
          const releaseDate = MMDDYYYToMonthDayYear(album?.release_date);

          const cover = album?.images.find(
            (image) => image.height === 64 && image.width === 64
          );

          const artistList = artists?.map((artist) => artist.name).join(', ');
          // const artistIds = artists?.map((artist) => artist.id);

          const spotifyUrl = track?.external_urls.spotify;

          return {
            id: track?.id,
            cover: cover?.url,
            song: track?.name,
            artist: artistList,
            album: album?.name,
            time: `${duration.minutes}:${duration.seconds}`,
            released: `${releaseDate.month}, ${releaseDate.year}`,
            audioUrl: track?.preview_url || null,
            spotifyUrl
            // artistId: [...artistIds]
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
