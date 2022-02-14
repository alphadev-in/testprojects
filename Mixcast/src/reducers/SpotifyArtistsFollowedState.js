import { get } from '../utils/api';

const ARTISTS_FOLLOWED = 'ARTISTS_FOLLOWED';

const BASE_URL = 'https://api.spotify.com/v1';

export const addArtistsFollowed = (tracks) => ({
  type: ARTISTS_FOLLOWED,
  payload: tracks
});

export const getArtistsFollowed = async () => {
  try {
    const result = await get(`${BASE_URL}/me/following?type=artist&limit=50`);
    return result.artists.items;
  } catch (error) {
    console.error('error', error);
  }
};

const artistsFollowedReducer = (
  state = {
    items: []
  },
  action
) => {
  switch (action.type) {
    case ARTISTS_FOLLOWED: {
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

export default artistsFollowedReducer;
