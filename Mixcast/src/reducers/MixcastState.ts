import { get, put, deleteData } from '../utils/api';

export enum SpotifyFollowingArtistsAction {
  FETCHING = 'SPOTIFY_FOLLOWING_ARTISTS/FETCHING',
  SUCCESS = 'SPOTIFY_FOLLOWING_ARTISTS/SUCCESS',
  ERROR = 'SPOTIFY_FOLLOWING_ARTISTS/ERROR'
}

export enum MixcastStateAction {
  SET_LOGIN_FLOW_STATUS = 'SET_LOGIN_FLOW_STATUS'
}

export enum MixcastLoginState {
  DEFAULT = 'MIXCAST_LOGIN/DEFAULT',
  INIT = 'MIXCAST_LOGIN/INIT',
  LOGGED = 'MIXCAST_LOGIN/LOGGED',
  LOGOUT = 'MIXCAST_LOGIN/LOGOUT'
}

const BASE_URL = 'https://api.spotify.com/v1';

interface MixcastStateSetLoginStatus {
  type: MixcastStateAction.SET_LOGIN_FLOW_STATUS;
  payload: MixcastLoginState;
}

export const setLoginFlowStatus = (
  status: MixcastLoginState
): MixcastStateSetLoginStatus => ({
  type: MixcastStateAction.SET_LOGIN_FLOW_STATUS,
  payload: status
});

interface SpotifyFollowingArtistsFetching {
  type: SpotifyFollowingArtistsAction.FETCHING;
}

interface SpotifyFollowingArtistsSuccess {
  type: SpotifyFollowingArtistsAction.SUCCESS;
  payload: any;
}

interface SpotifyFollowingArtistsError {
  type: SpotifyFollowingArtistsAction.ERROR;
  payload: Error;
}

export const followingArtistsFetching = (): SpotifyFollowingArtistsFetching => ({
  type: SpotifyFollowingArtistsAction.FETCHING
});

export const followingArtistsSuccess = (
  ids: string[]
): SpotifyFollowingArtistsSuccess => ({
  type: SpotifyFollowingArtistsAction.SUCCESS,
  payload: ids
});

export const followingArtistsError = (
  data: Error
): SpotifyFollowingArtistsError => ({
  type: SpotifyFollowingArtistsAction.ERROR,
  payload: data
});

interface MixcastState {
  status: MixcastLoginState;
  followingArtists: {
    data: any[];
    fetching: boolean;
    success: boolean;
    fail: boolean;
    fetchError: any;
  };
}

const initialState: MixcastState = {
  status: MixcastLoginState.DEFAULT,
  followingArtists: {
    data: [],
    fetching: false,
    success: false,
    fail: false,
    fetchError: null
  }
};

export const checkFollowedArtists = async (ids: string[]) => {
  try {
    const result = await get(
      `${BASE_URL}/me/following/contains?type=artist&ids=${ids}`
    );
    return result;
  } catch (error) {
    console.error('error', error);
  }
};
export const followArtist = async (ids: string[]) => {
  try {
    const result = await put(`${BASE_URL}/me/following?type=artist&ids=${ids}`);
    return result;
  } catch (error) {
    console.error('error', error);
  }
};

export const followPlaylist = async (ids: string[]) => {
  try {
    const URL = `${BASE_URL}/playlists/${ids}/followers`;

    const result = await put(URL);
    return result;
  } catch (error) {
    console.error('error', error);
  }
};

export const deleteFollowArtist = async (ids: string[]) => {
  try {
    const result = await deleteData(
      `${BASE_URL}/me/following?type=artist&ids=${ids}`
    );
    return result;
  } catch (error) {
    console.error('error', error);
  }
};

export const followTrack = async (ids: string[]) => {
  try {
    const result = await put(`${BASE_URL}/me/tracks?ids=${ids}`);
    return result;
  } catch (error) {
    console.error('error', error);
  }
};
export const deleteFollowTrack = async (ids: string[]) => {
  try {
    const result = await deleteData(`${BASE_URL}/me/tracks?ids=${ids}`);
    return result;
  } catch (error) {
    console.error('error', error);
  }
};

export const isArtistsFollowed = async (tracks: any) => {
  const result = await get(
    `${BASE_URL}/me/following/contains?type=artist&ids=${tracks}`
  );
  return result;
};

export const isTracksFollowed = async (tracks: any) => {
  const result = await get(`${BASE_URL}/me/tracks/contains?ids=${tracks}`);
  return result;
};

type MixcastStateActionType =
  | SpotifyFollowingArtistsFetching
  | SpotifyFollowingArtistsSuccess
  | SpotifyFollowingArtistsError
  | MixcastStateSetLoginStatus;

const mixcastStateReducer = (
  state = initialState,
  action: MixcastStateActionType
) => {
  switch (action.type) {
    case MixcastStateAction.SET_LOGIN_FLOW_STATUS: {
      return {
        ...state,
        status: action.payload
      };
    }

    case SpotifyFollowingArtistsAction.SUCCESS: {
      return {
        ...state,
        followingArtists: {
          ...state.followingArtists,
          fetching: false,
          success: true,
          data: [...action.payload]
        }
      };
    }

    default:
      return state;
  }
};

export default mixcastStateReducer;
