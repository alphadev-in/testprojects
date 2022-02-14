import { get } from '../utils/api';

import { msToHMS, MMDDYYYToMonthDayYear } from '../utils/helpers';

const BASE_URL = 'https://api.spotify.com/v1';
const MIXCAST_FETCH = 'MIXCAST_FETCH';
const MIXCAST_SUCCESS = 'MIXCAST_SUCCESS';
const MIXCAST_TRADING = 'MIXCAST_TRADING';

export const mixcastTrendingSuccess = (tracks) => ({
  type: MIXCAST_SUCCESS,
  payload: tracks
});

const MIXCAST_PLAYLIST_ID = '3QshUH7RF6I4HVF9R1XyiF';

export const getMixcastPlaylist = async (page) => {
  try {
    const result = await get(
      `${BASE_URL}/playlists/${MIXCAST_PLAYLIST_ID}/tracks?limit=50`
    );
    return result.items;
  } catch (error) {
    console.error('error', error);
  }
};

export const isArtistsFollowed = async (tracks) => {
  try {
    const tracksData = tracks;
    // console.log(tracks);
    let totalAlbum = '';
    for (let index = 0; index < tracksData.length; index++) {
      if (index == tracksData.length - 1) {
        totalAlbum += tracksData[index].artistId;
      } else {
        totalAlbum += tracksData[index].artistId + '%2C';
      }
    }
    const result = await get(
      `${BASE_URL}/me/following/contains?type=artist&ids=${totalAlbum}`
    );
    return result;
  } catch (error) {
    console.error('error', error);
  }
};

export const isTracksFollowed = async (tracks) => {
  try {
    const tracksData = tracks;
    let totalAlbum = '';
    for (let index = 0; index < tracks.length; index++) {
      if (index == tracks.length - 1) {
        totalAlbum += tracksData[index].id;
      } else {
        totalAlbum += tracksData[index].id + '%2C';
      }
    }
    const result = await get(
      `${BASE_URL}/me/tracks/contains?ids=${totalAlbum}`
    );
    return result;
  } catch (error) {
    console.error('error', error);
  }
};

const initialState = {
  data: [],
  fetching: false,
  success: false,
  fail: false,
  fetchError: false
};

const mixcastLatestReducer = (state = initialState, action) => {
  switch (action.type) {
    case MIXCAST_SUCCESS: {
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
          const artistIds = artists[0].id;

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
            artistId: artistIds
          };
        });

        return {
          ...state,
          fetching: false,
          success: true,
          data: [...tracksMapped]
        };
      }

      return state;
    }

    default:
      return state;
  }
};

export default mixcastLatestReducer;
