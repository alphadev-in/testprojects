import AsyncStorage from '@react-native-async-storage/async-storage';
import serverRequest from '../helper/serverRequest';
export const RECENTS_FILES = 'RECENTS_FILES';
export const CATEGORIES = 'CATEGORIES';

export function RecentFiles() {
  return async (dispatch) => {
    try {
      const res = await serverRequest('/get_recent_posts');
      dispatch({type: RECENTS_FILES, payload: res});
    } catch (err) {
      console.log('RecentFiles:- ', err);
    }
  };
}
export function Categories() {
  return async (dispatch) => {
    try {
      const res = await serverRequest('/api/get_category_index');
      await AsyncStorage.setItem(
        '@' + CATEGORIES,
        JSON.stringify(res.categories),
      );
      dispatch({type: CATEGORIES, payload: res});
    } catch (err) {
      console.log('Categories:- ', err);
    }
  };
}
