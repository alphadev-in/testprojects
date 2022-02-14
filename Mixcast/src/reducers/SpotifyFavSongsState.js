import { get } from '../utils/api';

import { msToHMS, MMDDYYYToMonthDayYear } from '../utils/helpers';

const FAV_SONGS = 'FAV_SONGS';
const terms = 'long_term';

const BASE_URL = 'https://api.spotify.com/v1';

export const addFavSongs = (tracks) => ({
  type: FAV_SONGS,
  payload: tracks
});

export const getFavSongs = async (terms) => {
  try {
    const result = await get(
      `${BASE_URL}/me/top/tracks?time_range=${terms}&limit=50`
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
    for (let index = 0; index < tracks.length; index++) {
      if (index == tracks.length - 1) {
        totalAlbum += tracksData[index].artistid;
      } else {
        totalAlbum += tracksData[index].artistid + '%2C';
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

const favSongsReducer = (
  state = {
    items: []
  },
  action
) => {
  switch (action.type) {
    case FAV_SONGS: {
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
            artistid: trackData.artists[0].id,
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

export default favSongsReducer;
