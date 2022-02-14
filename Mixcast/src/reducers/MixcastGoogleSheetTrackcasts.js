import { get } from '../utils/api';

const MICASTTRACKCASTG = 'MICASTTRACKCASTG';

export const addTrackCastsData = (tracks) => ({
  type: MICASTTRACKCASTG,
  payload: tracks
});

export const getTrackCastsData = async () => {
  try {
    // This need to change based on user Location
    const result = await get(
      `https://spreadsheets.google.com/feeds/list/1oLSMmcy45wKq-k2bf-AD4ucB1ITUp9vE80lWyOV5v38/3/public/values?alt=json`
    );
    // console.log(result.feed.entry);
    return result.feed.entry;
  } catch (error) {
    console.error('error', error);
  }
};

const MixcastGoogleSheetTrackcasts = (
  state = {
    items: []
  },
  action
) => {
  switch (action.type) {
    case MICASTTRACKCASTG: {
      if (Array.isArray(action.payload)) {
        const tracksMapped = action.payload.map((trackData) => {
          const trackcastnumber = trackData?.['gsx$trackcastnumber']['$t'];
          const playlistname = trackData?.['gsx$playlistname']['$t'];
          const featuredartists = trackData?.['gsx$featuredartists']['$t'];
          const spotifylink = trackData?.['gsx$spotifylink']['$t'];
          const spotifyuri = trackData?.['gsx$spotifyuri']['$t'];
          const spotifyid = trackData?.['gsx$spotifyid']['$t'];

          return {
            trackcastnumber: trackcastnumber,
            playlistname: playlistname,
            featuredartists: featuredartists,
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

export default MixcastGoogleSheetTrackcasts;
