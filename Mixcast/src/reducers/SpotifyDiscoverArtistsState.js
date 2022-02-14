import { get } from '../utils/api';

const DISCOVER_ARTISTS = 'DISCOVER_ARTISTS';

const BASE_URL = 'https://api.spotify.com/v1';

export const addDiscoverArtists = (tracks) => ({
  type: DISCOVER_ARTISTS,
  payload: tracks
});

export const getDiscoverArtists = async (offset) => {
  try {
    const result = await get(
      `${BASE_URL}/me/top/artists?limit=50&offset=${offset}`
    );
    return result.items;
  } catch (error) {
    console.error('error', error);
  }
};

export const isArtistsFollowed = async (tracks) => {
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
      `${BASE_URL}/me/following/contains?type=artist&ids=${totalAlbum}`
    );
    return result;
  } catch (error) {
    console.error('error', error);
  }
};

const discoverArtistsReducer = (
  state = {
    items: []
  },
  action
) => {
  switch (action.type) {
    case DISCOVER_ARTISTS: {
      if (Array.isArray(action.payload)) {
        const tracksMapped = action.payload.map((trackData) => {
          const name = trackData?.name;
          const imageURL = trackData;
          const followers = trackData?.followers.total;
          const popularity = trackData.popularity;
          const spotifyUrl = trackData.href;

          return {
            id: trackData.id,
            name: name,
            cover: imageURL.images[2].url,
            followers: followers,
            popularity: popularity,
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

export default discoverArtistsReducer;
