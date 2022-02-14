import { get } from '../utils/api';
import firebase from 'firebase/app';
import 'firebase/database';

const MIXCASTPLAYLISTG = 'MIXCASTPLAYLISTG';

export const addPlaylistData = (tracks) => ({
  type: MIXCASTPLAYLISTG,
  payload: tracks
});

export const getPlaylistData = async () => {
  try {
    // This need to change based on user Location
    const result = await get(
      `https://spreadsheets.google.com/feeds/list/1oLSMmcy45wKq-k2bf-AD4ucB1ITUp9vE80lWyOV5v38/1/public/values?alt=json`
    );
    // console.log(result.feed.entry);
    return result.feed.entry;

    // firebase
    //   .database()
    //   .ref(
    //     '/1oLSMmcy45wKq-k2bf-AD4ucB1ITUp9vE80lWyOV5v38/Mixcasts Feed for App/'
    //   )
    //   .on('value', (snapshot) => {
    //     const state = snapshot.val();
    //     console.log(state);
    //     return state;
    //   });
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
    case MIXCASTPLAYLISTG: {
      if (Array.isArray(action.payload)) {
        const tracksMapped = action.payload.map((trackData) => {
          const mixcastnumber = trackData?.['gsx$mixcastnumber']['$t'];
          const mixcastname = trackData?.['gsx$mixcastname']['$t'];
          const release = trackData?.['gsx$release']['$t'];
          const genre = trackData?.['gsx$genre']['$t'];
          const tracks = trackData?.['gsx$tracks']['$t'];
          const time = trackData?.['gsx$time']['$t'];
          const spotifylink = trackData?.['gsx$spotifylink']['$t'];
          const spotifyuri = trackData?.['gsx$spotifyuri']['$t'];
          const genrelabelcolorcode =
            trackData?.['gsx$genrelabelcolorcode']['$t'];
          const spotifyid = trackData?.['gsx$spotifyid']['$t'];

          return {
            mixcastnumber: mixcastnumber,
            mixcastname: mixcastname,
            release: release,
            genre: genre,
            tracks: tracks,
            time: time,
            spotifylink: spotifylink,
            spotifyuri: spotifyuri,
            genrelabelcolorcode: genrelabelcolorcode,
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
