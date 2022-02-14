import { get } from '../utils/api';

const MIXCASTCOMPILATIONSG = 'MIXCASTCOMPILATIONSG';

export const addCompilationsData = (tracks) => ({
  type: MIXCASTCOMPILATIONSG,
  payload: tracks
});

export const getCompilationsData = async () => {
  try {
    // This need to change based on user Location
    const result = await get(
      `https://spreadsheets.google.com/feeds/list/1oLSMmcy45wKq-k2bf-AD4ucB1ITUp9vE80lWyOV5v38/2/public/values?alt=json`
    );
    // console.log(result.feed.entry);
    return result.feed.entry;
  } catch (error) {
    console.error('error', error);
  }
};

const MixcastGoogleSheetPlaylists = (
  state = {
    items: []
  },
  action
) => {
  switch (action.type) {
    case MIXCASTCOMPILATIONSG: {
      if (Array.isArray(action.payload)) {
        const tracksMapped = action.payload.map((trackData) => {
          const compilationnumber = trackData?.['gsx$compilationnumber']['$t'];
          const playlistname = trackData?.['gsx$playlistname']['$t'];
          const tracks = trackData?.['gsx$tracks']['$t'];
          const time = trackData?.['gsx$time']['$t'];
          const genre = trackData?.['gsx$genre']['$t'];
          const genrelabelcolorcode =
            trackData?.['gsx$genrelabelcolorcode']['$t'];
          const spotifylink = trackData?.['gsx$spotifylink']['$t'];
          const spotifyuri = trackData?.['gsx$spotifyuri']['$t'];
          const spotifyid = trackData?.['gsx$spotifyid']['$t'];

          return {
            compilationnumber: compilationnumber,
            playlistname: playlistname,
            tracks: tracks,
            genre: genre,
            time: time,
            genrelabelcolorcode: genrelabelcolorcode,
            spotifylink: spotifylink,
            spotifyuri: spotifyuri,
            spotifyid: spotifyid
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

export default MixcastGoogleSheetPlaylists;
