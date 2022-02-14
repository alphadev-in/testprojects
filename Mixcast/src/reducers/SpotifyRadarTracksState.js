import { get } from '../utils/api';

import { MMDDYYYToMonthDayYear } from '../utils/helpers';

const RADAR_TRACKS = 'RADAR_TRACKS';
const FOLLOWED_ARTIST = 'FOLLOWED_ARTIST';
const FOLLOWED_TRACKS = 'FOLLOWED_TRACKS';

const BASE_URL = 'https://api.spotify.com/v1';

export const addRadarTracks = (tracks) => ({
  type: RADAR_TRACKS,
  payload: tracks
});

export const addFollowedTracks = (tracks) => ({
  type: FOLLOWED_TRACKS,
  payload: tracks
});

export const addFollowedArtist = (id) => ({
  type: FOLLOWED_ARTIST,
  payload: id
});

export const isArtistsFollowed = async (tracks) => {
  try {
    const tracksData = tracks;
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

export const getRadarTracks = async (offset) => {
  try {
    let totalAlbum = [];
    const resultRelease = await get(
      `${BASE_URL}/browse/new-releases?limit=20&offset=${offset}`
    );
    for (let item = 0; item < resultRelease.albums.items.length; item++) {
      const resultTrack = await get(
        `${BASE_URL}/albums/${resultRelease.albums.items[item].id}/tracks?limit=1&offset=0`
      );
      totalAlbum.push(...resultTrack.items);
    }
    // console.log(totalAlbum);
    return totalAlbum;
  } catch (error) {
    console.error('error', error);
  }
};
export const getFollowedTracks = async (offset) => {
  try {
    let totalAlbum = [];
    const resultArtists = await get(
      `${BASE_URL}/me/following?type=artist&limit=20&offset=${offset}`
    );
    for (let item = 0; item < resultArtists.artists.items.length; item++) {
      const resultArtistsAlbum = await get(
        `${BASE_URL}/artists/${resultArtists.artists.items[item].id}/albums?limit=2&offset=0`
      );
      const resultTrack = await get(
        `${BASE_URL}/albums/${resultArtistsAlbum.items[0].id}/tracks?limit=1&offset=0`
      );

      totalAlbum.push(...resultTrack.items);
    }

    return totalAlbum;
  } catch (error) {
    console.error('error', error);
  }
};

const radarTracksReducer = (
  state = {
    items: []
  },
  action
) => {
  switch (action.type) {
    case RADAR_TRACKS: {
      if (Array.isArray(action.payload)) {
        const tracksMapped = action.payload.map((trackData) => {
          const spotifyUrl = trackData?.external_urls?.spotify;

          return {
            id: trackData?.id,
            artistid: trackData?.artists[0].id,
            name: trackData?.name,
            artist: trackData?.artists[0]?.name,
            preview_url: trackData?.preview_url,
            spotifyUrl: spotifyUrl
          };
        });

        return {
          ...state,
          items: [...tracksMapped]
        };
      }

      return state;
    }
    case FOLLOWED_TRACKS: {
      if (Array.isArray(action.payload)) {
        const tracksMapped = action.payload.map((trackData) => {
          const spotifyUrl = trackData?.external_urls?.spotify;

          return {
            id: trackData?.id,
            artistid: trackData?.artists[0].id,
            name: trackData?.name,
            artist: trackData?.artists[0]?.name,
            preview_url: trackData?.preview_url,
            spotifyUrl: spotifyUrl
          };
        });

        return {
          ...state,
          items: [...tracksMapped]
        };
      }

      return state;
    }
    case FOLLOWED_ARTIST: {
      if (Array.isArray(action.payload)) {
        const tracksMapped = action.payload.map((trackData) => {
          return {
            id: trackData
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

export default radarTracksReducer;
