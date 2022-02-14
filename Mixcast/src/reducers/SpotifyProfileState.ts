import { get } from '../utils/api';

export enum SpotifyProfileAction {
  FETCHING = 'SPOTIFY_PROFILE/FETCHING',
  SUCCESS = 'SPOTIFY_PROFILE/SUCCESS',
  ERROR = 'SPOTIFY_PROFILE/ERROR'
}

const BASE_URL = 'https://api.spotify.com/v1';

interface SpotifyProfileFetching {
  type: SpotifyProfileAction.FETCHING;
}
interface SpotifyProfileSuccess {
  type: SpotifyProfileAction.SUCCESS;
  payload: any;
}

interface SpotifyProfileError {
  type: SpotifyProfileAction.ERROR;
  payload: Error;
}

export const spotifyProfileFetching = (): SpotifyProfileFetching => ({
  type: SpotifyProfileAction.FETCHING
});

export const spotifyProfileSuccess = (
  data: unknown
): SpotifyProfileSuccess => ({
  type: SpotifyProfileAction.SUCCESS,
  payload: data
});

export const spotifyProfileError = (data: Error): SpotifyProfileError => ({
  type: SpotifyProfileAction.ERROR,
  payload: data
});

export const getSpotifyProfile = async () => {
  try {
    const result = await get(`${BASE_URL}/me`);
    return result;
  } catch (error) {
    // console.error(error);
    throw new Error(error);
  }
};

interface SpotifyProfileState {
  data: any;
  fetching: boolean;
  success: boolean;
  fail: boolean;
  fetchError: any;
}

const initialState: SpotifyProfileState = {
  data: {},
  fetching: false,
  success: false,
  fail: false,
  fetchError: false
};

type SpotifyProfileActionType =
  | SpotifyProfileSuccess
  | SpotifyProfileFetching
  | SpotifyProfileError;

const spotifyProfileReducer = (
  state = initialState,
  action: SpotifyProfileActionType
): SpotifyProfileState => {
  switch (action.type) {
    case SpotifyProfileAction.FETCHING: {
      return {
        ...state,
        fetching: true
      };
    }
    case SpotifyProfileAction.SUCCESS: {
      return {
        ...state,
        fetching: false,
        success: true,
        data: action.payload
      };
    }
    case SpotifyProfileAction.ERROR: {
      return {
        ...state,
        fail: true,
        fetchError: action.payload
      };
    }
    default:
      return state;
  }
};

export default spotifyProfileReducer;
